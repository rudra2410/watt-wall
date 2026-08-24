export const siteConfig = {
  name: "Watt & Wall",
  domain: "wattandwall.com",
  url: "https://wattandwall.com",
  description:
    "Practical home energy and renovation calculators with transparent formulas and clear assumptions.",
} as const;

export const primaryNavigation = [
  { label: "Calculators", href: "/calculators" },
  { label: "Methodology", href: "/methodology" },
  { label: "About", href: "/about" },
] as const;

export const footerNavigation = [
  {
    label: "Trust",
    links: [
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
