export const siteConfig = {
  name: "Watt & Wall",
  domain: "wattandwall.com",
  url: "https://wattandwall.com",
  description:
    "Independent home energy, renovation, furniture, and decoration planning calculators with transparent formulas, local inputs, and clear assumptions.",
  footerDescription:
    "Plan smarter with Watt & Wall—practical calculators that turn energy costs and renovation measurements into clear, transparent estimates you can understand and use with confidence.",
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
  { label: "Room and furniture measuring", href: "/guides/measuring-rooms-and-furniture", description: "Measure rooms, furniture, obstacles, and delivery openings before ordering." },
  { label: "Choosing a rug size", href: "/guides/choosing-rug-size", description: "Size a rug around living, dining, or bedroom furniture and available floor space." },
  { label: "Measuring curtains", href: "/guides/measuring-curtains", description: "Plan rod width, fullness, finished drop, and ready-made panel quantities." },
] as const;

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
  {
    label: "Guides",
    links: guideNavigation,
  },
] as const;
