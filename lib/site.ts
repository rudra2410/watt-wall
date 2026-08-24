export const siteConfig = {
  name: "Watt & Wall",
  domain: "wattandwall.com",
  url: "https://wattandwall.com",
  description:
    "Practical home energy and renovation calculators with transparent formulas and clear assumptions.",
  footerDescription:
    "Calculators for home energy and renovation planning. Enter your own rates and measurements, and see the formula behind every estimate.",
  contactEmail: "wattandwall@gmail.com",
  contactPhone: "+1 (555) 014-0199",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
] as const;
