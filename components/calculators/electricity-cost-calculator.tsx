"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { electricityCostDefaults } from "@/data/electricity-cost";
import {
  calculateElectricityCost,
  validateElectricityCostInput,
  type ElectricityCostFieldError,
  type ElectricityCostInput,
  type PowerUnit,
} from "@/lib/calculators/electricity-cost";
import { formatDecimal, formatUsd, formatUsdRate } from "@/lib/calculators/formatting";

type RawElectricityInput = {
  power: string;
  powerUnit: PowerUnit;
  hoursPerActiveDay: string;
  activeDaysPerMonth: string;
  pricePerKilowattHour: string;
};

const defaultRawInput: RawElectricityInput = {
  power: String(electricityCostDefaults.power),
  powerUnit: electricityCostDefaults.powerUnit,
  hoursPerActiveDay: String(electricityCostDefaults.hoursPerActiveDay),
  activeDaysPerMonth: String(electricityCostDefaults.activeDaysPerMonth),
  pricePerKilowattHour: String(electricityCostDefaults.pricePerKilowattHour),
};

export function ElectricityCostCalculator() {
  const [rawInput, setRawInput] = useState(defaultRawInput);
  const [copyStatus, setCopyStatus] = useState("");

  const parsedInput = useMemo<ElectricityCostInput>(() => ({
    power: parseNumber(rawInput.power),
    powerUnit: rawInput.powerUnit,
    hoursPerActiveDay: parseNumber(rawInput.hoursPerActiveDay),
    activeDaysPerMonth: parseNumber(rawInput.activeDaysPerMonth),
    pricePerKilowattHour: parseNumber(rawInput.pricePerKilowattHour),
  }), [rawInput]);

  const errors = useMemo(() => validateElectricityCostInput(parsedInput), [parsedInput]);
  const errorByField = useMemo(
    () => Object.fromEntries(errors.map((error) => [error.field, error])) as Partial<Record<keyof ElectricityCostInput, ElectricityCostFieldError>>,
    [errors],
  );
  const result = errors.length === 0 ? calculateElectricityCost(parsedInput) : null;

  function updateNumberField(field: Exclude<keyof RawElectricityInput, "powerUnit">) {
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
      "Watt & Wall electricity cost estimate",
      `${formatDecimal(result.energyPerActiveDayKilowattHours)} kWh and ${formatUsd(result.costPerActiveDay)} per active day`,
      `${formatDecimal(result.monthlyEnergyKilowattHours)} kWh and ${formatUsd(result.monthlyCost)} per month`,
      `${formatDecimal(result.annualEnergyKilowattHours)} kWh and ${formatUsd(result.annualCost)} per year`,
      `Based on ${rawInput.power} ${rawInput.powerUnit}, ${rawInput.hoursPerActiveDay} hours per active day, ${rawInput.activeDaysPerMonth} active days per month, and ${formatUsdRate(parsedInput.pricePerKilowattHour)}/kWh.`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Result copied to your clipboard.");
    } catch {
      setCopyStatus("Copy was unavailable. You can select the visible result values instead.");
    }
  }

  const liveSummary = result
    ? `Updated estimate: ${formatUsd(result.monthlyCost)} per month and ${formatUsd(result.annualCost)} per year.`
    : `Result unavailable. ${errors.length} ${errors.length === 1 ? "field needs" : "fields need"} attention.`;

  return (
    <section aria-labelledby="calculator-input-title" className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] xl:items-start xl:gap-8">
      <form className="rounded-2xl bg-card p-5 text-card-foreground shadow-sm sm:p-7 lg:p-8" noValidate onSubmit={handleSubmit}>
        <div>
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Your values</p>
          <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="calculator-input-title">Estimate electricity use and cost</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">All fields are required. Enter a period for decimals; values stay in this browser.</p>
        </div>

        <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
          <legend className="sr-only">Electricity estimate inputs</legend>
          <NumericField
            error={errorByField.power}
            hint="Use the device label or a measured average."
            id="electricity-power"
            label="Power"
            min="0"
            name="power"
            onChange={updateNumberField("power")}
            step="any"
            value={rawInput.power}
          />

          <div>
            <Label htmlFor="electricity-power-unit">Power unit</Label>
            <select
              className="mt-2 min-h-11 w-full rounded-lg border border-input bg-background px-3 text-base text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/35 sm:text-sm"
              id="electricity-power-unit"
              name="powerUnit"
              onChange={(event) => {
                setRawInput((current) => ({ ...current, powerUnit: event.target.value as PowerUnit }));
                setCopyStatus("");
              }}
              value={rawInput.powerUnit}
            >
              <option value="W">Watts (W)</option>
              <option value="kW">Kilowatts (kW)</option>
            </select>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">1 kW equals 1,000 W.</p>
          </div>

          <NumericField
            error={errorByField.hoursPerActiveDay}
            hint="Maximum 24 hours. Decimals are allowed."
            id="electricity-hours"
            label="Hours per active day"
            max="24"
            min="0"
            name="hoursPerActiveDay"
            onChange={updateNumberField("hoursPerActiveDay")}
            step="any"
            value={rawInput.hoursPerActiveDay}
          />

          <NumericField
            error={errorByField.activeDaysPerMonth}
            hint="Enter a whole number from 1 to 31."
            id="electricity-days"
            label="Active days per month"
            max="31"
            min="1"
            name="activeDaysPerMonth"
            onChange={updateNumberField("activeDaysPerMonth")}
            step="1"
            value={rawInput.activeDaysPerMonth}
          />

          <NumericField
            className="sm:col-span-2"
            error={errorByField.pricePerKilowattHour}
            hint="Use the USD per-kWh rate from your bill or tariff."
            id="electricity-rate"
            label="Electricity price (USD per kWh)"
            min="0"
            name="pricePerKilowattHour"
            onChange={updateNumberField("pricePerKilowattHour")}
            step="any"
            value={rawInput.pricePerKilowattHour}
          />
        </fieldset>

        <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
          <Button className="sm:min-w-32" onClick={handleReset} variant="secondary">Reset</Button>
          <Button className="sm:min-w-36" disabled={!result} onClick={handleCopy}>Copy result</Button>
        </div>
        <p aria-live="polite" className="mt-3 min-h-5 text-sm text-muted-foreground">{copyStatus}</p>
      </form>

      <section aria-labelledby="electricity-result-title" className="rounded-2xl bg-card-section p-5 shadow-sm sm:p-7 lg:p-8 xl:sticky xl:top-6">
        <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Live estimate</p>
        <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="electricity-result-title">Estimated energy and cost</h2>
        <output aria-atomic="true" aria-live="polite" className="sr-only">{liveSummary}</output>

        {result ? (
          <>
            <div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5">
              <p className="text-sm leading-5 text-muted-foreground">Estimated monthly cost</p>
              <p className="mt-1 font-mono text-4xl leading-tight font-semibold tracking-tight">{formatUsd(result.monthlyCost)}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">USD, based on {formatDecimal(parsedInput.activeDaysPerMonth)} active days</p>
            </div>
            <dl className="mt-6 divide-y divide-border text-sm">
              <ResultRow cost={result.costPerActiveDay} energy={result.energyPerActiveDayKilowattHours} label="Per active day" />
              <ResultRow cost={result.monthlyCost} energy={result.monthlyEnergyKilowattHours} label="Per month" />
              <ResultRow cost={result.annualCost} energy={result.annualEnergyKilowattHours} label="Per year" />
            </dl>
          </>
        ) : (
          <div className="mt-6 rounded-lg border border-destructive/40 bg-background/70 p-5">
            <p className="font-semibold">Check the highlighted fields.</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">The estimate is hidden until every value is valid, so an incomplete input cannot produce a misleading result.</p>
          </div>
        )}

        <p className="mt-6 text-xs leading-5 text-muted-foreground">Planning estimate only. Actual power draw, schedules, fees, and tariff rules can change your bill.</p>
      </section>
    </section>
  );
}

type NumericFieldProps = {
  className?: string;
  error?: ElectricityCostFieldError;
  hint: string;
  id: string;
  label: string;
  max?: string;
  min?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step: string;
  value: string;
};

function NumericField({ className, error, hint, id, label, ...inputProps }: NumericFieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  return (
    <div className={className}>
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

function ResultRow({ cost, energy, label }: { cost: number; energy: number; label: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 first:pt-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right">
        <span className="block font-mono font-semibold">{formatUsd(cost)}</span>
        <span className="mt-1 block text-xs text-muted-foreground">{formatDecimal(energy)} kWh</span>
      </dd>
    </div>
  );
}

function parseNumber(value: string) {
  return value.trim() === "" ? Number.NaN : Number(value);
}
