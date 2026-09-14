export type CalculatorCategory = "Energy" | "Renovation" | "Furniture & Decor";

export type CalculatorIconName = "bolt" | "plug" | "paint" | "tile" | "furniture" | "rug" | "curtain";

export type CalculatorDefinition = {
  slug: string;
  href: `/calculators/${string}`;
  name: string;
  category: CalculatorCategory;
  description: string;
  directoryDescription: string;
  icon: CalculatorIconName;
};

export type CalculatorCategoryDefinition = {
  slug: string;
  name: CalculatorCategory;
  title: string;
  description: string;
  directoryDescription: string;
  icon: CalculatorIconName;
};

export const calculatorCategories = [
  {
    slug: "energy",
    name: "Energy",
    title: "Understand everyday energy costs",
    description: "Compare electricity use and running costs with the power, usage time, and local rate that apply to you.",
    directoryDescription: "Choose Electricity Cost for one load and one schedule. Use Appliance Running Cost when you need a wattage lookup, duty cycles, and a combined monthly total for several appliances.",
    icon: "bolt",
  },
  {
    slug: "renovation",
    name: "Renovation",
    title: "Plan renovation materials",
    description: "Estimate paint, flooring, and tile quantities from your measurements before you buy materials.",
    directoryDescription: "Use Paint Quantity for coated wall and ceiling area. Choose Flooring and Tile when material waste and rounding up to whole packs or tiles affect what you need to buy.",
    icon: "paint",
  },
  {
    slug: "furniture-decor",
    name: "Furniture & Decor",
    title: "Plan furniture and finishing details",
    description: "Check furniture fit, estimate a balanced rug size, and plan curtain rods and ready-made panels from your own measurements.",
    directoryDescription: "Select the tool that matches your decision: room and delivery-opening fit, rug clearance around furniture, or curtain rod, drop, fullness, and panel sizing.",
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
    directoryDescription: "Use one power value, one usage schedule, and your electricity rate to estimate daily, monthly, and annual energy use and cost.",
    icon: "bolt",
  },
  {
    slug: "appliance-running-cost",
    href: "/calculators/appliance-running-cost",
    name: "Appliance Running Cost Calculator",
    category: "Energy",
    description: "Compare several appliances with a wattage lookup, individual duty cycles, and a combined monthly cost table.",
    directoryDescription: "Build a list of appliances, choose or enter each wattage, apply individual duty cycles, and review their combined monthly cost.",
    icon: "plug",
  },
  {
    slug: "paint-quantity",
    href: "/calculators/paint-quantity",
    name: "Paint Quantity Calculator",
    category: "Renovation",
    description: "Turn room dimensions, openings, coats, coverage, and waste into an estimated paint quantity.",
    directoryDescription: "Calculate paint from wall and ceiling dimensions after subtracting openings, then account for coats, product coverage, and waste.",
    icon: "paint",
  },
  {
    slug: "flooring-tile",
    href: "/calculators/flooring-tile",
    name: "Flooring and Tile Calculator",
    category: "Renovation",
    description: "Estimate adjusted floor area and the packs or tiles needed after your chosen waste allowance.",
    directoryDescription: "Convert floor dimensions into adjusted area, include your waste allowance, and round the result up to whole packs or individual tiles.",
    icon: "tile",
  },
  {
    slug: "furniture-fit",
    href: "/calculators/furniture-fit",
    name: "Furniture Fit Calculator",
    category: "Furniture & Decor",
    description: "Check a furniture footprint, requested clearance, and a preliminary delivery opening before you order.",
    directoryDescription: "Compare a furniture footprint and requested clearance with the room, then make a preliminary check against the delivery opening.",
    icon: "furniture",
  },
  {
    slug: "rug-size",
    href: "/calculators/rug-size",
    name: "Rug Size Calculator",
    category: "Furniture & Decor",
    description: "Estimate minimum rug dimensions around a sofa, dining table, or bed and compare them with the room.",
    directoryDescription: "Use your furniture layout and dimensions to estimate a minimum rug size, then check whether that size fits inside the room.",
    icon: "rug",
  },
  {
    slug: "curtain-measurement",
    href: "/calculators/curtain-measurement",
    name: "Curtain Measurement Calculator",
    category: "Furniture & Decor",
    description: "Estimate rod width, combined fabric width, finished drop, and whole ready-made curtain panels.",
    directoryDescription: "Enter window and panel measurements with rod extension and fullness to estimate rod width, finished drop, and whole panel quantities.",
    icon: "curtain",
  },
] as const satisfies readonly CalculatorDefinition[];

export type CalculatorSlug = (typeof calculators)[number]["slug"];
