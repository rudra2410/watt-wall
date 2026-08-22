import { describe, expect, it } from "vitest";

import { calculateHeroElectricityExample } from "./home-hero-example";

describe("calculateHeroElectricityExample", () => {
  it("derives energy use and cost from the displayed example inputs", () => {
    expect(
      calculateHeroElectricityExample({
        powerKilowatts: 1.5,
        hoursPerDay: 3,
        pricePerKilowattHour: 0.16,
      }),
    ).toEqual({
      powerKilowatts: 1.5,
      hoursPerDay: 3,
      pricePerKilowattHour: 0.16,
      dailyEnergyKilowattHours: 4.5,
      dailyCost: 0.72,
    });
  });
});
