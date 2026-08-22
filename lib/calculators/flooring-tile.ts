import { requireNonNegative, requirePositive } from "./validation";

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

export function calculateFlooringTile(input: FlooringTileInput): FlooringTileResult {
  requirePositive("floorLengthFeet", input.floorLengthFeet);
  requirePositive("floorWidthFeet", input.floorWidthFeet);
  requirePositive("coveragePerUnitSquareFeet", input.coveragePerUnitSquareFeet);
  requireNonNegative("wastePercent", input.wastePercent, 100);

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
