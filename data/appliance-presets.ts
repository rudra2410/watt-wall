// Values transcribed from the utility's estimated-average-watts table, retrieved
// 2026-09-07. These are rough references, not model specifications or on-cycle ratings.
export const appliancePresetSource = {
  title: "Willmar Municipal Utilities: appliance usage guide",
  url: "https://wmu.willmar.mn.us/energy-programs/energy-calculator/",
  reviewed: "September 7, 2026",
};

export const appliancePresets = [
  { id: "portable-ac", name: "Portable air conditioner", watts: 1500 },
  { id: "dryer", name: "Electric clothes dryer", watts: 4000 },
  { id: "coffee", name: "Coffee maker", watts: 1400 },
  { id: "dishwasher", name: "Dishwasher", watts: 2400 },
  { id: "dehumidifier", name: "Dehumidifier", watts: 280 },
  { id: "desktop", name: "Desktop computer", watts: 450 },
  { id: "blanket", name: "Electric blanket", watts: 200 },
  { id: "oven", name: "Electric oven", watts: 2100 },
  { id: "ceiling-fan", name: "Ceiling fan", watts: 75 },
  { id: "box-fan", name: "Box fan (20 inch)", watts: 200 },
  { id: "fridge", name: "Refrigerator/freezer", watts: 400 },
  { id: "blower", name: "Gas furnace blower", watts: 750 },
  { id: "console", name: "Game console", watts: 200 },
  { id: "heater", name: "Space heater", watts: 1500 },
  { id: "incandescent", name: "Incandescent lamp (75 W)", watts: 75 },
  { id: "cfl", name: "CFL lamp (15 W)", watts: 15 },
  { id: "led", name: "LED lamp (11 W)", watts: 11 },
  { id: "laptop", name: "Laptop", watts: 100 },
  { id: "microwave", name: "Microwave input power", watts: 1700 },
  { id: "phone", name: "Phone charger", watts: 7 },
  { id: "modem", name: "Modem", watts: 5 },
  { id: "pool", name: "Pool pump", watts: 1100 },
  { id: "hood", name: "Range hood", watts: 140 },
  { id: "tv", name: "LCD television (20 inch)", watts: 75 },
  { id: "toaster", name: "Toaster", watts: 1800 },
  { id: "vacuum", name: "Vacuum cleaner", watts: 700 },
  { id: "washer", name: "Clothes washer", watts: 500 },
  { id: "water-heater", name: "Electric water heater (80 gallon)", watts: 4500 },
] as const;
