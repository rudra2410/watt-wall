"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { applianceRunningCostDefaults } from "@/data/appliance-running-cost";
import {
  calculateApplianceRunningCost,
  validateApplianceRunningCostInput,
  type ApplianceRunningCostFieldError,
  type ApplianceRunningCostInput,
} from "@/lib/calculators/appliance-running-cost";
import { formatCurrency, formatCurrencyRate, formatDecimal } from "@/lib/calculators/formatting";

const currencyOptions = ["USD", "CAD", "GBP", "EUR", "INR", "AUD"] as const;

type RawApplianceInput = Record<keyof ApplianceRunningCostInput, string>;

const defaultRawInput: RawApplianceInput = {
  wattage: String(applianceRunningCostDefaults.wattage),
  hoursPerActiveDay: String(applianceRunningCostDefaults.hoursPerActiveDay),
  activeDaysPerMonth: String(applianceRunningCostDefaults.activeDaysPerMonth),
  pricePerKilowattHour: String(applianceRunningCostDefaults.pricePerKilowattHour),
};

export function ApplianceRunningCostCalculator() {
  const [rawInput, setRawInput] = useState(defaultRawInput);
  const [currency, setCurrency] = useState<(typeof currencyOptions)[number]>("USD");
  const [copyStatus, setCopyStatus] = useState("");

  const parsedInput = useMemo<ApplianceRunningCostInput>(() => ({
    wattage: parseNumber(rawInput.wattage),
    hoursPerActiveDay: parseNumber(rawInput.hoursPerActiveDay),
    activeDaysPerMonth: parseNumber(rawInput.activeDaysPerMonth),
    pricePerKilowattHour: parseNumber(rawInput.pricePerKilowattHour),
  }), [rawInput]);

  const errors = useMemo(() => validateApplianceRunningCostInput(parsedInput), [parsedInput]);
  const errorByField = useMemo(
    () => Object.fromEntries(errors.map((error) => [error.field, error])) as Partial<Record<keyof ApplianceRunningCostInput, ApplianceRunningCostFieldError>>,
    [errors],
  );
  const result = errors.length === 0 ? calculateApplianceRunningCost(parsedInput) : null;

  function updateField(field: keyof RawApplianceInput) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setRawInput((current) => ({ ...current, [field]: event.target.value }));
      setCopyStatus("");
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleReset() {
    setRawInput(defaultRawInput);
    setCopyStatus("Defaults restored.");
  }

  async function handleCopy() {
    if (!result) return;

    const summary = [
      "Watt & Wall appliance running cost estimate",
      `${formatDecimal(result.monthlyEnergyKilowattHours)} kWh and ${formatCurrency(result.monthlyCost, currency)} per month`,
      `${formatDecimal(result.annualEnergyKilowattHours)} kWh and ${formatCurrency(result.annualCost, currency)} per year`,
      `Based on ${rawInput.wattage} W, ${rawInput.hoursPerActiveDay} hours per active day, ${rawInput.activeDaysPerMonth} active days per month, and ${formatCurrencyRate(parsedInput.pricePerKilowattHour, currency)}/kWh.`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Result copied to your clipboard.");
    } catch {
      setCopyStatus("Copy was unavailable. You can select the visible result values instead.");
    }
  }

  const liveSummary = result
    ? `Updated estimate: ${formatCurrency(result.monthlyCost, currency)} per month and ${formatCurrency(result.annualCost, currency)} per year.`
    : `Result unavailable. ${errors.length} ${errors.length === 1 ? "field needs" : "fields need"} attention.`;

  return (
    <section aria-labelledby="appliance-input-title" className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] xl:items-start xl:gap-8">
      <form className="rounded-2xl bg-card p-5 text-card-foreground shadow-sm sm:p-7 lg:p-8" noValidate onSubmit={handleSubmit}>
        <div>
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Your appliance</p>
          <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="appliance-input-title">Estimate one appliance&apos;s running cost</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">All fields are required. Enter a period for decimals and your local rate; values stay in this browser.</p>
        </div>

        <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
          <legend className="sr-only">Appliance running cost inputs</legend>
          <NumericField
            error={errorByField.wattage}
            hint="Use watts from the label or a measured average."
            id="appliance-wattage"
            label="Appliance wattage (W)"
            min="0"
            name="wattage"
            onChange={updateField("wattage")}
            step="any"
            value={rawInput.wattage}
          />
          <NumericField
            error={errorByField.hoursPerActiveDay}
            hint="Maximum 24 hours. Decimals are allowed."
            id="appliance-hours"
            label="Hours per active day"
            max="24"
            min="0"
            name="hoursPerActiveDay"
            onChange={updateField("hoursPerActiveDay")}
            step="any"
            value={rawInput.hoursPerActiveDay}
          />
          <NumericField
            error={errorByField.activeDaysPerMonth}
            hint="Enter a whole number from 1 to 31."
            id="appliance-days"
            label="Active days per month"
            max="31"
            min="1"
            name="activeDaysPerMonth"
            onChange={updateField("activeDaysPerMonth")}
            step="1"
            value={rawInput.activeDaysPerMonth}
          />
          <NumericField
            error={errorByField.pricePerKilowattHour}
            hint="Use the all-in local-currency rate per kWh from your bill or tariff."
            id="appliance-rate"
            label="Electricity price (local currency per kWh)"
            min="0"
            name="pricePerKilowattHour"
            onChange={updateField("pricePerKilowattHour")}
            step="any"
            value={rawInput.pricePerKilowattHour}
          />
          <div>
            <Label htmlFor="appliance-currency">Currency</Label>
            <Select className="mt-2" id="appliance-currency" value={currency} onValueChange={(value) => setCurrency(value as (typeof currencyOptions)[number])}>
              {currencyOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Choose the currency used by your local rate.</p>
          </div>
        </fieldset>

        <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
          <Button className="sm:min-w-32" onClick={handleReset} variant="secondary">Reset</Button>
          <Button className="sm:min-w-36" disabled={!result} onClick={handleCopy}>Copy result</Button>
        </div>
        <p aria-atomic="true" className="mt-3 min-h-5 text-sm text-muted-foreground" role="status">{copyStatus}</p>
      </form>

      <section aria-labelledby="appliance-result-title" className="rounded-2xl bg-card-section p-5 shadow-sm sm:p-7 lg:p-8 xl:sticky xl:top-6">
        <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Live estimate</p>
        <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="appliance-result-title">Estimated running cost</h2>
        <output aria-atomic="true" aria-live="polite" className="sr-only">{liveSummary}</output>

        {result ? (
          <>
            <div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5">
              <p className="text-sm leading-5 text-muted-foreground">Estimated monthly cost</p>
              <p className="mt-1 font-mono text-4xl leading-tight font-semibold tracking-tight">{formatCurrency(result.monthlyCost, currency)}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">Example currency format; based on {formatDecimal(parsedInput.activeDaysPerMonth)} active days</p>
            </div>
            <dl className="mt-6 divide-y divide-border text-sm">
              <ResultRow cost={result.costPerActiveDay} currency={currency} energy={result.energyPerActiveDayKilowattHours} label="Per active day" />
              <ResultRow cost={result.monthlyCost} currency={currency} energy={result.monthlyEnergyKilowattHours} label="Per month" />
              <ResultRow cost={result.annualCost} currency={currency} energy={result.annualEnergyKilowattHours} label="Per year" />
            </dl>
            <p className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-4 text-sm leading-6">
              At this schedule, the appliance uses about <strong>{formatDecimal(result.monthlyEnergyKilowattHours)} kWh</strong> and costs about <strong>{formatCurrency(result.monthlyCost, currency)}</strong> per month. Repeating the same schedule for 12 months gives about <strong>{formatCurrency(result.annualCost, currency)}</strong> per year.
            </p>
          </>
        ) : (
          <div className="mt-6 rounded-lg border border-destructive/40 bg-background/70 p-5">
            <p className="font-semibold">Check the highlighted fields.</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">The estimate is hidden until every value is valid, so incomplete input cannot produce a misleading result.</p>
          </div>
        )}

        <p className="mt-6 text-xs leading-5 text-muted-foreground">Planning estimate only. Cycling, standby power, fees, and tariff rules can change actual cost.</p>
      </section>
    </section>
  );
}

type NumericFieldProps = {
  error?: ApplianceRunningCostFieldError;
  hint: string;
  id: string;
  label: string;
  max?: string;
  min: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step: string;
  value: string;
};

function NumericField({ error, hint, id, label, ...inputProps }: NumericFieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`}
        aria-invalid={Boolean(error)}
        className="mt-2"
        id={id}
        inputMode="decimal"
        required
        type="number"
        {...inputProps}
      />
      <p className="mt-2 text-xs leading-5 text-muted-foreground" id={hintId}>{hint}</p>
      {error ? <p className="mt-1 text-xs leading-5 font-semibold text-destructive" id={errorId}>{error.message}</p> : null}
    </div>
  );
}

function ResultRow({ cost, currency, energy, label }: { cost: number; currency: string; energy: number; label: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 first:pt-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right">
        <span className="block font-mono font-semibold">{formatCurrency(cost, currency)}</span>
        <span className="mt-1 block text-xs text-muted-foreground">{formatDecimal(energy)} kWh</span>
      </dd>
    </div>
  );
}

function parseNumber(value: string) {
  return value.trim() === "" ? Number.NaN : Number(value);
}
