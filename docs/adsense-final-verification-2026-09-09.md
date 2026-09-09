# AdSense implementation verification — 2026-09-09

The approved checkpoint work is implemented in the Next 16.3.2 static-export app.

## Verification

- `pnpm run typecheck` — passed.
- `pnpm run lint` — passed.
- `pnpm run test` — passed: 9 files, 51 tests (including the analytics merge).
- `pnpm run build` — passed: 41 prerendered routes.
- `out/index.html`, `out/sitemap.xml`, `out/robots.txt`, `out/ads.txt`, and `out/404.html` are present.
- Sitemap contains 34 canonical page URLs, including the eight new guide routes.
- New guide exports contain canonical metadata plus `Article` JSON-LD with `datePublished` and `dateModified`.
- Calculators emit `WebApplication` JSON-LD; the site emits `Organization` and `WebSite` JSON-LD.
- All seven calculators restore and write their client-side inputs through URL parameters; energy calculators also remember the last-used electricity rate in `localStorage`.
- `git diff --check` reports no whitespace errors.
- PR #6 preview deployment is live at `https://watt-wall-m1k9zblq9-rudra2410s-projects.vercel.app`; the fridge guide rendered with its title, formula, table, sources and Article metadata. A calculator smoke test wrote URL parameters and returned the expected `$12.00/month` result for 1,000 W × 2 hours × 30 days at `$0.20/kWh`. The appliance inventory smoke test returned `$4.80/month` for a 400 W refrigerator at 50% duty plus a 100 W load, and the copy button placed the breakdown on the clipboard.

## Content and sources

Eight researched guides are integrated at `/guides/fridge-energyguide-cost`, `/guides/vaulted-ceiling-paint`, `/guides/space-heater-monthly-cost`, `/guides/dehumidifier-ief-cost`, `/guides/electric-water-heater-use`, `/guides/window-ac-cost`, `/guides/standby-device-cost`, and `/guides/tile-waste-boxes`. Rendered main-content counts range from 855 to 1,106 words. The research ledger records the exact Google queries, AI Overview observations, accepted added-value rationale, and source URLs in `docs/phase-3-research-ledger-2026-09-09.md`.

Known stale source references in older pages were replaced with live government, manufacturer, IKEA, Daltile, and BEHR references. The site does not claim that an AI Overview is absent; guides are retained only where the ledger records a material worksheet, comparison, or practical interpretation beyond the observed summary.

The retrieved external sources cited by the new and revised pages are: [EIA Table 5.6.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=table_5_06_a), [EIA electricity measurement](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php), [EIA price factors](https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php), [FTC EnergyGuide](https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances), [ENERGY STAR refrigerators](https://www.energystar.gov/products/refrigerators), [ENERGY STAR dehumidifier criteria](https://www.energystar.gov/products/dehumidifiers/key_efficiency_criteria), [ENERGY STAR dehumidifier testing](https://www.energystar.gov/products/dehumidifier_testing_and_capacity), [Frigidaire 8,000 BTU support](https://www.frigidaire.ca/Owner-Centre/Product-Support/fhww083wbe), [CPSC heater safety](https://www.cpsc.gov/node/66106), [BEHR technical data sheet](https://s7d9.scene7.com/is/content/behr/5558_tds_uspdf), [Daltile FAQs](https://www.daltile.com/how-to/faqs), [DOE home-energy-assessment guide](https://www.energy.gov/sites/default/files/2021-08/ES-Home%20Energy%20Assessments_080221.pdf), [DOE appliance-estimation PDF](https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf), [Willmar utility calculator](https://wmu.willmar.mn.us/energy-programs/energy-calculator/), and [IKEA measurement guide](https://www.ikea.com/in/en/files/pdf/ac/c1/acc1f97f/ikea-measurement-guide.pdf). The complete query-by-query provenance is in the research ledger.

## Browser limitation

The Codex in-app browser blocked both the local preview URL (`ERR_BLOCKED_BY_CLIENT`) and `file://` access under its URL policy. Therefore a full browser click-through and Lighthouse run could not be completed in this environment; no Lighthouse score is claimed. Run those checks after deployment from a normal browser origin.

## Handoff

Commits `83d9068`, `968916e`, and `2e4562d` have been pushed to `ui/select-and-layout-refinements`, and PR #6 is open. The preview deployment is verified, while the production hostname still serves the previous deployment. Merge or otherwise promote PR #6 through the repository's production deployment flow. After it is live, submit the sitemap in Search Console, confirm the deployed `ads.txt`, run the normal-browser click-through and Lighthouse checks, and request a new AdSense review.
