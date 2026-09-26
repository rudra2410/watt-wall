# Watt & Wall final AdSense and content audit

Audit date: September 26, 2026

Review target: the updated local static export and local production preview. The public site was used only as an older-version comparison.

Scope: all 34 indexable sitemap routes, the generated not-found page, seven interactive calculators, navigation, metadata, structured data, internal links, external citations, responsive layout, and policy/trust content.

## Official guidance used

These sources define the review criteria. Search guidance is recorded separately from AdSense approval and publisher-policy requirements.

- [Make sure your site's pages are ready for AdSense](https://support.google.com/adsense/answer/7299563?hl=en): Google recommends unique, relevant content, a useful experience, and clear navigation for site approval.
- [Connect your site to AdSense](https://support.google.com/adsense/answer/7584263?hl=en): Google reviews the whole site for policy compliance before marking it ready.
- [AdSense Program policies](https://support.google.com/adsense/answer/48182?hl=en): covers ad behavior, placement, traffic sources, and site navigation requirements.
- [Google-served ads on screens without publisher content](https://support.google.com/publisherpolicies/answer/11112688?hl=en-GB): ads are not allowed on screens without publisher content, with low-value content, under construction, or used for navigation or behavioral purposes; its examples include dead-end and error screens.
- [Google-served ads on screens with replicated content](https://support.google.com/publisherpolicies/answer/11190248?hl=en): copied or embedded material needs additional commentary, curation, or other value.
- [More ads or paid promotional material than publisher content](https://support.google.com/publisherpolicies/answer/11169917?hl=en): publisher content should remain the focus and should not be outweighed by advertising.
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): Search self-assessment guidance covering originality, completeness, sourcing, trust, clear authorship, satisfying the visitor's goal, and avoiding content made mainly for rankings. This is Search guidance, not an AdSense approval rule.
- [Google Search Essentials](https://developers.google.com/search/docs/essentials): Search discovery guidance for descriptive titles, crawlable links, and people-first content. This is separate from AdSense policy.

No official source states that every page must reach a fixed word count. Page length was therefore evaluated only in relation to whether the page completes its stated visitor task.

## Route inventory and initial assessment

| Route | Primary visitor purpose | Initial assessment before final edits |
|---|---|---|
| `/` | Explain the site and lead visitors to calculators and guides | Useful and distinct; no thin-content finding |
| `/calculators` | Select among seven tools | Useful directory; paint scope and comparison-link findings below |
| `/calculators/electricity-cost` | Price known kWh or estimate one load from watts and time | Formula and limitations are clear; source-review date needs alignment |
| `/calculators/appliance-running-cost` | Compare several appliance schedules and duty cycles | Useful, original interaction; no confirmed content defect |
| `/calculators/paint-quantity` | Estimate rectangular-room wall paint | Calculator is useful; directory text incorrectly mentions ceilings |
| `/calculators/flooring-tile` | Estimate rectangular floor area and whole purchase units | Formula is correct; generic 5–10% advice is not supported by the cited examples |
| `/calculators/furniture-fit` | Preliminary room, clearance, and opening check | Scope and limitations are clear |
| `/calculators/rug-size` | Calculate a furniture-based rug footprint and room fit | Useful and distinct; defaults are disclosed as editable guidance |
| `/calculators/curtain-measurement` | Calculate outside-mounted rod, fullness, drop, and panels | Formula is correct; one fullness hint over-generalizes the cited source |
| `/guides` | Select among 16 guides | Useful directory; refrigerator card no longer matches the revised article |
| `/guides/electricity-costs` | Choose a variable electricity rate from a bill | Distinct tariff-focused purpose; arithmetic verified |
| `/guides/appliance-energy-use` | Choose rated, metered, average-watt, or label evidence | Distinct measurement purpose; arithmetic verified |
| `/guides/home-energy-audit` | Organize bills, observations, and professional-audit questions | Substantive checklist; no confirmed defect |
| `/guides/energyguide-labels` | Compare products and reprice annual label kWh | Distinct buying purpose; 500 kWh example verified |
| `/guides/fridge-energyguide-cost` | Compare a dated meter observation with label annual kWh | Distinct observation purpose; directory summary is stale |
| `/guides/space-heater-monthly-cost` | Model heater schedule and duty-cycle uncertainty | Appliance-specific safety and schedule guidance; arithmetic verified |
| `/guides/dehumidifier-ief-cost` | Separate IEF from measured energy and cost | Appliance-specific efficiency context; arithmetic verified |
| `/guides/electric-water-heater-use` | Separate element rating, equivalent runtime, and monitored energy | Appliance-specific measurement and safety context; arithmetic verified |
| `/guides/window-ac-cost` | Compare rated cooling input with a measured average | Model-specific source and cycling explanation; arithmetic verified |
| `/guides/standby-device-cost` | Turn documented continuous watts into annual energy and cost | Distinct mode/schedule guidance; arithmetic verified |
| `/guides/paint-and-flooring-measurements` | Build a measurement worksheet before using material calculators | Useful cross-project measurement guide; no confirmed defect |
| `/guides/vaulted-ceiling-paint` | Manually calculate sloped ceiling and gable areas | Distinct geometry not handled by the calculator; arithmetic verified |
| `/guides/tile-waste-boxes` | Separate cutting allowance, repair reserve, and box rounding | Distinct purchase worksheet; additive example verified |
| `/guides/measuring-rooms-and-furniture` | Record room, furniture, obstacles, and delivery path | Useful and distinct; visible review date conflicts with structured data |
| `/guides/choosing-rug-size` | Choose furniture-based extensions and test a rug footprint | Useful layout-specific guide; examples verified |
| `/guides/measuring-curtains` | Measure outside-mounted hardware, fullness, panels, and drop | Useful worksheet; clearly distinguishes unsupported inside mounts |
| `/how-it-works` | Explain the visitor workflow and calculator boundaries | Distinct workflow page; no confirmed defect |
| `/methodology` | Document formulas, rounding, units, sources, and browser behavior | Distinct technical trust page; formulas match implementation |
| `/editorial-policy` | Explain authorship, sourcing, testing, and corrections | Clear policy; no confirmed defect |
| `/about` | Identify the creator, qualifications, purpose, and limits | Clear authorship and limits; no confirmed defect |
| `/contact` | Provide a correction and accessibility contact path | Short but task-complete; no thin-content finding |
| `/privacy` | Explain calculator URLs, local storage, analytics, ads, email, and consent | Substantive; deployed CMP/Analytics behavior remains externally unverified |
| `/terms` | Explain permitted use and result limitations | Short but task-complete; no thin-content finding |
| `/disclaimer` | Explain energy, materials, professional, and safety limits | Task-complete; no thin-content finding |

The generated not-found document is not an indexable sitemap route. It is reviewed separately because the AdSense loader is global.

## Findings recorded before editing

Classification meanings:

- **Confirmed:** directly demonstrated by current code, rendered output, arithmetic, or a cited source.
- **Judgment-based:** an editorial or usability improvement supported by evidence but not stated as a Google requirement.
- **Unverified:** depends on deployed Google configuration, regional behavior, or another external state that the local project cannot prove.

| ID | Route | Classification | Exact evidence | Visitor impact and guidance relevance | Priority | Proposed fix | Resolution | Changed files | Verification |
|---|---|---|---|---|---|---|---|---|---|
| F01 | `/calculators`, `/calculators/paint-quantity` | Confirmed | Directory copy says “Paint Quantity for coated wall and ceiling area” and “wall and ceiling dimensions,” while the calculator states “wall paint only” and excludes ceilings. | A visitor can select the wrong tool and assume the result includes a surface it never calculates. Clear, accurate navigation supports the AdSense site-readiness guidance. | P1 | Change directory and comparison text to walls only; keep the vaulted-ceiling guide as the ceiling path. | Resolved: directory and comparison copy now describe rectangular wall paint only. | `data/calculators.ts`; `app/calculators/page.tsx` | Export phrase scan passed; calculator scope and vaulted-ceiling guide link rechecked. |
| F02 | `/guides`, `/guides/fridge-energyguide-cost` | Confirmed | The guide card says “Recalculate an EnergyGuide annual cost,” but the revised article's distinct task is comparing label annual kWh with a multi-day meter observation. | The directory misdescribes the article and weakens its separation from the general EnergyGuide buying guide. | P2 | Rewrite only the directory summary to describe the observation worksheet and same-time-basis comparison. | Resolved: directory summary now describes the label-versus-observation comparison. | `lib/site.ts` | Directory link works; the fridge article contains no 500 kWh or $91.70 duplicate. |
| F03 | `/calculators/flooring-tile` | Confirmed | Hint and FAQ call 5–10% a common/simple starting range. The linked Lowe's LVT example uses 10%; Daltile's approximately 10% recommendation is specifically repair attic stock. No cited source supports the combined 5–10% generalization. | Unsupported guidance may influence a material order. People-first guidance favors claims that can be checked and clearly scoped. | P1 | Remove the generic range. Describe the 10% default as an editable worksheet example and direct visitors to product/installer guidance. | Resolved: unsupported range removed; 10% is explicitly an editable example. | `components/calculators/flooring-tile-calculator.tsx`; `data/flooring-tile.ts`; `app/calculators/flooring-tile/page.tsx` | Source context rechecked; export contains no “5–10%” phrase; 120 × 1.10 and six-unit result verified. |
| F04 | `/calculators/curtain-measurement` | Confirmed | The form says “A practical starting range is about 2–3×.” The cited IKEA material illustrates 2× and 2.5×; the page elsewhere correctly calls 1.5× and 3× editable scenarios. | The short hint turns selectable scenarios into an unsupported general recommendation. | P2 | Tell visitors to follow the panel/header instructions and identify 2× and 2.5× only as cited examples. | Resolved: hint now attributes 2× and 2.5× to the cited IKEA example and directs visitors to product instructions. | `components/calculators/decor-calculators.tsx`; `app/calculators/curtain-measurement/page.tsx` | Unsupported phrase absent; 226 cm rod and four-panel default verified in UI and tests. |
| F05 | `/guides/measuring-rooms-and-furniture` | Confirmed | Visible text says reviewed September 14, 2026; Article JSON-LD says `dateModified: 2026-09-15`. | Conflicting review dates weaken an otherwise strong trust signal. | P3 | Align visible date with the existing September 15 structured-data date. | Resolved: visible review date now matches September 15 structured data. | `app/guides/measuring-rooms-and-furniture/page.tsx` | Static HTML and Article JSON-LD rechecked. |
| F06 | Multiple routes changed September 26 | Confirmed | Article `dateModified` and visible reviews show September 26 on changed guides, while `app/sitemap.ts` still reports older September 9, 14, or 15 dates for several of those URLs. | Crawlers receive conflicting freshness information. This is a technical accuracy issue, not proof of an AdSense violation. | P2 | Add a final-audit date set for only routes substantively changed or reviewed on September 26. | Resolved: substantively reviewed routes now receive the September 26 sitemap date; unchanged routes retain their prior dates. | `app/sitemap.ts` | Built sitemap has 34 URLs and 21 scoped September 26 timestamps. |
| F07 | `/calculators` | Judgment-based | Calculator cards are links, but names in the final comparison table are plain text. | A visitor who makes a choice in the comparison must scroll back to open it. Search Essentials also recommends crawlable links, although the routes are already crawlable elsewhere. | P3 | Link each row name to its calculator while preserving the accessible row header. | Resolved: all seven row headers contain keyboard-focusable calculator links. | `app/calculators/page.tsx` | Export/internal-link scan and browser keyboard semantics rechecked. |
| F08 | Ten guide pages | Judgment-based | Rendered metadata contains ten titles above roughly 60 characters and nine descriptions above 160 characters; the longest descriptions are 218–255 characters. Google does not publish a mandatory character limit. | Long snippets may be truncated and hide the page's specific answer. This is a Search presentation improvement, not an AdSense requirement. | P3 | Shorten metadata only, retaining the verified example or distinct purpose. Do not shorten useful visible article introductions. | Resolved: metadata was shortened while full visible introductions and Article descriptions were retained. | `app/guides/{appliance-energy-use,dehumidifier-ief-cost,electric-water-heater-use,electricity-costs,fridge-energyguide-cost,space-heater-monthly-cost,standby-device-cost,tile-waste-boxes,vaulted-ceiling-paint,window-ac-cost}/page.tsx` | Export scan found no title over 60 characters and no description over 160 characters. |
| F09 | Generated not-found page | Unverified | The AdSense loader is rendered globally. Publisher policy examples say Google ads should not appear on dead-end or error screens. Local review cannot determine whether Auto ads will place an ad on a production 404. | Potential inventory-policy risk if ads are served there. The presence of loader code alone does not prove that an ad will be served. | P1 before resubmission | Verify a production unknown URL after ads are enabled and add an AdSense page exclusion or otherwise prevent ad serving on error pages. No speculative loader rewrite in this audit. | Requires owner/AdSense verification | None | Unverified externally |
| F10 | `/privacy`, deployed site | Unverified | Privacy copy says Google's Privacy & messaging flow provides choices before covered storage or personalized advertising. The repository does not expose the account-side CMP settings or prove regional GA/AdSense consent signals. | The disclosure must match deployed behavior. This is a privacy/configuration check, not a content-volume issue. | P1 before resubmission | Verify the EEA/UK/Switzerland message, refusal path, preference link, and Analytics consent behavior in production. Adjust account configuration or disclosure if they differ. | Requires owner/account verification | None | Unverified externally |
| F11 | Site-wide editorial process | Judgment-based | Search Central recommends considering a “How” disclosure when automation substantially assists content. It does not require an AI disclosure on every page. The site identifies Rudra as creator/editor and describes source and test review. | Any disclosure must describe the owner's actual workflow and manual review; inventing one would reduce trust. | Owner decision | Do not add a claim during this audit. Owner should decide after personally reviewing the final text. | Requires owner input | None | Not a Google/AdSense requirement |
| F12 | Willmar and Lowe's external links | Unverified technical response | Automated fetch returned HTTP 403 for two pages, while browser rendering and source text were available; all other checked external sources returned 200. | This looks like bot protection rather than a broken visitor link. Removing a working source would reduce context. | P3 monitor | Keep the links, verify them manually in a normal browser, and monitor after deployment. | Resolved with monitoring limitation: both pages rendered in a normal browser and the links were retained. | None | Visitor access confirmed; automated clients may still receive 403. |
| F13 | `/calculators/appliance-running-cost`, `/calculators/furniture-fit`, `/calculators/rug-size`, `/calculators/curtain-measurement` | Confirmed | Browser testing rendered “Total $21.60 per month for 1 appliances” and “Result unavailable. 1 fields need attention.” | Incorrect singular/plural wording makes working calculator feedback look unfinished. | P2 | Use singular nouns when the count is one and plural nouns for every other count. | Resolved: live-region summaries now select singular or plural wording from the count. | `components/calculators/appliance-running-cost-calculator.tsx`; `components/calculators/decor-calculators.tsx` | Browser now renders “1 appliance” and “1 field needs attention.” |

## Baseline evidence before final edits

- Static export contained 34 sitemap URLs and 34 corresponding indexable HTML documents.
- Every indexable route had one H1 and a self-referencing canonical.
- Every non-home route rendered breadcrumb structured data; all 16 guide articles rendered Article structured data.
- Exact-paragraph comparison found no cross-route body duplicate of 80 or more characters. The sole repeated paragraph was the intentionally shared factual footer description.
- Seven calculator formula modules matched their visible formula descriptions in the reviewed code.
- All external citations were fetched: 34 returned HTTP 200; Willmar and one Lowe's page returned automated 403 responses but rendered in a browser.
- No page was classified as low value merely because of word count. Contact, terms, and policy pages were evaluated against their narrow visitor tasks.

## Final resolution log

### Implemented changes

- Corrected calculator-directory scope, guide-directory intent, flooring allowance wording, curtain fullness attribution, and the inconsistent room-measurement review date.
- Linked all seven calculator names in the comparison table and aligned sitemap dates only for routes substantively reviewed on September 26.
- Shortened search metadata for appliance energy use, dehumidifier IEF, water-heater use, electricity-rate selection, refrigerator comparison, space heaters, standby devices, tile waste, vaulted-ceiling paint, and window AC. Full visible introductions and verified examples remain unchanged.
- Corrected singular/plural live feedback found during the second browser pass.
- The broader earlier changes present in this working tree were preserved: privacy wording distinguishes local arithmetic from URL/third-party processing, the refrigerator and general EnergyGuide guides have distinct tasks, material-calculator units are explicit, the water-heater measurement advice is safe for hardwired equipment, tile allowances are additive from base area, and the duplicated homepage featured-calculator block is removed.

### Calculator verification

| Calculator | Realistic browser result | Edge result | Formula/test evidence |
|---|---|---|---|
| Electricity cost | Default 1,500 W schedule produced $24.76/month and $297.11/year at the saved $0.1834 rate. | Zero watts prevented a result and identified the field. | 1.5 kW × 3 h × 30 days × $0.1834 = $24.759; formula tests also verify a $0.16 scenario. |
| Appliance running cost | One default appliance produced $24.76/month at the saved rate. | Zero wattage prevented the row result and identified the field. | Inventory tests cover independent schedules, duty cycle, totals, empty input, invalid rows, and numeric overflow. |
| Paint quantity | 12 ft × 10 ft × 8 ft, one door, two windows, two coats, 400 sq ft/gal and 10% waste produced 1.661 gal and a two-gallon purchase suggestion. | Zero room length prevented a result and identified the field. | Unit test independently verifies 302 sq ft paintable area, 1.661 gal, 6.287 L, and two whole gallons. |
| Flooring and tile | 10 ft × 12 ft with 10% editable allowance and 23.21 sq ft/unit produced 132 sq ft and six units. | Zero floor length prevented a result and identified the field. | Unit test verifies waste is added before whole-unit rounding. |
| Furniture fit | Default 400 cm × 300 cm room reported that the furniture fits and requested clearance is available. | Zero clearance prevented a result and identified the field. | Tests cover standard fit, room-fit failure, insufficient clearance, delivery warning, and invalid dimensions. |
| Rug size | Default dining layout produced a 320 cm × 240 cm minimum rug that fits the room. | Zero room length prevented a result and identified the field. | Tests verify extension on all sides and a too-small-room result. |
| Curtain measurement | Default outside mount produced a 226 cm rod and four panels at 2× fullness. | Zero window width prevented a result and identified the field. | Tests verify rod arithmetic, whole-panel rounding, and rejection of unsupported fullness values. |

### Post-fix verification

- `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm run build` passed. Vitest reported 9 files and 54 tests passing; Next.js generated 41 static pages.
- All 34 sitemap routes were reopened in the production preview at 1440 × 900 and 375 × 812. Every route had one H1, a main region, a footer, and zero document-level horizontal overflow. The mobile menu opened as a labelled dialog and closed normally.
- All 34 sitemap URLs plus `robots.txt`, `sitemap.xml`, and `ads.txt` returned HTTP 200 locally.
- Static-export inspection found 34 self-canonicals, breadcrumbs on every non-home route, Article JSON-LD on all 16 guide routes, no title above 60 characters, and no meta description above 160 characters.
- No internal route links were broken. The only exact paragraph repeated across routes was the intentional factual footer description.
- The export contains none of the removed phrases “5–10%,” “practical starting range,” or the stale September 14 room-guide review date. The refrigerator guide contains neither the 500 kWh example nor the $91.70 result retained on the separate EnergyGuide buying guide.
- Browser console inspection found no errors. Reset actions in the local preview produced the expected `@next/third-parties` warning that GA was not initialized because the local production preview was built without the deployed Analytics configuration.

### Remaining owner and production checks

1. Open a deliberately unknown production URL after Auto ads are enabled and confirm that no ad is served on the 404. Add an AdSense page exclusion if necessary. Loader presence alone did not prove an ad would be served locally.
2. In the AdSense/Google consent configuration, verify the EEA, UK, and Switzerland message, refusal path, preference reopening, and Analytics consent behavior. These account-side settings are not present in the repository.
3. Decide whether the editorial policy needs a factual description of automation assistance after personally reviewing the final text. Google Search presents this as a trust consideration when automation substantially assists content; it is not an AdSense requirement.
4. Monitor the Willmar and Lowe's references after deployment. They rendered for a normal visitor during this audit but returned 403 to automated fetches.

No deployment, AdSense resubmission, or guarantee of approval is part of this audit.

## Live production verification — September 26, 2026

This pass reviewed the deployed site rather than assuming that the local work had reached production. The evidence below was collected from the public site, the verified Search Console domain property, the signed-in AdSense site record, and GA4. No AdSense review was requested, no account setting was changed, and no deployment was made.

### Current official guidance used

- [AdSense: What to do if your site is not ready to show ads](https://support.google.com/adsense/answer/7299563?hl=en)
- [AdSense: Connect your site and request a review](https://support.google.com/adsense/answer/7584263?hl=en)
- [AdSense site status definitions](https://support.google.com/adsense/answer/12170222?hl=en)
- [AdSense content and user-experience guidance](https://support.google.com/adsense/answer/10015918?hl=en)
- [Google Publisher Policies: screens without publisher content or with low-value content](https://support.google.com/publisherpolicies/answer/11112688?hl=en-GB)
- [Search Central: create and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Search Central: ask Google to recrawl URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Search Central: canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [AdSense: Google-certified CMP requirements](https://support.google.com/adsense/answer/13554116?hl=en)
- [Analytics: verify collection with Realtime](https://support.google.com/analytics/answer/9271392?co=GENIE.Platform%3DDesktop&hl=en-419)

Google's site-readiness material asks publishers to resolve the reported issue and provide original, useful content with usable navigation before requesting another review. Search indexing is a separate system: an indexable page is not guaranteed to be indexed, and an indexed page does not establish AdSense approval.

### Route-by-route live verification

Shared technical evidence for every row: HTTP 200, exactly one H1, a self-referencing HTTPS canonical, no `noindex`, the AdSense account meta tag and publisher loader, a main landmark, a footer, and no document-level horizontal overflow at 1440 × 900 or 375 × 812. Every non-home route also rendered `BreadcrumbList`; all 16 article routes rendered Article structured data. The table records the distinct visitor task checked on each route.

| Live route | Visitor value and deployed-content evidence | Live verification |
|---|---|---|
| `/` | Calculator categories, guide entry points, methodology and trust information are visible; the former duplicate featured-calculator block is absent. | Pass |
| `/calculators` | Lists all seven tools by task and includes a linked comparison table explaining inputs and results. | Pass |
| `/guides` | Groups all 16 articles into Energy, Renovation, and Furniture & Decor with route-specific summaries. | Pass |
| `/how-it-works` | Explains the calculation workflow, local arithmetic, shareable URL inputs, validation, privacy limits, and next steps. | Pass |
| `/methodology` | Separates formula, units, rounding, sources, browser behavior, and limitations; all seven calculator rows are linked. | Pass |
| `/editorial-policy` | States authorship, source review, corrections, update practice, and editorial limits. | Pass |
| `/about` | Identifies the creator/editor and explains the site's narrow calculator-and-guide purpose without unsupported credentials. | Pass |
| `/contact` | Gives a working, Cloudflare-obfuscated email link and tells readers what details help with corrections. | Pass |
| `/privacy` | Covers URL inputs, local storage, analytics, advertising, consent, and contact. | Pass; regional consent behavior checked separately below. |
| `/terms` | Explains permitted use, estimation limits, advertising/analytics code, and responsibility for decisions. | Pass |
| `/disclaimer` | Separates energy, materials, installation, safety, and professional-advice limits. | Pass |
| `/calculators/electricity-cost` | Explains variable per-kWh pricing, fixed-fee exclusion, units, schedule assumptions, formula, and result interpretation. | Pass; calculator result verified below. |
| `/calculators/appliance-running-cost` | Supports several appliances and duty cycles, with per-row and combined costs and clear limitations. | Pass; calculator result verified below. |
| `/calculators/paint-quantity` | States feet and square feet per U.S. gallon, fixed opening allowances, wall-only scope, waste, exact volume, and purchase rounding. | Pass; calculator result verified below. |
| `/calculators/flooring-tile` | States feet and square feet per unit, editable allowance, unit coverage, and whole-unit rounding without an unsupported universal waste range. | Pass; calculator result verified below. |
| `/calculators/furniture-fit` | Checks normal/rotated rectangular footprints, requested clearance, and a preliminary delivery opening. | Pass; calculator result verified below. |
| `/calculators/rug-size` | Converts furniture dimensions plus editable extension into a minimum rug and checks both room orientations. | Pass; calculator result verified below. |
| `/calculators/curtain-measurement` | Models an outside-mounted rod, fullness and whole panels; product instructions and IKEA examples are clearly distinguished. | Pass; calculator result verified below. |
| `/guides/electricity-costs` | Helps readers find the applicable variable electricity price and distinguish it from fixed charges. | Pass |
| `/guides/appliance-energy-use` | Explains nameplate watts, time, duty cycle, multiple devices, and a measurement worksheet. | Pass |
| `/guides/paint-and-flooring-measurements` | Gives separate measurement workflows for paint and flooring and directs readers to the matching calculator. | Pass |
| `/guides/home-energy-audit` | Provides a room-by-room inventory and prioritization workflow rather than promising diagnostic certainty. | Pass |
| `/guides/energyguide-labels` | Keeps the distinct 500 kWh buying-comparison example and explains label assumptions and repricing. | Pass |
| `/guides/measuring-rooms-and-furniture` | Covers room, furniture, clearance, route, and delivery-opening measurements with distinct decision checks. | Pass |
| `/guides/choosing-rug-size` | Explains seating layouts, editable edge extension, room fit, and tape-layout verification. | Pass |
| `/guides/measuring-curtains` | Covers outside- and inside-mount measurement while clearly stating that the linked calculator models outside mounting only. | Pass |
| `/guides/fridge-energyguide-cost` | Compares label annual kWh with a hypothetical seven-day observation and reusable worksheet; the 500 kWh/$91.70 duplicate is absent. | Pass |
| `/guides/vaulted-ceiling-paint` | Explains how to split irregular ceiling geometry into measurable shapes and keep assumptions visible. | Pass |
| `/guides/space-heater-monthly-cost` | Connects rated wattage, thermostat cycling, schedule, safety limits, and measurement choices. | Pass |
| `/guides/dehumidifier-ief-cost` | Separates IEF efficiency comparison from a 30-day energy projection and identifies the limits of both. | Pass |
| `/guides/electric-water-heater-use` | Uses safe circuit/submeter/whole-home observations, links the Willmar reference, and avoids plug-in-meter advice for hardwired equipment. | Pass |
| `/guides/window-ac-cost` | Separates nameplate input, modes, cycling, observation, weather, and a stated hypothetical cost example. | Pass |
| `/guides/standby-device-cost` | Shows why a low wattage can matter across many devices and gives a measurement-and-inventory worksheet. | Pass |
| `/guides/tile-waste-boxes` | Uses additive cutting and reserve percentages from measured area; the 120 sq ft, 10% + 10% example correctly gives 144 sq ft. | Pass |

No exact body paragraph of 80 or more characters was duplicated across live routes except the intentionally shared factual footer description. Page titles and descriptions remained within the reviewed export thresholds. Navigation, mobile menu, card links, source links, and calculator controls were keyboard reachable. The apparent `/cdn-cgi/l/email-protection` crawler path is Cloudflare's email protection; the rendered visitor link correctly resolves to `mailto:wattandwall@gmail.com`.

### Live calculator results

| Calculator | Sensible-input result observed in production | Edge case observed | Status |
|---|---|---|---|
| Electricity cost | 1,500 W × 3 h/day × 30 days × $0.16/kWh = **$21.60/month** and **$259.20/year**. | Zero watts blocks the result and identifies one field. | Pass |
| Appliance running cost | One 1,500 W appliance at 3 h/day, 30 days and $0.16/kWh = **$21.60/month**. | Zero appliance wattage highlights the invalid row. | Pass |
| Paint quantity | Reviewed default scenario = **1.66 U.S. gal / 6.29 L**, with a **2 whole-gallon** purchase suggestion. | Zero room length blocks the result. | Pass |
| Flooring and tile | 120 sq ft with 10% allowance = **132 sq ft** and **6 units** at 23.21 sq ft/unit. | Zero floor length blocks the result. | Pass |
| Furniture fit | Default 400 cm × 300 cm room reports that the furniture and requested clearance fit. | Zero requested clearance is rejected. | Pass |
| Rug size | Default dining layout gives **320 cm × 240 cm** and reports that it fits the room. | Zero room length is rejected. | Pass |
| Curtain measurement | Default outside mount gives a **226 cm rod**, **four panels**, and **220 cm drop**. | Zero window width is rejected. | Pass |

Reset restored the default appliance values, and all seven calculators remained usable after validation errors. No production-only formula difference or application error was found.

### Public crawl and URL evidence

| Check | Verified production result |
|---|---|
| `robots.txt` | HTTP 200; `User-agent: *`, `Allow: /`, and the correct sitemap URL. |
| `sitemap.xml` | HTTP 200; 34 canonical URLs, matching the audited inventory. |
| `ads.txt` | HTTP 200; exact authorized record `google.com, pub-1759137058910390, DIRECT, f08c47fec0942fa0`. |
| Redirects | HTTP apex → HTTPS apex with 301; HTTPS `www` → apex with 301; `/calculators/` → `/calculators` with 308. |
| Unknown route | Returns a real 404 with `noindex`. The global AdSense loader is present, but no ad can currently be observed while the site is unapproved. |
| Browser console | No application errors. A GA helper warning occurred only for an interaction before the delayed analytics initializer; the local fix is recorded below. |

Thirty-six cited external destinations were checked. Normal-browser access worked for the reviewed references. Lowe's returned 403 to the automated client but rendered in a normal browser, so this remains a monitoring limitation rather than a confirmed broken link. The EIA query URL is valid in the browser; an earlier parser-only 400 resulted from not decoding HTML `&amp;` in the extracted URL.

### Search Console facts

- Domain property ownership: **verified owner**.
- Sitemap: submitted August 25, 2026; last read September 26, 2026; **Success**; 34 discovered pages.
- Sitemap-filtered indexing: **29 indexed, 5 not indexed**.
- Discovered, currently not indexed: `/calculators/curtain-measurement`, `/contact`, `/guides/vaulted-ceiling-paint`, and `/how-it-works`.
- Crawled, currently not indexed: `/calculators/furniture-fit` (last crawl September 19, 2026).
- URL Inspection showed the homepage and `/calculators/electricity-cost` on Google. A live test for `/calculators/furniture-fit` on September 26 reported **URL is available to Google**, crawl allowed, fetch successful, and valid breadcrumb markup.
- On September 26, a single indexing request was accepted for each of the five unindexed sitemap URLs: `/calculators/curtain-measurement`, `/calculators/furniture-fit`, `/contact`, `/guides/vaulted-ceiling-paint`, and `/how-it-works`. Search Console confirmed that each URL was added to the priority crawl queue.
- Manual actions: **No issues detected**. Security issues: **No issues detected**.

The five unindexed URLs are not evidence of an AdSense defect. Google's documentation says sitemap submission and indexing requests are discovery signals rather than guarantees. Requesting indexing after a successful live test is a reasonable optional step; it is not necessary to resubmit the already-successful sitemap.

### AdSense account facts

- Site: `wattandwall.com`.
- Approval status: **Needs attention**.
- Status detail: **Low-value content**.
- Exact site message: **“Your site isn't ready to show ads.”**
- The site panel asks the publisher to ensure authentic, high-quality information, ongoing curation/structural maintenance, and genuine user interest before resubmitting.
- `ads.txt`: **Authorised**; last site update shown as September 23, 2026 at 13:38 IST.
- Policy Center: **No current issues**.
- Account setup cards: payment profile complete; ads settings confirmed; Sites is the remaining action.
- Privacy & messaging: the European regulations message shows **1 active**.
- The correct publisher meta tag, loader, and `ads.txt` record are live. The site has already reached review and the account offers the confirmation checkbox and **Request review** button, so no connection-code change is indicated.

The generic top banner asking for payment information or site connection conflicts with the completed onboarding cards and verified live connection. The site-specific low-value status is the actionable record. No checkbox was selected and **Request review was not clicked**.

### Analytics check

GA4 is installed and receiving production traffic. The property showed 11 active users, 83 events, and 7 new users for the current day; Realtime showed two active users in the preceding 30 minutes. The last-seven-day report included five Organic Search sessions and Watt & Wall page titles. GA4 collection is therefore working, but Analytics is an optional measurement check and not an AdSense approval requirement. The offered Search Console link was not changed.

### Production findings and resolution status

| ID | Classification | Evidence and visitor impact | Action/status |
|---|---|---|---|
| L01 | Confirmed resolved | All 34 deployed routes contain the revised, route-specific content and expected structured data. | No further content change justified. |
| L02 | Confirmed resolved | Live paragraph comparison found no unintended cross-route body duplication; calculator and guide purposes remain distinct. | No further rewrite justified. |
| L03 | Confirmed resolved | All seven live calculators returned the expected results and rejected invalid inputs without errors. | No formula change justified. |
| L04 | Confirmed Search state, not a site defect | Search Console reports 29 of 34 sitemap URLs indexed and five currently unindexed. Furniture Fit passes Google's live test. | Resolved operationally: Google accepted one indexing request for all five URLs on September 26. Wait for recrawling; do not repeat the requests or resubmit the successful sitemap. |
| L05 | Unverified future inventory risk | The 404 is correctly `noindex`, but the publisher loader is global. Policy examples prohibit ads on error screens; current unapproved state cannot show whether Auto ads would select the page. | After approval/ads activation, open a real unknown URL and confirm that no ad renders. Add a page exclusion or route-aware loading only if an ad is actually served. |
| L06 | Confirmed, P3 measurement issue | Clicking Reset immediately after navigation produced `@next/third-parties: GA has not been initialized`. Calculator behavior was unaffected, GA4 still receives visits, and this is not an AdSense blocker. | Fixed locally: initialize the first-party `dataLayer`/`gtag` queue before the delayed network load and send calculator events to that queue. Lint, typecheck, all 54 tests, and the production build pass. A separately authorized deployment is still required. |
| L07 | Unverified automated-client limitation | Lowe's blocks the automated checker with 403 but works for a normal visitor. | Keep the useful citation and monitor it; no current visitor-facing fix is justified. |

### Readiness decision and exact next steps

**Ready to request AdSense review: Yes.** The earlier confirmed low-value findings are deployed, the entire sitemap inventory is usable and indexable, the publisher connection is present, `ads.txt` is authorised, and AdSense Policy Center reports no current issue. This is a readiness assessment, not a promise that Google will approve the site.

1. Search Console indexing requests have now been accepted for all five unindexed sitemap pages. Wait for Google to recrawl them; do not submit them again or resubmit the successful sitemap. Indexing can take time and does not need to complete before the AdSense request.
2. In AdSense, open **Sites → wattandwall.com**, read the low-value-content panel, select **I confirm I've fixed the issues**, and click **Request review** once.
3. Keep the current canonical URLs, publisher meta tag, AdSense loader, `ads.txt`, navigation, and public content available while the review is pending. Avoid deleting/re-adding the site or sending repeated review requests.
4. Monitor the AdSense Sites status and email. Google's status guidance says reviews commonly take a few days but can take two to four weeks.
5. If the site is approved and ads begin serving, verify an unknown 404 URL and add an AdSense page exclusion if an ad appears there.

The only local code change from this live pass is the non-blocking GA event-queue fix. It passed lint, typecheck, all 54 tests, and a 41-page production build. It has not been deployed, and the live site remains otherwise ready for the owner's AdSense review request.
