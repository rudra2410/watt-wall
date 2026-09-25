# AdSense rejection investigation — 25 September 2026

## Confirmed account evidence
Read the supplied 23 September email and the authenticated AdSense Sites list and site detail page through the browser on 25 September.
- Site: wattandwall.com
- Approval status: Needs attention
- Status detail: Low-value content
- Ads.txt: Authorised
- Last updated: 23 September 2026, 13:38 IST
- Detail URL: https://adsense.google.com/adsense/u/0/pub-1759137058910390/sites/detail/url=wattandwall.com

The detail message calls for substantial unique value, a consistent presence on the web, and genuine user interest. Its checklist asks for authentic high-quality information/tools/services, ongoing curation and structural maintenance, and sustained genuine user interest. It does not identify an offending URL, score, minimum word count, traffic threshold, or exact weighting. The email itself only announces rejection and directs the owner to Sites.

The account also displays an activation banner mentioning payment info and connecting a site. No payment details were inspected, so the precise outstanding activation task is unverified. This banner is separate from the explicit Low-value content rejection.

## Findings and confidence

### 1. Reproduced appliance inventory defect (confirmed)
URL: https://wattandwall.com/calculators/appliance-running-cost
Steps: add a second appliance; enter 100 W; reload the resulting shareable URL; add a third appliance; change the third wattage to 200 W. Both second and third wattages become 200 W. The DOM contains duplicate appliance-2-* IDs.
Code: components/calculators/appliance-running-cost-calculator.tsx:28-29 restores row IDs as index+1 but always initializes nextId to 2. updateRow updates every matching ID. This can change the wrong appliance and distort the total.
This is a demonstrable usability defect, not proof that Google specifically detected it.

### 2. Hydration mismatch (observed production error; matching code cause)
The production appliance page emitted React error #418 when the saved browser rate was 0.16 instead of the static default 0.1834. Initial state reads browser URL/localStorage, whereas static rendering cannot read them. The app subsequently renders, so this was not a persistent blank page. Shared URL restoration also differs from the static default. Re-test in an isolated browser when implementing the repair.
Reference: https://react.dev/errors/418

### 3. Content differentiation remains a plausible weakness (editorial assessment)
Window AC and heater guides contain useful worked arithmetic but also repeat similar instructions about rate, schedules, duty cycle, observation logs, and limits. In window-ac-cost, 'Use a meter for a real comparison' and 'Keep an observation log' overlap in purpose. The examples are explicitly chosen scenarios, not original field measurements. This is honest, but longer text alone does not demonstrate additional originality.
Recommended improvement: replace repetition with specific decision aids, reproducible product comparisons and substantive original worked cases. Do not invent measured results. Original diagrams would be useful on rug, curtain and furniture measurement pages; photos or diagrams are not an AdSense requirement.

### 4. Direct source attribution gaps (confirmed)
Five guides name EIA as the basis for a rate but have no direct EIA link in main content: window-ac-cost, space-heater-monthly-cost, electric-water-heater-use, dehumidifier-ief-cost, standby-device-cost. Related guides may link EIA, but the direct claim is harder to verify on the page itself.
All 16 guide main bodies lack a visible Rudra byline (the global footer names the owner; Article JSON-LD names the author). Add a visible author/About link and meaningful source review information as a trust improvement, not a claimed mandatory AdSense rule.

### 5. Misleading browser-storage wording (confirmed)
The appliance UI says 'Values stay in this browser session.' Yet it writes input rows into URL parameters and rate into localStorage. The privacy policy describes possible Google Analytics page-location query collection. The short UI statement needs to match this behavior. This is a consistency issue, not a confirmed rejection trigger.

### 6. User-interest requirement remains unmeasured
The account message explicitly mentions genuine user interest. No fresh Search Console or Analytics performance data was retrieved during this investigation. The older August/September numbers cannot establish today's audience or a traffic-based cause. Do not invent a minimum visitors requirement or promise approval after a fixed waiting period.

## Technical checks that passed
- All 34 sitemap URLs returned HTTP 200 with one H1 in main and the expected canonical.
- HTTP homepage redirects to HTTPS with 301.
- robots.txt, sitemap.xml, ads.txt return 200; robots allows crawling and lists the sitemap.
- ads.txt publisher ID matches the account; AdSense reports Authorised.
- A deliberately nonexistent path returns 404.
- No exact paragraph repeated across different main bodies was found among paragraphs of at least 20 words using a simple HTML text extraction. This is not a plagiarism check or proof that topics are distinct.
- This was a read-only investigation of application/account settings. No site code or AdSense settings changed; no review submitted.

## Live page inventory
Word counts are approximate extracted main-content counts, excluding navigation/footer and JSON-LD. They include form labels, tables and FAQ text present in HTML, and are not directly comparable to earlier visible-only counts. They are not approval thresholds.

| Path | HTTP | Approx. words | H1 | Canonical |
|---|---:|---:|---:|---|
| / | 200 | 935 | 1 | Correct |
| /about | 200 | 158 | 1 | Correct |
| /calculators | 200 | 509 | 1 | Correct |
| /calculators/appliance-running-cost | 200 | 1431 | 1 | Correct |
| /calculators/curtain-measurement | 200 | 366 | 1 | Correct |
| /calculators/electricity-cost | 200 | 823 | 1 | Correct |
| /calculators/flooring-tile | 200 | 647 | 1 | Correct |
| /calculators/furniture-fit | 200 | 398 | 1 | Correct |
| /calculators/paint-quantity | 200 | 711 | 1 | Correct |
| /calculators/rug-size | 200 | 361 | 1 | Correct |
| /contact | 200 | 218 | 1 | Correct |
| /disclaimer | 200 | 326 | 1 | Correct |
| /editorial-policy | 200 | 256 | 1 | Correct |
| /guides | 200 | 579 | 1 | Correct |
| /guides/appliance-energy-use | 200 | 1107 | 1 | Correct |
| /guides/choosing-rug-size | 200 | 1004 | 1 | Correct |
| /guides/dehumidifier-ief-cost | 200 | 806 | 1 | Correct |
| /guides/electric-water-heater-use | 200 | 787 | 1 | Correct |
| /guides/electricity-costs | 200 | 954 | 1 | Correct |
| /guides/energyguide-labels | 200 | 842 | 1 | Correct |
| /guides/fridge-energyguide-cost | 200 | 950 | 1 | Correct |
| /guides/home-energy-audit | 200 | 865 | 1 | Correct |
| /guides/measuring-curtains | 200 | 825 | 1 | Correct |
| /guides/measuring-rooms-and-furniture | 200 | 885 | 1 | Correct |
| /guides/paint-and-flooring-measurements | 200 | 998 | 1 | Correct |
| /guides/space-heater-monthly-cost | 200 | 811 | 1 | Correct |
| /guides/standby-device-cost | 200 | 785 | 1 | Correct |
| /guides/tile-waste-boxes | 200 | 813 | 1 | Correct |
| /guides/vaulted-ceiling-paint | 200 | 983 | 1 | Correct |
| /guides/window-ac-cost | 200 | 784 | 1 | Correct |
| /how-it-works | 200 | 649 | 1 | Correct |
| /methodology | 200 | 984 | 1 | Correct |
| /privacy | 200 | 635 | 1 | Correct |
| /terms | 200 | 307 | 1 | Correct |

## Recommended order before another review
1. Repair and test the reproduced inventory bug and client restoration/hydration behavior.
2. Improve a small number of core pages with genuinely distinct decision support and original artifacts, rather than adding generic word count.
3. Fix direct citations, visible authorship and storage wording. Verify consent behavior against the published privacy statement separately.
4. Review current Search Console/Analytics evidence for useful landing pages and user engagement; continue genuine maintenance and audience development.
5. Resubmit only after substantial verified changes. A guaranteed outcome or fixed traffic threshold cannot be inferred from this rejection.

## Official guidance consulted
- https://support.google.com/adsense/answer/10015918
- https://support.google.com/adsense/answer/12176698?hl=en
- https://support.google.com/adsense/answer/7299563?hl=en
- https://support.google.com/publisherpolicies/answer/11112688?hl=en-GB

These sources emphasize original value and usability. Tool-based sites are not categorically excluded; the current account message explicitly includes tools and services.
