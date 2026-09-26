import { calculateFlooringTile, type FlooringTileInput } from "@/lib/calculators/flooring-tile";

export const flooringTileDefaults = {
  floorLengthFeet: 10,
  floorWidthFeet: 12,
  coveragePerUnitSquareFeet: 23.21,
  wastePercent: 10,
} as const satisfies FlooringTileInput;

export const flooringTileExample = calculateFlooringTile(flooringTileDefaults);

export const flooringTileAssumptions = [
  "The floor is treated as one rectangle; split an L-shaped or irregular plan into rectangles and add their areas before using this estimate.",
  "Coverage is the square footage printed on the selected carton, pack, sheet, or tile specification.",
  "Waste is applied to area before dividing by coverage. The final unit count is rounded up because partial cartons or tiles cannot complete an order.",
  "The 10% starting value is an editable worksheet example, not a universal recommendation. Use the allowance given for the selected product, room layout, and installation plan.",
] as const;

export const flooringTileFaqs = [
  {
    question: "What should I enter for coverage per unit?",
    answer: "Enter the square feet covered by one carton, pack, sheet, or individual tile as shown on the product listing or carton. Room dimensions must be in feet, and coverage must be in square feet per unit. Convert metric measurements before entering them, and do not enter the total coverage of several cartons.",
  },
  {
    question: "Why is waste added before the unit count is rounded?",
    answer: "Cutting, breakage, pattern matching, defects, and future repairs affect the area you need. The calculator adds your visible allowance first, then rounds the final units up.",
  },
  {
    question: "What waste percentage should I use?",
    answer: "The starting 10% is an editable example, not a rule for every product. Pattern, room shape, cutting plan, defects, and separately planned repair stock can change the quantity. Use the selected product's instructions and the installer's layout guidance.",
  },
  {
    question: "Can I use this for an L-shaped room?",
    answer: "Not directly as one rectangle. Measure each rectangular section, add the section areas, and use that combined area as the basis of a separate estimate, or consult an installer for a complex layout.",
  },
] as const;
