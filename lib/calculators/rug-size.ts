import { CalculatorValidationError, requirePositive } from "./validation";

export type RugLayout = "living" | "dining" | "bedroom";
export type RugSizeInput = {
  layout: RugLayout;
  roomLengthCm: number;
  roomWidthCm: number;
  furnitureLengthCm: number;
  furnitureWidthCm: number;
  extensionCm: number;
};
export type RugSizeFieldError = { field: Exclude<keyof RugSizeInput, "layout">; message: string };
export type RugSizeResult = {
  recommendedLengthCm: number;
  recommendedWidthCm: number;
  fitsRoom: boolean;
  rotated: boolean;
  borderLengthCm: number;
  borderWidthCm: number;
};

export function validateRugSizeInput(input: RugSizeInput): RugSizeFieldError[] {
  const fields: Array<Exclude<keyof RugSizeInput, "layout">> = ["roomLengthCm", "roomWidthCm", "furnitureLengthCm", "furnitureWidthCm", "extensionCm"];
  return fields.flatMap((field) => {
    try { requirePositive(field, input[field], 100000); return []; }
    catch (error) {
      if (error instanceof CalculatorValidationError) return [{ field, message: error.message }];
      throw error;
    }
  });
}

export function calculateRugSize(input: RugSizeInput): RugSizeResult {
  const [error] = validateRugSizeInput(input);
  if (error) throw new CalculatorValidationError(error.field, error.message);
  const recommendedLengthCm = input.furnitureLengthCm + input.extensionCm * 2;
  const recommendedWidthCm = input.furnitureWidthCm + input.extensionCm * 2;
  const normal = { rotated: false, length: input.roomLengthCm - recommendedLengthCm, width: input.roomWidthCm - recommendedWidthCm };
  const rotated = { rotated: true, length: input.roomLengthCm - recommendedWidthCm, width: input.roomWidthCm - recommendedLengthCm };
  const best = Math.min(rotated.length, rotated.width) > Math.min(normal.length, normal.width) ? rotated : normal;
  const fitsRoom = best.length >= 0 && best.width >= 0;
  return {
    recommendedLengthCm,
    recommendedWidthCm,
    fitsRoom,
    rotated: best.rotated,
    borderLengthCm: fitsRoom ? best.length / 2 : 0,
    borderWidthCm: fitsRoom ? best.width / 2 : 0,
  };
}

