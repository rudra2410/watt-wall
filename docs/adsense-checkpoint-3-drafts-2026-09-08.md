# Checkpoint 3: first two new guide drafts

Approval: the user agreed to continue and requested a careful review on September 8, 2026. The two approved drafts have been integrated as static guide routes. The historical review notes below describe the checkpoint state before that approval.

These are review drafts, not published routes. No remaining new guides have been written. The five starter SVG deletions approved at checkpoint 2 are complete.

## Drafts

| Draft | Markdown whitespace word count | Distinct purpose |
| --- | ---: | --- |
| drafts/fridge-energyguide-cost.md | 948 | Separate rate-driven cost differences from consumption differences before interpreting a refrigerator label mismatch. |
| drafts/vaulted-ceiling-paint.md | 988 | Calculate actual ceiling slopes and gable wall shapes, then keep different paint products and rounding separate. |

Counts include headings and table text. Both drafts have a numerical opening within 40 words, a formula, worked example, table, explicit assumptions, retrieved source links, calculator link and two or three related guide links. The paint guide states that electricity rates do not apply to this material estimate.

## Google validation evidence

Observed September 8, 2026 using the in-app browser, signed out. Google displayed India/Surat localization; these are not claimed to be US-localized rankings or search-volume measurements. Exact queries were entered without quotation marks. AI Overviews were allowed to finish before evaluating their answers. No AI Overview is used as a factual source for a draft.

| Exact query | Observed answer and first-page results | Decision |
| --- | --- | --- |
| How much does it cost to run a space heater per month | AI Overview supplied monthly costs by daily hours, rate and formula. Organic results included Crompton, Reddit, Bajaj Finserv, EnergyUseCalculator, Inspire, Quora, YouTube, Jackery and Peace Power. | Reject: fully answered. |
| How much paint for a room with vaulted ceilings | AI Overview applied average low/peak height to the entire perimeter and suggested footprint multipliers of 1.25 or 1.3 for the ceiling. Organic results included Asian Paints, AapkaPainter, Dulux, Resene, HandyPanda, CalcShed, Lifetime Custom Painting and NoBroker. | Accept with a specific geometry focus: the generic answer does not accurately calculate the distinct wall shapes and actual ceiling slopes. The draft demonstrates the difference numerically. |
| How much extra tile to buy for waste and cuts | AI Overview supplied allowances by layout, whole-box rounding and repair spares. Organic results included UltraTech, Best Tile, Refin, Orientbell, Stone Superstore, Kajaria and Central Valley Flooring. | Reject: fully answered. |
| How to calculate paint separately for gable walls and sloped ceiling | AI Overview supplied rectangle-plus-triangle areas and slope length times room length, then coats and coverage. Results included Asian Paints, AapkaPainter, CivilSite, Jazeera Paints, Turn2engineering, NoBroker, Nippon and Calculator Soup. | Reject this alternate exact query: fully answered. It is not represented as a passing search opportunity. |
| Why a fridge costs more to run than its EnergyGuide label suggests | AI Overview discussed laboratory conditions, ambient temperature, door opening and wear, but omitted the label's electricity-price assumption and a numerical price-versus-consumption reconciliation. Organic results included DIY Solar Power Forum, Coolblue, Reliance Digital, Saving Energy South Africa, Consumer NZ, Blogger, FTC and Endesa. | Accept with a rate-versus-consumption reconciliation focus: answer incomplete for this cost question. |

The five excluded calculator publishers in the objective were absent from the observed organic first-page listings for the two accepted queries. Calculator Soup and CalcShed are different publishers and are reported by name rather than conflated with the excluded list. The accepted topics still have AI Overviews; the decision is based on their specific incomplete coverage, not on claiming the overviews are absent. Rankings can vary by location and time.

Other starting candidates remain unvalidated and unwritten. They will be evaluated after checkpoint 3 approval, before any draft is created.

Checkpoint 3 is now approved. Six further topics were validated using the approved added-value rule and integrated as static routes on September 9, 2026: space-heater monthly cost, dehumidifier IEF, electric water-heater use, window AC cost, standby-device cost and tile waste/repair stock. Their Google evidence and source notes are in the phase-3 research ledger.

## Retrieved source ledger

| Retrieved URL | Supported facts |
| --- | --- |
| https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=table_5_06_a | June 2026 US residential average 18.34 cents/kWh; released August 26, 2026. Retrieved again September 8. |
| https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances | Label costs are estimates based on typical use and national energy prices; actual use and local rates differ. Retrieved September 8. |
| https://www.energystar.gov/products/refrigerators | Guidance on heat sources, air circulation and door seals. No generic age-related percentage or savings claim copied. Retrieved September 8. |
| https://s7d9.scene7.com/is/content/behr/5558_tds_uspdf | BEHR ULTRA Interior Ceiling Paint, March 2026 technical sheet: 250–400 sq ft/US gallon depending on application and porosity; excludes spray loss. Retrieved September 8. |

The BEHR origin product URL found in search returned 404 when opened. It is not cited; the successfully retrieved technical PDF is cited instead. Daltile's FAQ was also retrieved during rejected tile-topic research, but is not cited in either draft: https://www.daltile.com/how-to/faqs. Its approximately 10% discussion specifically concerns attic stock, so it must not be reused as a universal cutting-waste claim.

## Numerical provenance and checks

External factual values are distinguished from chosen scenario inputs. Neither draft claims an actual household measurement, a specific refrigerator test or a typical room size.

- Refrigerator: 400/500/600/700 kWh are chosen comparison scenarios; $0.12 is an explicitly hypothetical label rate. 500 x 0.1834 = $91.70; 500 x 0.12 = $60; difference $31.70. An additional 100 kWh costs $18.34 at the same benchmark.
- Hypothetical monitoring example: 10 kWh / 7 days x 365 days x 0.1834 = $95.63. Calculations retain unrounded intermediate values.
- Paint: 12 x 16 ft footprint, centered ridge, 4 ft rise, 8 ft side wall, 40 sq ft openings and two coats are chosen geometry/application assumptions. The 10% allowance is expressly an illustration, not a source recommendation.
- Ceiling: 32 x sqrt(6 squared + 4 squared) = 230.7552816 sq ft. Two coats / 250 = 1.8460423 gallons; multiplying by 1.10 = 2.0306465 gallons.
- Rise-table calculations were checked by Node using Math.hypot: 192.00/202.39/230.76/271.53 sq ft and 1.54/1.62/1.85/2.17 gallons.
- Walls: 2 x (12 + 16) x 8 + 2 x (12 x 4 / 2) = 496 sq ft; less chosen 40 sq ft openings = 456 sq ft.
- Existing calculator source was inspected so the paint draft does not claim it supports sloped ceilings or measured opening-area inputs.

No application code changed for these drafts. Build and lint results remain the phase-2 results; no new browser or Lighthouse pass is claimed. After approval, the drafts need route integration, metadata, navigation, sitemap entries and rendered verification along with the remaining phase work.
