import { calculateApplianceRunningCost, type ApplianceRunningCostInput } from "@/lib/calculators/appliance-running-cost";
import { electricityRateReference } from "./energy-reference";

export const applianceRunningCostDefaults = {
  wattage: 1500,
  hoursPerActiveDay: 3,
  activeDaysPerMonth: 30,
  dutyCyclePercent: 100,
  pricePerKilowattHour: electricityRateReference.rate,
} as const satisfies ApplianceRunningCostInput;

export const applianceRunningCostExample = calculateApplianceRunningCost(applianceRunningCostDefaults);
export const applianceRunningCostAssumptions = [
  "Each row uses one power value and one monthly schedule. Duty cycle scales that scheduled time.",
  "Presets are the source utility's rough average-wattage references. They are not product specifications, measured household averages, or verified on-cycle power. They start at 100% duty.",
  "For measured average watts, leave duty at 100%. For measured on-cycle watts, set duty to the share of scheduled time that the load runs. Do not reduce both hours and duty for the same off time.",
  "All appliances share the entered rate and currency. The starting USD rate is an EIA national reference; use your tariff's applicable variable charges for a closer estimate.",
  "Annual cost repeats the entered month 12 times. Fixed charges, separate tax calculations, and unlisted loads are excluded.",
];
export const applianceRunningCostFaqs = [
  { question: "How accurate is the wattage lookup?", answer: "It offers 28 rough references from Willmar Municipal Utilities, not ratings for your model. Check a product's electrical input specification or a compatible energy meter. Size, age and operating mode can change the power substantially." },
  { question: "What duty cycle should I use for a refrigerator?", answer: "There is no universal percentage. Keep 100% when using an average reading or the lookup. If you have measured on-cycle power and observed running time, use running time divided by scheduled time, multiplied by 100. A meter's total kWh can be a better input basis for equipment with several operating modes." },
  { question: "Can I enter annual kWh from EnergyGuide?", answer: "This form accepts watts and a schedule. Do not paste annual kWh into the wattage field. Multiply label kWh/year by your rate to reprice the label, or follow the appliance energy guide for converting an energy reading to average watts." },
  { question: "Does the total include standby power?", answer: "Only if it is already in an average reading, or you add a separate standby row for the remaining hours. Do not count the same hours and energy twice. A duty-cycle row assumes no additional off-cycle consumption." },
];
