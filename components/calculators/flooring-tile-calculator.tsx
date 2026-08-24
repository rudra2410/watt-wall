"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { flooringTileDefaults } from "@/data/flooring-tile";
import {
  calculateFlooringTile,
  validateFlooringTileInput,
  type FlooringTileFieldError,
  type FlooringTileInput,
} from "@/lib/calculators/flooring-tile";
import { formatDecimal } from "@/lib/calculators/formatting";

type RawFlooringInput = Record<keyof FlooringTileInput, string>;

const defaultRawInput: RawFlooringInput = {
  floorLengthFeet: String(flooringTileDefaults.floorLengthFeet),
  floorWidthFeet: String(flooringTileDefaults.floorWidthFeet),
  coveragePerUnitSquareFeet: String(flooringTileDefaults.coveragePerUnitSquareFeet),
  wastePercent: String(flooringTileDefaults.wastePercent),
};

export function FlooringTileCalculator() {
  const [rawInput, setRawInput] = useState(defaultRawInput);
  const [copyStatus, setCopyStatus] = useState("");

  const parsedInput = useMemo<FlooringTileInput>(() => ({
    floorLengthFeet: parseNumber(rawInput.floorLengthFeet),
    floorWidthFeet: parseNumber(rawInput.floorWidthFeet),
    coveragePerUnitSquareFeet: parseNumber(rawInput.coveragePerUnitSquareFeet),
    wastePercent: parseNumber(rawInput.wastePercent),
  }), [rawInput]);

  const errors = useMemo(() => validateFlooringTileInput(parsedInput), [parsedInput]);
  const errorByField = useMemo(
    () => Object.fromEntries(errors.map((error) => [error.field, error])) as Partial<Record<keyof FlooringTileInput, FlooringTileFieldError>>,
    [errors],
  );
  const result = errors.length === 0 ? calculateFlooringTile(parsedInput) : null;

  function updateField(field: keyof RawFlooringInput) {
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
      "Watt & Wall flooring and tile quantity estimate",
      `${formatDecimal(result.unitsNeeded)} units suggested for purchase`,
      `${formatDecimal(result.adjustedAreaSquareFeet)} sq ft adjusted area after ${formatDecimal(parsedInput.wastePercent)}% waste`,
      `${formatDecimal(result.requiredAreaSquareFeet)} sq ft room area at ${formatDecimal(parsedInput.coveragePerUnitSquareFeet)} sq ft per unit.`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Result copied to your clipboard.");
    } catch {
      setCopyStatus("Copy was unavailable. You can select the visible result values instead.");
    }
  }

  const liveSummary = result
    ? `Updated estimate: ${formatDecimal(result.unitsNeeded)} units suggested for ${formatDecimal(result.adjustedAreaSquareFeet)} square feet after waste.`
    : `Result unavailable. ${errors.length} ${errors.length === 1 ? "field needs" : "fields need"} attention.`;

  return (
    <section aria-labelledby="flooring-input-title" className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] xl:items-start xl:gap-8">
      <form className="rounded-2xl bg-card p-5 text-card-foreground shadow-sm sm:p-7 lg:p-8" noValidate onSubmit={handleSubmit}>
        <div>
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Your floor and product</p>
          <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="flooring-input-title">Estimate flooring or tile quantity</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">All fields are required. Measurements use feet and square feet; values stay in this browser.</p>
        </div>

        <fieldset className="mt-7">
          <legend className="text-base font-semibold">Floor dimensions</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <NumericField error={errorByField.floorLengthFeet} hint="Measure the longest side of the rectangle." id="flooring-length" label="Floor length (ft)" min="0" name="floorLengthFeet" onChange={updateField("floorLengthFeet")} step="any" value={rawInput.floorLengthFeet} />
            <NumericField error={errorByField.floorWidthFeet} hint="Measure the other side of the rectangle." id="flooring-width" label="Floor width (ft)" min="0" name="floorWidthFeet" onChange={updateField("floorWidthFeet")} step="any" value={rawInput.floorWidthFeet} />
          </div>
        </fieldset>

        <fieldset className="mt-7 border-t border-border pt-6">
          <legend className="px-1 text-base font-semibold">Product coverage and waste</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <NumericField error={errorByField.coveragePerUnitSquareFeet} hint="From the carton or product listing." id="flooring-coverage" label="Coverage per unit (sq ft)" min="0" name="coveragePerUnitSquareFeet" onChange={updateField("coveragePerUnitSquareFeet")} step="any" value={rawInput.coveragePerUnitSquareFeet} />
            <NumericField error={errorByField.wastePercent} hint="Common starting point: 5%–10%." id="flooring-waste" label="Waste allowance (%)" max="100" min="0" name="wastePercent" onChange={updateField("wastePercent")} step="any" value={rawInput.wastePercent} />
          </div>
        </fieldset>

        <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
          <Button className="sm:min-w-32" onClick={handleReset} variant="secondary">Reset</Button>
          <Button className="sm:min-w-36" disabled={!result} onClick={handleCopy}>Copy result</Button>
        </div>
        <p aria-atomic="true" className="mt-3 min-h-5 text-sm text-muted-foreground" role="status">{copyStatus}</p>
      </form>

      <section aria-labelledby="flooring-result-title" className="rounded-2xl bg-card-section p-5 shadow-sm sm:p-7 lg:p-8 xl:sticky xl:top-6">
        <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Live estimate</p>
        <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="flooring-result-title">Estimated flooring quantity</h2>
        <output aria-atomic="true" aria-live="polite" className="sr-only">{liveSummary}</output>

        {result ? (
          <>
            <div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5">
              <p className="text-sm leading-5 text-muted-foreground">Suggested units to buy</p>
              <p className="mt-1 font-mono text-4xl leading-tight font-semibold tracking-tight">{formatDecimal(result.unitsNeeded)} units</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">Rounded up after {formatDecimal(parsedInput.wastePercent)}% waste</p>
            </div>
            <dl className="mt-6 divide-y divide-border text-sm">
              <ResultRow label="Required floor area" value={`${formatDecimal(result.requiredAreaSquareFeet)} sq ft`} />
              <ResultRow label="Waste allowance" value={`${formatDecimal(result.wasteAreaSquareFeet)} sq ft`} />
              <ResultRow label="Adjusted area" value={`${formatDecimal(result.adjustedAreaSquareFeet)} sq ft`} />
              <ResultRow label="Coverage per unit" value={`${formatDecimal(parsedInput.coveragePerUnitSquareFeet)} sq ft`} />
            </dl>
            <p className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-4 text-sm leading-6">Plan for about <strong>{formatDecimal(result.adjustedAreaSquareFeet)} sq ft</strong> of material after waste, which is <strong>{formatDecimal(result.unitsNeeded)} whole units</strong> at your entered product coverage.</p>
          </>
        ) : (
          <div className="mt-6 rounded-lg border border-destructive/40 bg-background/70 p-5">
            <p className="font-semibold">Check the highlighted fields.</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">The estimate is hidden until every value is valid, so incomplete measurements cannot produce a misleading quantity.</p>
          </div>
        )}

        <p className="mt-6 text-xs leading-5 text-muted-foreground">Planning estimate only. Layout, cuts, pattern, defects, cartons, and product instructions can change the final quantity.</p>
      </section>
    </section>
  );
}

type NumericFieldProps = {
  error?: FlooringTileFieldError;
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
      <Input aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`} aria-invalid={Boolean(error)} className="mt-2" id={id} inputMode="decimal" required type="number" {...inputProps} />
      <p className="mt-2 text-xs leading-5 text-muted-foreground" id={hintId}>{hint}</p>
      {error ? <p className="mt-1 text-xs leading-5 font-semibold text-destructive" id={errorId}>{error.message}</p> : null}
    </div>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-mono font-semibold sm:text-right">{value}</dd>
    </div>
  );
}

function parseNumber(value: string) {
  return value.trim() === "" ? Number.NaN : Number(value);
}
