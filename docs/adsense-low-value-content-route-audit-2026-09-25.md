# Watt & Wall AdSense content and route audit — 25 September 2026

This is an evidence-backed work list before another AdSense review. Google's account states **Needs attention → Low-value content** for `wattandwall.com`, updated 23 September 2026 at 13:38 IST. Ads.txt is **Authorised**. Google's detail text asks for authentic, high-quality information, tools or services; ongoing curation and structural maintenance; and sustained genuine user interest. It names no offending URL, minimum word count, traffic quota or guaranteed fix. The 23 September rejection email only announced that the site was not ready and pointed to Sites; its text does not give a page-level diagnosis. Neither an 800-word target nor a Lighthouse score determines AdSense approval. The confirmed cause is the account's site-wide *Low-value content* assessment. The particular pages and signals that led the reviewer to that assessment remain undisclosed; the defects below are independently observed contributors or improvement opportunities, not Google's stated internal rationale.

## Current evidence

- The live sitemap lists 34 pages. On 25 September, all 34 returned 200, had one main H1, and had a matching canonical. HTTP home redirected to HTTPS with 301; robots.txt, sitemap.xml and ads.txt returned 200. These checks remove obvious crawl and ownership failures from the current priority list, but do not prove content quality.
- Search Console Performance covered **24 August–22 September 2026**: 9 clicks, about 1.4k impressions, 0.6% CTR and average position 62. The `/guides/home-energy-audit` page had 575 impressions and one click; `/calculators/electricity-cost` had 179 impressions and zero clicks; `/calculators/rug-size` had 154 impressions and zero clicks. The date range is short and volume small, so these figures identify opportunities rather than a Google traffic threshold.
- Search Console Page indexing, last updated **21 September 2026**, showed 30 indexed and 19 not indexed. Eleven are redirects and three are alternative canonical URLs. Four were discovered but not indexed: `/calculators/curtain-measurement`, `/contact`, `/guides/vaulted-ceiling-paint`, `/how-it-works`. One was crawled but not indexed: `/calculators/furniture-fit` (last crawl 19 September). These labels are Google Search statuses; they are not a direct explanation of AdSense's site-level decision.
- No identical main-body paragraph of 20 or more words appeared across distinct live pages in a simple HTML extraction. Several topics still share formulas, scenarios and framing. Exact string comparison cannot establish editorial originality.
- Main-content word counts in [the initial rejection investigation](./adsense-rejection-audit-2026-09-25.md) include form labels and tables, so they are approximate and are **not** quality scores.

## Verified defects and changes made in this worktree

| Priority | Evidence | Source | State |
|---|---|---|---|
| P0 | A saved two-appliance URL restored IDs 1 and 2, then Add created another ID 2. Editing the third row changed both second and third wattages and could change the total. | `components/calculators/appliance-running-cost-calculator.tsx` | Fixed locally by continuing IDs after restored rows; local browser test confirmed a new ID 3 and independent editing; production verification pending. |
| P0 | Production appliance page emitted React error #418 with a stored $0.16 rate and a statically rendered $0.1834 default. Three decor tools used the same browser-reading initial-state pattern. | `components/calculators/appliance-running-cost-calculator.tsx`, `components/calculators/decor-calculators.tsx`; [React error 418](https://react.dev/errors/418) | Changed locally to render defaults first, restore URL values after hydration, then save them. Clean in-app browser restored a saved rug URL with no console errors; production and other decor-tool verification pending. |
| P1 | Five guides cited the June 2026 EIA rate without a direct EIA link on their own page. | The five guide routes in the table below | Direct EIA table links added locally; EIA responded 200 and the local static export contains the five links; production verification pending. |
| P1 | The appliance UI claimed values stayed in the browser session even though inputs were put into URL parameters and the rate could be stored in localStorage. Decor forms said values stay in the browser despite shareable URLs. | Calculator client components | Wording corrected locally. |
| P2 | Furniture calculator listed the same IKEA measurement PDF twice. Its short explanation did not demonstrate a concrete orientation decision. | `app/calculators/furniture-fit/page.tsx` | Repeated link removed; original two-orientation worked comparison added locally. |
| P1 | The curtain calculator cited IKEA's room-measurement PDF for a claimed 8–10 in rod extension and 2–3× fullness; the linked document was not the curtain source. | `app/calculators/curtain-measurement/page.tsx`, `app/methodology/page.tsx` | Replaced the citation with IKEA's window-measurement guide. Its stated at-least-6-in extension and 2×/2.5× fullness are now distinguished from the tool's editable 9-in, 1.5× and 3× examples. |
| P2 | The furniture comparison table initially forced 375px mobile document width to 550px despite its own scroll region. | `app/calculators/furniture-fit/page.tsx` | Grid child now allows shrinking. Re-tested at 375px: document content width 360px; the 512px table scrolls within its labelled region. |
| P2 | Rug and curtain calculator pages showed formulas and links but offered no worked purchase decision on the page itself. | `app/calculators/rug-size/page.tsx`, `app/calculators/curtain-measurement/page.tsx` | Added a room-fit comparison that separates mathematical fit from usable clearance, and an individual-panels-versus-pair-packages example. These chosen scenarios are clearly labelled. |
| P2 | The high-impression home-energy-audit guide asked readers to rank observations but did not show a concrete evidence-to-action decision. | `app/guides/home-energy-audit/page.tsx` | Added a labelled three-row triage worksheet that separates a longer bill period, an unmeasured idle load and a safety issue. DOE source links were rechecked. |
| P2 | Guide pages named the author only in structured data and the global footer. | `components/trust-page-shell.tsx` | Visible About-linked byline added locally to guide headers. This is a trust improvement, not an AdSense requirement. |

## Route-by-route review

**Interpretation:** “Keep” means no material defect was identified in this audit. “Improve” identifies a measured or editorial issue; it does not mean Google singled out the route. Files named are the route's `app/.../page.tsx` plus any shared component stated above. Word counts and technical checks for each live URL are in the linked investigation.

| Route | Judgment and next action |
|---|---|
| `/` | Keep. The homepage has a clear tool and guide path. Use current Search Console interest to feature proven tasks; avoid claiming that adding more cards will improve approval. |
| `/calculators` | Keep as a selection hub. All seven tools are linked. Do not inflate this directory into a generic article. |
| `/calculators/electricity-cost` | Keep the distinct known-kWh mode. Verify URL restoration, arithmetic and clean console on fresh and saved URLs before submission. It has search impressions but no clicks in the observed period. |
| `/calculators/appliance-running-cost` | Improve reliability. Multi-row URL bug and hydration error were reproduced and fixed locally. Re-test on desktop/mobile and confirm a third row changes independently. |
| `/calculators/paint-quantity` | Keep its coated-area, opening, coat and coverage workflow. Recheck example arithmetic and source links after future content edits. |
| `/calculators/flooring-tile` | Keep its pack rounding and waste angle distinct from paint. Recheck examples and both unit modes. |
| `/calculators/furniture-fit` | Improve. Search Console lists it as crawled but not indexed; its worked orientation comparison and duplicate source fix are now local. Mobile table containment was repaired. Do not infer that Google rejected it for the prior 398-word length. |
| `/calculators/rug-size` | Improve user value. It had 154 search impressions and zero clicks in the observed period. A distinct seating-group room-fit example is now local, and saved URL restoration passed. A labelled placement diagram could still clarify placement after source review. |
| `/calculators/curtain-measurement` | Improve discoverability. Search Console had discovered but not indexed it. The inaccurate citation was corrected, a panel-versus-package purchase example was added, and saved URL restoration passed locally. |
| `/guides` | Keep as a grouped directory. Direct category descriptions and crawlable links are useful; do not add filler to meet a word count. |
| `/guides/electricity-costs` | Keep its tariff interpretation angle; watch for overlap with `/guides/appliance-energy-use` and separate price selection from device measurement. |
| `/guides/appliance-energy-use` | Keep its meter/label/wattage evidence angle. Link from relevant calculator steps; avoid repeating tariff guidance already covered elsewhere. |
| `/guides/paint-and-flooring-measurements` | Keep the combined room worksheet. Make the choice between paint area and floor area unmistakable. |
| `/guides/home-energy-audit` | Prioritize. It had 575 impressions and one click in the observed period. A concrete evidence-to-action triage worksheet is now local. Inspect actual queries and landing experience after deployment; do not add a download merely to inflate the page. |
| `/guides/energyguide-labels` | Keep the FTC label interpretation and repricing worksheet. Review external source availability periodically. |
| `/guides/measuring-rooms-and-furniture` | Keep the measurement and delivery-path worksheet. Link the furniture fit example to the corresponding worksheet step. |
| `/guides/choosing-rug-size` | Keep the dining/living/bedroom distinctions. A labelled room diagram would make placement clearer than another generic paragraph. |
| `/guides/measuring-curtains` | Keep the window/rod/drop worksheet. A labelled measurement diagram would make it easier to use on mobile. |
| `/guides/fridge-energyguide-cost` | Keep the annual-kWh label versus actual-usage comparison; avoid replacing specific evidence with guessed compressor duty percentages. |
| `/guides/vaulted-ceiling-paint` | Search Console discovered but had not crawled it as of 21 September. Keep its sloped-area method and internal links; verify source and indexing again after substantive changes. |
| `/guides/space-heater-monthly-cost` | Improve differentiation from AC and water-heater cost pages. Keep heater-specific safety and thermostat checks; remove repeated generic rate/schedule advice when replacing it with a unique decision aid. Direct EIA link added locally. |
| `/guides/dehumidifier-ief-cost` | Preserve the distinction between IEF and electrical input. Direct EIA link added locally; verify the IEF source and worked figures. |
| `/guides/electric-water-heater-use` | Preserve the distinction between element runtime and whole-tank demand. Direct EIA link added locally; keep measured examples labelled as hypothetical where applicable. |
| `/guides/window-ac-cost` | Improve the distinction between rated cooling input, compressor cycle and measured average. “Use a meter” and “Keep an observation log” partly repeat; consider one compact reproducible comparison. Direct EIA link added locally. |
| `/guides/standby-device-cost` | Keep its annual 24/7 framing; ensure any device schedule excludes active-use hours. Direct EIA link added locally. |
| `/guides/tile-waste-boxes` | Keep the box-size and batch-count angle distinct from the flooring calculator; verify supplier guidance if advice changes. |
| `/how-it-works` | Search Console discovered but had not crawled it as of 21 September. Keep the workflow role distinct from the technical methodology page; ensure guides and tools link to it where relevant. |
| `/methodology` | Keep formulas, units and source method as a trust page. Curtain source attribution was corrected and review date advanced to 25 September after the check. Recheck the appliance URL behavior statement after reliability changes. |
| `/about` | Keep accurate first-person ownership and no invented qualifications. Link the owner visibly from guide headers, now implemented locally. |
| `/contact` | Search Console discovered but had not crawled it as of 21 September. The email route is sufficient for contact; check that it remains reachable from header/footer. |
| `/editorial-policy` | Keep review/correction method. Its August 24 review date describes that page; update only when the policy itself is re-reviewed. |
| `/privacy` | Verify that live consent flow and GA4 query-parameter redaction settings match the statement about URL values. This is an account-side check, not evidence of the low-value-content reason. |
| `/terms` | Keep as a policy page; its short length is expected. |
| `/disclaimer` | Keep planning limitations and safety boundaries; its short length is expected. |

## 12 research queries performed on 25 September

The query strings are recorded so the research can be repeated. Google-owned help and policy pages are the authority. Community replies below are experience reports and sometimes conflict with policy wording; they are **not** official approval criteria.

1. `site:support.google.com/adsense/answer/10015918 unique content AdSense user experience` — [AdSense content and user experience](https://support.google.com/adsense/answer/10015918): substantial unique value, maintenance, avoid similar pages, clear navigation.
2. `site:support.google.com/adsense/answer/7299563 AdSense pages ready original content` — [Pages ready for AdSense](https://support.google.com/adsense/answer/7299563): original useful content and usable navigation.
3. `site:support.google.com/publisherpolicies/answer/11112688 low value content publisher content` — [Screens without publisher content](https://support.google.com/publisherpolicies/answer/11112688): low-value, unfinished and dead-end pages are poor ad inventory.
4. `site:support.google.com/publisherpolicies/answer/11190248 replicated content` — [Replicated content policy](https://support.google.com/publisherpolicies/answer/11190248): copying or lightly rewriting others without substantial added value is a problem.
5. `site:support.google.com/adsense/answer/12176698 site not ready show ads` — [Site not ready guide](https://support.google.com/adsense/answer/12176698): distinguishes code, reachability, unique content and policy issues.
6. `site:developers.google.com/search/docs/fundamentals/creating-helpful-content who how why` — [Helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): original analysis, authorship and purpose are useful editorial checks; Search guidance is not an AdSense approval formula.
7. `site:developers.google.com/search/docs/essentials/spam-policies scaled content abuse` — [Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies): avoid mass-produced near-duplicate pages created chiefly for ranking.
8. `site:support.google.com/adsense/community low value content calculator site original tool` — community results discuss tool-site difficulty; [official AdSense eligibility](https://support.google.com/adsense/answer/9724) does **not** categorically exclude original calculators.
9. `site:support.google.com/adsense/community low value content site approved changed content` — [community low-value-content guide](https://support.google.com/adsense/community-guide/241032356/how-can-you-solve-the-low-value-content-adsense-disapproval-challenge): stresses differentiated work and transparent authorship; anecdotal claims are not policy.
10. `site:support.google.com/adsense/community low value content repeated rejection user interest` — [repeated-rejection example](https://support.google.com/adsense/thread/441902113/repeated-low-value-content-rejection-after-content-update): an update alone did not prove approval; commenter opinions about tool sites are unverified.
11. `site:support.google.com/adsense/answer/9724 eligibility original content audience` — [eligibility](https://support.google.com/adsense/answer/9724): original content and audience interest, with no numeric visitor minimum stated.
12. `site:support.google.com/adsense/answer/10502938 site approvals content navigation` — results returned the same eligibility/community material rather than a relevant distinct official rule; no new claim is derived from this query.

## Next validation and decision gates

1. Lint, typecheck, 54 tests and the static build passed locally. Lint and build were rerun after the final energy-audit worksheet edit. The six revised Article dates, ten revised sitemap dates, five key exported page canonicals, direct source links and energy-audit worksheet were inspected. A static-export check found no broken internal links among 36 exported HTML files. Current local work must be deployed before claiming a production fix.
2. A local two-row appliance URL restored its values; adding and editing a third row left the first two independent. Clean local-browser tests restored saved furniture, rug and curtain URLs and reported no console errors. At a 375px viewport, all seven calculator pages plus the energy-audit, rug and curtain guides had no document-level horizontal overflow. Wide comparison tables remained in labelled scroll regions. Verify the deployed version before another AdSense request. A Chrome extension injected markup warnings during a separate check; these should not be attributed to application code.
3. Use Search Console data to select which pages merit further original comparison, diagram or worksheet work. Do not manufacture metrics or a traffic target.
4. Check current AdSense account setup tasks separately. Do not mark the “I confirm” checkbox or request another review until the site changes are live and independently checked.

Approval remains Google's decision. This report distinguishes confirmed product defects, Google account status, Search Console observations, and editorial hypotheses.
