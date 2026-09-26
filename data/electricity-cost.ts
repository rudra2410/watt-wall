import { calculateElectricityCost, type ElectricityCostInput } from "@/lib/calculators/electricity-cost";

export const electricityCostDefaults = {
  power: 1_500,
  powerUnit: "W",
  hoursPerActiveDay: 3,
  activeDaysPerMonth: 30,
  pricePerKilowattHour: 0.16,
} as const satisfies ElectricityCostInput;

export const electricityCostExample = calculateElectricityCost(electricityCostDefaults);

export const electricityCostAssumptions = [
  "Known-energy mode uses the kWh total exactly as entered and does not infer its billing period or source.",
  "The entered power stays constant during every active hour.",
  "Each month uses the number of active days you enter; the annual estimate repeats that monthly schedule 12 times.",
  "The starting rate is shown as a local-currency example per kWh. Replace it with the applicable variable price per kWh from your own bill or tariff. Fixed monthly fees, demand charges, taxes, tiers, and time-of-use changes are not included.",
  "Standby use, cycling loads, startup surges, and efficiency losses are not added unless they are already reflected in the power value you enter.",
] as const;

export const electricityCostFaqs = [
  {
    question: "How do I calculate cost from a known kWh total?",
    answer: "Choose Known energy use, enter the kWh total from your bill, meter, or product estimate, and enter the applicable price per kWh. The calculator multiplies those two values. Fixed fees and tariff adjustments remain outside the result.",
  },
  {
    question: "Where can I find the wattage?",
    answer: "Check the product label, nameplate, manual, manufacturer website, or a plug-in electricity meter. If an appliance cycles on and off, a measured average power value will usually represent real use better than its maximum rating.",
  },
  {
    question: "Which electricity price should I enter?",
    answer: "Use the per-kWh price from your own bill or tariff when possible. Electricity prices vary by utility, location, customer type, and sometimes time of day, so a national or state average may not match your bill.",
  },
  {
    question: "Why can this estimate differ from my bill?",
    answer: "Your bill may include fixed service fees, taxes, tiered or time-of-use prices, demand charges, and energy used by other devices. The calculator covers only the power, schedule, and per-kWh price entered here.",
  },
  {
    question: "Does Watt & Wall save these values?",
    answer: "The arithmetic runs in your browser and is not submitted to a Watt & Wall application server. Inputs appear in the page URL so the estimate can be bookmarked or shared, and the last electricity rate is saved in local storage. Anyone with the URL can read its values, and analytics or advertising services may process the page address. Do not enter confidential information.",
  },
] as const;
