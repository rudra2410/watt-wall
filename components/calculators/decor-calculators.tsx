"use client";

import { useMemo, useState, type ChangeEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import type { CalculatorSlug } from "@/data/calculators";
import { trackCalculatorCopy, trackCalculatorReset } from "@/lib/analytics";
import { calculateCurtainMeasurement, validateCurtainMeasurementInput, type CurtainFullness } from "@/lib/calculators/curtain-measurement";
import { calculateFurnitureFit, validateFurnitureFitInput } from "@/lib/calculators/furniture-fit";
import { convertDisplayedLength, formatLength, lengthUnit, toCentimeters, type MeasurementSystem } from "@/lib/calculators/measurements";
import { calculateRugSize, validateRugSizeInput, type RugLayout } from "@/lib/calculators/rug-size";

type RawValues = Record<string, string>;

function parseNumber(value: string) { return value.trim() === "" ? Number.NaN : Number(value); }

async function copyText(text: string, calculatorSlug: CalculatorSlug, setStatus: (status: string) => void) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Result copied to your clipboard.");
    trackCalculatorCopy(calculatorSlug);
  } catch {
    setStatus("Copy was unavailable. You can select the visible result values instead.");
  }
}

function convertRawValues<T extends RawValues>(values: T, fields: readonly (keyof T)[], from: MeasurementSystem, to: MeasurementSystem) {
  const next = { ...values };
  fields.forEach((field) => {
    const value = parseNumber(values[field]);
    if (Number.isFinite(value)) next[field] = String(Number(convertDisplayedLength(value, from, to).toFixed(4))) as T[keyof T];
  });
  return next;
}

function MeasurementSystemField({ system, onChange }: { system: MeasurementSystem; onChange: (system: MeasurementSystem) => void }) {
  return (
    <div>
      <Label htmlFor="measurement-system">Measurement system</Label>
      <Select className="mt-2" id="measurement-system" value={system} onValueChange={(value) => onChange(value as MeasurementSystem)}>
        <option value="metric">Metric (centimetres)</option>
        <option value="imperial">Imperial (inches)</option>
      </Select>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">Changing units converts your current measurements.</p>
    </div>
  );
}

function NumericField({ error, hint, id, label, onChange, value }: { error?: string; hint: string; id: string; label: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; value: string }) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`} aria-invalid={Boolean(error)} className="mt-2" id={id} inputMode="decimal" min="0" onChange={onChange} required step="any" type="number" value={value} />
      <p className="mt-2 text-xs leading-5 text-muted-foreground" id={hintId}>{hint}</p>
      {error ? <p className="mt-1 text-xs leading-5 font-semibold text-destructive" id={errorId}>{error}</p> : null}
    </div>
  );
}

function ToolLayout({ calculatorSlug, children, copyDisabled, copyStatus, onCopy, onReset, result, resultTitle, summary, title }: { calculatorSlug: CalculatorSlug; children: ReactNode; copyDisabled: boolean; copyStatus: string; onCopy: () => void; onReset: () => void; result: ReactNode; resultTitle: string; summary: string; title: string }) {
  function handleReset() {
    onReset();
    trackCalculatorReset(calculatorSlug);
  }

  return (
    <section className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] xl:items-start xl:gap-8">
      <form className="rounded-2xl bg-card p-5 text-card-foreground shadow-sm sm:p-7 lg:p-8" noValidate onSubmit={(event) => event.preventDefault()}>
        <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Your measurements</p>
        <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">All fields are required. Values stay in your browser and results appear only when every input is valid.</p>
        {children}
        <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
          <Button className="sm:min-w-32" onClick={handleReset} variant="secondary">Reset</Button>
          <Button className="sm:min-w-36" disabled={copyDisabled} onClick={onCopy}>Copy result</Button>
        </div>
        <p aria-atomic="true" className="mt-3 min-h-5 text-sm text-muted-foreground" role="status">{copyStatus}</p>
      </form>
      <section className="rounded-2xl bg-card-section p-5 shadow-sm sm:p-7 lg:p-8 xl:sticky xl:top-28">
        <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Live estimate</p>
        <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight">{resultTitle}</h2>
        <output aria-atomic="true" aria-live="polite" className="sr-only">{summary}</output>
        {result}
      </section>
    </section>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return <div className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4"><dt className="text-muted-foreground">{label}</dt><dd className="font-mono font-semibold sm:text-right">{value}</dd></div>;
}

function InvalidResult({ count }: { count: number }) {
  return <div className="mt-6 rounded-lg border border-destructive/40 bg-background/70 p-5"><p className="font-semibold">Check the highlighted fields.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{count} {count === 1 ? "field needs" : "fields need"} attention before a result can be shown.</p></div>;
}

const furnitureDefaults = { roomLength: "400", roomWidth: "300", furnitureWidth: "220", furnitureDepth: "90", furnitureHeight: "85", clearance: "76", openingWidth: "95", openingHeight: "200" };
const furnitureFields = Object.keys(furnitureDefaults) as Array<keyof typeof furnitureDefaults>;

export function FurnitureFitCalculator() {
  const [system, setSystem] = useState<MeasurementSystem>("metric");
  const [raw, setRaw] = useState(furnitureDefaults);
  const [copyStatus, setCopyStatus] = useState("");
  const input = useMemo(() => ({ roomLengthCm: toCentimeters(parseNumber(raw.roomLength), system), roomWidthCm: toCentimeters(parseNumber(raw.roomWidth), system), furnitureWidthCm: toCentimeters(parseNumber(raw.furnitureWidth), system), furnitureDepthCm: toCentimeters(parseNumber(raw.furnitureDepth), system), furnitureHeightCm: toCentimeters(parseNumber(raw.furnitureHeight), system), clearanceCm: toCentimeters(parseNumber(raw.clearance), system), openingWidthCm: toCentimeters(parseNumber(raw.openingWidth), system), openingHeightCm: toCentimeters(parseNumber(raw.openingHeight), system) }), [raw, system]);
  const errors = useMemo(() => validateFurnitureFitInput(input), [input]);
  const errorMap = Object.fromEntries(errors.map((error) => [error.field, error.message])) as Record<string, string>;
  const result = errors.length ? null : calculateFurnitureFit(input);
  const update = (field: keyof typeof raw) => (event: ChangeEvent<HTMLInputElement>) => { setRaw((current) => ({ ...current, [field]: event.target.value })); setCopyStatus(""); };
  const changeSystem = (next: MeasurementSystem) => { setRaw((current) => convertRawValues(current, furnitureFields, system, next)); setSystem(next); };
  const summary = result ? `Furniture ${result.fitsRoom ? "fits" : "does not fit"} the room; requested clearance ${result.meetsClearance ? "is" : "is not"} available.` : `Result unavailable. ${errors.length} fields need attention.`;
  async function copy() { if (!result) return; await copyText(`Watt & Wall furniture fit check\n${summary}\nBest orientation: ${result.orientation}\nRemaining space: ${formatLength(result.remainingLengthCm, system)} by ${formatLength(result.remainingWidthCm, system)}\nPreliminary opening check: ${result.deliveryFaceFits ? "passes" : "needs review"}`, "furniture-fit", setCopyStatus); }
  return <ToolLayout calculatorSlug="furniture-fit" copyDisabled={!result} copyStatus={copyStatus} onCopy={copy} onReset={() => { setRaw(furnitureDefaults); setSystem("metric"); setCopyStatus("Defaults restored."); }} resultTitle="Furniture fit check" summary={summary} title="Check room and delivery fit" result={result ? <><div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5"><p className="text-sm text-muted-foreground">Room fit</p><p className="mt-1 text-3xl font-semibold">{result.fitsRoom ? "Fits the room" : "Does not fit"}</p><p className="mt-2 text-sm text-muted-foreground">Best orientation: {result.orientation}</p></div><dl className="mt-6 divide-y divide-border text-sm"><ResultRow label="Remaining room length" value={formatLength(result.remainingLengthCm, system)} /><ResultRow label="Remaining room width" value={formatLength(result.remainingWidthCm, system)} /><ResultRow label="Clearance around each side" value={formatLength(result.minimumClearanceCm, system)} /><ResultRow label="Requested clearance" value={result.meetsClearance ? "Available" : "Not available"} /><ResultRow label="Preliminary opening check" value={result.deliveryFaceFits ? "Passes" : "Review needed"} /></dl><p className="mt-6 text-xs leading-5 text-muted-foreground">This is a rectangular measurement check, not a delivery guarantee. Verify turns, stairs, lifts, obstacles, removable parts, and safe handling.</p></> : <InvalidResult count={errors.length} />}>
    <div className="mt-7 grid gap-5 sm:grid-cols-2"><MeasurementSystemField system={system} onChange={changeSystem} /><NumericField id="furniture-clearance" label={`Preferred clearance (${lengthUnit(system)})`} hint="Editable planning example: 76 cm / 30 in; not an accessibility or building-code standard." value={raw.clearance} onChange={update("clearance")} error={errorMap.clearanceCm} /></div>
    <fieldset className="mt-7 border-t border-border pt-6"><legend className="font-semibold">Room and furniture</legend><div className="mt-4 grid gap-5 sm:grid-cols-2"><NumericField id="room-length" label={`Room length (${lengthUnit(system)})`} hint="Measure wall to wall." value={raw.roomLength} onChange={update("roomLength")} error={errorMap.roomLengthCm} /><NumericField id="room-width" label={`Room width (${lengthUnit(system)})`} hint="Measure the usable width." value={raw.roomWidth} onChange={update("roomWidth")} error={errorMap.roomWidthCm} /><NumericField id="furniture-width" label={`Furniture width (${lengthUnit(system)})`} hint="Use the product's widest side." value={raw.furnitureWidth} onChange={update("furnitureWidth")} error={errorMap.furnitureWidthCm} /><NumericField id="furniture-depth" label={`Furniture depth (${lengthUnit(system)})`} hint="Include handles or cushions." value={raw.furnitureDepth} onChange={update("furnitureDepth")} error={errorMap.furnitureDepthCm} /><NumericField id="furniture-height" label={`Furniture height (${lengthUnit(system)})`} hint="Use the full assembled height." value={raw.furnitureHeight} onChange={update("furnitureHeight")} error={errorMap.furnitureHeightCm} /></div></fieldset>
    <fieldset className="mt-7 border-t border-border pt-6"><legend className="font-semibold">Tightest delivery opening</legend><div className="mt-4 grid gap-5 sm:grid-cols-2"><NumericField id="opening-width" label={`Opening width (${lengthUnit(system)})`} hint="Measure the clear inside width." value={raw.openingWidth} onChange={update("openingWidth")} error={errorMap.openingWidthCm} /><NumericField id="opening-height" label={`Opening height (${lengthUnit(system)})`} hint="Measure the clear inside height." value={raw.openingHeight} onChange={update("openingHeight")} error={errorMap.openingHeightCm} /></div></fieldset>
  </ToolLayout>;
}

const rugDefaults = { roomLength: "500", roomWidth: "400", furnitureLength: "180", furnitureWidth: "100", extension: "70" };
const rugFields = Object.keys(rugDefaults) as Array<keyof typeof rugDefaults>;
const extensionDefaults: Record<RugLayout, number> = { living: 20, dining: 70, bedroom: 50 };

export function RugSizeCalculator() {
  const [system, setSystem] = useState<MeasurementSystem>("metric"); const [layout, setLayout] = useState<RugLayout>("dining"); const [raw, setRaw] = useState(rugDefaults); const [copyStatus, setCopyStatus] = useState("");
  const input = useMemo(() => ({ layout, roomLengthCm: toCentimeters(parseNumber(raw.roomLength), system), roomWidthCm: toCentimeters(parseNumber(raw.roomWidth), system), furnitureLengthCm: toCentimeters(parseNumber(raw.furnitureLength), system), furnitureWidthCm: toCentimeters(parseNumber(raw.furnitureWidth), system), extensionCm: toCentimeters(parseNumber(raw.extension), system) }), [layout, raw, system]);
  const errors = useMemo(() => validateRugSizeInput(input), [input]); const errorMap = Object.fromEntries(errors.map((error) => [error.field, error.message])) as Record<string, string>; const result = errors.length ? null : calculateRugSize(input);
  const update = (field: keyof typeof raw) => (event: ChangeEvent<HTMLInputElement>) => { setRaw((current) => ({ ...current, [field]: event.target.value })); setCopyStatus(""); };
  const changeSystem = (next: MeasurementSystem) => { setRaw((current) => convertRawValues(current, rugFields, system, next)); setSystem(next); };
  const changeLayout = (next: RugLayout) => { setLayout(next); setRaw((current) => ({ ...current, extension: String(Number(convertDisplayedLength(extensionDefaults[next], "metric", system).toFixed(2))) })); };
  const summary = result ? `Recommended rug: ${formatLength(result.recommendedLengthCm, system)} by ${formatLength(result.recommendedWidthCm, system)}; ${result.fitsRoom ? "fits" : "does not fit"} the room.` : `Result unavailable. ${errors.length} fields need attention.`;
  async function copy() { if (!result) return; await copyText(`Watt & Wall rug size estimate\n${summary}\nLayout: ${layout}`, "rug-size", setCopyStatus); }
  return <ToolLayout calculatorSlug="rug-size" copyDisabled={!result} copyStatus={copyStatus} onCopy={copy} onReset={() => { setRaw(rugDefaults); setLayout("dining"); setSystem("metric"); setCopyStatus("Defaults restored."); }} resultTitle="Recommended rug dimensions" summary={summary} title="Estimate a rug around your furniture" result={result ? <><div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5"><p className="text-sm text-muted-foreground">Minimum planning size</p><p className="mt-1 font-mono text-2xl font-semibold">{formatLength(result.recommendedLengthCm, system)} × {formatLength(result.recommendedWidthCm, system)}</p></div><dl className="mt-6 divide-y divide-border text-sm"><ResultRow label="Fits inside room" value={result.fitsRoom ? "Yes" : "No"} /><ResultRow label="Room orientation" value={result.rotated ? "Rotate rug 90°" : "Standard"} /><ResultRow label="Exposed floor at length ends" value={formatLength(result.borderLengthCm, system)} /><ResultRow label="Exposed floor at width sides" value={formatLength(result.borderWidthCm, system)} /></dl><p className="mt-6 text-xs leading-5 text-muted-foreground">Use this as a minimum planning size. Product sizes vary by market; mark the outline on the floor before ordering.</p></> : <InvalidResult count={errors.length} />}>
    <div className="mt-7 grid gap-5 sm:grid-cols-2"><MeasurementSystemField system={system} onChange={changeSystem} /><div><Label htmlFor="rug-layout">Room layout</Label><Select className="mt-2" id="rug-layout" value={layout} onValueChange={(value) => changeLayout(value as RugLayout)}><option value="living">Living room</option><option value="dining">Dining room</option><option value="bedroom">Bedroom</option></Select><p className="mt-2 text-xs leading-5 text-muted-foreground">Loads an editable placement example; check it against your furniture arrangement.</p></div></div>
    <fieldset className="mt-7 border-t border-border pt-6"><legend className="font-semibold">Room and reference furniture</legend><div className="mt-4 grid gap-5 sm:grid-cols-2"><NumericField id="rug-room-length" label={`Room length (${lengthUnit(system)})`} hint="Usable room length." value={raw.roomLength} onChange={update("roomLength")} error={errorMap.roomLengthCm} /><NumericField id="rug-room-width" label={`Room width (${lengthUnit(system)})`} hint="Usable room width." value={raw.roomWidth} onChange={update("roomWidth")} error={errorMap.roomWidthCm} /><NumericField id="rug-furniture-length" label={`Furniture length (${lengthUnit(system)})`} hint="Sofa, table, or bed length." value={raw.furnitureLength} onChange={update("furnitureLength")} error={errorMap.furnitureLengthCm} /><NumericField id="rug-furniture-width" label={`Furniture width (${lengthUnit(system)})`} hint="Sofa group, table, or bed width." value={raw.furnitureWidth} onChange={update("furnitureWidth")} error={errorMap.furnitureWidthCm} /><NumericField id="rug-extension" label={`Extension on each side (${lengthUnit(system)})`} hint="Editable placement allowance." value={raw.extension} onChange={update("extension")} error={errorMap.extensionCm} /></div></fieldset>
  </ToolLayout>;
}

const curtainDefaults = { windowWidth: "180", rodExtension: "23", panelWidth: "140", dropLength: "220" };
const curtainFields = Object.keys(curtainDefaults) as Array<keyof typeof curtainDefaults>;

export function CurtainMeasurementCalculator() {
  const [system, setSystem] = useState<MeasurementSystem>("metric"); const [fullness, setFullness] = useState<CurtainFullness>(2); const [raw, setRaw] = useState(curtainDefaults); const [copyStatus, setCopyStatus] = useState("");
  const input = useMemo(() => ({ windowWidthCm: toCentimeters(parseNumber(raw.windowWidth), system), rodExtensionCm: toCentimeters(parseNumber(raw.rodExtension), system), fullness, panelWidthCm: toCentimeters(parseNumber(raw.panelWidth), system), dropLengthCm: toCentimeters(parseNumber(raw.dropLength), system) }), [fullness, raw, system]);
  const errors = useMemo(() => validateCurtainMeasurementInput(input), [input]); const errorMap = Object.fromEntries(errors.map((error) => [error.field, error.message])) as Record<string, string>; const result = errors.length ? null : calculateCurtainMeasurement(input);
  const update = (field: keyof typeof raw) => (event: ChangeEvent<HTMLInputElement>) => { setRaw((current) => ({ ...current, [field]: event.target.value })); setCopyStatus(""); };
  const changeSystem = (next: MeasurementSystem) => { setRaw((current) => convertRawValues(current, curtainFields, system, next)); setSystem(next); };
  const summary = result ? `Suggested rod width ${formatLength(result.rodWidthCm, system)}, ${result.panelCount} panels, finished drop ${formatLength(result.dropLengthCm, system)}.` : `Result unavailable. ${errors.length} fields need attention.`;
  async function copy() { if (!result) return; await copyText(`Watt & Wall curtain measurement estimate\n${summary}\nTotal fabric width: ${formatLength(result.totalFabricWidthCm, system)} at ${fullness}× fullness.`, "curtain-measurement", setCopyStatus); }
  return <ToolLayout calculatorSlug="curtain-measurement" copyDisabled={!result} copyStatus={copyStatus} onCopy={copy} onReset={() => { setRaw(curtainDefaults); setFullness(2); setSystem("metric"); setCopyStatus("Defaults restored."); }} resultTitle="Curtain and rod estimate" summary={summary} title="Plan ready-made curtain panels" result={result ? <><div className="mt-6 rounded-lg border border-primary/20 bg-background/70 p-5"><p className="text-sm text-muted-foreground">Whole panels to buy</p><p className="mt-1 font-mono text-4xl font-semibold">{result.panelCount}</p><p className="mt-2 text-sm text-muted-foreground">Rounded up at {fullness}× fullness</p></div><dl className="mt-6 divide-y divide-border text-sm"><ResultRow label="Suggested rod width" value={formatLength(result.rodWidthCm, system)} /><ResultRow label="Combined fabric width" value={formatLength(result.totalFabricWidthCm, system)} /><ResultRow label="Finished drop" value={formatLength(result.dropLengthCm, system)} /></dl><p className="mt-6 text-xs leading-5 text-muted-foreground">Check the panel header, rings, hems, pattern repeat, shrinkage, and manufacturer instructions before ordering or cutting fabric.</p></> : <InvalidResult count={errors.length} />}>
    <div className="mt-7 grid gap-5 sm:grid-cols-2"><MeasurementSystemField system={system} onChange={changeSystem} /><div><Label htmlFor="curtain-fullness">Fullness</Label><Select className="mt-2" id="curtain-fullness" value={String(fullness)} onValueChange={(value) => setFullness(Number(value) as CurtainFullness)}><option value="1.5">1.5× light</option><option value="2">2× standard</option><option value="2.5">2.5× full</option><option value="3">3× very full</option></Select><p className="mt-2 text-xs leading-5 text-muted-foreground">Home Depot suggests about 2–3× rod width.</p></div></div>
    <fieldset className="mt-7 border-t border-border pt-6"><legend className="font-semibold">Window, rod, and panels</legend><div className="mt-4 grid gap-5 sm:grid-cols-2"><NumericField id="window-width" label={`Window width (${lengthUnit(system)})`} hint="Measure outside trim for an outside mount." value={raw.windowWidth} onChange={update("windowWidth")} error={errorMap.windowWidthCm} /><NumericField id="rod-extension" label={`Rod extension per side (${lengthUnit(system)})`} hint="Starting point: 23 cm / 9 in." value={raw.rodExtension} onChange={update("rodExtension")} error={errorMap.rodExtensionCm} /><NumericField id="panel-width" label={`One panel width (${lengthUnit(system)})`} hint="Use the packaged panel width." value={raw.panelWidth} onChange={update("panelWidth")} error={errorMap.panelWidthCm} /><NumericField id="drop-length" label={`Finished drop (${lengthUnit(system)})`} hint="Measure from rod or ring to the desired hem." value={raw.dropLength} onChange={update("dropLength")} error={errorMap.dropLengthCm} /></div></fieldset>
  </ToolLayout>;
}
