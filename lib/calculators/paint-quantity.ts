import { usGallonsToLitres } from "./conversions";
import { CalculatorValidationError, requireNonNegative, requirePositive, requirePositiveWholeNumber, requireWholeNumber } from "./validation";

const SQUARE_FEET_PER_DOOR = 20;
const SQUARE_FEET_PER_WINDOW = 15;

export type PaintQuantityInput = {
  roomLengthFeet: number;
  roomWidthFeet: number;
  wallHeightFeet: number;
  doors: number;
  windows: number;
  coats: number;
  coverageSquareFeetPerGallon: number;
  wastePercent: number;
};

export type PaintQuantityResult = {
  grossWallAreaSquareFeet: number;
  openingsAreaSquareFeet: number;
  paintableAreaSquareFeet: number;
  coatedAreaSquareFeet: number;
  gallonsBeforeWaste: number;
  gallonsWithWaste: number;
  litresWithWaste: number;
  wholeGallonsToBuy: number;
};

export type PaintQuantityField = keyof PaintQuantityInput | "openings";

export type PaintQuantityFieldError = {
  field: PaintQuantityField;
  message: string;
};

export function validatePaintQuantityInput(input: PaintQuantityInput): PaintQuantityFieldError[] {
  const validations: Array<() => void> = [
    () => requirePositive("roomLengthFeet", input.roomLengthFeet),
    () => requirePositive("roomWidthFeet", input.roomWidthFeet),
    () => requirePositive("wallHeightFeet", input.wallHeightFeet),
    () => requireWholeNumber("doors", input.doors),
    () => requireWholeNumber("windows", input.windows),
    () => requirePositiveWholeNumber("coats", input.coats),
    () => requirePositive("coverageSquareFeetPerGallon", input.coverageSquareFeetPerGallon),
    () => requireNonNegative("wastePercent", input.wastePercent, 100),
  ];

  const errors = validations.flatMap((validate) => {
    try {
      validate();
      return [];
    } catch (error) {
      if (error instanceof CalculatorValidationError) {
        return [{ field: error.field as PaintQuantityField, message: error.message }];
      }

      throw error;
    }
  });

  if (errors.length === 0) {
    const grossWallAreaSquareFeet = 2 * (input.roomLengthFeet + input.roomWidthFeet) * input.wallHeightFeet;
    const openingsAreaSquareFeet = input.doors * SQUARE_FEET_PER_DOOR + input.windows * SQUARE_FEET_PER_WINDOW;

    if (openingsAreaSquareFeet >= grossWallAreaSquareFeet) {
      errors.push({ field: "openings", message: "Door and window area must be smaller than the total wall area." });
    }
  }

  return errors;
}

export function calculatePaintQuantity(input: PaintQuantityInput): PaintQuantityResult {
  const [firstError] = validatePaintQuantityInput(input);

  if (firstError) {
    throw new CalculatorValidationError(firstError.field, firstError.message);
  }

  const grossWallAreaSquareFeet = 2 * (input.roomLengthFeet + input.roomWidthFeet) * input.wallHeightFeet;
  const openingsAreaSquareFeet = input.doors * SQUARE_FEET_PER_DOOR + input.windows * SQUARE_FEET_PER_WINDOW;
  const paintableAreaSquareFeet = grossWallAreaSquareFeet - openingsAreaSquareFeet;

  const coatedAreaSquareFeet = paintableAreaSquareFeet * input.coats;
  const gallonsBeforeWaste = coatedAreaSquareFeet / input.coverageSquareFeetPerGallon;
  const gallonsWithWaste = gallonsBeforeWaste * (1 + input.wastePercent / 100);

  return {
    grossWallAreaSquareFeet,
    openingsAreaSquareFeet,
    paintableAreaSquareFeet,
    coatedAreaSquareFeet,
    gallonsBeforeWaste,
    gallonsWithWaste,
    litresWithWaste: usGallonsToLitres(gallonsWithWaste),
    wholeGallonsToBuy: Math.ceil(gallonsWithWaste),
  };
}
