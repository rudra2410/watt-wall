import { wattsToKilowatts } from "./conversions";
import { CalculatorValidationError, requireNonNegative, requirePositive, requirePositiveWholeNumber } from "./validation";

export type PowerUnit = "W" | "kW";

export type ElectricityCostInput = {
  power: number;
  powerUnit: PowerUnit;
  hoursPerActiveDay: number;
  activeDaysPerMonth: number;
  pricePerKilowattHour: number;
};

export type ElectricityCostResult = {
  powerKilowatts: number;
  energyPerActiveDayKilowattHours: number;
  monthlyEnergyKilowattHours: number;
  annualEnergyKilowattHours: number;
  costPerActiveDay: number;
  monthlyCost: number;
  annualCost: number;
};

export type ElectricityCostFieldError = {
  field: keyof ElectricityCostInput;
  message: string;
};

export function validateElectricityCostInput(input: ElectricityCostInput): ElectricityCostFieldError[] {
  const validations: Array<() => void> = [
    () => requirePositive("power", input.power),
    () => requirePositive("hoursPerActiveDay", input.hoursPerActiveDay, 24),
    () => requirePositiveWholeNumber("activeDaysPerMonth", input.activeDaysPerMonth, 31),
    () => requireNonNegative("pricePerKilowattHour", input.pricePerKilowattHour),
    () => {
      if (input.powerUnit !== "W" && input.powerUnit !== "kW") {
        throw new CalculatorValidationError("powerUnit", "Choose watts or kilowatts.");
      }
    },
  ];

  return validations.flatMap((validate) => {
    try {
      validate();
      return [];
    } catch (error) {
      if (error instanceof CalculatorValidationError) {
        return [{ field: error.field as keyof ElectricityCostInput, message: error.message }];
      }

      throw error;
    }
  });
}

export function calculateElectricityCost(input: ElectricityCostInput): ElectricityCostResult {
  const [firstError] = validateElectricityCostInput(input);

  if (firstError) {
    throw new CalculatorValidationError(firstError.field, firstError.message);
  }

  const powerKilowatts = input.powerUnit === "W" ? wattsToKilowatts(input.power) : input.power;
  const energyPerActiveDayKilowattHours = powerKilowatts * input.hoursPerActiveDay;
  const monthlyEnergyKilowattHours = energyPerActiveDayKilowattHours * input.activeDaysPerMonth;
  const annualEnergyKilowattHours = monthlyEnergyKilowattHours * 12;

  return {
    powerKilowatts,
    energyPerActiveDayKilowattHours,
    monthlyEnergyKilowattHours,
    annualEnergyKilowattHours,
    costPerActiveDay: energyPerActiveDayKilowattHours * input.pricePerKilowattHour,
    monthlyCost: monthlyEnergyKilowattHours * input.pricePerKilowattHour,
    annualCost: annualEnergyKilowattHours * input.pricePerKilowattHour,
  };
}
