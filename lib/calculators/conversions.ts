export const LITRES_PER_US_GALLON = 3.785411784;

export function wattsToKilowatts(watts: number) {
  return watts / 1_000;
}

export function usGallonsToLitres(gallons: number) {
  return gallons * LITRES_PER_US_GALLON;
}
