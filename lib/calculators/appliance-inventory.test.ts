import { describe, expect, it } from "vitest";
import { calculateApplianceInventory, calculateApplianceRunningCost, validateApplianceRunningCostInput } from "./appliance-running-cost";

const load = { wattage: 1500, hoursPerActiveDay: 6, activeDaysPerMonth: 30, pricePerKilowattHour: 0.16 };

describe("appliance duty cycles and inventory", () => {
  it("keeps existing single-load callers equivalent to 100% duty", () => {
    expect(calculateApplianceRunningCost(load)).toEqual(calculateApplianceRunningCost({ ...load, dutyCyclePercent: 100 }));
    expect(calculateApplianceRunningCost(load).monthlyCost).toBeCloseTo(43.2);
  });
  it("applies fractional duty once to energy and cost", () => {
    const result = calculateApplianceRunningCost({ ...load, dutyCyclePercent: 37.5 });
    expect(result.monthlyEnergyKilowattHours).toBeCloseTo(101.25);
    expect(result.monthlyCost).toBeCloseTo(16.2);
    expect(result.annualCost).toBeCloseTo(194.4);
  });
  it("represents an off load with zero duty without inventing standby use", () => {
    const result = calculateApplianceRunningCost({ ...load, dutyCyclePercent: 0 });
    expect(result.monthlyCost).toBe(0);
    expect(result.annualEnergyKilowattHours).toBe(0);
  });
  it.each([-1, 100.01, Number.NaN, Number.POSITIVE_INFINITY])("rejects invalid duty %s", (dutyCyclePercent) => {
    expect(validateApplianceRunningCostInput({ ...load, dutyCyclePercent })).toEqual([expect.objectContaining({ field: "dutyCyclePercent" })]);
  });
  it("sums unrounded rows with independent schedules", () => {
    const result = calculateApplianceInventory([
      { wattage: 1500, hoursPerActiveDay: 3, activeDaysPerMonth: 30, dutyCyclePercent: 50, pricePerKilowattHour: 0.1834 },
      { wattage: 100, hoursPerActiveDay: 8, activeDaysPerMonth: 20, dutyCyclePercent: 100, pricePerKilowattHour: 0.1834 },
    ]);
    expect(result.monthlyEnergyKilowattHours).toBeCloseTo(83.5);
    expect(result.monthlyCost).toBeCloseTo(15.3139);
    expect(result.annualCost).toBeCloseTo(183.7668);
    expect(result.appliances).toHaveLength(2);
  });
  it("does not silently skip invalid rows or return an empty inventory total", () => {
    expect(() => calculateApplianceInventory([])).toThrow();
    expect(() => calculateApplianceInventory([load, { ...load, wattage: Number.NaN }])).toThrow();
  });
  it("rejects numeric overflow instead of displaying an infinite cost", () => {
    expect(() => calculateApplianceInventory([{ ...load, pricePerKilowattHour: Number.MAX_VALUE }])).toThrow();
  });
});
