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
  "The entered power stays constant during every active hour.",
  "Each month uses the number of active days you enter; the annual estimate repeats that monthly schedule 12 times.",
  "The starting rate is shown as a local-currency example per kWh. Replace it with the all-in rate from your own bill or tariff; fixed fees, demand charges, taxes, tiers, and time-of-use changes are not included.",
  "Standby use, cycling loads, startup surges, and efficiency losses are not added unless they are already reflected in the power value you enter.",
] as const;

export const electricityCostFaqs = [
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
    answer: "No. The calculator runs in your browser and does not upload or store these entries. Copying a result writes only the displayed summary to your clipboard after you select the Copy result button.",
  },
] as const;
