export const siteConfig = {
  name: "Watt & Wall",
  domain: "wattandwall.com",
  url: "https://wattandwall.com",
  description:
    "Independent home energy, renovation, furniture, and decoration planning calculators with transparent formulas, local inputs, and clear assumptions.",
  footerDescription:
    "Free calculators and guides for home energy costs, renovation materials, furniture fit, rugs, and curtains. Each tool explains its formula, assumptions, and sources.",
  contactEmail: "wattandwall@gmail.com",
} as const;

/*
 * Google AdSense identifies the publisher three ways, and all three must agree:
 * the `google-adsense-account` meta tag, the `client` parameter on the loader
 * script, and the `pub-` id in /ads.txt. Keep the id here so the tag and the
 * script stay in sync; public/ads.txt is a static file and is covered by a test.
 */
export const adsenseConfig = {
  publisherId: "ca-pub-1759137058910390",
} as const;

export const adsenseScriptSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.publisherId}`;

export const analyticsConfig = {
  measurementId: "G-79MBBEXME0",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Guides", href: "/guides" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type GuideCategory = "Energy" | "Renovation" | "Furniture & Decor";

export type GuideDefinition = {
  label: string;
  href: `/guides/${string}`;
  category: GuideCategory;
  description: string;
  directoryDescription: string;
};

export type GuideCategoryDefinition = {
  slug: string;
  name: GuideCategory;
  title: string;
  description: string;
};

export const guideCategories = [
  {
    slug: "energy",
    name: "Energy",
    title: "Understand energy use and running costs",
    description: "Choose a guide for the bill, appliance, label, or usage question you are trying to answer. Each one separates measured values from planning assumptions.",
  },
  {
    slug: "renovation",
    name: "Renovation",
    title: "Measure paint, flooring, and tile projects",
    description: "Start with the surface you need to cover, then account for openings, product coverage, cutting waste, and whole-package rounding where they apply.",
  },
  {
    slug: "furniture-decor",
    name: "Furniture & Decor",
    title: "Plan rooms, rugs, and curtains",
    description: "Use the guide that matches your next decision, from checking a delivery path to sizing a rug or turning window measurements into curtain quantities.",
  },
] as const satisfies readonly GuideCategoryDefinition[];

export const guideNavigation = [
  { label: "Space heater monthly cost", href: "/guides/space-heater-monthly-cost", category: "Energy", description: "Estimate heater cost from wattage, schedule and thermostat duty cycle.", directoryDescription: "Calculate monthly space-heater cost from rated watts, active days, daily runtime, duty cycle, and your local electricity rate." },
  { label: "Dehumidifier IEF and cost", href: "/guides/dehumidifier-ief-cost", category: "Energy", description: "Understand why an efficiency rating does not replace measured runtime and local rates.", directoryDescription: "Relate the IEF label to water removal, then use measured energy, runtime, and your local rate for a practical cost estimate." },
  { label: "Electric water heater use", href: "/guides/electric-water-heater-use", category: "Energy", description: "Separate element runtime, standby heat loss and measured household consumption.", directoryDescription: "Separate element rating from actual runtime and standby heat loss before estimating water-heating electricity use and cost." },
  { label: "Window AC running cost", href: "/guides/window-ac-cost", category: "Energy", description: "Use model rated input and compressor cycling to estimate a window unit's cost.", directoryDescription: "Estimate a window air conditioner's cost from rated input, compressor cycling, schedule, and your local electricity price." },
  { label: "Standby device cost", href: "/guides/standby-device-cost", category: "Energy", description: "Measure continuous loads and calculate annual standby electricity cost.", directoryDescription: "Measure an always-on device in watts and turn that continuous load into monthly and annual electricity cost." },
  { label: "Tile waste and spare boxes", href: "/guides/tile-waste-boxes", category: "Renovation", description: "Keep cutting allowance, repair stock and box rounding separate.", directoryDescription: "Calculate base area, cutting waste, box rounding, and separately planned spare stock before ordering tile." },
  { label: "Fridge cost versus EnergyGuide", href: "/guides/fridge-energyguide-cost", category: "Energy", description: "Separate electricity-price differences from consumption changes in a refrigerator estimate.", directoryDescription: "Compare a multi-day refrigerator energy observation with the model's annual EnergyGuide kWh on the same time and price basis." },
  { label: "Vaulted ceiling paint", href: "/guides/vaulted-ceiling-paint", category: "Renovation", description: "Measure ceiling slopes and gable walls separately before calculating paint quantities.", directoryDescription: "Measure sloped ceiling surfaces and triangular gable walls before applying coats, product coverage, and a waste allowance." },
  { label: "Electricity costs", href: "/guides/electricity-costs", category: "Energy", description: "Read your tariff, separate fixed fees, and handle time-of-use or tiered prices.", directoryDescription: "Find a usable electricity rate on your bill and account for fixed, tiered, or time-of-use charges before estimating cost." },
  { label: "Appliance energy use", href: "/guides/appliance-energy-use", category: "Energy", description: "Choose between rated watts, meter readings and annual labels without counting duty cycle twice.", directoryDescription: "Choose between label watts, a plug-in meter, and annual energy labels without applying appliance duty cycle twice." },
  { label: "Paint and flooring", href: "/guides/paint-and-flooring-measurements", category: "Renovation", description: "Measure rooms, openings, coverage, and material waste with confidence.", directoryDescription: "Follow a room-by-room measurement checklist for openings, product coverage, material waste, and manufacturer instructions." },
  { label: "Home energy audit", href: "/guides/home-energy-audit", category: "Energy", description: "Spot common energy questions and decide when an assessment can help.", directoryDescription: "Use a room-by-room checklist to identify energy questions and decide when a professional home assessment may help." },
  { label: "EnergyGuide labels", href: "/guides/energyguide-labels", category: "Energy", description: "Compare appliance energy information without confusing estimates for bills.", directoryDescription: "Read estimated annual use and cost on the yellow label, then compare similar models under the label's assumptions." },
  { label: "Room and furniture measuring", href: "/guides/measuring-rooms-and-furniture", category: "Furniture & Decor", description: "Measure rooms, furniture, obstacles, and delivery openings before ordering.", directoryDescription: "Map room dimensions, obstacles, and the full delivery path before comparing them with the furniture you plan to order." },
  { label: "Choosing a rug size", href: "/guides/choosing-rug-size", category: "Furniture & Decor", description: "Size a rug around living, dining, or bedroom furniture and available floor space.", directoryDescription: "Choose rug coverage from the furniture arrangement, then verify clear floor borders and fit inside the room." },
  { label: "Measuring curtains", href: "/guides/measuring-curtains", category: "Furniture & Decor", description: "Plan rod width, fullness, finished drop, and ready-made panel quantities.", directoryDescription: "Plan rod width, fullness, finished drop, and whole ready-made panel quantities from your window measurements." },
] as const satisfies readonly GuideDefinition[];

export const footerNavigation = [
  {
    label: "Trust",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Methodology", href: "/methodology" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
