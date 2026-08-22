import { wattsToKilowatts } from "./conversions";
import { CalculatorValidationError, requireNonNegative, requirePositive, requirePositiveWholeNumber } from "./validation";

export type ApplianceRunningCostInput = {
  wattage: number;
  hoursPerActiveDay: number;
  activeDaysPerMonth: number;
  pricePerKilowattHour: number;
};

export type ApplianceRunningCostResult = {
  energyPerActiveDayKilowattHours: number;
  monthlyEnergyKilowattHours: number;
  annualEnergyKilowattHours: number;
  costPerActiveDay: number;
  monthlyCost: number;
  annualCost: number;
};

export type ApplianceRunningCostFieldError = {
  field: keyof ApplianceRunningCostInput;
  message: string;
};

export function validateApplianceRunningCostInput(input: ApplianceRunningCostInput): ApplianceRunningCostFieldError[] {
  const validations: Array<() => void> = [
    () => requirePositive("wattage", input.wattage),
    () => requirePositive("hoursPerActiveDay", input.hoursPerActiveDay, 24),
    () => requirePositiveWholeNumber("activeDaysPerMonth", input.activeDaysPerMonth, 31),
    () => requireNonNegative("pricePerKilowattHour", input.pricePerKilowattHour),
  ];

  return validations.flatMap((validate) => {
    try {
      validate();
      return [];
    } catch (error) {
      if (error instanceof CalculatorValidationError) {
        return [{ field: error.field as keyof ApplianceRunningCostInput, message: error.message }];
      }

      throw error;
    }
  });
}

export function calculateApplianceRunningCost(
  input: ApplianceRunningCostInput,
): ApplianceRunningCostResult {
  const [firstError] = validateApplianceRunningCostInput(input);

  if (firstError) {
    throw new CalculatorValidationError(firstError.field, firstError.message);
  }

  const dailyEnergyKilowattHours = wattsToKilowatts(input.wattage) * input.hoursPerActiveDay;
  const monthlyEnergyKilowattHours = dailyEnergyKilowattHours * input.activeDaysPerMonth;
  const annualEnergyKilowattHours = monthlyEnergyKilowattHours * 12;

  return {
    energyPerActiveDayKilowattHours: dailyEnergyKilowattHours,
    monthlyEnergyKilowattHours,
    annualEnergyKilowattHours,
    costPerActiveDay: dailyEnergyKilowattHours * input.pricePerKilowattHour,
    monthlyCost: monthlyEnergyKilowattHours * input.pricePerKilowattHour,
    annualCost: annualEnergyKilowattHours * input.pricePerKilowattHour,
  };
}
