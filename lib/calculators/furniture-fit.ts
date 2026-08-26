import { CalculatorValidationError, requirePositive } from "./validation";

export type FurnitureFitInput = {
  roomLengthCm: number;
  roomWidthCm: number;
  furnitureWidthCm: number;
  furnitureDepthCm: number;
  furnitureHeightCm: number;
  clearanceCm: number;
  openingWidthCm: number;
  openingHeightCm: number;
};

export type FurnitureOrientation = "standard" | "rotated";

export type FurnitureFitResult = {
  fitsRoom: boolean;
  meetsClearance: boolean;
  deliveryFaceFits: boolean;
  orientation: FurnitureOrientation;
  remainingLengthCm: number;
  remainingWidthCm: number;
  minimumClearanceCm: number;
};

export type FurnitureFitFieldError = { field: keyof FurnitureFitInput; message: string };

export function validateFurnitureFitInput(input: FurnitureFitInput): FurnitureFitFieldError[] {
  return (Object.entries(input) as Array<[keyof FurnitureFitInput, number]>).flatMap(([field, value]) => {
    try {
      requirePositive(field, value, 100000);
      return [];
    } catch (error) {
      if (error instanceof CalculatorValidationError) return [{ field, message: error.message }];
      throw error;
    }
  });
}

export function calculateFurnitureFit(input: FurnitureFitInput): FurnitureFitResult {
  const [error] = validateFurnitureFitInput(input);
  if (error) throw new CalculatorValidationError(error.field, error.message);

  const options = [
    { orientation: "standard" as const, length: input.furnitureWidthCm, width: input.furnitureDepthCm },
    { orientation: "rotated" as const, length: input.furnitureDepthCm, width: input.furnitureWidthCm },
  ].map((option) => {
    const remainingLengthCm = input.roomLengthCm - option.length;
    const remainingWidthCm = input.roomWidthCm - option.width;
    return { ...option, remainingLengthCm, remainingWidthCm, score: Math.min(remainingLengthCm, remainingWidthCm) };
  });
  const best = options.sort((a, b) => b.score - a.score)[0];
  const fitsRoom = best.remainingLengthCm >= 0 && best.remainingWidthCm >= 0;
  const minimumClearanceCm = fitsRoom ? Math.min(best.remainingLengthCm, best.remainingWidthCm) / 2 : 0;

  const faces: Array<[number, number]> = [
    [input.furnitureWidthCm, input.furnitureHeightCm],
    [input.furnitureDepthCm, input.furnitureHeightCm],
    [input.furnitureWidthCm, input.furnitureDepthCm],
  ];
  const deliveryFaceFits = faces.some(([a, b]) =>
    (a <= input.openingWidthCm && b <= input.openingHeightCm) ||
    (b <= input.openingWidthCm && a <= input.openingHeightCm));

  return {
    fitsRoom,
    meetsClearance: fitsRoom && minimumClearanceCm >= input.clearanceCm,
    deliveryFaceFits,
    orientation: best.orientation,
    remainingLengthCm: Math.max(0, best.remainingLengthCm),
    remainingWidthCm: Math.max(0, best.remainingWidthCm),
    minimumClearanceCm,
  };
}

