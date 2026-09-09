// Retrieved 2026-09-07. EIA table 5.6.A: US total, residential, June 2026.
export const electricityRateReference = {
  rate: 0.1834,
  month: "June 2026",
  url: "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=table_5_06_a",
  reviewed: "2026-09-07",
} as const;

export const energySources = {
  eiaUnits: "https://www.eia.gov/energyexplained/electricity/measuring-electricity.php",
  eiaPrices: "https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php",
  ftc: "https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances",
  rates: "https://www.pge.com/en/account/rate-plans/how-rates-work.html",
  // DOE's original URL returned 404. BPI hosts this identifiable copy of the DOE guidance.
  measurement: "https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf",
} as const;
