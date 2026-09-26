# External source-link check — 26 September 2026

Scope: 35 distinct literal external hrefs in route TSX files, plus the PG&E reference supplied through shared data. This is a reachability inventory, not proof that every sentence is supported by its citation. A 200 response can still be an error or access page. Source-specific content checks are recorded in the main audit.

Raw GET requests returned 200 for 33 links and 403 for two. The Willmar and Lowe's pages were subsequently readable through web retrieval, so the 403 results are recorded as automated-access restrictions rather than dead links. PG&E's shared-data reference was also retrieved through the web tool.

| Source URL | Evidence |
|---|---|
| [bpi.org](https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf) | Raw GET 200 |
| [consumer.ftc.gov](https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances) | Raw GET 200 |
| [ltx-www.sherwin-williams.com](https://ltx-www.sherwin-williams.com/en-us/color/color-tools/paint-calculator) | Raw GET 200 |
| [media.benjaminmoore.com](https://media.benjaminmoore.com/WebServices/prod/ColorCards2012/transformyourhome/offline/download.pdf) | Raw GET 200 |
| [pdf.lowes.com](https://pdf.lowes.com/productdocuments/3f70b1c9-8ab7-4125-a2e7-9a3d080d2861/08130541.pdf) | Raw GET 200 |
| [pdf.lowes.com](https://pdf.lowes.com/project-planner.pdf) | Raw GET 200 |
| [policies.google.com](https://policies.google.com/technologies/partner-sites) | Raw GET 200 |
| [s7d9.scene7.com](https://s7d9.scene7.com/is/content/behr/5558_tds_uspdf) | Raw GET 200 |
| [support.google.com](https://support.google.com/adsense/answer/13554116) | Raw GET 200 |
| [support.google.com](https://support.google.com/adsense/answer/7549925) | Raw GET 200 |
| [support.google.com](https://support.google.com/analytics/answer/7318509) | Raw GET 200 |
| [tools.google.com](https://tools.google.com/dlpage/gaoptout) | Raw GET 200 |
| [wmu.willmar.mn.us](https://wmu.willmar.mn.us/energy-programs/energy-calculator/) | Raw GET 403; content available through web retrieval |
| [www.cpsc.gov](https://www.cpsc.gov/node/66106) | Raw GET 200 |
| [www.daltile.com](https://www.daltile.com/how-to/faqs) | Raw GET 200 |
| [www.eia.gov](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=table_5_06_a) | Raw GET 200 |
| [www.eia.gov](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php) | Raw GET 200 |
| [www.eia.gov](https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php) | Raw GET 200 |
| [www.energy.gov](https://www.energy.gov/cmei/femp/home-energy-checklist) | Raw GET 200 |
| [www.energy.gov](https://www.energy.gov/sites/default/files/2021-08/ES-Home%20Energy%20Assessments_080221.pdf) | Raw GET 200 |
| [www.energystar.gov](https://www.energystar.gov/products/dehumidifier_testing_and_capacity) | Raw GET 200 |
| [www.energystar.gov](https://www.energystar.gov/products/dehumidifiers/key_efficiency_criteria) | Raw GET 200 |
| [www.energystar.gov](https://www.energystar.gov/products/refrigerators) | Raw GET 200 |
| [www.frigidaire.ca](https://www.frigidaire.ca/Owner-Centre/Product-Support/fhww083wbe) | Raw GET 200 |
| [www.ikea.com](https://www.ikea.com/ca/en/product-guides/how-to-choose-the-right-rug-size-pub2e7f9fb0/) | Raw GET 200 |
| [www.ikea.com](https://www.ikea.com/ca/en/rooms/dining/how-to/how-to-choose-a-rug-for-your-dining-table-pub69273980/) | Raw GET 200 |
| [www.ikea.com](https://www.ikea.com/in/en/files/pdf/ac/c1/acc1f97f/ikea-measurement-guide.pdf) | Raw GET 200 |
| [www.ikea.com](https://www.ikea.com/us/en/customer-service/terms-conditions/delivery-terms-and-conditions-pub7aa7b291/) | Raw GET 200 |
| [www.ikea.com](https://www.ikea.com/us/en/files/pdf/45/80/4580665c/betydlig_racka_hugad_oct_2022.pdf) | Raw GET 200 |
| [www.ikea.com](https://www.ikea.com/us/en/files/pdf/c9/ee/c9ee9195/betydlig_racka_hugad_apr2025.pdf) | Raw GET 200 |
| [www.lowes.com](https://www.lowes.com/n/how-to/install-luxury-vinyl-tile-flooring) | Raw GET 403; content available through web retrieval |
| [www.lowes.com](https://www.lowes.com/pdf/project-planner.pdf) | Raw GET 200 |
| [www.nist.gov](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9) | Raw GET 200 |
| [www.sherwin-williams.com](https://www.sherwin-williams.com/en-us/color/color-tools/paint-calculator) | Raw GET 200 |
| [www.sherwin-williams.com](https://www.sherwin-williams.com/en-us/project-center/faqs/paint-faq) | Raw GET 200 |
| [PG&E rate explanation](https://www.pge.com/en/account/rate-plans/how-rates-work.html) | Content retrieved through web tool |

Additional checks: Frigidaire FHWW083WBE still lists 670 W cooling input and identifies the model as discontinued. The guide now makes that status explicit. IKEA curtain instructions were checked separately and the incorrect source attribution was corrected in the deployed site.

Performance measurement limit: the PageSpeed Insights API returned HTTP 429 (daily quota exceeded). No new Lighthouse score is claimed from that attempt.
