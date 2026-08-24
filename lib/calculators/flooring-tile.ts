import { CalculatorValidationError, requireNonNegative, requirePositive } from "./validation";

export type FlooringTileInput = {
  floorLengthFeet: number;
  floorWidthFeet: number;
  coveragePerUnitSquareFeet: number;
  wastePercent: number;
};

export type FlooringTileResult = {
  requiredAreaSquareFeet: number;
  wasteAreaSquareFeet: number;
  adjustedAreaSquareFeet: number;
  unitsNeeded: number;
};

export type FlooringTileFieldError = {
  field: keyof FlooringTileInput;
  message: string;
};

export function validateFlooringTileInput(input: FlooringTileInput): FlooringTileFieldError[] {
  const validations: Array<() => void> = [
    () => requirePositive("floorLengthFeet", input.floorLengthFeet),
    () => requirePositive("floorWidthFeet", input.floorWidthFeet),
    () => requirePositive("coveragePerUnitSquareFeet", input.coveragePerUnitSquareFeet),
    () => requireNonNegative("wastePercent", input.wastePercent, 100),
  ];

  return validations.flatMap((validate) => {
    try {
      validate();
      return [];
    } catch (error) {
      if (error instanceof CalculatorValidationError) {
        return [{ field: error.field as keyof FlooringTileInput, message: error.message }];
      }

      throw error;
    }
  });
}

export function calculateFlooringTile(input: FlooringTileInput): FlooringTileResult {
  const [firstError] = validateFlooringTileInput(input);

  if (firstError) {
    throw new CalculatorValidationError(firstError.field, firstError.message);
  }

  const requiredAreaSquareFeet = input.floorLengthFeet * input.floorWidthFeet;
  const wasteAreaSquareFeet = requiredAreaSquareFeet * (input.wastePercent / 100);
  const adjustedAreaSquareFeet = requiredAreaSquareFeet + wasteAreaSquareFeet;

  return {
    requiredAreaSquareFeet,
    wasteAreaSquareFeet,
    adjustedAreaSquareFeet,
    unitsNeeded: Math.ceil(adjustedAreaSquareFeet / input.coveragePerUnitSquareFeet),
  };
}
