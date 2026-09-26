export type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
};

export const howItWorksSteps = [
  {
    number: "01",
    title: "Enter your local values",
    description: "Add the measurements, usage, and price that match your home or project.",
  },
  {
    number: "02",
    title: "Review the estimate",
    description: "See the result with its units, formula, and useful breakdown shown together.",
  },
  {
    number: "03",
    title: "Check the assumptions",
    description: "Read what the estimate includes, then use it as a planning guide—not a professional quote.",
  },
] as const satisfies readonly HowItWorksStep[];

export type TrustPoint = {
  title: string;
  description: string;
};

export const trustPoints = [
  {
    title: "Formulas you can inspect",
    description: "Every result shows its units, formula, assumptions, and rounding so you can understand how the estimate was produced.",
  },
  {
    title: "Sources with context",
    description: "Defaults identify their source, geography, and last-reviewed date. You can replace regional averages with your own local values.",
  },
  {
    title: "Local calculation with clear privacy limits",
    description: "No account is required. Arithmetic runs in your browser, but shareable URLs can contain inputs and third-party services may process the page address. Do not enter confidential information.",
  },
  {
    title: "Planning aid, not a quote",
    description: "Results support early planning; they are not professional advice, contractor quotes, or guaranteed savings.",
  },
] as const satisfies readonly TrustPoint[];

export const trustLinks = [
  { label: "Read our methodology", href: "/methodology" },
  { label: "Review our privacy approach", href: "/privacy" },
  { label: "See estimate limitations", href: "/disclaimer" },
] as const;

export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeFaqs = [
  {
    question: "How accurate are the estimates?",
    answer:
      "The formulas calculate consistently from the values you enter, but the usefulness of a result depends on accurate inputs and the stated assumptions. Treat every result as a planning estimate, not an exact prediction.",
  },
  {
    question: "Can I use prices from my area?",
    answer:
      "Yes. Energy prices and material coverage can vary by location, supplier, and product, so the calculators let you replace example defaults with values from your bill, tariff, label, or supplier.",
  },
  {
    question: "Which units and currencies do the tools use?",
    answer:
      "The energy calculators support USD, EUR, GBP, and INR labels, with USD starting values. Currency selection does not convert rates, so enter the per-kWh rate in the selected currency. Measurement tools label metric and imperial inputs where available.",
  },
  {
    question: "Are my calculator entries saved?",
    answer:
      "No account is required, and the calculator does not submit entries to a Watt & Wall application server. Shareable URLs can contain the visible inputs, the last electricity rate can remain in local storage, and analytics or advertising services may process the page address. Do not enter personal or confidential information.",
  },
  {
    question: "Where do the formulas and sources come from?",
    answer:
      "Each calculator explains its formula, units, assumptions, rounding, source, source geography, and last-reviewed date. The Methodology page explains how those details are selected and maintained.",
  },
  {
    question: "Can a result replace a professional estimate?",
    answer:
      "No. These tools support early planning and comparison. They do not replace a site inspection, product instructions, safety guidance, a contractor quote, or advice from a qualified professional.",
  },
] as const satisfies readonly HomeFaq[];
