# AdSense readiness verification — 26 September 2026

This report records current-state checks after the Low-value content remediation. It does not predict or guarantee AdSense approval. Google's account identified a site-level Low-value content issue and did not identify a specific offending URL.

## Public-route coverage

- Compared the live sitemap with the route-by-route audit: all 34 sitemap URLs have a written judgment in `adsense-low-value-content-route-audit-2026-09-25.md`.
- Requested all 34 sitemap URLs from production: 34 returned HTTP 200 and none failed.
- Inspected all 34 routes in a clean browser at a 375 × 812 viewport: every page had exactly one H1, a matching canonical, non-empty main content, at least one JSON-LD block, and zero document-level horizontal overflow.
- The same 34-route browser session captured no application console errors.
- The static export contains 36 HTML files, including the public routes and the generated not-found document. The production build generated 41 static route outputs when metadata images, robots and sitemap outputs are included.

## Calculator verification

- `pnpm test`: 9 test files and 54 tests passed.
- The tests cover electricity cost from watts and known kWh, appliance schedules and duty cycle, multi-appliance totals, paint openings/coats/coverage/waste, flooring waste and whole-unit rounding, furniture orientation/clearance, rug extension and room fit, curtain fullness and panel rounding, and invalid input handling.
- A production saved-URL test restored two appliance rows, added an independent third row, and produced the expected $23.04 monthly total without duplicate row IDs.
- Saved furniture, rug and curtain inputs restored in clean-browser checks. These are browser-behaviour checks in addition to the formula tests.

## Production Lighthouse

Lighthouse 12.8.2 tested `https://wattandwall.com/` with its mobile profile in installed Google Chrome. These are lab results and may vary between runs.

| Production state | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| Initial run | 80 | 100 | 79 | 100 | 4.0 s | 270 ms | 0 |
| Repeat initial run | 84 | 100 | 79 | 100 | 3.0 s | 330 ms | 0 |
| AdSense loader set to low fetch priority | 88 | 100 | 79 | 100 | 2.8 s | 270 ms | 0 |
| Analytics deferred to interaction or six seconds after load | **90** | **100** | **79** | **100** | **2.9 s** | **180 ms** | **0** |

The final Best Practices result is reduced by the AdSense/DoubleClick `test_cookie` and the corresponding Chrome Issues-panel entry. Lighthouse attributed those failures to Google's ad request, not an application exception. The publisher tag remains executable in the exported document head, uses the correct `ca-pub-1759137058910390` ID, and has low fetch priority. Analytics retains `G-79MBBEXME0` and loads on the first pointer, keyboard or scroll interaction, or six seconds after window load.

## Content and source evidence

- The explicit [codebase file audit](codebase-file-audit-2026-09-26.md) inventories all 147 current repository files, including the audit itself, with their review scope and verdict. Generated build/dependency contents are excluded.
- Twelve documented research queries cover official AdSense content/readiness/policy guidance, Google Search helpful-content and spam guidance, and clearly labelled community experience reports.
- All 34 public routes have a content/SEO judgment. Approximate main-content word counts, status, H1 and canonical checks are in `adsense-rejection-audit-2026-09-25.md`.
- The external-source inventory contains 35 literal route links plus the shared PG&E reference. Thirty-three raw requests returned 200. Willmar and Lowe's returned 403 to the automated client but were readable through web retrieval, so they are recorded as access restrictions rather than confirmed dead links.
- Unsupported credentials, testimonials, savings promises and page-count or traffic guarantees were not added. The visible guide byline links to the accurate About page.
- The stale starter README was replaced with the actual static-export, validation and Cloudflare deployment workflow. The 404 illustration was converted from a 365,846-byte PNG to a visually inspected 52,776-byte WebP while retaining its transparent 626 × 626 canvas.

## Remaining external decisions

- AdSense approval remains Google's decision. No disclosed rule promises approval after a particular word count, page count, traffic figure or Lighthouse score.
- Search Console recrawling and reindexing take time. The September 21 indexing snapshot is evidence of prior crawl state, not the state after these deployments.
- No new AdSense review has been requested. The owner must approve that account action after reviewing this evidence.
