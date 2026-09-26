// Rechecked 2026-09-26 through EIA API v2: US total, residential, June 2026.
export const electricityRateReference = {
  rate: 0.1834,
  month: "June 2026",
  url: "https://api.eia.gov/v2/electricity/retail-sales/data/?api_key=DEMO_KEY&frequency=monthly&data[0]=price&facets[sectorid][]=RES&facets[stateid][]=US&facets[stateid][]=TX&facets[stateid][]=NY&start=2026-06&end=2026-06",
  reviewed: "2026-09-26",
} as const;

export const energySources = {
  eiaUnits: "https://www.eia.gov/energyexplained/electricity/measuring-electricity.php",
  eiaPrices: "https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php",
  ftc: "https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances",
  rates: "https://www.pge.com/en/account/rate-plans/how-rates-work.html",
  // DOE's original URL returned 404. BPI hosts this identifiable copy of the DOE guidance.
  measurement: "https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf",
} as const;
