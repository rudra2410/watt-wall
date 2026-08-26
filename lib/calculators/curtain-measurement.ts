import { CalculatorValidationError, requirePositive } from "./validation";

export type CurtainFullness = 1.5 | 2 | 2.5 | 3;
export type CurtainMeasurementInput = {
  windowWidthCm: number;
  rodExtensionCm: number;
  fullness: CurtainFullness;
  panelWidthCm: number;
  dropLengthCm: number;
};
export type CurtainMeasurementFieldError = { field: keyof CurtainMeasurementInput; message: string };
export type CurtainMeasurementResult = { rodWidthCm: number; totalFabricWidthCm: number; panelCount: number; dropLengthCm: number };

export function validateCurtainMeasurementInput(input: CurtainMeasurementInput): CurtainMeasurementFieldError[] {
  const allowedFullness = [1.5, 2, 2.5, 3];
  return (Object.entries(input) as Array<[keyof CurtainMeasurementInput, number]>).flatMap(([field, value]) => {
    try {
      requirePositive(field, value, 100000);
      if (field === "fullness" && !allowedFullness.includes(value)) throw new CalculatorValidationError(field, "Choose a supported fullness.");
      return [];
    } catch (error) {
      if (error instanceof CalculatorValidationError) return [{ field, message: error.message }];
      throw error;
    }
  });
}

export function calculateCurtainMeasurement(input: CurtainMeasurementInput): CurtainMeasurementResult {
  const [error] = validateCurtainMeasurementInput(input);
  if (error) throw new CalculatorValidationError(error.field, error.message);
  const rodWidthCm = input.windowWidthCm + input.rodExtensionCm * 2;
  const totalFabricWidthCm = rodWidthCm * input.fullness;
  return { rodWidthCm, totalFabricWidthCm, panelCount: Math.ceil(totalFabricWidthCm / input.panelWidthCm), dropLengthCm: input.dropLengthCm };
}

