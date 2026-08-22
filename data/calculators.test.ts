import { describe, expect, it } from "vitest";

import { calculatorCategories, calculators } from "./calculators";

describe("calculator registry", () => {
  it("contains the four unique approved calculator routes", () => {
    expect(calculators).toHaveLength(4);
    expect(new Set(calculators.map((calculator) => calculator.slug)).size).toBe(4);
    expect(calculators.map((calculator) => calculator.href)).toEqual([
      "/calculators/electricity-cost",
      "/calculators/appliance-running-cost",
      "/calculators/paint-quantity",
      "/calculators/flooring-tile",
    ]);
  });

  it("places every calculator in one supported category", () => {
    const supportedCategories = new Set(calculatorCategories.map((category) => category.name));

    expect(new Set(calculatorCategories.map((category) => category.name)).size).toBe(calculatorCategories.length);
    expect(calculators.every((calculator) => supportedCategories.has(calculator.category))).toBe(true);
    expect(
      calculatorCategories.flatMap((category) => calculators.filter((calculator) => calculator.category === category.name)),
    ).toHaveLength(calculators.length);
  });
});
