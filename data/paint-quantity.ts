import { calculatePaintQuantity, type PaintQuantityInput } from "@/lib/calculators/paint-quantity";

export const paintQuantityDefaults = {
  roomLengthFeet: 12,
  roomWidthFeet: 10,
  wallHeightFeet: 8,
  doors: 1,
  windows: 2,
  coats: 2,
  coverageSquareFeetPerGallon: 400,
  wastePercent: 10,
} as const satisfies PaintQuantityInput;

export const paintQuantityExample = calculatePaintQuantity(paintQuantityDefaults);

export const paintQuantityAssumptions = [
  "The room is rectangular with two walls of each entered length and one consistent wall height.",
  "Each door subtracts 20 sq ft and each window subtracts 15 sq ft from the gross wall area.",
  "Coverage is entered per coat in square feet per U.S. gallon in the current example. Check the selected product label or technical sheet and replace the value with the unit system used in your market.",
  "The waste allowance is applied after coats and coverage. The whole-gallon suggestion rounds up only after that visible allowance.",
] as const;

export const paintQuantityFaqs = [
  {
    question: "Why does the calculator subtract 20 sq ft per door and 15 sq ft per window?",
    answer: "Those are documented rule-of-thumb opening areas used for a quick room estimate. Measure unusually large or small openings separately when you need a more precise material plan.",
  },
  {
    question: "What coverage number should I enter?",
    answer: "Use the coverage shown on your chosen paint label or technical data sheet, converting units when needed. Product, surface texture, porosity, application method, and color change can all affect practical coverage.",
  },
  {
    question: "Why is the whole-gallon result rounded up?",
    answer: "Paint is commonly purchased in fixed container sizes. The calculator preserves the unrounded gallons and litres, then separately rounds the US-gallon purchase suggestion up so you can see both values.",
  },
  {
    question: "Does this include the ceiling, trim, doors, or primer?",
    answer: "No. It estimates wall paint only and treats entered doors/windows as unpainted openings. Calculate ceilings, trim, painted doors, primer, and specialty coatings separately using their own coverage instructions.",
  },
] as const;
