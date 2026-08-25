export const siteConfig = {
  name: "Watt & Wall",
  domain: "wattandwall.com",
  url: "https://wattandwall.com",
  description:
    "Practical home energy and renovation calculators with transparent formulas and clear assumptions.",
  footerDescription:
    "Plan smarter with Watt & Wall—practical calculators that turn energy costs and renovation measurements into clear, transparent estimates you can understand and use with confidence.",
  contactEmail: "wattandwall@gmail.com",
  contactPhone: "+1 (555) 014-0199",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Guides", href: "/guides" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const guideNavigation = [
  { label: "Electricity costs", href: "/guides/electricity-costs", description: "Understand watts, kilowatt-hours, usage schedules, and local rates." },
  { label: "Appliance energy use", href: "/guides/appliance-energy-use", description: "Turn appliance ratings and realistic schedules into a useful estimate." },
  { label: "Paint and flooring", href: "/guides/paint-and-flooring-measurements", description: "Measure rooms, openings, coverage, and material waste with confidence." },
  { label: "Home energy audit", href: "/guides/home-energy-audit", description: "Spot common energy questions and decide when an assessment can help." },
  { label: "EnergyGuide labels", href: "/guides/energyguide-labels", description: "Compare appliance energy information without confusing estimates for bills." },
] as const;

export const footerNavigation = [
  {
    label: "Trust",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Methodology", href: "/methodology" },
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
  {
    label: "Guides",
    links: guideNavigation,
  },
] as const;
