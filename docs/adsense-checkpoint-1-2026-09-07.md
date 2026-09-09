# AdSense content audit: Checkpoint 1

Audit date: 7 September 2026. Status: awaiting owner approval before Phase 2. No application code, pages, assets, account settings, or deployment configuration changed.

## Method and limits

Opened the production website using browser automation. Enabled Chrome DevTools Protocol Network, Runtime, and Log observation. Captured main-document response statuses and canonical tags for all 26 discovered pages. Read the rendered main content and inspected a screenshot of every page with a requested 375 × 812 viewport. In that mobile pass, window.innerWidth was 375 and document.documentElement.scrollWidth was 360 on every page (the browser reserves scrollbar space). No horizontal document overflow was observed. A further element-bounds check found no overflowing main-content text; the homepage had three empty decorative DIVs outside the viewport.

Word counts below use rendered main.innerText, remove text belonging to main nav elements, and count non-whitespace tokens. Article titles, introductory text, calculator labels/results, and source labels count; the site header, footer, breadcrumbs, and related-navigation blocks do not. Final counts were captured in a fresh browser tab at its default viewport. Responsive labels and collapsed FAQ content can affect this rendered-text measure. This is a content inventory, not a Google word-count metric or an AdSense eligibility threshold.

The mobile checks are render smoke checks, not a full WCAG or Lighthouse audit. The main page screenshots and DevTools summaries are in this task's tool output. Console errors and warnings were empty during the initial page audit and calculator tests. These observations do not establish long-running or regional behavior of third-party advertising scripts.

One later homepage revisit failed with ERR_CONNECTION_CLOSED. The browser then could not navigate its generated data-URL error page. A fresh tab successfully loaded the site and completed the count pass. This is recorded as a transient observation, not evidence of a persistent production outage.

## URL inventory

For every row: main document HTTP **200**; no redirect observed for the listed URL; final URL and canonical both equal the linked URL; mobile render smoke check passed; captured console errors **0**.

### Original 19 URLs

| URL (also final URL and canonical) | Main words | Assessment | Verdict |
| --- | ---: | --- | --- |
| [Home](https://wattandwall.com/) | 751 | Useful directory/overview; repeated marketing and storage claims will need consistency updates | Keep |
| [/privacy](https://wattandwall.com/privacy) | 529 | Covers Analytics, AdSense cookies, Google consent flow for EEA/UK/Switzerland; actual CMP behavior unverified | Keep |
| [/terms](https://wattandwall.com/terms) | 303 | Adequate scope explanation; says review before advertising features despite existing ad code | Keep |
| [/disclaimer](https://wattandwall.com/disclaimer) | 322 | Useful planning and safety limits | Keep |
| [/contact](https://wattandwall.com/contact) | 213 | Public email, correction instructions; no phone number found | Keep |
| [/about](https://wattandwall.com/about) | 353 | Refers to a project team; technical/SEO prose distracts from the real owner | Rewrite |
| [/methodology](https://wattandwall.com/methodology) | 443 | Useful explanation; scope and storage statements need to follow new functionality | Keep |
| [/calculators](https://wattandwall.com/calculators) | 254 | Appropriate index, seven calculators | Keep |
| [/guides](https://wattandwall.com/guides) | 199 | Appropriate index, eight guides | Keep |
| [/calculators/electricity-cost](https://wattandwall.com/calculators/electricity-cost) | 625 | Useful baseline tool; function duplicates appliance calculator | Keep |
| [/calculators/appliance-running-cost](https://wattandwall.com/calculators/appliance-running-cost) | 622 | Same four physical inputs and six core outputs as electricity calculator | Rewrite |
| [/calculators/paint-quantity](https://wattandwall.com/calculators/paint-quantity) | 691 | Distinct tool, example, assumptions, formula and sources | Keep |
| [/calculators/flooring-tile](https://wattandwall.com/calculators/flooring-tile) | 629 | Distinct tool with whole-pack rounding | Keep |
| [/guides/electricity-costs](https://wattandwall.com/guides/electricity-costs) | 347 | Thin; partly repeats appliance scheduling and kWh calculation | Rewrite |
| [/guides/appliance-energy-use](https://wattandwall.com/guides/appliance-energy-use) | 344 | Thin; partly repeats cost formula and scheduling | Rewrite |
| [/guides/paint-and-flooring-measurements](https://wattandwall.com/guides/paint-and-flooring-measurements) | 328 | Useful distinct checklist, lacks worked measurement examples/table | Expand |
| [/guides/home-energy-audit](https://wattandwall.com/guides/home-energy-audit) | 239 | Thin overview; needs a usable recording and prioritization workflow | Expand |
| [/guides/energyguide-labels](https://wattandwall.com/guides/energyguide-labels) | 247 | Thin; tells reader to enter annual energy into a wattage-only calculator | Expand |
| [/how-it-works](https://wattandwall.com/how-it-works) | 558 | Useful operational explanation | Keep |

### Seven additional live URLs

| URL (also final URL and canonical) | Main words | Assessment | Verdict |
| --- | ---: | --- | --- |
| [/calculators/furniture-fit](https://wattandwall.com/calculators/furniture-fit) | 392 | Distinct useful tool; could better explain orientation and worked checks | Expand |
| [/calculators/rug-size](https://wattandwall.com/calculators/rug-size) | 354 | Distinct useful tool; needs worked layout comparisons | Expand |
| [/calculators/curtain-measurement](https://wattandwall.com/calculators/curtain-measurement) | 355 | Distinct useful tool; explain odd panel counts and packaged pairs | Expand |
| [/guides/measuring-rooms-and-furniture](https://wattandwall.com/guides/measuring-rooms-and-furniture) | 231 | Thin but distinct measurement topic | Expand |
| [/guides/choosing-rug-size](https://wattandwall.com/guides/choosing-rug-size) | 238 | Thin but distinct placement topic | Expand |
| [/guides/measuring-curtains](https://wattandwall.com/guides/measuring-curtains) | 226 | Thin but distinct mounting/fullness topic | Expand |
| [/editorial-policy](https://wattandwall.com/editorial-policy) | 250 | Useful owner and correction policy | Keep |

Keep means retain the page's purpose, not prohibit later requested accessibility, factual, or consistency fixes. Thin is an editorial judgment based on limited worked examples, decision support and depth, not word count alone.

## Calculator verification

Each test was entered into the live form through its labelled controls. All seven tests matched independent arithmetic. Annual energy/cost on the two energy calculators deliberately repeats the entered month 12 times, as disclosed; it is not automatically a 365-day year.

| Calculator | Entered test inputs | Independent expected result | Live result |
| --- | --- | --- | --- |
| Electricity | 1,500 W; 6 h/day; 30 days; USD 0.16/kWh | 9 kWh/day; 270 kWh/month; USD 43.20/month; USD 518.40/year | Match |
| Appliance | 1,200 W; 0.5 h/day; 26 days; USD 0.20/kWh | 0.6 kWh/day; 15.6 kWh/month; USD 3.12/month; USD 37.44/year | Match |
| Paint | 14 × 12 ft; 9 ft walls; 2 doors; 3 windows; 2 coats; 350 sq ft/US gal; 10% allowance | 468 gross sq ft − 85 opening allowance = 383 sq ft; 766/350 × 1.10 = 2.40742857 US gal; display 2.41 US gal/9.11 L; round up to 3 US gal | Match |
| Flooring | 14 × 11 ft; 23.21 sq ft/unit; 12% allowance | 154 × 1.12 = 172.48 sq ft; ceil(172.48/23.21) = 8 units | Match |
| Furniture | Room 350 × 250 cm; furniture 210 × 95 × 90 cm; requested clearance 60 cm; opening 85 × 200 cm | Standard orientation leaves 140 and 155 cm; centered minimum clearance 70 cm; requested clearance available; opening needs review | Match |
| Rug | Dining layout; room 420 × 320 cm; table 160 × 90 cm; extension 65 cm each side | Rug 290 × 220 cm; exposed floor 65 cm at each length end and 50 cm at each width side | Match |
| Curtains | Window 150 cm; extension 20 cm each side; 2× fullness; panel 135 cm; drop 225 cm | Rod 190 cm; fabric width 380 cm; ceil(380/135) = 3 panels; drop 225 cm | Match |

Test figures are explicitly chosen audit inputs, not claimed household averages or sourced product specifications. Paint uses the tool's disclosed fixed allowances of 20 sq ft/door and 15 sq ft/window. Furniture's opening warning is preliminary, not proof that a real delivery cannot be made. Curtains rounds individual panels; it does not promise a symmetrical pair arrangement.

The electricity Copy result action reported successful copying. Every calculator already has a copy-result button. Both energy calculator components already list USD, CAD, GBP, EUR, INR and AUD. The audit did not exhaustively test each existing currency/copy combination. A focused source search found no localStorage/URLSearchParams/searchParams handling in the calculator components.

## Duplicate comparison

Compared the rendered main text after removing navigation. Normalize to lowercase ASCII alphanumeric tokens, create sets of consecutive five-word phrases, and count the intersection. Jaccard is intersection / union. This measures exact wording, not semantic duplication or Google's internal score.

| Pair | Unique five-word phrases A/B | Shared | Shared fraction of each page | Jaccard |
| --- | --- | ---: | --- | ---: |
| Electricity / appliance calculators | 639 / 639 | 136 | 21.28% / 21.28% | 11.91% |
| Electricity / appliance guides | 347 / 347 | 4 | 1.15% / 1.15% | 0.58% |

The calculator overlap is primarily functional. Both take power, hours, active days and rate, and return day/month/year energy and cost. Electricity adds a W/kW selector and power conversion output. The six common numeric outputs use equivalent arithmetic. Source inspection of lib/calculators/electricity-cost.ts and lib/calculators/appliance-running-cost.ts confirms this.

The guides are not copies of the same prose. Both nevertheless cover power, a usage schedule, kWh cost and reasons the bill differs. The electricity guide introduces units/rates; the appliance guide gives more attention to nameplates and cycling. Build on those existing differences.

## Proposed treatment of duplicates

1. Retain /calculators/electricity-cost as the quick known-load calculation. Preserve its W/kW control and transparent daily/monthly/yearly output.
2. Rewrite /calculators/appliance-running-cost as a multi-appliance inventory with 25–30 source-backed selectable wattage examples, per-appliance duty cycle, and a combined monthly table. Label presets as examples, not universal appliance ratings. Distinguish rated-on wattage from measured average power so duty cycle is not applied twice.
3. Rewrite /guides/electricity-costs around reading a tariff: energy charges versus fixed charges, flat/tiered/time-of-use rates, and why an appliance estimate differs from a whole bill. Use worked examples with explicit assumptions.
4. Rewrite /guides/appliance-energy-use around obtaining a useful consumption input: nameplate, compatible meter readings, annual kWh labels, cycling, and seasonal schedules. Link to the tariff guide rather than reteaching it.
5. Retain both guide URLs. No page deletion, merge, or redirect proposed. The five starter SVG deletions remain pending the separate Checkpoint 2 approval, as requested.

## Corrections to the brief and scope decision

- The live inventory is 26 URLs, not 19: seven calculators, eight guides, how-it-works, home, two indexes and seven trust/policy pages. Excluding home/index/trust routes gives 16 candidate content routes already, although many are thin and two calculator functions overlap. These are our inventory categories, not retrieved Google classifications.
- Adding eight new guides while retaining all existing routes would yield 34 URLs and 24 candidate calculator/guide/how-it-works routes. Adding ten would yield 36 URLs and 26 candidate content routes. That conflicts with the brief's 15–17 final target. Recommendation: deepen the eight existing guides first; confirm whether Phase 3 still requires eight additional URLs or can use substantial rewrites toward the quality target. No deletion is needed to resolve this.
- The supplied example of a 1,500 W heater running 6 h/day at USD 0.16/kWh costing USD 27/month is incorrect for a 30-day month. It is USD 43.20/month. The live calculator produced the correct value.
- Copy-result functionality and currency choices are already implemented. Preserve and improve them instead of rebuilding them.
- About uses “The Watt & Wall project team” and “The team.” Replace these with accurate first-person owner wording in Phase 4.
- The EnergyGuide guide instructs readers to enter an annual energy figure in a wattage-only form. Correct the content or add a clearly separate annual-kWh mode after agreement on calculator scope.
- Privacy already names Google Analytics, AdSense cookies and Google's Privacy & messaging flow for EEA/UK/Switzerland. This audit did not access the AdSense account or verify the actual regional consent configuration. Policy wording alone cannot prove that the configured CMP matches it. Email text and a mailto link were observed; mailbox deliverability was not tested by sending an email.
- Authorised ads.txt is supplied account information, not proof that every technical or policy condition is satisfied. The observed status/canonical checks support leaving infrastructure alone. No Search Console data or account status was retrieved.
- The requested Lighthouse values remain owner-supplied baselines, not measurements from this phase. No build or Lighthouse run was performed because no application changes were made.

## Approval requested

Approve the retain-and-differentiate plan for Phase 2. Also resolve Phase 3's page-count conflict: prioritize deep rewrites of the existing eight guides toward 15–17 strong content pages, or retain the eight-new-guide requirement and accept a higher final page count.

Work stops here under the objective file's explicit Checkpoint 1 instruction. No Phase 2 implementation or deletion has started.
