export type HeroElectricityExampleInput = {
  powerKilowatts: number;
  hoursPerDay: number;
  pricePerKilowattHour: number;
};

export type HeroElectricityExample = HeroElectricityExampleInput & {
  dailyEnergyKilowattHours: number;
  dailyCost: number;
};

export function calculateHeroElectricityExample(
  input: HeroElectricityExampleInput,
): HeroElectricityExample {
  const dailyEnergyKilowattHours = input.powerKilowatts * input.hoursPerDay;

  return {
    ...input,
    dailyEnergyKilowattHours,
    dailyCost: dailyEnergyKilowattHours * input.pricePerKilowattHour,
  };
}

export const heroElectricityExample = calculateHeroElectricityExample({
  powerKilowatts: 1.5,
  hoursPerDay: 3,
  pricePerKilowattHour: 0.16,
});
