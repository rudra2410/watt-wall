"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { appliancePresets, appliancePresetSource } from "@/data/appliance-presets";
import { electricityRateReference } from "@/data/energy-reference";
import { calculateApplianceInventory, validateApplianceRunningCostInput, type ApplianceRunningCostInput } from "@/lib/calculators/appliance-running-cost";
import { formatCurrency, formatCurrencyRate, formatDecimal } from "@/lib/calculators/formatting";
import { readCalculatorParams, readStoredRate, replaceCalculatorParams, storeRate } from "@/lib/calculators/persistence";

const currencies = ["USD", "EUR", "GBP", "INR"] as const;
type Row = { id: number; name: string; preset: string; wattage: string; hoursPerActiveDay: string; activeDaysPerMonth: string; dutyCyclePercent: string };
type NumericKey = "wattage" | "hoursPerActiveDay" | "activeDaysPerMonth" | "dutyCyclePercent";
const firstRow: Row = { id: 1, name: "Space heater", preset: "heater", wattage: "1500", hoursPerActiveDay: "3", activeDaysPerMonth: "30", dutyCyclePercent: "100" };
const fieldDefinitions: { key: NumericKey; label: string; hint: string; max?: string; step: string }[] = [
  { key: "wattage", label: "Power (W)", hint: "Use electrical input power, not heating or cooking output.", step: "any" },
  { key: "hoursPerActiveDay", label: "Hours per day", hint: "Time covered by your power reading, up to 24 hours.", max: "24", step: "any" },
  { key: "activeDaysPerMonth", label: "Days per month", hint: "A whole number from 1 to 31.", max: "31", step: "1" },
  { key: "dutyCyclePercent", label: "Duty cycle (%)", hint: "Leave at 100 for an average reading or preset. For on-cycle watts, enter the percentage of scheduled time running.", max: "100", step: "any" },
];
const parse = (value: string) => value.trim() === "" ? Number.NaN : Number(value);

export function ApplianceRunningCostCalculator() {
  const [rows, setRows] = useState<Row[]>(() => { const serialized = readCalculatorParams()?.get("rows"); if (serialized) { try { const parsed = JSON.parse(serialized) as Row[]; if (Array.isArray(parsed) && parsed.length > 0) return parsed.map((row, index) => ({ ...row, id: index + 1 })); } catch { /* Keep defaults for malformed links. */ } } return [{ ...firstRow }]; });
  const nextId = useRef(2);
  const [rate, setRate] = useState(() => readCalculatorParams()?.get("rate") ?? readStoredRate(String(electricityRateReference.rate)));
  const [currency, setCurrency] = useState<(typeof currencies)[number]>(() => { const next = readCalculatorParams()?.get("currency"); return currencies.includes(next as (typeof currencies)[number]) ? next as (typeof currencies)[number] : "USD"; });
  const [status, setStatus] = useState("");

  useEffect(() => { replaceCalculatorParams(new URLSearchParams({ rows: JSON.stringify(rows), rate, currency })); storeRate(rate); }, [rows, rate, currency]);
  const parsed: ApplianceRunningCostInput[] = rows.map((row) => ({ wattage: parse(row.wattage), hoursPerActiveDay: parse(row.hoursPerActiveDay), activeDaysPerMonth: parse(row.activeDaysPerMonth), dutyCyclePercent: parse(row.dutyCyclePercent), pricePerKilowattHour: parse(rate) }));
  const errors = parsed.map(validateApplianceRunningCostInput);
  const rateError = errors[0]?.find((error) => error.field === "pricePerKilowattHour")?.message;
  let result: ReturnType<typeof calculateApplianceInventory> | null = null;
  let calculationError = "";
  if (errors.every((group) => group.length === 0)) {
    try { result = calculateApplianceInventory(parsed); }
    catch { calculationError = "These values are too large. Check your inputs."; }
  }

  function updateRow(id: number, change: Partial<Row>) {
    setRows((current) => current.map((row) => row.id === id ? { ...row, ...change } : row));
    setStatus("");
  }
  function choosePreset(id: number, value: string) {
    const preset = appliancePresets.find((item) => item.id === value);
    updateRow(id, preset ? { preset: value, name: preset.name, wattage: String(preset.watts), dutyCyclePercent: "100" } : { preset: "" });
  }
  function addRow() {
    const id = nextId.current++;
    setRows((current) => [...current, { ...firstRow, id, name: "New appliance", preset: "", wattage: "", hoursPerActiveDay: "1" }]);
    setStatus("Appliance added. Enter its wattage or choose a preset.");
    requestAnimationFrame(() => document.getElementById(`appliance-${id}-preset`)?.focus());
  }
  function removeRow(id: number, index: number) {
    const remaining = rows.filter((row) => row.id !== id);
    setRows(remaining);
    setStatus("Appliance removed. The total has been updated.");
    const focusId = remaining[Math.min(index, remaining.length - 1)]?.id;
    requestAnimationFrame(() => document.getElementById(`appliance-${focusId}-preset`)?.focus());
  }
  async function copyResult() {
    if (!result) return;
    const lines = rows.map((row, index) => `${row.name.trim() || `Appliance ${index + 1}`}: ${row.wattage} W, ${row.hoursPerActiveDay} h/day, ${row.activeDaysPerMonth} days/month, ${row.dutyCyclePercent}% duty; ${formatDecimal(result!.appliances[index].monthlyEnergyKilowattHours)} kWh/month; ${formatCurrency(result!.appliances[index].monthlyCost, currency)}/month`);
    try {
      await navigator.clipboard.writeText(["Watt & Wall appliance inventory (planning estimate)", ...lines, `Rate: ${formatCurrencyRate(parse(rate), currency)}/kWh`, `Total: ${formatDecimal(result.monthlyEnergyKilowattHours)} kWh/month; ${formatCurrency(result.monthlyCost, currency)}/month; ${formatCurrency(result.annualCost, currency)}/year if this month repeats 12 times.`, "Excludes fixed fees and unlisted loads. Presets are rough references; verify your own appliance."].join("\n"));
      setStatus("Result copied to your clipboard.");
    } catch { setStatus("Copy was unavailable. Select the result text to copy it manually."); }
  }

  return (
    <section aria-labelledby="inventory-title" className="space-y-7">
      <form noValidate onSubmit={(event) => event.preventDefault()} className="space-y-6">
        <div className="rounded-2xl bg-card p-5 shadow-sm sm:p-8">
          <h2 id="inventory-title" className="text-2xl font-semibold tracking-tight">Build your appliance inventory</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Choose a reference wattage or enter your own, then add the appliances you want to compare. Each row has its own schedule. Values stay in this browser session.</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <NumberField id="inventory-rate" label="Electricity price per kWh" hint="Use your variable energy and delivery charges per kWh. Exclude separate fixed fees." value={rate} error={rateError} step="any" onChange={(event) => { setRate(event.target.value); setStatus(""); }} />
            <div><Label htmlFor="inventory-currency">Currency</Label><Select id="inventory-currency" className="mt-2" value={currency} onValueChange={(value) => { setCurrency(value as typeof currency); setStatus(""); }}>{currencies.map((code) => <option key={code} value={code}>{code}</option>)}</Select><p className="mt-2 text-xs leading-5 text-muted-foreground">Changes the currency label only. Enter a rate in that currency; no exchange conversion occurs.</p></div>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">Starting USD reference: $0.1834/kWh, the US average residential rate for June 2026, per <a className="font-semibold underline" href={electricityRateReference.url}>EIA table 5.6.A</a>. Your tariff can differ.</p>
        </div>
        {rows.map((row, index) => (
          <fieldset key={row.id} className="min-w-0 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <legend className="px-2 text-lg font-semibold">Appliance {index + 1}</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label htmlFor={`appliance-${row.id}-preset`}>Wattage lookup</Label><select id={`appliance-${row.id}-preset`} className="mt-2 min-h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring" value={row.preset} onChange={(event) => choosePreset(row.id, event.target.value)}><option value="">Custom appliance / measured watts</option>{appliancePresets.map((preset) => <option key={preset.id} value={preset.id}>{preset.name} ({preset.watts} W)</option>)}</select></div>
              <div><Label htmlFor={`appliance-${row.id}-name`}>Name (optional)</Label><Input className="mt-2" id={`appliance-${row.id}-name`} maxLength={80} value={row.name} onChange={(event) => updateRow(row.id, { name: event.target.value })} /></div>
            </div>
            {row.preset && <p className="mt-3 text-xs leading-5 text-muted-foreground">Rough reference from <a className="font-semibold underline" href={appliancePresetSource.url}>Willmar Municipal Utilities</a>, labelled estimated average watts. It is not your model&apos;s rating. Keep duty at 100% unless you replace the watts with an on-cycle measurement.</p>}
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{fieldDefinitions.map((field) => <NumberField key={field.key} id={`appliance-${row.id}-${field.key}`} label={field.label} hint={field.hint} max={field.max} step={field.step} value={row[field.key]} error={errors[index].find((error) => error.field === field.key)?.message} onChange={(event) => updateRow(row.id, { [field.key]: event.target.value, ...(field.key === "wattage" ? { preset: "" } : {}) })} />)}</div>
            <Button className="mt-5" variant="secondary" disabled={rows.length === 1} aria-label={`Remove appliance ${index + 1}`} onClick={() => removeRow(row.id, index)}>Remove appliance</Button>
          </fieldset>
        ))}
        <div className="flex flex-wrap gap-3"><Button onClick={addRow}>Add appliance</Button><Button variant="secondary" onClick={() => { setRows([{ ...firstRow }]); setRate(String(electricityRateReference.rate)); setCurrency("USD"); setStatus("Default appliance and USD reference rate restored."); }}>Reset</Button><Button variant="secondary" disabled={!result} onClick={copyResult}>Copy result</Button></div>
        <p role="status" aria-atomic="true" className="min-h-5 text-sm">{status}</p>
      </form>
      <section aria-labelledby="inventory-results" className="min-w-0 rounded-2xl bg-card-section p-5 shadow-sm sm:p-8">
        <h2 id="inventory-results" className="text-2xl font-semibold">Combined monthly cost</h2>
        <output className="sr-only" aria-live="polite" aria-atomic="true">{result ? `Total ${formatCurrency(result.monthlyCost, currency)} per month for ${rows.length} appliances.` : "Result unavailable. Check the highlighted fields."}</output>
        {result ? <>
          <p className="mt-4 break-words font-mono text-4xl font-semibold">{formatCurrency(result.monthlyCost, currency)}<span className="font-sans text-base font-normal"> / month</span></p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border" role="region" aria-label="Monthly appliance breakdown" tabIndex={0}>
            <table className="w-full text-left text-sm"><caption className="bg-background p-3 text-left">Appliance breakdown at {formatCurrencyRate(parse(rate), currency)}/kWh</caption><thead className="bg-background"><tr><th scope="col" className="p-3">Appliance</th><th scope="col" className="p-3 text-right">kWh/mo</th><th scope="col" className="p-3 text-right">Cost/mo</th></tr></thead><tbody>{rows.map((row, index) => <tr key={row.id} className="border-t border-border"><th scope="row" className="max-w-48 break-words p-3 font-medium">{row.name.trim() || `Appliance ${index + 1}`}</th><td className="p-3 text-right font-mono">{formatDecimal(result!.appliances[index].monthlyEnergyKilowattHours)}</td><td className="p-3 text-right font-mono">{formatCurrency(result!.appliances[index].monthlyCost, currency)}</td></tr>)}</tbody><tfoot className="border-t border-border bg-background font-semibold"><tr><th scope="row" className="p-3">Total</th><td className="p-3 text-right font-mono">{formatDecimal(result.monthlyEnergyKilowattHours)}</td><td className="p-3 text-right font-mono">{formatCurrency(result.monthlyCost, currency)}</td></tr></tfoot></table>
          </div>
          <p className="mt-4 text-sm leading-6">Repeating this month 12 times: <strong>{formatCurrency(result.annualCost, currency)}/year</strong>. Seasonal appliances may need a different schedule each month.</p>
        </> : <p className="mt-4 rounded-lg border border-destructive/40 p-4">{calculationError || "Complete every row and correct the highlighted fields. The total is hidden until all appliances are valid."}</p>}
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Monthly kWh per row = watts ÷ 1,000 × hours/day × days/month × duty cycle ÷ 100. Cost = kWh × rate. Totals include only listed loads, with no fixed fees, tax calculation, startup allowance or separate standby consumption.</p>
      </section>
    </section>
  );
}

function NumberField({ id, label, hint, error, ...props }: { id: string; label: string; hint: string; error?: string; value: string; max?: string; step: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void }) {
  return <div className="min-w-0"><Label htmlFor={id}>{label}</Label><Input className="mt-2" id={id} type="number" inputMode="decimal" min="0" required aria-invalid={Boolean(error)} aria-describedby={`${id}-hint${error ? ` ${id}-error` : ""}`} {...props} /><p id={`${id}-hint`} className="mt-2 text-xs leading-5 text-muted-foreground">{hint}</p>{error && <p id={`${id}-error`} className="mt-1 text-xs font-semibold text-destructive">{error}</p>}</div>;
}
