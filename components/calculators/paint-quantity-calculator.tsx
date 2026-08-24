"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { paintQuantityDefaults } from "@/data/paint-quantity";
import {
  calculatePaintQuantity,
  validatePaintQuantityInput,
  type PaintQuantityFieldError,
  type PaintQuantityInput,
} from "@/lib/calculators/paint-quantity";
import { formatDecimal } from "@/lib/calculators/formatting";

type RawPaintInput = Record<keyof PaintQuantityInput, string>;

const defaultRawInput: RawPaintInput = {
  roomLengthFeet: String(paintQuantityDefaults.roomLengthFeet),
  roomWidthFeet: String(paintQuantityDefaults.roomWidthFeet),
  wallHeightFeet: String(paintQuantityDefaults.wallHeightFeet),
  doors: String(paintQuantityDefaults.doors),
  windows: String(paintQuantityDefaults.windows),
  coats: String(paintQuantityDefaults.coats),
  coverageSquareFeetPerGallon: String(paintQuantityDefaults.coverageSquareFeetPerGallon),
  wastePercent: String(paintQuantityDefaults.wastePercent),
};

export function PaintQuantityCalculator() {
  const [rawInput, setRawInput] = useState(defaultRawInput);
  const [copyStatus, setCopyStatus] = useState("");

  const parsedInput = useMemo<PaintQuantityInput>(() => ({
    roomLengthFeet: parseNumber(rawInput.roomLengthFeet),
    roomWidthFeet: parseNumber(rawInput.roomWidthFeet),
    wallHeightFeet: parseNumber(rawInput.wallHeightFeet),
    doors: parseNumber(rawInput.doors),
    windows: parseNumber(rawInput.windows),
    coats: parseNumber(rawInput.coats),
    coverageSquareFeetPerGallon: parseNumber(rawInput.coverageSquareFeetPerGallon),
    wastePercent: parseNumber(rawInput.wastePercent),
  }), [rawInput]);

  const errors = useMemo(() => validatePaintQuantityInput(parsedInput), [parsedInput]);
  const errorByField = useMemo(
    () => Object.fromEntries(errors.map((error) => [error.field, error])) as Partial<Record<keyof PaintQuantityInput | "openings", PaintQuantityFieldError>>,
    [errors],
  );
  const result = errors.length === 0 ? calculatePaintQuantity(parsedInput) : null;
  const openingsError = errorByField.openings;

  function updateField(field: keyof RawPaintInput) {
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
      "Watt & Wall paint quantity estimate",
      `${formatDecimal(result.wholeGallonsToBuy)} whole US gallons suggested for purchase`,
      `${formatDecimal(result.gallonsWithWaste)} US gallons (${formatDecimal(result.litresWithWaste)} litres) calculated after ${formatDecimal(parsedInput.wastePercent)}% waste`,
      `${formatDecimal(result.paintableAreaSquareFeet)} sq ft of paintable wall area and ${formatDecimal(result.coatedAreaSquareFeet)} sq ft across ${formatDecimal(parsedInput.coats)} coats.`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Result copied to your clipboard.");
    } catch {
      setCopyStatus("Copy was unavailable. You can select the visible result values instead.");
    }
  }

  const liveSummary = result
    ? `Updated estimate: ${formatDecimal(result.wholeGallonsToBuy)} whole US gallons suggested; calculated need ${formatDecimal(result.gallonsWithWaste)} US gallons, or ${formatDecimal(result.litresWithWaste)} litres.`
    : `Result unavailable. ${errors.length} ${errors.length === 1 ? "field needs" : "fields need"} attention.`;

  return (
    <section aria-labelledby="paint-input-title" className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] xl:items-start xl:gap-8">
      <form className="rounded-2xl bg-card p-5 text-card-foreground shadow-sm sm:p-7 lg:p-8" noValidate onSubmit={handleSubmit}>
        <div>
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Your room and paint</p>
          <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="paint-input-title">Estimate wall paint quantity</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">All fields are required. Measurements use feet and US gallons; values stay in this browser.</p>
        </div>

        <fieldset className="mt-7">
          <legend className="text-base font-semibold">Room dimensions</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-3">
            <NumericField error={errorByField.roomLengthFeet} hint="Wall-to-wall." id="paint-length" label="Room length (ft)" min="0" name="roomLengthFeet" onChange={updateField("roomLengthFeet")} step="any" value={rawInput.roomLengthFeet} />
            <NumericField error={errorByField.roomWidthFeet} hint="Wall-to-wall." id="paint-width" label="Room width (ft)" min="0" name="roomWidthFeet" onChange={updateField("roomWidthFeet")} step="any" value={rawInput.roomWidthFeet} />
            <NumericField error={errorByField.wallHeightFeet} hint="One wall height." id="paint-height" label="Wall height (ft)" min="0" name="wallHeightFeet" onChange={updateField("wallHeightFeet")} step="any" value={rawInput.wallHeightFeet} />
          </div>
        </fieldset>

        <fieldset className="mt-7 border-t border-border pt-6">
          <legend className="px-1 text-base font-semibold">Unpainted openings</legend>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">The estimate subtracts 20 sq ft per door and 15 sq ft per window.</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <NumericField error={errorByField.doors} extraDescribedBy={openingsError ? "paint-openings-error" : undefined} forceInvalid={Boolean(openingsError)} hint="Whole number, including zero." id="paint-doors" label="Doors" min="0" name="doors" onChange={updateField("doors")} step="1" value={rawInput.doors} />
            <NumericField error={errorByField.windows} extraDescribedBy={openingsError ? "paint-openings-error" : undefined} forceInvalid={Boolean(openingsError)} hint="Whole number, including zero." id="paint-windows" label="Windows" min="0" name="windows" onChange={updateField("windows")} step="1" value={rawInput.windows} />
          </div>
          {openingsError ? <p className="mt-3 text-xs leading-5 font-semibold text-destructive" id="paint-openings-error">{openingsError.message}</p> : null}
        </fieldset>

        <fieldset className="mt-7 border-t border-border pt-6">
          <legend className="px-1 text-base font-semibold">Coats, coverage, and waste</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-3">
            <NumericField error={errorByField.coats} hint="Whole number." id="paint-coats" label="Number of coats" min="1" name="coats" onChange={updateField("coats")} step="1" value={rawInput.coats} />
            <NumericField error={errorByField.coverageSquareFeetPerGallon} hint="From the product label." id="paint-coverage" label="Coverage (sq ft/US gal)" min="0" name="coverageSquareFeetPerGallon" onChange={updateField("coverageSquareFeetPerGallon")} step="any" value={rawInput.coverageSquareFeetPerGallon} />
            <NumericField error={errorByField.wastePercent} hint="0% to 100%." id="paint-waste" label="Waste allowance (%)" max="100" min="0" name="wastePercent" onChange={updateField("wastePercent")} step="any" value={rawInput.wastePercent} />
          </div>
        </fieldset>

        <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
          <Button className="sm:min-w-32" onClick={handleReset} variant="secondary">Reset</Button>
          <Button className="sm:min-w-36" disabled={!result} onClick={handleCopy}>Copy result</Button>
        </div>
        <p aria-atomic="true" className="mt-3 min-h-5 text-sm text-muted-foreground" role="status">{copyStatus}</p>
      </form>

      <section aria-labelledby="paint-result-title" className="rounded-2xl bg-card-section p-5 shadow-sm sm:p-7 lg:p-8 xl:sticky xl:top-6">
        <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Live estimate</p>
        <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight" id="paint-result-title">Estimated wall paint</h2>
        <output aria-atomic="true" aria-live="polite" className="sr-only">{liveSummary}</output>

        {result ? (
          <>
            <div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5">
              <p className="text-sm leading-5 text-muted-foreground">Suggested whole US gallons to buy</p>
              <p className="mt-1 font-mono text-4xl leading-tight font-semibold tracking-tight">{formatDecimal(result.wholeGallonsToBuy)} US gal</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">Rounded up after {formatDecimal(parsedInput.wastePercent)}% waste</p>
            </div>
            <dl className="mt-6 divide-y divide-border text-sm">
              <ResultRow label="Gross wall area" value={`${formatDecimal(result.grossWallAreaSquareFeet)} sq ft`} />
              <ResultRow label="Opening allowance" value={`${formatDecimal(result.openingsAreaSquareFeet)} sq ft`} />
              <ResultRow label="Paintable wall area" value={`${formatDecimal(result.paintableAreaSquareFeet)} sq ft`} />
              <ResultRow label={`Across ${formatDecimal(parsedInput.coats)} coats`} value={`${formatDecimal(result.coatedAreaSquareFeet)} sq ft`} />
              <ResultRow label="Before waste" value={`${formatDecimal(result.gallonsBeforeWaste)} US gal`} />
              <ResultRow label="Calculated with waste" value={`${formatDecimal(result.gallonsWithWaste)} US gal · ${formatDecimal(result.litresWithWaste)} L`} />
            </dl>
          </>
        ) : (
          <div className="mt-6 rounded-lg border border-destructive/40 bg-background/70 p-5">
            <p className="font-semibold">Check the highlighted fields.</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">The estimate is hidden until every value is valid, so incomplete measurements cannot produce a misleading quantity.</p>
          </div>
        )}

        <p className="mt-6 text-xs leading-5 text-muted-foreground">Planning estimate only. Product instructions, surface condition, application losses, and available container sizes can change what you should buy.</p>
      </section>
    </section>
  );
}

type NumericFieldProps = {
  error?: PaintQuantityFieldError;
  extraDescribedBy?: string;
  forceInvalid?: boolean;
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

function NumericField({ error, extraDescribedBy, forceInvalid, hint, id, label, ...inputProps }: NumericFieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hintId, error ? errorId : null, extraDescribedBy].filter(Boolean).join(" ");

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input aria-describedby={describedBy} aria-invalid={Boolean(error) || forceInvalid} className="mt-2" id={id} inputMode="decimal" required type="number" {...inputProps} />
      <p className="mt-2 text-xs leading-5 text-muted-foreground" id={hintId}>{hint}</p>
      {error ? <p className="mt-1 text-xs leading-5 font-semibold text-destructive" id={errorId}>{error.message}</p> : null}
    </div>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-mono font-semibold sm:max-w-44 sm:text-right">{value}</dd>
    </div>
  );
}

function parseNumber(value: string) {
  return value.trim() === "" ? Number.NaN : Number(value);
}
