import { wattsToKilowatts } from "./conversions";
import { CalculatorValidationError, requireNonNegative, requirePositive, requirePositiveWholeNumber } from "./validation";

export type ApplianceRunningCostInput = {
  wattage: number;
  hoursPerActiveDay: number;
  activeDaysPerMonth: number;
  pricePerKilowattHour: number;
  /** 100 for continuous use or an already averaged power reading. */
  dutyCyclePercent?: number;
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
    () => requireNonNegative("dutyCyclePercent", input.dutyCyclePercent ?? 100, 100),
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

  const dailyEnergyKilowattHours = wattsToKilowatts(input.wattage) * input.hoursPerActiveDay * ((input.dutyCyclePercent ?? 100) / 100);
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

export function calculateApplianceInventory(inputs: readonly ApplianceRunningCostInput[]) {
  if (inputs.length === 0) throw new CalculatorValidationError("appliances", "Add at least one appliance.");
  const appliances = inputs.map(calculateApplianceRunningCost);
  const monthlyEnergyKilowattHours = appliances.reduce((total, item) => total + item.monthlyEnergyKilowattHours, 0);
  const monthlyCost = appliances.reduce((total, item) => total + item.monthlyCost, 0);
  const annualCost = monthlyCost * 12;
  if (![monthlyEnergyKilowattHours, monthlyCost, annualCost].every(Number.isFinite)) {
    throw new CalculatorValidationError("appliances", "These values are too large to calculate. Check the inputs.");
  }
  return { appliances, monthlyEnergyKilowattHours, monthlyCost, annualCost };
}
