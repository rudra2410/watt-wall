# Phase 2 source ledger

Research retrieved on September 7, 2026. Implementation verified separately on September 8, 2026. These are retrieved sources, not claims of owner expertise.

| Source | Retrieved URL | Used for |
| --- | --- | --- |
| EIA Electric Power Monthly, table 5.6.A | https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=table_5_06_a | June 2026 residential prices: US 18.34, Texas 15.94, New York 29.49 cents/kWh. Release date August 26, 2026. |
| Willmar Municipal Utilities, appliance usage guide | https://wmu.willmar.mn.us/energy-programs/energy-calculator/ | All 28 preset wattages. Source labels the table estimated average watts; it does not establish model-specific or on-cycle ratings. Presets default to 100% duty. |
| EIA, measuring electricity | https://www.eia.gov/energyexplained/electricity/measuring-electricity.php | W, kW and kWh relationships. |
| EIA, electricity prices | https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php | Regional, seasonal and time-based variation. |
| PG&E, how rates work | https://www.pge.com/en/account/rate-plans/how-rates-work.html | Example of a utility explaining variable, minimum-bill and time-based charges. No PG&E dollar rate was copied into the worked calculations. |
| FTC, EnergyGuide consumer guidance | https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances | Label comparison and why actual local cost can differ. |
| DOE appliance-estimation guidance, PDF copy hosted by BPI | https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf | Nameplate limits, energy monitoring and consumption calculations. The article clearly identifies the PDF host and does not use the document's older price examples. |

The original DOE URL https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use returned 404 during research. It is not cited in the rewritten pages. Other unmodified pages may still contain older source links; their full link audit remains part of the later verification phase.

## Calculation provenance

- Rate conversion: 18.34 cents / 100 = USD 0.1834 per kWh.
- Inventory worked example: utility reference heater 1,500 W x chosen 3 hours/day x chosen 30 days / 1,000 = 135 kWh. Laptop 100 W x chosen 8 hours/day x chosen 30 days / 1,000 = 24 kWh. Total 159 kWh x 0.1834 = USD 29.1606, displayed USD 29.16.
- Tariff guide: a clearly chosen 100 kWh comparison quantity multiplied by each retrieved EIA benchmark. No bill or household statistic is invented.
- Measurement guide: explicitly hypothetical 3 kWh over 72 hours = 1 kWh/day. Chosen 30-day extrapolation = 30 kWh x 0.1834 = USD 5.502, displayed USD 5.50. Average watts = 3,000 / 72 = 41.666666... W. These readings are not represented as a measured product test.
- Half-time operation corresponds mathematically to 50% duty. The content makes no universal refrigerator duty-cycle claim.

All listed arithmetic is reproducible from the stated inputs. Scenario durations and quantities are assumptions for examples, not asserted population averages or manufacturer specifications.
