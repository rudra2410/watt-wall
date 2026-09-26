# Codebase file audit — 26 September 2026

Scope: every current tracked or newly added repository file that exists in the worktree, excluding generated `.next`, `out`, dependency contents, and Git internals. Public behavior is proven separately by the 34-route production audit. “Reviewed” here means the file was read directly, covered by a focused source search, or validated through its public output and corresponding automated checks. Generated lock and binary files were inspected by role, size, references, and build behavior rather than interpreted as text.

The inventory contains **146 files**. No file is treated as proof of AdSense approval. Dated drafts and planning documents are not public website content.

| File | Review scope | Verdict |
|---|---|---|
| `.claude/launch.json` | Local agent/tooling instructions | Non-runtime; reviewed for workflow constraints. |
| `.gitignore` | Repository ignore rules | Reviewed; generated build and dependency directories remain untracked. |
| `AGENTS.md` | Local agent/tooling instructions | Non-runtime; reviewed for workflow constraints. |
| `app/about/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/appliance-running-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/curtain-measurement/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/electricity-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/flooring-tile/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/furniture-fit/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/paint-quantity/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/calculators/rug-size/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/contact/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/disclaimer/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/editorial-policy/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/globals.css` | Global tokens, responsive styles and focus behavior | Reviewed; production Lighthouse Accessibility is 100. |
| `app/guides/appliance-energy-use/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/choosing-rug-size/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/dehumidifier-ief-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/electric-water-heater-use/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/electricity-costs/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/energyguide-labels/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/fridge-energyguide-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/home-energy-audit/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/measuring-curtains/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/measuring-rooms-and-furniture/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/paint-and-flooring-measurements/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/space-heater-monthly-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/standby-device-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/tile-waste-boxes/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/vaulted-ceiling-paint/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/guides/window-ac-cost/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/how-it-works/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/icon.png` | Generated/share metadata asset | Build output verified; no blocking issue found. |
| `app/layout.tsx` | Global metadata, AdSense and Analytics loading | Verified in export and production; performance optimization deployed. |
| `app/methodology/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/not-found.tsx` | 404 content and recovery navigation | Reviewed; heavy illustration reference replaced with optimized WebP. |
| `app/opengraph-image.tsx` | Generated/share metadata asset | Build output verified; no blocking issue found. |
| `app/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/privacy/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/robots.ts` | Crawl-control static output | Production output and HTTP 200 verified. |
| `app/sitemap.ts` | Crawl-control static output | Production output and HTTP 200 verified. |
| `app/terms/page.tsx` | Public route content, metadata, links and structured data | Covered by the 34-route audit and production mobile verification. |
| `app/twitter-image.tsx` | Generated/share metadata asset | Build output verified; no blocking issue found. |
| `CLAUDE.md` | Local agent/tooling instructions | Non-runtime; reviewed for workflow constraints. |
| `components/calculators/appliance-running-cost-calculator.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/calculators/calculator-card.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/calculators/calculator-shell.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/calculators/decor-calculators.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/calculators/electricity-cost-calculator.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/calculators/flooring-tile-calculator.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/calculators/paint-quantity-calculator.tsx` | Calculator UI, persistence and result presentation | Reviewed with formula tests and clean-browser behavior checks. |
| `components/layout/container.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/marketing/calculator-categories-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/calculator-icon.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/faq-accordion.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/faq-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/featured-calculators-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/final-cta-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/guide-highlights-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/hero-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/how-it-works-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/marketing/trust-section.tsx` | Homepage content, cards and interactive FAQ | Reviewed in homepage audit and mobile production pass. |
| `components/mobile-navigation.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/navigation-links.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/seo/structured-data.tsx` | JSON-LD generation | Organization, WebSite, Article, WebApplication and breadcrumb output inspected. |
| `components/site-footer.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/site-header.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/site-logo.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/trust-page-shell.tsx` | Shared navigation, shell or layout component | Reviewed across production routes at mobile width. |
| `components/ui/button.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `components/ui/card.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `components/ui/icon.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `components/ui/input.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `components/ui/label.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `components/ui/section-heading.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `components/ui/select.tsx` | Shared accessible UI primitive | Reviewed through consumers; focus/label behavior and Lighthouse accessibility verified. |
| `data/appliance-presets.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/appliance-running-cost.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/calculators.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `data/calculators.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/electricity-cost.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/energy-reference.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/flooring-tile.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/home.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `data/home.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `data/paint-quantity.ts` | Shared calculator, homepage or reference content | Reviewed against route output and registry/content tests. |
| `docs/adsense-checkpoint-1-2026-09-07.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/adsense-checkpoint-2-2026-09-08.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/adsense-checkpoint-3-drafts-2026-09-08.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/adsense-final-verification-2026-09-09.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/adsense-low-value-content-route-audit-2026-09-25.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/adsense-readiness-verification-2026-09-26.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/adsense-rejection-audit-2026-09-25.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/drafts/dehumidifier-ief-cost.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/electric-water-heater-use.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/fridge-energyguide-cost.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/space-heater-monthly-cost.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/standby-device-cost.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/tile-waste-boxes.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/vaulted-ceiling-paint.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/drafts/window-ac-cost.md` | Historical editorial draft, not shipped at runtime | Retained as provenance; live route content is audited separately. |
| `docs/HOME_ENERGY_RENOVATION_PRD.md` | Historical planning document, not shipped at runtime | Contains earlier prototype scope; retained as historical context, not current product state. |
| `docs/IMPLEMENTATION_PLAN.md` | Historical planning document, not shipped at runtime | Contains earlier prototype scope; retained as historical context, not current product state. |
| `docs/phase-2-source-ledger.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/phase-3-research-ledger-2026-09-09.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/RESEARCH_LOG.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/source-link-check-2026-09-26.json` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `docs/source-link-check-2026-09-26.md` | Research, source or audit evidence, not shipped at runtime | Reviewed for current evidence or retained as dated historical record. |
| `eslint.config.mjs` | Build, lint, package or TypeScript configuration | Reviewed through clean lint, typecheck, tests and static build. |
| `lib/0275a47d72b467c619ad1222d4c261be.jpg` | Binary asset in source folder | No runtime reference found; 42 KB. Preserved because deletion was not requested. |
| `lib/analytics.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/analytics.ts` | Shared SEO, analytics, site configuration or utility logic | Reviewed; typecheck/tests/build passed. |
| `lib/calculators/appliance-inventory.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/calculators/appliance-running-cost.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/calculators.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/calculators/conversions.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/curtain-measurement.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/decor-tools.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/calculators/electricity-cost.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/flooring-tile.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/formatting.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/furniture-fit.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/measurements.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/paint-quantity.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/persistence.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/rug-size.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/calculators/validation.ts` | Calculator formula, validation, conversion or persistence logic | Reviewed and covered by calculator tests. |
| `lib/home-hero-example.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/home-hero-example.ts` | Shared SEO, analytics, site configuration or utility logic | Reviewed; typecheck/tests/build passed. |
| `lib/seo.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/seo.ts` | Shared SEO, analytics, site configuration or utility logic | Reviewed; typecheck/tests/build passed. |
| `lib/site.test.ts` | Automated regression coverage | Included in the passing 9-file, 54-test suite. |
| `lib/site.ts` | Shared SEO, analytics, site configuration or utility logic | Reviewed; typecheck/tests/build passed. |
| `lib/utils.ts` | Shared SEO, analytics, site configuration or utility logic | Reviewed; typecheck/tests/build passed. |
| `next.config.ts` | Build, lint, package or TypeScript configuration | Reviewed through clean lint, typecheck, tests and static build. |
| `package.json` | Build, lint, package or TypeScript configuration | Reviewed through clean lint, typecheck, tests and static build. |
| `pnpm-lock.yaml` | Generated dependency lockfile | Dependencies resolve; lint, typecheck, tests and build pass. |
| `pnpm-workspace.yaml` | Build, lint, package or TypeScript configuration | Reviewed through clean lint, typecheck, tests and static build. |
| `postcss.config.mjs` | Build, lint, package or TypeScript configuration | Reviewed through clean lint, typecheck, tests and static build. |
| `public/ads.txt` | AdSense seller authorization | Publisher ID matches code and production file returns HTTP 200. |
| `public/men.webp` | 404 illustration | Optimized to 52,776 bytes; transparency and visual output inspected. |
| `public/watt-wall-logo.webp` | Brand/logo asset | 12,356 bytes; referenced by header, metadata and Organization JSON-LD. |
| `README.md` | Current project setup and deployment documentation | Starter text replaced with Watt & Wall-specific instructions. |
| `tsconfig.json` | Build, lint, package or TypeScript configuration | Reviewed through clean lint, typecheck, tests and static build. |

## Cross-file findings

- The public route registry, sitemap, directory data, navigation and exported output agree on 34 public URLs.
- The only unreferenced runtime-adjacent binary found is `lib/0275a47d72b467c619ad1222d4c261be.jpg`. It is 42 KB and is preserved because deleting an unexplained user-owned asset was outside the requested action.
- Historical PRD, implementation-plan and draft files contain earlier prototype language. They do not render on the website; current production facts are in the README and dated audit reports.
- The starter README was inaccurate and has been replaced. The 404 PNG exceeded the project’s 100 KB image target and has been replaced by a 52,776-byte WebP.
- Source scans found no public placeholder/lorem copy, fake testimonial, fabricated phone number or unsupported owner qualification.

