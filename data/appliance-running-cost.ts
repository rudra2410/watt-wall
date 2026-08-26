import { calculateApplianceRunningCost, type ApplianceRunningCostInput } from "@/lib/calculators/appliance-running-cost";

export const applianceRunningCostDefaults = {
  wattage: 800,
  hoursPerActiveDay: 1.5,
  activeDaysPerMonth: 20,
  pricePerKilowattHour: 0.175,
} as const satisfies ApplianceRunningCostInput;

export const applianceRunningCostExample = calculateApplianceRunningCost(applianceRunningCostDefaults);

export const applianceRunningCostAssumptions = [
  "The appliance draws the entered wattage during every active hour.",
  "The entered active-day schedule repeats each month, and the annual estimate repeats that monthly schedule 12 times.",
  "The starting rate is a local-currency example per kWh and excludes separate fixed fees, demand charges, taxes, tiers, and time-of-use changes. Replace it with your own all-in rate.",
  "Standby, sleep, startup, and cycling energy are excluded unless the wattage you enter already represents an average that includes them.",
] as const;

export const applianceRunningCostFaqs = [
  {
    question: "Where can I find an appliance's wattage?",
    answer: "Check its nameplate, product label, manual, manufacturer website, or EnergyGuide information. A plug-in electricity meter can provide a measured value for compatible appliances.",
  },
  {
    question: "Should I use maximum wattage or measured wattage?",
    answer: "Use a measured average when an appliance changes power during normal operation. A nameplate value can represent a rated or maximum load and may overstate typical use for cycling equipment.",
  },
  {
    question: "Does this include standby or sleep power?",
    answer: "Not automatically. The calculation covers the active wattage and schedule you enter. Add standby use separately or use an average measured wattage that already reflects the operating pattern you want to estimate.",
  },
  {
    question: "Why might my utility bill show a different cost?",
    answer: "Your bill combines every load in the property and may include fixed fees, taxes, tiers, demand charges, or time-varying prices. Appliance cycling and seasonal use can also make actual consumption differ.",
  },
] as const;
