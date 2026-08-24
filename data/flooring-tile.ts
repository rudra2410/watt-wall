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
  "A 5–10% allowance is common for straightforward layouts; diagonal, complex, defective, or future-repair needs may require more.",
] as const;

export const flooringTileFaqs = [
  {
    question: "What should I enter for coverage per unit?",
    answer: "Enter the square feet covered by one carton, pack, sheet, or individual tile as shown on the product listing or carton. Do not enter the total coverage of several cartons.",
  },
  {
    question: "Why is waste added before the unit count is rounded?",
    answer: "Cutting, breakage, pattern matching, defects, and future repairs affect the area you need. The calculator adds your visible allowance first, then rounds the final units up.",
  },
  {
    question: "What waste percentage should I use?",
    answer: "A simple straight installation often starts around 5–10%. Diagonal patterns, irregular rooms, complex cuts, or a desire to keep replacement pieces may justify a higher allowance; follow the product and installer guidance.",
  },
  {
    question: "Can I use this for an L-shaped room?",
    answer: "Not directly as one rectangle. Measure each rectangular section, add the section areas, and use that combined area as the basis of a separate estimate, or consult an installer for a complex layout.",
  },
] as const;
