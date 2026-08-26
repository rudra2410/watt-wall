export type CalculatorCategory = "Energy" | "Renovation" | "Furniture & Decor";

export type CalculatorIconName = "bolt" | "plug" | "paint" | "tile" | "furniture" | "rug" | "curtain";

export type CalculatorDefinition = {
  slug: string;
  href: `/calculators/${string}`;
  name: string;
  category: CalculatorCategory;
  description: string;
  icon: CalculatorIconName;
};

export type CalculatorCategoryDefinition = {
  name: CalculatorCategory;
  title: string;
  description: string;
  icon: CalculatorIconName;
};

export const calculatorCategories = [
  {
    name: "Energy",
    title: "Understand everyday energy costs",
    description: "Compare electricity use and running costs with the power, usage time, and local rate that apply to you.",
    icon: "bolt",
  },
  {
    name: "Renovation",
    title: "Plan renovation materials",
    description: "Estimate paint, flooring, and tile quantities from your measurements before you buy materials.",
    icon: "paint",
  },
  {
    name: "Furniture & Decor",
    title: "Plan furniture and finishing details",
    description: "Check furniture fit, estimate a balanced rug size, and plan curtain rods and ready-made panels from your own measurements.",
    icon: "furniture",
  },
] as const satisfies readonly CalculatorCategoryDefinition[];

export const calculators = [
  {
    slug: "electricity-cost",
    href: "/calculators/electricity-cost",
    name: "Electricity Cost Calculator",
    category: "Energy",
    description: "Estimate daily, monthly, and annual energy use and cost from power, time, and your local electricity rate.",
    icon: "bolt",
  },
  {
    slug: "appliance-running-cost",
    href: "/calculators/appliance-running-cost",
    name: "Appliance Running Cost Calculator",
    category: "Energy",
    description: "See what one appliance could cost to run across active days using its wattage and your electricity price.",
    icon: "plug",
  },
  {
    slug: "paint-quantity",
    href: "/calculators/paint-quantity",
    name: "Paint Quantity Calculator",
    category: "Renovation",
    description: "Turn room dimensions, openings, coats, coverage, and waste into an estimated paint quantity.",
    icon: "paint",
  },
  {
    slug: "flooring-tile",
    href: "/calculators/flooring-tile",
    name: "Flooring and Tile Calculator",
    category: "Renovation",
    description: "Estimate adjusted floor area and the packs or tiles needed after your chosen waste allowance.",
    icon: "tile",
  },
  {
    slug: "furniture-fit",
    href: "/calculators/furniture-fit",
    name: "Furniture Fit Calculator",
    category: "Furniture & Decor",
    description: "Check a furniture footprint, requested clearance, and a preliminary delivery opening before you order.",
    icon: "furniture",
  },
  {
    slug: "rug-size",
    href: "/calculators/rug-size",
    name: "Rug Size Calculator",
    category: "Furniture & Decor",
    description: "Estimate minimum rug dimensions around a sofa, dining table, or bed and compare them with the room.",
    icon: "rug",
  },
  {
    slug: "curtain-measurement",
    href: "/calculators/curtain-measurement",
    name: "Curtain Measurement Calculator",
    category: "Furniture & Decor",
    description: "Estimate rod width, combined fabric width, finished drop, and whole ready-made curtain panels.",
    icon: "curtain",
  },
] as const satisfies readonly CalculatorDefinition[];
