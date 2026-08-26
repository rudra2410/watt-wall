import { formatDecimal } from "./formatting";

export type MeasurementSystem = "metric" | "imperial";

const CENTIMETERS_PER_INCH = 2.54;

export function toCentimeters(value: number, system: MeasurementSystem) {
  return system === "metric" ? value : value * CENTIMETERS_PER_INCH;
}

export function fromCentimeters(value: number, system: MeasurementSystem) {
  return system === "metric" ? value : value / CENTIMETERS_PER_INCH;
}

export function convertDisplayedLength(value: number, from: MeasurementSystem, to: MeasurementSystem) {
  return fromCentimeters(toCentimeters(value, from), to);
}

export function lengthUnit(system: MeasurementSystem) {
  return system === "metric" ? "cm" : "in";
}

export function formatLength(centimeters: number, system: MeasurementSystem) {
  if (system === "metric") {
    return `${formatDecimal(centimeters)} cm (${formatDecimal(centimeters / 100)} m)`;
  }

  const inches = centimeters / CENTIMETERS_PER_INCH;
  const feet = Math.floor(inches / 12);
  const remainingInches = inches - feet * 12;
  return `${formatDecimal(inches)} in (${feet} ft ${formatDecimal(remainingInches)} in)`;
}

