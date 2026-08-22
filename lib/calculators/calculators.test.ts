import { describe, expect, it } from "vitest";

import { calculateApplianceRunningCost, validateApplianceRunningCostInput } from "./appliance-running-cost";
import { calculateElectricityCost, validateElectricityCostInput } from "./electricity-cost";
import { calculateFlooringTile } from "./flooring-tile";
import { formatDecimal, formatUsd, formatUsdRate } from "./formatting";
import { calculatePaintQuantity, validatePaintQuantityInput } from "./paint-quantity";
import { CalculatorValidationError } from "./validation";

describe("electricity formulas", () => {
  it("converts watts and preserves unrounded monthly and annual results", () => {
    expect(calculateElectricityCost({ power: 1_500, powerUnit: "W", hoursPerActiveDay: 3, activeDaysPerMonth: 30, pricePerKilowattHour: 0.16 })).toEqual({
      powerKilowatts: 1.5,
      energyPerActiveDayKilowattHours: 4.5,
      monthlyEnergyKilowattHours: 135,
      annualEnergyKilowattHours: 1_620,
      costPerActiveDay: 0.72,
      monthlyCost: 21.6,
      annualCost: 259.2,
    });
  });

  it("returns every field-specific error from the shared electricity validator", () => {
    expect(validateElectricityCostInput({ power: Number.NaN, powerUnit: "watts" as "W", hoursPerActiveDay: 25, activeDaysPerMonth: 2.5, pricePerKilowattHour: -1 })).toEqual([
      { field: "power", message: "Enter a number." },
      { field: "hoursPerActiveDay", message: "Enter a value no greater than 24." },
      { field: "activeDaysPerMonth", message: "Enter a whole number." },
      { field: "pricePerKilowattHour", message: "Enter zero or a positive value." },
      { field: "powerUnit", message: "Choose watts or kilowatts." },
    ]);
  });

  it("calculates appliance schedules from active days", () => {
    const result = calculateApplianceRunningCost({ wattage: 800, hoursPerActiveDay: 1.5, activeDaysPerMonth: 20, pricePerKilowattHour: 0.175 });

    expect(result.monthlyEnergyKilowattHours).toBeCloseTo(24);
    expect(result.annualEnergyKilowattHours).toBeCloseTo(288);
    expect(result.energyPerActiveDayKilowattHours).toBeCloseTo(1.2);
    expect(result.costPerActiveDay).toBeCloseTo(0.21);
    expect(result.monthlyCost).toBeCloseTo(4.2);
    expect(result.annualCost).toBeCloseTo(50.4);
  });

  it("returns every appliance field error from one shared validator", () => {
    expect(validateApplianceRunningCostInput({ wattage: Number.NaN, hoursPerActiveDay: 25, activeDaysPerMonth: 2.5, pricePerKilowattHour: -1 })).toEqual([
      { field: "wattage", message: "Enter a number." },
      { field: "hoursPerActiveDay", message: "Enter a value no greater than 24." },
      { field: "activeDaysPerMonth", message: "Enter a whole number." },
      { field: "pricePerKilowattHour", message: "Enter zero or a positive value." },
    ]);
  });
});

describe("renovation formulas", () => {
  it("subtracts openings and applies coats, coverage, waste, and gallon conversion", () => {
    const result = calculatePaintQuantity({ roomLengthFeet: 12, roomWidthFeet: 10, wallHeightFeet: 8, doors: 1, windows: 2, coats: 2, coverageSquareFeetPerGallon: 400, wastePercent: 10 });

    expect(result.paintableAreaSquareFeet).toBe(302);
    expect(result.gallonsBeforeWaste).toBe(1.51);
    expect(result.gallonsWithWaste).toBeCloseTo(1.661);
    expect(result.litresWithWaste).toBeCloseTo(6.287);
    expect(result.wholeGallonsToBuy).toBe(2);
  });

  it("returns paint field errors and a combined impossible-openings error", () => {
    expect(validatePaintQuantityInput({ roomLengthFeet: Number.NaN, roomWidthFeet: -1, wallHeightFeet: 0, doors: 1.5, windows: -1, coats: 0, coverageSquareFeetPerGallon: 0, wastePercent: 101 })).toHaveLength(8);
    expect(validatePaintQuantityInput({ roomLengthFeet: 1, roomWidthFeet: 1, wallHeightFeet: 1, doors: 1, windows: 0, coats: 2, coverageSquareFeetPerGallon: 400, wastePercent: 10 })).toEqual([
      { field: "openings", message: "Door and window area must be smaller than the total wall area." },
    ]);
  });

  it("rounds flooring units up only after adding the selected waste", () => {
    expect(calculateFlooringTile({ floorLengthFeet: 10, floorWidthFeet: 12, coveragePerUnitSquareFeet: 23.21, wastePercent: 10 })).toEqual({
      requiredAreaSquareFeet: 120,
      wasteAreaSquareFeet: 12,
      adjustedAreaSquareFeet: 132,
      unitsNeeded: 6,
    });
  });
});

describe("calculator validation", () => {
  it.each([
    () => calculateElectricityCost({ power: Number.NaN, powerUnit: "W", hoursPerActiveDay: 3, activeDaysPerMonth: 30, pricePerKilowattHour: 0.16 }),
    () => calculateElectricityCost({ power: Number.POSITIVE_INFINITY, powerUnit: "W", hoursPerActiveDay: 3, activeDaysPerMonth: 30, pricePerKilowattHour: 0.16 }),
    () => calculateElectricityCost({ power: 1.5, powerUnit: "watts" as "W", hoursPerActiveDay: 3, activeDaysPerMonth: 30, pricePerKilowattHour: 0.16 }),
    () => calculateApplianceRunningCost({ wattage: 800, hoursPerActiveDay: 25, activeDaysPerMonth: 20, pricePerKilowattHour: 0.16 }),
    () => calculateApplianceRunningCost({ wattage: 800, hoursPerActiveDay: 3, activeDaysPerMonth: 20.5, pricePerKilowattHour: 0.16 }),
    () => calculatePaintQuantity({ roomLengthFeet: 1, roomWidthFeet: 1, wallHeightFeet: 1, doors: 1, windows: 0, coats: 2, coverageSquareFeetPerGallon: 400, wastePercent: 10 }),
    () => calculatePaintQuantity({ roomLengthFeet: 12, roomWidthFeet: 10, wallHeightFeet: 8, doors: 1, windows: 2, coats: 1.5, coverageSquareFeetPerGallon: 400, wastePercent: 10 }),
    () => calculateFlooringTile({ floorLengthFeet: -1, floorWidthFeet: 12, coveragePerUnitSquareFeet: 20, wastePercent: 10 }),
    () => calculateFlooringTile({ floorLengthFeet: 10, floorWidthFeet: 12, coveragePerUnitSquareFeet: 0, wastePercent: 10 }),
  ])("rejects non-finite, out-of-range, or impossible input", (calculate) => {
    expect(calculate).toThrow(CalculatorValidationError);
  });
});

describe("calculator display formatting", () => {
  it("formats raw results without changing formula precision", () => {
    const rawValue = 24.000000000000004;

    expect(formatDecimal(rawValue)).toBe("24");
    expect(formatUsd(4.206)).toBe("$4.21");
    expect(formatUsdRate(0.175)).toBe("$0.175");
    expect(rawValue).toBe(24.000000000000004);
  });
});
