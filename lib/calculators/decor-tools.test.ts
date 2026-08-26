import { describe, expect, it } from "vitest";
import { calculateCurtainMeasurement, validateCurtainMeasurementInput } from "./curtain-measurement";
import { calculateFurnitureFit, validateFurnitureFitInput } from "./furniture-fit";
import { convertDisplayedLength, fromCentimeters, toCentimeters } from "./measurements";
import { calculateRugSize } from "./rug-size";

describe("measurement conversions", () => {
  it("round trips metric and imperial lengths", () => {
    expect(fromCentimeters(toCentimeters(42, "imperial"), "imperial")).toBeCloseTo(42);
    expect(convertDisplayedLength(100, "metric", "imperial")).toBeCloseTo(39.3701);
  });
});

describe("furniture fit", () => {
  const base = { roomLengthCm: 400, roomWidthCm: 300, furnitureWidthCm: 220, furnitureDepthCm: 90, furnitureHeightCm: 85, clearanceCm: 35, openingWidthCm: 95, openingHeightCm: 200 };
  it("chooses a valid orientation and checks clearance", () => {
    const result = calculateFurnitureFit(base);
    expect(result.fitsRoom).toBe(true);
    expect(result.meetsClearance).toBe(true);
    expect(result.deliveryFaceFits).toBe(true);
  });
  it("reports a room fit failure", () => expect(calculateFurnitureFit({ ...base, roomLengthCm: 80, roomWidthCm: 80 }).fitsRoom).toBe(false));
  it("separates clearance and delivery warnings", () => {
    const result = calculateFurnitureFit({ ...base, clearanceCm: 100, openingWidthCm: 40, openingHeightCm: 40 });
    expect(result.fitsRoom).toBe(true);
    expect(result.meetsClearance).toBe(false);
    expect(result.deliveryFaceFits).toBe(false);
  });
  it("rejects invalid dimensions", () => expect(validateFurnitureFitInput({ ...base, roomLengthCm: 0 })).toContainEqual({ field: "roomLengthCm", message: "Enter a value greater than zero." }));
});

describe("rug size", () => {
  it("adds the selected extension on every side", () => {
    const result = calculateRugSize({ layout: "dining", roomLengthCm: 500, roomWidthCm: 400, furnitureLengthCm: 180, furnitureWidthCm: 100, extensionCm: 70 });
    expect(result.recommendedLengthCm).toBe(320);
    expect(result.recommendedWidthCm).toBe(240);
    expect(result.fitsRoom).toBe(true);
  });
  it("reports when the minimum rug footprint exceeds the room", () => {
    expect(calculateRugSize({ layout: "bedroom", roomLengthCm: 200, roomWidthCm: 150, furnitureLengthCm: 200, furnitureWidthCm: 150, extensionCm: 50 }).fitsRoom).toBe(false);
  });
});

describe("curtain measurement", () => {
  it("rounds ready-made panels up", () => {
    expect(calculateCurtainMeasurement({ windowWidthCm: 180, rodExtensionCm: 23, fullness: 2, panelWidthCm: 140, dropLengthCm: 220 })).toEqual({ rodWidthCm: 226, totalFabricWidthCm: 452, panelCount: 4, dropLengthCm: 220 });
  });
  it("rejects unsupported fullness values", () => {
    const input = { windowWidthCm: 180, rodExtensionCm: 23, fullness: 4 as 3, panelWidthCm: 140, dropLengthCm: 220 };
    expect(validateCurtainMeasurementInput(input)).toContainEqual({ field: "fullness", message: "Choose a supported fullness." });
  });
});
