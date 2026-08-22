# Watt & Wall Implementation Plan

Status: Active  
Source of truth: `docs/HOME_ENERGY_RENOVATION_PRD.md`  
Delivery rule: research, decide, implement, and verify one bounded stage at a time.

## 1. Objective and fixed constraints

Build the Watt & Wall prototype as a fast, accessible, SEO-ready calculator website using the approved PRD. The implementation must preserve the approved page hierarchy, Claude+ visual direction, four calculator scope, original trust content, and site-wide Light, Dark, and System themes.

The workspace currently contains documentation only. There is no existing application code or Git history to preserve. Node 22.21.1, npm 10.9.4, and pnpm 10.15.0 are available.

Non-negotiable constraints:

- Latest stable Next.js App Router, React, strict TypeScript, Tailwind CSS v4, and ESLint.
- Server Components for content and metadata; Client Components only for theme controls and calculator interaction.
- No database, authentication, CMS, global state library, analytics abstraction, animation framework, or ad code in the prototype.
- No fake statistics, testimonials, ratings, savings claims, or AdSense-approval claims.
- No explicit or implicit `any` types.
- Every public page and interactive state must work in Light, Dark, and System modes.

## 2. Per-stage research and delivery gate

Every stage below must pass the same gate before the next stage begins.

1. **Audit:** inspect the current route, related components, data, utilities, styles, tests, and shared dependencies with `rg` and targeted file reads.
2. **Research:** run searches sequentially by question, not as one broad query. Use at least 10 relevant searches when the stage has material UX, accessibility, SEO, performance, browser, or formula decisions. Prefer official documentation and primary sources; trusted implementation guides may supplement them.
3. **Record:** append the queries, useful sources, findings, rejected alternatives, and chosen approach to `docs/RESEARCH_LOG.md`.
4. **Decision:** define component boundaries, server/client ownership, semantics, responsive behavior, theme states, and verification criteria before editing.
5. **Implement:** make the smallest bounded change for the current stage. Keep content/data separate from presentation and formula logic separate from UI.
6. **Static verification:** run targeted tests plus lint and typecheck. Run the production build whenever routing, metadata, fonts, configuration, or server/client boundaries change.
7. **Browser verification:** test desktop, tablet, and mobile; Light and Dark; keyboard navigation; focus; 200% zoom; overflow; console errors; and relevant user interactions.
8. **Close:** record evidence and known limitations. Do not mark a stage complete when a required check is skipped or fails.

Ten searches are a floor where necessary, not a quota. Repeated or low-value searches do not count. Pure copy/layout stages can reuse already-validated standards only when the research log explicitly maps those sources to the new decision.

## 3. Delivery sequence

### Stage 0 — Project foundation

Scope:

- Scaffold the Next.js application and initialize Git without overwriting the PRD.
- Configure App Router, strict TypeScript, ESLint, Tailwind v4, path aliases, pnpm lockfile, Vitest, and scripts for `lint`, `typecheck`, `test`, and `build`.
- Establish `app`, `components`, `components/ui`, `lib`, `data`, and test organization.
- Add baseline metadata configuration and a minimal semantic root layout.

Research topics: current Next.js setup and Node support, App Router structure, Server/Client Components, Tailwind v4 Next setup, strict TypeScript, Vitest, metadata, production checklist, and dependency minimization.

Exit checks: clean install, lint, typecheck, test, and production build pass; no starter placeholder content remains.

### Stage 1 — Design system and theme foundation

Scope:

- Install only required shadcn-compatible dependencies and source-owned primitives.
- Apply the exact approved Claude+ OKLCH tokens, radii, shadows, spacing, Outfit, and Geist Mono.
- Implement Light, Dark, and System with `next-themes`, persisted user choice, system fallback, hydration-safe rendering, and no mixed-theme states.
- Build shared container, button, card, badge, input, select, result, notice, breadcrumb, and section-heading patterns.

Research topics: Tailwind theme variables, class-based dark mode, shadcn Next setup, next-themes hydration, accessible color contrast, focus visibility, reduced motion, target size, and `next/font`.

Exit checks: temporary component matrix passes both themes at mobile/tablet/desktop, keyboard and focus checks, 200% zoom, reduced motion, lint, typecheck, and build.

### Stage 2 — Header

Audit first: root layout, site configuration, navigation data, logo component, button primitive, theme control, focus styles, and responsive utilities.

Scope:

- Semantic site header and nav with Watt & Wall brand.
- Links: Calculators, Methodology, About.
- Primary “Browse calculators” action.
- Accessible Light/Dark/System control.
- Responsive mobile navigation with correct keyboard, focus, escape, and outside-interaction behavior if a disclosure is required.

Research topics: landmark/navigation semantics, current-page indication, mobile disclosure patterns, menu keyboard interaction, touch targets, sticky header tradeoffs, theme-toggle labels, reduced motion, responsive navigation, and Next.js Link behavior.

Exit checks: all links, focus order, keyboard paths, mobile behavior, both themes, zoom, overflow, console, lint, typecheck, and build.

### Stage 3 — Hero

Audit first: home route, header height, container/type/button/card primitives, calculator registry, and responsive spacing.

Scope:

- One clear benefit-led H1 and supporting copy.
- Primary calculator-directory CTA and secondary methodology link if useful.
- Honest sample calculation card generated from approved formula data, not an invented claim.
- Responsive composition with stable dimensions and no unnecessary media.

Research topics: landing-page heading hierarchy, CTA clarity, calculator-site search intent, above-the-fold accessibility, responsive typography, content readability, CLS prevention, performance budgets, reduced motion, and internal-link semantics.

Exit checks: single useful H1, CTA destinations, sample math accuracy, no unsupported claims, LCP/CLS-sensitive layout, both themes and all target viewports.

### Stage 4 — Featured calculator cards

Audit first: typed calculator registry, card/link primitives, routing, icons, and home-page section composition.

Scope:

- Four crawlable cards for Electricity Cost, Appliance Running Cost, Paint Quantity, and Flooring/Tile.
- Each card explains its input/output value in plain language and has a descriptive link.
- Whole-card interaction must not create duplicate or nested interactive controls.

Research topics: card semantics, descriptive links, touch targets, icon accessibility, internal linking, information scent, equal-height responsive grids, hover/focus parity, dark-mode elevation, and crawlability.

Exit checks: correct routes and names, keyboard activation, no nested controls, responsive grid, both themes, link crawlability, lint, and typecheck.

### Stage 5 — How It Works

Audit first: home section structure, section-heading and step-card patterns, calculator input/result language, and spacing rhythm.

Scope:

- Three steps: enter local values, review the estimate, understand assumptions.
- Use semantic ordered content and concise original copy.

Research topics: procedural-content semantics, reading order, plain-language guidance, cognitive load, icon use, mobile stacking, accessible numbering, reduced motion, and SEO usefulness.

Exit checks: meaningful without icons/CSS, logical screen-reader order, compact mobile layout, both themes, and no duplicated marketing copy.

### Stage 6 — Category links

Audit first: calculator registry taxonomy, route map, internal-link components, and nearby home sections.

Scope:

- Energy and Renovation category groups with clear route links.
- Architecture must support future calculator additions without changing the home-page component.

Research topics: small-site information architecture, topic clusters, breadcrumb/internal-link strategy, descriptive anchors, navigation vs section semantics, responsive grouping, crawl depth, duplicate links, and data-driven rendering.

Exit checks: all calculators reachable, sensible hierarchy, no orphan routes, mobile readability, both themes, and typed registry coverage.

### Stage 7 — Trust section

Audit first: methodology content, source-note primitive, source registry, dates/geography fields, and privacy/disclaimer routes.

Scope:

- Explain formulas, source dates, user-entered local prices, privacy, no signup, and planning-only estimates.
- Link to Methodology, Privacy, and Disclaimer using factual language.

Research topics: Google publisher-content policies, helpful content principles, calculator transparency, source citation, date/geography disclosure, privacy claims, YMYL-adjacent risk, estimate disclaimers, accessible notices, and content originality.

Exit checks: every claim supportable, no approval promise, dated sources, privacy behavior matches implementation, crawlable trust links, both themes.

### Stage 8 — FAQ

Audit first: home content, calculator FAQs, disclosure primitive, metadata/JSON-LD policy, and duplicate-content risk.

Scope:

- Answer real scope, accuracy, locality, privacy, and methodology questions.
- Use native disclosure semantics where appropriate; add FAQ structured data only if current Google guidance and visible content support it.

Research topics: accessible accordion/disclosure behavior, native details tradeoffs, keyboard/focus, FAQ content quality, structured-data eligibility, duplicate FAQ risks, heading hierarchy, progressive enhancement, reduced motion, and mobile readability.

Exit checks: usable without JavaScript where feasible, unique visible answers, correct heading order, no unsupported rich-result expectation, both themes.

### Stage 9 — Final CTA

Audit first: completed home-page narrative, button hierarchy, calculator directory, and adjacent FAQ/footer spacing.

Scope:

- Concise action to browse calculators with an honest supporting line.
- Preserve one primary action and avoid ad-like styling.

Research topics: CTA clarity, deceptive-design avoidance, link/button semantics, contrast, focus, touch size, responsive layout, reduced motion, and visual separation from future ads.

Exit checks: correct destination, no exaggerated claim, distinct from ad inventory, both themes and target viewports.

### Stage 10 — Footer

Audit first: complete route map, site configuration, legal/trust pages, logo, and home-page final section.

Scope:

- Calculator, trust, company, privacy, terms, and disclaimer links.
- Brand summary and current copyright year without client JavaScript.

Research topics: contentinfo semantics, footer navigation labels, legal discoverability, duplicate-link impact, external-link safety if any, mobile column order, focus visibility, contrast, and crawlability.

Exit checks: no broken/orphan links, semantic footer, keyboard access, both themes, mobile wrapping, and build.

### Stage 11 — Calculator engine and directory

Scope:

- Create the typed calculator registry and pure calculation modules first.
- Add boundary, invalid-input, precision, unit-conversion, and PRD-example unit tests.
- Build `/calculators` and shared CalculatorShell before connecting widgets.

Research topics: authoritative formulas and units for all four calculators, numerical precision, locale-safe number input, validation, error messaging, form semantics, result announcements, reset/copy behavior, and calculator SEO patterns.

Exit checks: pure functions fully tested, UI cannot alter formulas, invalid inputs cannot produce misleading results, and directory links all work.

### Stages 12–15 — Four calculator pages

Build one complete vertical slice at a time in this order:

1. Electricity Cost
2. Appliance Running Cost
3. Paint Quantity
4. Flooring/Tile

For each page independently: audit shared code and the formula module; perform the research gate; implement the widget, formula, worked example, assumptions, sources, FAQ, disclaimer, metadata, breadcrumbs, and related links; then verify math, validation, keyboard operation, screen-reader result feedback, themes, responsive layout, and build.

### Stage 16 — Trust, legal, and company pages

Scope:

- Methodology, About, Contact, Privacy, Terms, and Disclaimer.
- Honest contact mechanism appropriate to a static prototype; do not claim message delivery unless implemented and tested.
- Original content tied directly to actual site behavior and data handling.

Exit checks: complete navigation, factual consistency, no placeholders, readable line length, metadata, both themes, and build.

### Stage 17 — SEO and social metadata

Scope:

- Per-route titles/descriptions, metadata base, canonical URLs, Open Graph/Twitter data, icons, generated social image, `robots.ts`, `sitemap.ts`, breadcrumbs, and only eligible validated JSON-LD.
- Confirm custom-domain production values before launch.

Exit checks: inspect rendered head, validate canonical and sitemap URLs, test robots response, validate structured data, and confirm every indexable route is useful and internally linked.

### Stage 18 — Final quality and AdSense-readiness audit

Scope:

- Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, and `git diff --check`.
- Browser-test every route at mobile, tablet, and desktop in Light and Dark, plus System switching.
- Test keyboard-only flows, visible focus, text errors, 200% zoom, reduced motion, contrast, broken links, console errors, formulas, copy/reset, metadata, and structured data.
- Run Lighthouse against the production build for the home page and one representative calculator page; distinguish lab results from real-user Core Web Vitals.
- Review against the PRD’s content-depth and AdSense-readiness gate without promising approval.

Exit checks: all required gates pass, skipped checks and environment limits are explicit, and no placeholder, unsupported claim, broken route, theme inconsistency, or known high-severity accessibility issue remains.

## 4. Dependency and change-safety map

The work flows in one direction:

`foundation → design tokens/primitives → shell → home sections → calculator engine → calculator pages → trust/legal → SEO → final audit`

- Formula modules may depend only on typed inputs and small numeric utilities, never React or presentation components.
- UI components may consume formula outputs but must not reimplement formulas.
- Route/content data may import the calculator registry; the registry must not import route components.
- Shared visual changes require regression checks in both themes and at least one calculator page after those pages exist.
- Research documentation is append-only per completed stage so decisions remain traceable.

## 5. Principal risks and controls

- **Research becomes performative:** count only decision-relevant searches and record how each source changes or confirms implementation.
- **Too much client JavaScript:** enforce explicit Client Component boundaries during every audit.
- **Theme hydration or mixed states:** keep the provider at the root, use class-driven semantic tokens, and delay only the control state that truly requires mounting.
- **Formula regression:** pure functions, unit tests, typed registry, and UI/formula separation.
- **Low-value or generic content:** require worked examples, assumptions, dates, sources, methodology, and original explanatory copy.
- **Accessibility regressions from shared components:** verify primitives before sections and repeat focused browser checks after composition.
- **Ad layout harms usability or CLS later:** no ads now; future slots must be reserved, labeled, and separated from inputs/results.

## 6. Progress ledger

| Stage | Status | Evidence |
|---|---|---|
| 0. Project foundation | Complete | 15-search research log; lint, typecheck, 1/1 tests, and production build pass |
| 1. Design system and themes | Complete | 15-source research; both themes and three viewports verified; all engineering gates pass |
| 2. Header | Complete | 11 focused sources; semantic desktop/mobile navigation, theme control, responsive browser checks, and all engineering gates pass |
| 3. Hero | Complete | 15 focused sources; server-rendered copy/sample, verified arithmetic, both themes, four viewports, and all engineering gates pass |
| 4. Featured calculators | Complete | 16 focused sources; typed registry, semantic card links, responsive 1/2/4 grid, both themes, and all engineering gates pass |
| 5. How It Works | Complete | 14 focused sources; semantic ordered steps, both themes, responsive browser checks, and all engineering gates pass |
| 6. Category links | Complete | 12 focused searches; typed category model, semantic navigation lists, 320px reflow, both themes, and all engineering gates pass |
| 7. Trust section | Complete | 12 focused searches; supportable trust copy, descriptive policy links, both themes, three viewports, and all engineering gates pass |
| 8. FAQ | Complete | 12 focused searches; native no-JS disclosures, six original answers, structured-data restraint, three viewports, both themes, and all engineering gates pass |
| 9. Final CTA | Complete | 12 focused searches; one honest crawlable action, ad-safe separation, both themes, three viewports, and all engineering gates pass |
| 10. Footer | Complete | 14 focused searches; semantic server-rendered footer, typed route groups, both themes, three viewports, and all engineering gates pass |
| 11. Calculator engine/directory | Complete | 15 focused searches; four pure typed formula modules, validation/conversion/formatting tests, shared shell/card, static directory, responsive browser checks, and all engineering gates pass |
| 12. Electricity Cost Calculator | Complete | 15 focused searches; shared formula-backed validation, live accessible results, copy/reset, original sourced guidance, both themes, three viewports, and all engineering gates pass |
| 13. Appliance Running Cost Calculator | Complete | 12 focused searches; watts-only formula-backed form, precise rate display, plain-English interpretation, accessible states/actions, both themes, three viewports, and all engineering gates pass |
| 14. Paint Quantity Calculator | Complete | 12 focused searches; grouped formula-backed inputs, sourced opening/coverage assumptions, transparent waste and rounding, both themes, three viewports, and all engineering gates pass |
| 15. Flooring/Tile Calculator | Pending | — |
| 16. Trust/legal/company pages | Pending | — |
| 17. SEO/social metadata | Pending | — |
| 18. Final audit | Pending | — |
