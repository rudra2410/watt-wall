# AdSense implementation verification — 2026-09-09

The approved checkpoint work is implemented and deployed from the Next 16.3.2 static-export app.

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
- PR #6 previews are live at `https://ui-select-and-layout-refinem.watt-wall.pages.dev` (Cloudflare Pages) and `https://watt-wall-m1k9zblq9-rudra2410s-projects.vercel.app` (Vercel). The Cloudflare branch preview rendered the fridge guide with its title, direct answer, formula, comparison table, sources and calculator links. A calculator smoke test wrote URL parameters and returned the expected `$12.00/month` result for 1,000 W × 2 hours × 30 days at `$0.20/kWh`. The appliance inventory smoke test returned `$4.80/month` for a 400 W refrigerator at 50% duty plus a 100 W load, and the copy button placed the breakdown on the clipboard.
- Production serves all 34 sitemap URLs with HTTP 200 responses. The deployed `ads.txt` returns HTTP 200 with publisher `pub-1759137058910390`, and the production sitemap includes all eight new guide URLs.
- The production electricity-cost calculator returned `$12.00/month`, `60 kWh/month`, and `$144.00/year` for 1,000 W × 2 hours × 30 days at `$0.20/kWh` using restored URL parameters.
- Production HTML contains the AdSense publisher ID, canonical URL, `Organization`, `WebSite`, `Article`, and `BreadcrumbList` structured data checked during the deployment smoke test.

## Content and sources

Eight researched guides are integrated at `/guides/fridge-energyguide-cost`, `/guides/vaulted-ceiling-paint`, `/guides/space-heater-monthly-cost`, `/guides/dehumidifier-ief-cost`, `/guides/electric-water-heater-use`, `/guides/window-ac-cost`, `/guides/standby-device-cost`, and `/guides/tile-waste-boxes`. Rendered main-content counts range from 855 to 1,106 words. The research ledger records the exact Google queries, AI Overview observations, accepted added-value rationale, and source URLs in `docs/phase-3-research-ledger-2026-09-09.md`.

Known stale source references in older pages were replaced with live government, manufacturer, IKEA, Daltile, and BEHR references. The site does not claim that an AI Overview is absent; guides are retained only where the ledger records a material worksheet, comparison, or practical interpretation beyond the observed summary.

The retrieved external sources cited by the new and revised pages are: [EIA Table 5.6.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=table_5_06_a), [EIA electricity measurement](https://www.eia.gov/energyexplained/electricity/measuring-electricity.php), [EIA price factors](https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php), [FTC EnergyGuide](https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances), [ENERGY STAR refrigerators](https://www.energystar.gov/products/refrigerators), [ENERGY STAR dehumidifier criteria](https://www.energystar.gov/products/dehumidifiers/key_efficiency_criteria), [ENERGY STAR dehumidifier testing](https://www.energystar.gov/products/dehumidifier_testing_and_capacity), [Frigidaire 8,000 BTU support](https://www.frigidaire.ca/Owner-Centre/Product-Support/fhww083wbe), [CPSC heater safety](https://www.cpsc.gov/node/66106), [BEHR technical data sheet](https://s7d9.scene7.com/is/content/behr/5558_tds_uspdf), [Daltile FAQs](https://www.daltile.com/how-to/faqs), [DOE home-energy-assessment guide](https://www.energy.gov/sites/default/files/2021-08/ES-Home%20Energy%20Assessments_080221.pdf), [DOE appliance-estimation PDF](https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf), [Willmar utility calculator](https://wmu.willmar.mn.us/energy-programs/energy-calculator/), and [IKEA measurement guide](https://www.ikea.com/in/en/files/pdf/ac/c1/acc1f97f/ikea-measurement-guide.pdf). The complete query-by-query provenance is in the research ledger.

## Production Lighthouse

The initial production Lighthouse run exposed insufficient contrast for primary-brand text. PR #7 darkened the primary tokens on light surfaces and changed the dark final-CTA eyebrow to the light card color. A local rerun scored 100 for accessibility, and the post-deployment production rerun passed the color-contrast audit with these scores: performance 74, accessibility 100, best practices 77, and SEO 100. The run reported zero cumulative layout shift and no console errors. Scores are a single mobile-emulation lab sample and may vary between runs.

The best-practices deductions came from the required Google AdSense `test_cookie` and its corresponding Chrome cookie inspector issue. Of the 169 KiB estimated unused JavaScript, 142 KiB came from Google AdSense scripts and 27 KiB from a site chunk. These third-party findings remain documented rather than being hidden by removing the AdSense integration under review.

## Handoff

PR #6 merged the content, calculator and trust improvements as production merge commit `7c319dc`. PR #7 merged the final contrast fix as production merge commit `e43f367`. Cloudflare deployed both changes to `https://wattandwall.com`, and the production route, calculator, metadata, `ads.txt`, sitemap and Lighthouse checks above passed. The remaining account-side steps are to submit the sitemap in Search Console, confirm the site is ready in the AdSense account, and request a new AdSense review; this implementation did not change the AdSense account, DNS or Cloudflare configuration.
