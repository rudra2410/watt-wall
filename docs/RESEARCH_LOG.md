# Watt & Wall Research Log

This log records research completed immediately before each implementation stage. Sources are recorded with the decisions they informed; a search counts only when it is relevant to a concrete implementation question.

## Stage 0 — Project foundation

Date: 2026-08-22  
Status: Complete.

### Workspace audit

- The workspace contained only `docs/HOME_ENERGY_RENOVATION_PRD.md` before implementation.
- No application files, components, functions, Git repository, or user code existed.
- Available toolchain: Node 22.21.1, npm 10.9.4, pnpm 10.15.0.

### Search sequence and useful sources

1. **Current Next.js installation and Node requirements**  
   Query: `site:nextjs.org/docs app getting-started installation create-next-app Node.js pnpm official`  
   Source: https://nextjs.org/docs/app/getting-started/installation  
   Finding: the official recommended scaffold includes TypeScript, Tailwind, ESLint, App Router, Turbopack, and `@/*`; current minimum Node is 20.9, so Node 22.21.1 is supported.

2. **Current App Router project organization**  
   Query: `site:nextjs.org/docs app getting-started project-structure official`  
   Source: https://nextjs.org/docs/app/getting-started/project-structure  
   Finding: Next.js is intentionally unopinionated; use `app` for route files and top-level `components`, `data`, and `lib` for reusable implementation details.

3. **Server and Client Component boundary**  
   Query: `site:nextjs.org/docs app getting-started server-and-client-components official`  
   Source: https://nextjs.org/docs/app/getting-started/server-and-client-components  
   Finding: pages/layouts are Server Components by default; reserve Client Components for state, event handlers, lifecycle behavior, and browser APIs.

4. **React component/state decomposition**  
   Query: `site:react.dev learn thinking in react state structure components official`  
   Source: https://react.dev/learn/thinking-in-react  
   Finding: keep static content and reusable visual decomposition separate from the smallest interactive state owners.

5. **Tailwind v4 with Next.js**  
   Query: `site:tailwindcss.com/docs installation framework-guides nextjs Tailwind CSS official`  
   Source: https://tailwindcss.com/docs/installation/framework-guides/nextjs  
   Finding: use `@tailwindcss/postcss` and `@import "tailwindcss"` rather than legacy Tailwind configuration.

6. **Tailwind v4 semantic design tokens**  
   Query: `site:tailwindcss.com/docs dark-mode theme variables official Tailwind CSS`  
   Source: https://tailwindcss.com/docs/theme  
   Finding: map approved CSS custom properties into Tailwind utilities with `@theme inline`; keep mode-specific values in `:root` and `.dark`.

7. **Current shadcn installation**  
   Query: `site:ui.shadcn.com/docs installation next official shadcn`  
   Source: https://ui.shadcn.com/docs/installation/next  
   Finding: initialize an existing Next project, retain source ownership of generated UI components, and add only required primitives.

8. **Next.js Light/Dark/System implementation**  
   Query: `site:ui.shadcn.com/docs dark-mode next next-themes official`  
   Source: https://ui.shadcn.com/docs/dark-mode/next  
   Finding: wrap the root layout with `next-themes`, use `attribute="class"`, `defaultTheme="system"`, `enableSystem`, and `suppressHydrationWarning` on `<html>`.

9. **Dark-mode color utility behavior**  
   Query: `site:tailwindcss.com/docs dark-mode theme variables official Tailwind CSS`  
   Source: https://tailwindcss.com/docs/styling-with-utility-classes  
   Finding: prefer semantic token utilities so components do not carry duplicated light/dark color declarations.

10. **Unit and integration testing choices**  
    Query: `site:nextjs.org/docs app guides testing vitest official Next.js`  
    Source: https://nextjs.org/docs/app/guides/testing  
    Finding: use Vitest for pure calculator functions and synchronous components; use browser/E2E verification for composed App Router behavior.

11. **Metadata and crawl files**  
    Query: `site:nextjs.org/docs app getting-started metadata-and-og-images sitemap robots official`  
    Source: https://nextjs.org/docs/app/getting-started/metadata-and-og-images  
    Finding: use Server Component metadata exports and Next special files for icons, Open Graph images, robots, and sitemap.

12. **Production readiness**  
    Query: `site:nextjs.org/docs app guides production-checklist accessibility official`  
    Source: https://nextjs.org/docs/app/guides/production-checklist  
    Finding: production build, metadata, Lighthouse lab checks, type safety, and bundle discipline are explicit release gates.

13. **Strict TypeScript behavior**  
    Query: `site:typescriptlang.org/tsconfig strict noImplicitAny official`  
    Source: https://www.typescriptlang.org/tsconfig/strict  
    Finding: keep `strict` enabled; it includes the strict-family checks and provides stronger correctness guarantees.

14. **Implicit-any prevention**  
    Query: `site:typescriptlang.org/tsconfig strict noImplicitAny official`  
    Source: https://www.typescriptlang.org/tsconfig/noImplicitAny.html  
    Finding: explicitly retain `noImplicitAny`; the project will not weaken it to bypass typing work.

15. **Next.js deploy/build baseline**  
    Query: `site:nextjs.org/docs app getting started deploying build start official`  
    Source: https://nextjs.org/docs/app/getting-started/deploying  
    Finding: retain standard `build` and `start` scripts and validate the production build locally.

### Decision

- Scaffold with the official latest stable `create-next-app` defaults in a temporary child directory, copy only the generated project files into the documentation-only workspace, then remove the verified temporary directory and initialize Git at the workspace root.
- Use pnpm and commit the generated lockfile to make dependency versions reproducible.
- Keep `app` at the project root and reusable code in `components`, `data`, and `lib` to match the PRD.
- Add Vitest immediately, but defer browser-test package decisions until the runnable UI requires them; the in-app browser will provide visual/interaction checks during development.
- Build pages as Server Components by default. Theme-provider and later calculator widgets will be small explicit client boundaries.
- Apply the exact Claude+ tokens in Stage 1, not during the scaffold, so the design-system change has its own audit and verification evidence.

### Rejected alternatives

- **Manual framework files:** rejected because the official scaffold is lower-risk and records compatible current versions.
- **Scaffolding directly into the non-empty root:** rejected because the approved PRD must not be overwritten or blocked by filename-conflict behavior.
- **Putting all application code under `app`:** rejected because top-level reusable folders keep routing concerns visibly separate from formulas and shared UI.
- **Making the root layout a Client Component:** rejected because it would expand the client bundle and prevent server-only metadata patterns.

### Implementation and verification evidence

- Scaffolded with Next.js 16.3.2, React 19.2.8, TypeScript 5.9.3, ESLint 9.39.5, Tailwind CSS 4.3.3, and Vitest 4.1.11; exact dependency graph is recorded in `pnpm-lock.yaml`.
- Read the installed Next.js 16.3.2 guides for installation, Server/Client Components, and CSS before writing framework code, as required by the generated `AGENTS.md`.
- Added standard `lint`, `lint:fix`, `typecheck`, `test`, `test:watch`, `build`, and `start` scripts.
- Kept the root layout and page as Server Components; added only baseline brand metadata and semantic skip-link/main structure.
- Initialized Git at the workspace root without creating a commit.
- `pnpm lint`: passed.
- `pnpm typecheck`: passed.
- `pnpm test`: passed, 1 test file and 1 test.
- `pnpm build`: passed; `/` and `/_not-found` are statically prerendered.
- `git diff --check`: passed for tracked differences; the new baseline remains untracked until the user chooses to commit it.
- The disposable `watt-wall-scaffold` directory remains ignored because the execution safety layer blocked recursive deletion after path verification. It is excluded from Git, ESLint, and TypeScript and does not participate in the application build.

## Stage 1 — Design system and themes

Date: 2026-08-22  
Status: Complete.

### File audit

- Relevant files before implementation: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `lib/site.ts`, `package.json`, and the PRD token/component requirements.
- No existing theme provider, mode control, UI primitives, component utility, or application data layer existed.
- The current root layout was a Server Component using Geist and Geist Mono; the temporary foundation page used a few non-semantic hex colors that must be replaced by approved tokens.

### Search sequence and decisions

1. Next.js font optimization: https://nextjs.org/docs/app/getting-started/fonts — use variable Outfit and Geist Mono through `next/font`, self-hosted at build time.
2. next-themes App Router setup: https://github.com/pacocoursey/next-themes/blob/main/next-themes/README.md — provider is a narrow Client Component; add `suppressHydrationWarning` only to `<html>`.
3. next-themes persistence/system/hydration behavior: https://github.com/pacocoursey/next-themes — use `defaultTheme="system"`, `enableSystem`, `attribute="class"`, `enableColorScheme`, and avoid reading theme-dependent UI before mounting.
4. Tailwind manual dark mode: https://tailwindcss.com/docs/dark-mode — use `@custom-variant dark (&:where(.dark, .dark *))` so next-themes owns the root class.
5. Tailwind v4 theme variables: https://tailwindcss.com/docs/theme — expose semantic tokens via `@theme inline`.
6. shadcn theming: https://ui.shadcn.com/docs/theming — components should use semantic classes such as `bg-background`, `text-foreground`, `border-border`, and `ring-ring`.
7. shadcn Tailwind v4 guidance: https://ui.shadcn.com/docs/tailwind-v4 — keep `:root`/`.dark` variables outside `@theme`, and map them inline.
8. Approved Claude+ source: https://tweakcn.com/themes/cmdght103000n04lh3e2ae93r — confirmed the corporate/minimal/professional visual intent and Outfit/Geist Mono direction.
9. Claude token registry cross-check: https://shadcnregistry.com/tweakcn/claude — confirmed the complete semantic token families; the approved PRD overrides remain authoritative for its explicitly customized card, muted-text, foreground, and dark-surface values.
10. WCAG contrast/resize baseline: https://www.w3.org/TR/WCAG22/ — require 4.5:1 normal text, 3:1 large text, and no loss at 200% resize.
11. WCAG target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html — WCAG AA floor is 24px; retain the PRD’s more usable 44px control target.
12. WCAG focus appearance: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html — use a visible two-pixel outline/ring with adequate change contrast.
13. WCAG reduced motion: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions — remove non-essential motion under `prefers-reduced-motion`.
14. WCAG reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow — primitives must wrap and remain usable at 320 CSS pixels without two-dimensional scrolling.
15. Browser color-scheme behavior: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme — let next-themes expose the resolved scheme so native inputs and scrollbars match.

### Chosen approach

- Install `next-themes` plus the minimal source-owned component helpers `class-variance-authority`, `clsx`, and `tailwind-merge`; do not initialize a broad component library or animation package.
- Use one semantic variable set consumed by all components. Mode switching changes values only, never structure, content, or layout.
- Use the exact PRD Claude+ core tokens and the source theme’s supporting semantic families; select an accessible darker foreground/background pairing if measured contrast fails for a real component state.
- Establish shared primitives before the Header, then use the Header stage to add the visible Light/Dark/System control.
- Verify the token/component matrix in both themes and at target viewports before completing this stage.

### Implementation and verification evidence

- Added the exact approved Claude+ core light/dark tokens, Tailwind v4 semantic mappings, Outfit and Geist Mono, radius/shadow scales, and a measured stronger action token for accessible filled-button text.
- Measured white text against the approved raw primary orange at approximately 3.90:1, below the 4.5:1 normal-text target. Filled buttons therefore use the same hue/chroma at lightness 0.58, approximately 4.54:1, while the approved primary remains unchanged for accents and rings.
- Added a root `next-themes` provider with class mode, System default, system detection, native `color-scheme`, persisted preference, and transition suppression during theme changes.
- Added source-owned container, button, card, input, label, section-heading, class-merging, and Light/Dark/System selector components.
- Browser checks passed at 1440×900, 768×1024, and 375×812: no horizontal overflow; 44px button heights; Light and Dark mode changes; System persisted after reload and resolved to the device dark preference; Outfit loaded; visible skip-link/focus states; no browser warnings/errors.
- Final `pnpm lint`, `pnpm typecheck`, `pnpm test` (1/1), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered.

## Stage 2 — Header

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited `app/layout.tsx`, `app/page.tsx`, `components/theme-select.tsx`, `components/ui/button.tsx`, `components/layout/container.tsx`, `lib/site.ts`, global focus/theme styles, and the PRD Header requirements.
- No site header, logo/wordmark component, navigation registry, active-link behavior, or mobile disclosure existed.
- The Header can remain a Server Component except for active navigation state, the existing theme selector, and a bounded mobile disclosure.

### Search sequence and decisions

1. WAI APG disclosure pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ — use a native button with `aria-expanded` and `aria-controls`; Enter and Space work natively.
2. WAI disclosure navigation example: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/ — ordinary website links should not use `menu`/`menubar` roles, which imply complex application-menu keyboard behavior.
3. WAI navigation structure/current page: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/ — use a named navigation landmark, semantic list, `aria-current="page"`, Escape close, and close when interaction leaves the region.
4. Next.js Link API: https://nextjs.org/docs/app/api-reference/components/link — use `Link` as the primary internal navigation element and retain normal anchor semantics.
5. Next.js linking/navigation: https://nextjs.org/docs/app/getting-started/linking-and-navigating — keep crawlable hrefs and default static-route prefetch behavior.
6. WCAG focus not obscured: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum — user-opened content must not hide focused controls.
7. Sticky-header failure mode: https://www.w3.org/WAI/WCAG22/Techniques/failures/F110 — do not make the initial Header sticky; there is no product requirement that justifies the focus/performance tradeoff.
8. WCAG target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum — retain 44px navigation/control targets, exceeding the 24px AA minimum.
9. React event subscriptions: https://react.dev/reference/react/useEffect — register document/media listeners only while the mobile disclosure is open and always remove them in cleanup.
10. WAI form labels: https://www.w3.org/WAI/tutorials/forms/labels/ — preserve an explicit accessible label for both compact theme selects; use visually hidden text only where visual context is clear.
11. CSS positioning accessibility/performance: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position — use a bounded absolute mobile panel rather than a persistent sticky/fixed Header.

### Chosen approach

- Add typed primary navigation data to `lib/site.ts` and render links from that single source.
- Add a source-owned text wordmark with a decorative inline SVG mark; the visible brand text supplies the accessible name.
- Keep `SiteHeader` server-rendered. Use a small `NavigationLinks` client boundary for `usePathname`/`aria-current`, and a small `MobileNavigation` client boundary for disclosure state.
- Desktop navigation appears at `lg`; smaller viewports use one 44px disclosure button and an absolute panel with links, CTA, and compact theme selector.
- Escape closes and returns focus to the disclosure button; outside pointer interaction and a switch to desktop width close the panel; selecting a link closes it.
- Do not mark the Header sticky. Do not use ARIA menu roles, focus trapping, animation frameworks, or a third-party navigation package.
- The Header will link to the approved future routes. Their detailed page content remains governed by their later research stages; Header verification will validate semantics/hrefs without claiming those destination pages are complete.

### Implementation and verification evidence

- Added a server-rendered `SiteHeader`, typed primary-navigation registry, crawlable brand wordmark, semantic desktop navigation, and small client boundaries for current-page state and the mobile disclosure.
- Preserved native link/button/select semantics. The mobile trigger exposes `aria-expanded` and `aria-controls`; Escape closes the panel and restores focus to the trigger.
- Browser checks passed at 1440×900, 768×900, and 375×812. Desktop navigation switches cleanly to the mobile disclosure below `lg`, an open mobile panel closes on outside interaction and when resized to desktop, and no horizontal overflow was found.
- All visible Header links and controls measured 44px high. Light, Dark, and System selections resolve consistently through the root theme class and native `color-scheme`.
- The browser console reported no warnings or errors during Header interaction testing.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (1/1), `pnpm build`, and `git diff --check` passed. The home route remains statically prerendered.
- The development server remains available at `http://localhost:3001/`; port 3000 was already occupied, so the current project uses 3001.

## Stage 3 — Hero

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the current home route, 73px desktop Header, responsive `Container`, button and card primitives, theme tokens, global focus/reduced-motion rules, site configuration, and PRD Hero/type/performance requirements.
- No calculator registry or formula engine exists yet. The current home content is explicitly a temporary component matrix and must be replaced, while later home sections remain out of scope for this stage.
- The Hero needs no browser state. It can remain fully server-rendered and consume a small typed, static example-data module.
- Read the installed Next.js 16.3.2 Linking and Navigating and Server/Client Components guides before implementation, as required by `AGENTS.md`.

### Search sequence and decisions

1. Google title-link guidance: https://developers.google.com/search/docs/appearance/title-link — make the first visible H1 unique, descriptive, concise, and visually dominant rather than using a vague slogan.
2. WAI heading structure: https://www.w3.org/WAI/tutorials/page-structure/headings/ — use one page-level H1 and reserve H2 for later home sections; the sample-card label does not need to compete as another page heading.
3. WAI semantic page structure: https://www.w3.org/WAI/tutorials/page-structure/ — keep the Hero in the existing `main` landmark with meaningful paragraph/link structure that remains understandable without CSS.
4. web.dev LCP optimization: https://web.dev/articles/optimize-lcp — keep the H1 directly available in server-rendered HTML and avoid a separate hero-image request.
5. web.dev CLS optimization: https://web.dev/articles/optimize-cls — render the complete Hero and sample card in the initial layout; do not inject copy, results, or media after hydration.
6. web.dev INP optimization: https://web.dev/articles/optimize-inp — add no Hero client boundary or interaction JavaScript; use native links for navigation.
7. WCAG reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow — use one column at narrow widths and a two-column grid only when sufficient space exists; verify at 320 CSS pixels.
8. WCAG text spacing: https://www.w3.org/WAI/WCAG22/Understanding/text-spacing — avoid fixed-height text containers so user-defined line, word, and letter spacing cannot clip content.
9. WCAG reduced motion: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions — omit decorative entrance/parallax animation; retain only already-approved reduced-motion-safe color transitions on links.
10. Google helpful-content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — describe the actual user outcome and transparent assumptions without exaggerated claims, fabricated proof, or search-first keyword repetition.
11. Google crawlable-link guidance: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — use real `href` links with concise destination-specific anchor text for the directory and methodology.
12. Next.js Link API: https://nextjs.org/docs/app/api-reference/components/link — use `Link` for both internal Hero destinations and retain native anchor semantics and prefetch behavior.
13. GOV.UK primary-action guidance: https://design-system.service.gov.uk/components/button/ — present one visually primary action with sentence-case text that says what happens; style the supporting methodology link as secondary.
14. EIA electricity measurement: https://www.eia.gov/energyexplained/electricity/measuring-electricity.php — one kWh is one kilowatt used for one hour; use this relationship for the illustrative energy step.
15. EIA electricity-price locality: https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php — label the sample rate as an example and explicitly tell users that local prices and usage determine their result.

### Chosen approach

- Replace the temporary component matrix with a `HeroSection` Server Component under `components/marketing` and keep `app/page.tsx` as a small composition layer.
- Use a responsive one-column/two-column grid with the copy first in DOM and visual order. Limit the copy width to preserve readable lines; use the PRD’s 36/44px mobile and 56/64px desktop H1 scale.
- Copy will promise only what the product will actually provide: practical home energy and renovation estimates, user-entered local values, transparent formulas, and clear assumptions.
- Use one primary “Browse calculators” `Link` and one secondary “See our methodology” `Link`; no buttons that simulate navigation.
- Use a compact static sample for 1.5kW × 3 hours/day at an explicitly illustrative $0.16/kWh rate: 4.5kWh/day and $0.72/day. Derive the displayed outputs from typed inputs outside the presentation component and cover the arithmetic with a unit test.
- Use no image, chart, animation, live form, third-party dependency, network fetch, or new Client Component. The sample card has stable server-rendered dimensions and does not imply a universal price or guaranteed saving.

### Rejected alternatives

- **Stock or generated house image:** rejected because it would add no explanatory value and could become the LCP resource.
- **Interactive calculator inside the Hero:** rejected because it duplicates the later calculator experience, expands client JavaScript, and weakens the single primary action.
- **Current US average electricity price:** rejected for this compact example because averages change and differ by locality; an explicitly illustrative value better teaches the formula without implying local accuracy.
- **Animated counters, proof badges, ratings, or savings totals:** rejected because they would be unnecessary motion or unsupported claims.

### Implementation and verification evidence

- Replaced the temporary component matrix with a server-rendered `HeroSection` and kept the home page as a Server Component with no new client boundary.
- Added a typed calculation module and test. The displayed 1.5kW × 3hr/day example derives 4.5kWh/day and $0.72/day at the clearly labelled illustrative $0.16/kWh rate.
- Rendered one benefit-led H1, one primary directory link, one secondary methodology link, a planning-estimate qualifier, and a semantic `dl` sample breakdown. No unsupported savings, average-rate, popularity, review, or approval claim was added.
- Browser checks passed at 1440×900, 768×1024, 375×812, and 320×800. H1 sizing resolves to 56/64px desktop, 48px tablet, and 36/43.92px mobile; the Hero reflows to one column below `lg` with zero horizontal overflow.
- Both Hero links measure 44px high at every checked viewport. Light and Dark render the same content/layout; the sample `aside` remains fully contained at 320px.
- Semantic browser inspection found one H1, a named Hero region, two real internal links, a labelled complementary example, and correctly paired description terms/definitions. The browser console reported no warnings or errors.
- A 1440×900 rendered visual inspection confirmed the approved warm, restrained Claude+ composition, clear visual hierarchy, balanced two-column layout, and stable sample card without media.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (2/2), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered, and the live development route returns HTTP 200 with the new H1.

## Stage 4 — Featured calculator cards

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited `app/page.tsx`, the completed Hero, responsive `Container`, `SectionHeading`, current card primitive, shared focus/theme tokens, `lib/site.ts`, package dependencies, and the PRD’s four calculator names, routes, inputs/results, icon, grid, and home-order rules.
- No calculator registry, category type, shared calculator-card component, or icon package exists. The four approved route paths are fixed by the PRD but their destination pages are intentionally scheduled for later vertical-slice stages.
- Existing `Card` is a neutral `div` surface. The featured collection needs its own semantic list/article/link composition rather than changing every card globally.
- No icon dependency is necessary: four small source-owned SVGs can use the same 24px viewbox, 1.8px rounded outline stroke, and decorative treatment already established by the brand/Hero icons.

### Search sequence and decisions

1. WCAG link purpose: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html — each card link must identify its unique destination; avoid four generic “Learn more” accessible names.
2. WAI descriptive-link technique: https://www.w3.org/WAI/WCAG22/Techniques/general/G91 — use the exact calculator name as the link text so it remains meaningful in a links list.
3. WAI list-context technique: https://www.w3.org/WAI/WCAG22/Techniques/html/H77 — a list item provides programmatic context, but the implementation will exceed this baseline by keeping link text independently descriptive.
4. WAI content structure: https://www.w3.org/WAI/tutorials/page-structure/content/ — mark the collection as a `ul`/`li` group and each self-contained summary as an `article` with a logical H3 below the section H2.
5. WCAG target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html — expand each single link target across its card; this comfortably exceeds the 24px AA floor and the project’s 44px preference.
6. WCAG focus appearance: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html — draw a two-pixel focus ring around the complete card boundary, not only a small text fragment.
7. Google crawlable links: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — use server-rendered anchors with real `href` values and natural, relevant anchor text for every important calculator route.
8. Next.js Link API: https://nextjs.org/docs/app/api-reference/components/link — use one `Link` per card and retain native anchor semantics and normal internal-route prefetching.
9. Trusted clickable-card pattern: https://www.tomslutsky.com/writing/accessible-nested-links/ — use a CSS pseudo-element from the heading link to extend the clickable area; do not add JavaScript click handlers or nest interactive elements.
10. WCAG reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow — collapse to one column at narrow widths and ensure every card fits within a 320px CSS viewport.
11. WAI card reflow technique: https://www.w3.org/WAI/WCAG22/Techniques/general/G225 — keep card content fully visible with vertical-only page scrolling at 320px.
12. Tailwind responsive grid: https://tailwindcss.com/docs/grid-template-columns — use standard responsive column utilities rather than custom viewport logic.
13. WCAG non-text contrast: https://www.w3.org/WAI/WCAG22/understanding/non-text-contrast.html — hover/focus cannot rely on a low-contrast border change alone; retain visible text and a strong ring.
14. MDN decorative icons: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden — hide icons from the accessibility tree because the visible calculator names already communicate purpose.
15. USWDS card guidance: https://designsystem.digital.gov/components/card/ — use simple styling, an unordered list/card-item structure, logical headings, and a clear link from each summary to detailed information.
16. USWDS card accessibility tests: https://designsystem.digital.gov/components/card/accessibility-tests/ — explicitly verify keyboard navigation, readable link destinations, color-independent meaning, and text contrast in this project context.

### Chosen approach

- Create a typed calculator registry that becomes the single source for approved names, slugs, routes, categories, concise value descriptions, and icon identifiers. Later directory, related-link, sitemap, and metadata stages will reuse it.
- Add a server-rendered `FeaturedCalculatorsSection` below the Hero. Render one labelled section, one `ul`, four `li` items, and one `article`/H3/link per item.
- Keep only the calculator title inside the real `Link` for a concise standalone accessible name. Extend that link across the whole card with a pseudo-element; the remaining card has no nested controls.
- Treat the icon and visible directional cue as decorative. Use identical SVG geometry conventions and hide both from assistive technology.
- Use one column by default, two at `md`, and four at `xl`. Cards stretch to equal row height through grid/flex layout without fixed text heights, truncation, or hidden overflow.
- Use border/background/shadow color changes only for pointer polish, a full-boundary two-pixel keyboard ring, and no translate/scale animation.

### Rejected alternatives

- **Wrapping several separate links in each card:** rejected because it duplicates destinations and increases keyboard/screen-reader noise.
- **`onClick` on a `div` or `article`:** rejected because it loses native link semantics, crawlability, and expected keyboard/browser behavior.
- **Nesting a CTA link inside a card-wide link:** rejected as invalid, confusing interactive markup.
- **A new icon library:** rejected because four simple consistent source-owned outline icons avoid another dependency and client/bundle cost.
- **Fixed card heights or line clamping:** rejected because content must survive narrow reflow and custom text spacing without clipping.

### Implementation and verification evidence

- Added a typed four-item calculator registry with the exact approved slugs, routes, names, Energy/Renovation categories, unique value descriptions, and constrained icon identifiers. A registry test protects count, slug uniqueness, ordering, and route values.
- Added a server-rendered Featured Calculators section with a labelled H2 region, semantic `ul`/`li` group, four self-contained articles, logical H3 headings, and one descriptive `Link` per card.
- Each heading link uses a CSS pseudo-element that fills its card. Browser-computed target dimensions were approximately 267×328px on wide desktop and at least 286×292px at 320px, with no nested or JavaScript-driven interactions.
- Added four decorative source-owned outline icons with a consistent 24px viewbox, rounded 1.8px stroke, 44px visual container, and `aria-hidden` treatment.
- Browser checks confirmed exactly four unique calculator links and correct accessible names/hrefs; one H1, one section H2, and four H3s form the expected outline.
- Responsive checks passed: four equal 269px columns/cards at 1440px; two 343px columns at 768px with equal heights per row; one 288px column at 320px. No horizontal overflow occurred.
- Light and Dark modes preserve content and layout while resolving distinct semantic card colors. The browser console reported no warnings or errors.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (3/3), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered, and the live route returns HTTP 200 with the new section.

## Stage 5 — How It Works

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the current home composition, completed Hero and Featured Calculator sections, shared `Container`/`SectionHeading`, established icon geometry, semantic tokens, and the PRD’s required three-step wording/order.
- The existing Hero already explains local values and the featured section already mentions formulas and assumptions. This section must clarify the sequence without repeating the same marketing sentences.
- The content is static and requires no link, state, focus target, browser API, or Client Component.
- An ordered list is the meaningful structure; numbered visual markers should reinforce, not replace, the list semantics.

### Search sequence and decisions

1. WAI content structure: https://www.w3.org/WAI/tutorials/page-structure/content/ — ordered lists are for sequential information and expose the group/item count to assistive technology.
2. MDN ordered-list semantics: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol — if changing item order changes the meaning, use `ol`; this three-step process meets that test.
3. WCAG meaningful sequence: https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence — keep the correct sequence programmatically determinable and do not use CSS visual reordering.
4. WCAG focus order: https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html — do not make static steps focusable; that would add tedious, non-operable stops.
5. WAI list technique: https://www.w3.org/WAI/WCAG21/Techniques/html/H48 — an `ol`/`li` process communicates relationships that styled `div` blocks cannot.
6. GOV.UK user-needs guidance: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/identify-user-needs/ — describe actions users actually take, using words they recognize.
7. GOV.UK content design: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/ — keep only content that helps users complete the task and remove duplication.
8. GOV.UK clear-language guidance: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/ — use active voice, short sentences, plain words, and small text chunks.
9. MDN decorative-content treatment: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden — hide the styled numeral from the accessibility tree because the native ordered list already conveys position.
10. WCAG reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow — use a single vertical sequence at narrow widths and verify no two-dimensional scrolling at 320px.
11. WCAG reduced motion: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html — use no scroll reveal, connector drawing, parallax, or other non-essential motion.
12. Tailwind responsive design: https://tailwindcss.com/docs/responsive-design — use standard mobile-first utilities and switch to three columns only when `lg` provides readable width.
13. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — explain how the experience works to help a real visitor, not to create a thin keyword block.
14. WAI descriptive headings: https://www.w3.org/WAI/tutorials/page-structure/headings/ — label the region with a useful H2 and use H3 for each step without skipping heading levels.

### Chosen approach

- Add a small typed `howItWorksSteps` content array and a server-rendered `HowItWorksSection` after Featured Calculators.
- Use one labelled section, one `ol`, three `li` items, and H3 step titles in DOM order: enter local values, review the estimate, check the assumptions.
- Use a visible two-digit numeral in a 44px decorative marker with `aria-hidden`; keep the native `ol` semantics rather than duplicating spoken numbers.
- Write one active, plain-language sentence per step. The final step explicitly positions the output as a planning guide, not a professional quote.
- Use a muted full-width section for narrative separation, with flexible content blocks and no fixed heights. Stack by default and switch to three columns at `lg` without reordering.
- Add no links, controls, illustrations, animation, client JavaScript, or new dependency.

### Rejected alternatives

- **Three generic feature cards:** rejected because they would not encode the required sequence.
- **Tabs, carousel, accordion, or scroll animation:** rejected because all three short steps should remain immediately visible and require no JavaScript.
- **Focusable numbered elements:** rejected because the steps are static content, not controls.
- **A separate icon for every step:** rejected because the visible sequence numbers communicate the process more directly and avoid redundant decoration.

### Implementation and verification evidence

- Added a typed three-item content source and a server-rendered How It Works section in the required order after Featured Calculators.
- Rendered one labelled region, a semantic `ol`/`li` sequence, logical H3 headings, and decorative 44px number markers hidden from the accessibility tree. No controls, client boundary, animation, or dependency was added.
- Browser checks confirmed three items in DOM order, a three-column desktop layout, a single-column 320px layout, no focusable content, consistent Light/Dark geometry, and no console warnings or errors.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (3/3), `pnpm build`, and `git diff --check` passed. The home route remains statically prerendered.

## Stage 6 — Category links

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the calculator registry and its tests, current home composition, `Container`, `SectionHeading`, the shared calculator icon, Claude+ semantic tokens, root theme provider, and the PRD route/category requirements.
- The registry already owns each calculator's name, route, category, description, and icon. Category rendering can therefore derive its members without duplicating calculator data.
- The section is a group of site navigation links, not an interactive filter. It needs native navigation/list semantics but no state, query parameters, browser APIs, or Client Component.
- Existing calculator routes are scheduled for later vertical-slice stages; this section should link to the approved paths without inventing temporary category routes.

### Search sequence and decisions

1. Google link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — use crawlable anchors with relevant, concise text and ensure every important page has an internal link.
2. Google sitelinks guidance: https://developers.google.com/search/docs/appearance/sitelinks — keep the site hierarchy logical and link important pages from relevant content.
3. Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide — organize related pages so users and search engines can understand their relationship.
4. Google developer search guide: https://developers.google.com/search/docs/fundamentals/get-started-developers — ensure each page is reachable from another findable page.
5. WAI landmark guidance: https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/ — use a navigation landmark for a link group and give it a unique accessible label when other navigation exists.
6. WAI related-link grouping: https://www.w3.org/WAI/WCAG21/Techniques/html/H97.html — preserve the relationship between navigation links with native `nav` semantics.
7. WAI list semantics: https://www.w3.org/WAI/WCAG21/Techniques/html/H48 — use `ul`/`li` for each related calculator-link group.
8. WCAG link purpose: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html — keep each calculator name as descriptive standalone link text.
9. WAI heading guidance: https://www.w3.org/WAI/tutorials/page-structure/headings/ — use one section H2 and one H3 for each category without skipping levels.
10. WCAG reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow — stack category panels and eliminate horizontal page scrolling at 320 CSS pixels.
11. WCAG target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum — provide comfortably separated link targets larger than the 24px AA minimum.
12. Tailwind responsive design: https://tailwindcss.com/docs/responsive-design — use a mobile-first single column and add the two-column layout at the standard `lg` breakpoint.

### Chosen approach

- Extend the typed calculator registry with two category definitions containing only category-level title, description, and decorative icon metadata.
- Add a server-rendered `CalculatorCategoriesSection` after How It Works. Use one `nav` labelled by its H2, two category panels with H3 headings, and one semantic list of calculator links per panel.
- Derive every panel's links by filtering the registry on its typed category. A future calculator using an existing category appears without changing the component.
- Keep the exact calculator name as the visible anchor text and approved route as the `href`. Give every row a minimum 56px rendered target, a strong keyboard ring, and no redundant CTA label.
- Stack panels through tablet widths and switch to two columns at `lg`; use flexible content and no fixed heights, clipping, animation, or client JavaScript.

### Rejected alternatives

- **Client-side category tabs or filters:** rejected because all four links should remain visible, crawlable, and usable without JavaScript.
- **New `/energy` and `/renovation` routes:** rejected because those pages are not in prototype scope and would be placeholders rather than useful destinations.
- **Hard-coded link arrays inside the component:** rejected because they would drift from the typed calculator registry as tools are added.
- **Wrapping each entire panel in one link:** rejected because every calculator requires its own precise destination and accessible name.
- **Repeating the full Featured Card descriptions:** rejected because concise category context plus descriptive calculator names avoids duplicating the preceding section.

### Implementation and verification evidence

- Added typed Energy and Renovation category metadata and a registry test that proves category names are unique and every calculator belongs to one supported group.
- Added the category navigation with one uniquely labelled landmark, two H3 groups, semantic lists, and four crawlable `Link` anchors. The component adds no client boundary or dependency.
- Browser semantics confirmed the navigation name, headings, list grouping, exact calculator names, and all four approved route values. Keyboard focus draws a visible two-layer ring, and rendered link targets are 56–72px high.
- Responsive checks passed at 1440×900, 768×1024, and 320×800. Panels render as two equal columns at desktop and one column below `lg`; all links remain visible in both Light and Dark Mode with stable geometry.
- A rendered mobile visual inspection confirmed readable spacing, hierarchy, icons, borders, and link separation in Dark Mode. The browser console reported no warnings or errors.
- Removed the global `20rem` minimum page width after browser testing exposed 15px overflow with classic scrollbars at a 320px window. The full page now reports zero horizontal overflow at the narrow acceptance width.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (4/4), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered.

## Stage 7 — Trust section

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the PRD trust and privacy promises, planned Methodology/Privacy/Disclaimer routes, current home copy, root rendering model, theme behavior, typed home data, and the absence of calculator forms, source registries, or policy pages at this stage.
- The approved architecture processes future calculator values in browser-only Client Components with no database, API, authentication, or analytics layer. A no-account and no-input-storage statement is therefore supportable, while an absolute claim about all future tracking is not.
- Methodology, Privacy, and Disclaimer pages remain scheduled for a later stage. The homepage can link to their approved paths now, but its copy must stand on its own and must not claim that those unfinished pages currently verify the product.
- The section is static explanatory content. It needs a labelled region, semantic list, descriptive policy links, and visible focus—not an alert role, disclosure widget, animation, or Client Component.

### Search sequence and decisions

1. AdSense Program policies: https://support.google.com/adsense/answer/48182 — do not use deceptive navigation, non-existent destinations, misleading ad labels, or layouts that make ads look like site actions.
2. Google Publisher Policies: https://support.google.com/adsense/answer/10502938 — avoid misrepresenting the publisher, content purpose, affiliations, or product with false or deceptive claims.
3. Google low-value inventory guidance: https://support.google.com/publisherpolicies/answer/11112688 — useful publisher content must remain the focal point; do not monetize unfinished or navigation-only screens.
4. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — original explanations, clear sourcing, author/site background, and verifiable facts contribute to trust; trust matters most for higher-impact topics.
5. Google Search Essentials: https://developers.google.com/search/docs/essentials — create reliable content for people rather than content designed primarily to manipulate search visibility.
6. ICO data minimisation: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/ — collect only personal data needed for a specified purpose; this supports a no-account browser-only prototype.
7. FTC consumer privacy guidance: https://consumer.ftc.gov/business-guidance/privacy-security/consumer-privacy — privacy statements are product promises and must match actual handling.
8. FTC privacy-claim guidance: https://www.ftc.gov/business-guidance/blog/2011/12/lessons-facebook-settlement-even-if-youre-not-facebook — keep privacy copy clear, direct, truthful, and backed by product behavior.
9. EIA electricity data: https://www.eia.gov/electricity/data.php — energy averages are published with sector, geography, data period, and release date, so calculator defaults need the same context.
10. EPA calculator assumptions: https://www.epa.gov/ghgemissions/assumptions-and-references-household-carbon-footprint-calculator — transparent calculators publish inputs, assumptions, dated sources, and the scope behind estimates.
11. EPA WaterSense calculator methodology: https://www.epa.gov/watersense/how-watersense-calculator-works — user-changeable inputs improve relevance, but actual results can vary from model estimates.
12. WAI descriptive-link technique: https://www.w3.org/WAI/WCAG21/Techniques/general/G91 — use link text that independently communicates the purpose of each trust destination.

### Chosen approach

- Add four typed trust commitments: inspectable formula/units/assumptions/rounding; source geography and review date; no account with browser-only, non-stored calculator inputs; and planning estimates that are not professional quotes or guaranteed savings.
- Use one server-rendered labelled section with one semantic list. Each commitment has a decorative check hidden from assistive technology, an H3, and one concise explanatory paragraph.
- Add a uniquely labelled navigation group with “Read our methodology,” “Review our privacy approach,” and “See estimate limitations” links to the approved routes.
- Use a one-column mobile layout, two-column commitment grid from `sm`, and split heading/content composition at `lg`. Keep flexible heights, semantic theme tokens, 44px link targets, and a visible keyboard ring.

### Rejected alternatives

- **“AdSense-ready,” approval, accuracy, or savings badges:** rejected because none can be guaranteed or objectively supported by the current product.
- **A generic “secure” claim:** rejected because it is broader than the browser-only input behavior we can prove.
- **Testimonials, ratings, usage counts, or expert endorsements:** rejected because the prototype has no verified evidence for them.
- **An alert/callout role:** rejected because the content is persistent explanatory guidance, not urgent or dynamically inserted information.
- **A separate Client Component or animated trust carousel:** rejected because all commitments and limits should remain immediately visible in rendered HTML.

### Implementation and verification evidence

- Added typed trust points and approved trust-link data plus tests that protect the four-item set and Methodology/Privacy/Disclaimer destinations.
- Added a server-rendered Trust section with one labelled region, four list items, logical H3s, decorative checks, and a uniquely named three-link policy navigation group. No dependency or client boundary was introduced.
- Browser checks confirmed the exact heading/list structure, all three descriptive `href` values, 44px policy-link targets, visible two-layer keyboard focus, and no console warnings or errors.
- Responsive checks passed at 1440×900, 768×1024, and 320×800. Trust points render in the intended desktop split, a 2×2 tablet grid, and one mobile column with zero horizontal overflow.
- Light and Dark Mode preserve content and layout while applying distinct semantic card/background/foreground colors. Mobile visual inspection confirmed readable hierarchy, spacing, dividers, icons, and policy-link focus.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (6/6), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered.

## Stage 8 — FAQ

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the PRD FAQ topics, completed home copy, typed home data, section heading, root rendering model, package dependencies, metadata state, and repository search results for Accordion, FAQ, `details`, `summary`, and JSON-LD implementations.
- No Accordion primitive, FAQ registry, calculator FAQ, or FAQ structured data existed. Adding a client-side accordion library would duplicate a native platform capability and expand the client bundle.
- The home FAQ needs distinct answers for scope, accuracy, locality, units, input handling, methodology, and professional-estimate limits without copying future calculator-specific FAQs.
- Next.js renders static content as Server Components by default. Native disclosure elements preserve that model and require no state, effects, event handlers, or hydration boundary.

### Search sequence and decisions

1. Google FAQ rich-result update: https://developers.google.com/search/blog/2023/08/howto-faq-changes — FAQ rich results are limited to well-known authoritative government and health sites; this calculator site should not expect that treatment.
2. Google structured-data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies — markup must represent visible, relevant main content and never guarantees a rich result.
3. WAI disclosure pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ — disclosure controls need clear expanded/collapsed behavior and native Enter/Space keyboard activation.
4. WAI accordion pattern: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/ — users may need to keep multiple panels open; all headers remain in normal Tab order.
5. MDN `summary`: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary — `summary` is the native label/control for `details`; avoid depending on inconsistent nested-heading semantics.
6. MDN `details`: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details — native disclosures are widely available, work without custom JavaScript, and expose open/closed state through the platform.
7. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — answer real user questions completely and avoid filler created only for search traffic.
8. Google duplicate-content FAQ: https://developers.google.com/search/help/crawling-index-faq — duplication is not automatically a penalty, but the home answers should remain concise and distinct from deeper calculator-specific guidance.
9. WCAG headings and labels: https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels — the FAQ section title and every disclosure label must describe their topic clearly.
10. WCAG focus visible: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible — every keyboard-operable summary needs an obvious persistent focus indicator.
11. WCAG reflow: https://www.w3.org/TR/WCAG22/#reflow — preserve all question and answer content without two-dimensional scrolling at 320 CSS pixels.
12. WCAG animation from interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions — avoid animated height changes and use only an immediate state indicator.

### Chosen approach

- Add a typed six-item home FAQ registry covering accuracy, local values, initial units/currency, input storage, formula/source methodology, and professional-estimate limits.
- Add a server-rendered FAQ section after Trust. Use one labelled section and one native `details`/`summary` pair per answer; open the first answer initially and allow any combination of answers to stay open.
- Keep questions as plain summary text rather than headings nested inside `summary`, avoiding inconsistent assistive-technology heading exposure. The FAQ H2 identifies the region.
- Give every summary a 68px minimum desktop target that grows naturally when text wraps, a visible two-layer focus ring, a decorative plus/close state icon, and no height animation.
- Do not add `FAQPage` or `QAPage` JSON-LD. This publisher is not eligible for Google FAQ rich results, and QAPage is specifically for pages where users can submit alternative answers.

### Rejected alternatives

- **Client-side accordion library:** rejected because native HTML provides the required interaction without JavaScript or another dependency.
- **Exclusive one-open-at-a-time accordion:** rejected because closing another answer prevents side-by-side comparison and provides no benefit for six short questions.
- **All answers permanently visible:** rejected because it makes the already substantial home page harder to scan on mobile; the first answer remains visible by default.
- **FAQPage/QAPage JSON-LD:** rejected because current Google eligibility does not fit this site and QAPage would misrepresent publisher-authored answers as user-submitted Q&A.
- **Copied calculator-page FAQs:** rejected because the home section should answer product-level questions while future tool pages address calculator-specific assumptions.

### Implementation and verification evidence

- Added six typed, original FAQ answers and a test protecting count, unique questions, and substantive non-empty answers.
- Added a Server Component using native `details`/`summary`; the first answer is open by default, pointer toggling works, and multiple disclosures can stay open. No client boundary, event handler, animation library, or dependency was added.
- Browser inspection confirmed all six questions and complete answers in rendered HTML, initial open/closed states, six focusable summary controls, 68–80px rendered targets, visible keyboard focus, and the deliberate absence of FAQPage JSON-LD.
- Native disclosure semantics provide browser Enter/Space operation without script. The in-app browser's synthetic key injection focused the summary but did not execute its native default toggle, so automated keyboard activation is not claimed beyond standards-backed native behavior.
- Responsive checks passed at 1440×900, 768×1024, and 320×800 with zero horizontal overflow. Mobile visual inspection confirmed readable wrapping, open-answer spacing, focus treatment, dividers, and state icons.
- Light and Dark Mode preserve questions, answers, layout, and disclosure state while applying the correct semantic colors. The browser console reported no warnings or errors.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (7/7), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered.

## Stage 15 — Flooring/Tile Calculator (August 24, 2026)

### Existing-file and component audit

- Reviewed the shared `CalculatorShell`, `CalculatorPageIntro`, `CalculatorDetails`, `CalculatorFaq`, `RelatedCalculators`, `SiteHeader`, `SiteFooter`, theme controls, form primitives, calculator formatting helpers, shared validation errors, route metadata, and the existing Electricity, Appliance, and Paint calculator patterns before implementation.
- Reviewed the current calculator test conventions and confirmed the new route can remain server-rendered with a small client-only widget for controlled inputs, live results, reset, and clipboard feedback.

### Focused research sequence

1. Home Depot tile backsplash guide: https://www.homedepot.com/c/ah/how-to-install-a-tile-backsplash/9ba683603be9fa5395fab9046ad9c25 — measure area and add 10%.
2. Home Depot tile layout guide: https://www.homedepot.com/c/ah/how-to-lay-out-tile/9ba683603be9fa5395fab9035335ddf — length × width, split L-shapes into rectangles, and plan waste.
3. Lowe's project planner: https://www.lowes.com/pdf/project-planner.pdf — multiply dimensions, add 10%, then divide by coverage per carton.
4. Lowe's luxury vinyl guide: https://www.lowes.com/n/how-to/install-luxury-vinyl-tile-flooring — use product/carton coverage and buy extra material.
5. Lowe's flooring Q&A: https://www.lowes.com/questions/natural-floors-609ln-hardwood-flooring/1135393/88dbf022-c79f-5719-b6dd-fd31a4d76720 — diagonal layouts can require more waste.
6. Lowe's product coverage Q&A: https://www.lowes.com/questions/style-selections-lwd21615rc7-vinyl-plank/5016711589/3de34bc7-b09e-5415-8f5b-7f184980f6b8 — carton coverage varies by product.
7. Home Depot installation PDF: https://www.homedepot.com/catalog/pdfImages/4c/4c4e55bb-3792-4c1b-a74a-c95fcd9a33e3.pdf — minimum extra material guidance.
8. Home Depot pattern PDF: https://www.homedepot.com/catalog/pdfImages/26/26f0afe6-b7f6-49bf-a1c1-63a5785d7f97.pdf — pattern overage can exceed straight-layout waste.
9. Mullican flooring guide: https://pdf.lowes.com/productdocuments/3f70b1c9-8ab7-4125-a2e7-9a3d080d2861/08130541.pdf — straight and diagonal waste ranges plus repair cartons.
10. Lowe's installation guide: https://pdf.lowes.com/installationguides/1003073996_install.pdf — 10% standard and 15% diagonal example.
11. W3C form labels: https://www.w3.org/WAI/tutorials/forms/labels/ — every numeric control receives a programmatic label.
12. W3C form validation and notifications: https://www.w3.org/WAI/tutorials/forms/validation/ and https://www.w3.org/WAI/tutorials/forms/notifications/ — inline errors and polite result/status announcements.

### Chosen approach

- Support a simple rectangular estimate with length, width, product coverage per unit, and an editable 0–100% waste allowance (default 10%). Calculate required area, waste area, adjusted area, then `Math.ceil(adjusted area / coverage per unit)`.
- Keep coverage as a user-entered product value because cartons, packs, sheets, and tiles vary. Show units as a generic purchase unit and state that the product listing is authoritative.
- Keep the estimate transparent: formula, worked example, assumptions, source links, visible waste/rounding, and a limitation for L-shaped, diagonal, fixture-heavy, or otherwise complex layouts.
- Use semantic fieldsets/legends, visible labels, inline errors with `aria-describedby`, a polite live output, and a small client component inside a server-rendered route. Defer SoftwareApplication structured data to Stage 17 after the page family and metadata audit.

### Rejected alternatives

- **Fixed 10% only:** rejected because official retailer/manufacturer guidance varies by product and layout.
- **Hidden waste or a single “boxes” input:** rejected because users need to inspect and adjust the assumption and coverage value.
- **L-shaped/diagonal geometry in v1:** rejected because it would add complexity and false precision; the page instead explains how to split complex areas and consult product instructions.
- **Client-rendering the whole route or adding schema immediately:** rejected to preserve crawlable content and keep structured-data work consistent with the later SEO audit.

### Implementation and verification evidence

- Added `lib/calculators/flooring-tile.ts` validation/math, data copy in `data/flooring-tile.ts`, the accessible client widget, and `/calculators/flooring-tile` with metadata, formula, example, assumptions, FAQs, sources, limitations, and related calculators.
- Added a regression test covering all four field-level validation errors; the full suite now passes 26/26 tests.
- Browser interaction checks confirmed default 6-unit output, live updates after edits, invalid-field hiding, reset, clipboard feedback, and disabled copy when invalid.
- Light and Dark Mode produced distinct body surfaces with identical live estimate content. Responsive checks at 1440×900, 768×900, and 320×800 showed the two-column-to-stacked layout and zero horizontal overflow. Mobile full-page visual review covered the complete route through the footer. No browser warning/error logs were reported.
- `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` passed; the route is statically generated. `git diff --check` was run for tracked edits.

## Stage 16 — Trust, legal, and company pages (August 24, 2026)

### Existing-file and behavior audit

- Audited the PRD route map and AdSense-readiness requirements, the shared root layout, header/footer navigation, site configuration, calculator registry, existing trust section, calculator disclaimer links, theme persistence, and the absence of a server/API/contact-form layer.
- Confirmed the current prototype has no database, account system, analytics package, advertising tag, contact submission endpoint, or server-side calculator input handling. The theme preference may be kept in browser local storage by the existing theme library, and Copy Result uses the browser clipboard only after a user action.
- Confirmed `/methodology`, `/about`, `/contact`, `/privacy`, `/terms`, and `/disclaimer` were approved in the PRD and already discoverable from shared navigation, but had no route files.

### Focused research sequence

1. Google Publisher Policies: https://support.google.com/adsense/answer/10502938 — privacy policy must disclose data collection, sharing, usage, and advertising technologies; avoid deceptive claims.
2. Google AdSense cookie guidance: https://support.google.com/adsense/answer/7549925 — publishers must clearly display a privacy policy explaining cookies when ads are used.
3. Google CMP setup: https://support.google.com/adsense/answer/7670013 — EEA, UK, and Swiss traffic requires appropriate disclosures and consent for cookies/local storage and personalized advertising where applicable.
4. Google European regulations messages: https://support.google.com/adsense/answer/10961068 — users need a way to revisit and adjust consent choices.
5. Google certified CMP requirements: https://support.google.com/adsense/answer/13554116 — personalized ads in covered regions require a Google-certified TCF CMP.
6. Google helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — explain who created content and provide background about the site.
7. ICO informed-rights checklist: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/checklists/ — identify the organization, purposes, recipients, retention, rights, and complaint route in clear language when applicable.
8. ICO privacy notice checklist: https://ico.org.uk/media/for-organisations/documents/1625126/privacy-notice-checklist.pdf — map actual data flows before promising what a privacy notice says.
9. ICO cookies guidance: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/ — non-essential cookies require clear information and valid consent; advertising cookies are not strictly necessary.
10. FTC privacy and security: https://consumer.ftc.gov/business-guidance/privacy-security — privacy promises must match the business’s actual handling.
11. FTC clear privacy claims: https://search.ftc.gov/business-guidance/blog/2011/12/lessons-facebook-settlement-even-if-youre-not-facebook — keep privacy language clear, direct, and evidence-backed.
12. W3C forms tutorial: https://www.w3.org/WAI/tutorials/forms/ — use labels, grouping, instructions, and feedback if a form is introduced.
13. W3C accessible labels: https://www.w3.org/WAI/tutorials/forms/labels/ — controls need explicit, meaningful labels.
14. W3C page headings: https://www.w3.org/WAI/tutorials/page-structure/headings/ — use a clear H1/H2 structure and labelled regions.
15. W3C link purpose: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html — links should identify their destination from text or context.
16. Google crawlable links and internal structure: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — use real anchors with `href` and ensure every important page has an internal link.

### Chosen approach

- Add one shared server-rendered `TrustPageShell` with breadcrumb, one H1, readable `max-w-3xl` content, semantic H2 sections, theme tokens, and the project’s existing focus treatment.
- Implement six original pages: Methodology, About, Contact, Privacy Policy, Terms of Use, and Estimate Disclaimer. Keep page copy specific to actual site behavior and avoid unsupported author, legal, security, accuracy, approval, revenue, or professional-endorsement claims.
- Use an email link to `wattandwall@gmail.com` as the honest static-prototype contact mechanism. Do not add a form, claim delivery, promise a response time, or imply that the mailbox was tested from the website.
- State current behavior separately from future advertising behavior: no advertising or analytics tag is installed in the prototype; before AdSense or other non-essential tracking is added, the privacy notice and required consent flow must be updated to match the actual vendors and regions.
- Use visible effective/review dates, source links where relevant, plain-language limitations, and cross-links among Methodology, Privacy, Terms, Disclaimer, About, and Contact. Keep pages crawlable and fully server-rendered.

### Rejected alternatives

- **A contact form or Server Action:** rejected because no backend, mailbox integration, validation, spam handling, retention process, or tested delivery path exists.
- **Claiming “we never collect data” or “completely secure”:** rejected because browser requests, theme local storage, email providers, and future third-party services make those absolute claims too broad.
- **Publishing a generic copied legal template:** rejected because privacy and terms must describe actual behavior and future changes rather than create false legal certainty.
- **Adding an ad/cookie banner before ads or a consent vendor exists:** rejected because the prototype does not currently set advertising cookies and a non-functional consent control would be misleading.
- **Inventing an individual author, qualifications, testimonials, ratings, or company registration:** rejected because the project has no verified evidence for those claims.

### Implementation and verification evidence

- Added `components/trust-page-shell.tsx` plus the six route pages with unique metadata, descriptive H1s, breadcrumbs, readable sections, factual notes, internal links, source links, and no placeholders.
- Browser checks returned HTTP-rendered page state for all six routes: one `main`, one H1, unique titles, expected links, and zero horizontal overflow. The contact and privacy pages expose the intended `mailto:wattandwall@gmail.com` link without a form submission path.
- Light and Dark Mode produced distinct body surfaces while preserving the same content. Responsive checks at 1440×900, 768×900, and 320×800 kept readable widths and zero overflow; a full-page 320px visual review covered Methodology through the shared footer. Browser warning/error logs were empty.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (26/26), and `pnpm build` passed. The production build statically prerendered all 15 application routes.

## Stage 17 — SEO, social metadata, and structured data (August 24, 2026)

### Existing-file and framework audit

- Audited the root layout metadata, all route-level titles/descriptions, `siteConfig`, calculator registry, visible breadcrumbs, favicon, public assets, and the absence of robots, sitemap, Open Graph, Twitter, canonical, and JSON-LD files.
- Read the installed Next.js metadata, sitemap, robots, JSON-LD, icon, and Open Graph image guides before implementation. The app uses Server Components for metadata and static content, so no client boundary is needed for this stage.
- Confirmed the approved domain in the project configuration is `https://wattandwall.com`; the production hostname must be confirmed again before launch if the custom domain changes.

### Focused research sequence

1. Google title links: https://developers.google.com/search/docs/appearance/title-link — every page needs a concise, descriptive, distinct title.
2. Google snippets/meta descriptions: https://developers.google.com/search/docs/appearance/snippet — descriptions should be unique, relevant summaries; Google may choose page content instead.
3. Google canonicalization: https://developers.google.com/search/docs/crawling-indexing/canonicalization — canonical URLs are hints that should agree with the preferred site version.
4. Google canonical methods: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls — `rel=canonical`, redirects, and sitemap inclusion can reinforce the preferred URL.
5. Google sitemap build guide: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap — use absolute URLs, root placement, and only URLs intended for search.
6. Google site names: https://developers.google.com/search/docs/appearance/site-names — keep the Watt & Wall name consistent and non-misleading across page content and metadata.
7. Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization — organization markup belongs on the home/about context and should include only applicable details.
8. Google structured-data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies — JSON-LD must represent visible, complete, original content and does not guarantee a rich result.
9. Google structured-data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data — JSON-LD is the recommended maintainable format.
10. Google business details: https://developers.google.com/search/docs/appearance/establish-business-details — official site, logo, Search Console, and breadcrumb signals help disambiguate an organization.
11. Open Graph protocol: https://ogp.me/ — share cards need consistent title, type, URL, and representative image properties.
12. Next.js metadata and OG guide: https://nextjs.org/docs/app/getting-started/metadata-and-og-images — use metadata APIs and file conventions for head tags and generated share images.

### Chosen approach

- Add `createPageMetadata` so every indexable route has a unique description, relative canonical, Open Graph title/description/URL/site name/image, and Twitter `summary_large_image` data while inheriting the configured HTTPS metadata base.
- Add cached Next.js `robots.ts`, `sitemap.ts`, generated `opengraph-image.tsx`, `twitter-image.tsx`, and a branded `icon.svg`. The sitemap includes only the home, directory, four calculators, and six trust/company routes with absolute URLs and a fixed review date.
- Add visible-content-aligned Organization and WebSite JSON-LD to the home page, and BreadcrumbList JSON-LD to calculator and trust pages. Do not add SoftwareApplication or FAQ schema because the current pages do not need unsupported rich-result expectations and the content should remain the source of truth.
- Use escaped JSON-LD (`<` replaced with `\\u003c`) and no unverified social profiles, physical address, registration number, ratings, reviews, or claims of Google approval.

### Rejected alternatives

- **One generic title/description on every route:** rejected because Google recommends distinct page-specific titles and descriptions.
- **Relative URLs in sitemap or a guessed production hostname:** rejected because sitemap entries should be absolute and the custom domain must be verified before launch.
- **Fake Organization address, sameAs profiles, phone number, or logo claims:** rejected because no verified public business details were supplied.
- **SoftwareApplication JSON-LD on every calculator:** rejected because Google’s feature has required properties and structured data must reflect the visible page; the current planning tools do not need app-rich-result markup.
- **Keyword-stuffed metadata or hidden schema:** rejected because it would be misleading and conflict with people-first and structured-data policies.

### Implementation and verification evidence

- Added `lib/seo.ts`, `components/seo/structured-data.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`, `app/twitter-image.tsx`, and `app/icon.svg`; updated root and all route metadata to use canonical/share metadata.
- Browser head inspection on `/` confirmed the expected title, description, HTTPS canonical, Open Graph fields, Twitter card fields, branded icon links, and Organization/WebSite JSON-LD. Calculator inspection confirmed its route-specific canonical, share URL/title, and BreadcrumbList JSON-LD; privacy inspection confirmed its own canonical.
- Browser endpoint checks returned HTTP 200 and correct content types for `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/twitter-image`, and `/icon.svg`. The browser console reported no warnings or errors.
- Added metadata and site-configuration regression tests; the suite now passes 27/27 tests. `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass, with 20 static build outputs including metadata endpoints.

## Stage 18 — Final quality and AdSense-readiness audit (August 24, 2026)

### Final audit research sequence

1. Google AdSense ad placement: https://support.google.com/adsense/answer/1346295 — future ads must remain distinguishable from navigation, buttons, and content to avoid accidental clicks.
2. Google Publisher Policies: https://support.google.com/adsense/answer/10502938 — do not serve ads on low-value, under-construction, navigation-only, or misleading screens.
3. Google low-value inventory guidance: https://support.google.com/publisherpolicies/answer/11112688 — useful publisher content must remain the focal point.
4. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — original, complete, useful explanations are preferred over search-first filler.
5. Google AdSense program policies: https://support.google.com/adsense/answer/48182 — do not use deceptive navigation, false claims, or ad layouts that imitate actions.
6. Google site approval guidance: https://support.google.com/adsense/answer/81904 — launch with sufficient text, complete navigation, original content, and no under-construction/template-only experience.
7. Google page experience: https://developers.google.com/search/docs/appearance/page-experience — review mobile usability, secure delivery, intrusive interstitials, ads, and overall page experience.
8. Core Web Vitals: https://web.dev/articles/vitals — target LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1 at the 75th percentile; local checks do not replace field data.
9. WCAG reflow: https://www.w3.org/WAI/WCAG21/Understanding/reflow — preserve information and functionality at a 320 CSS-pixel equivalent without two-dimensional scrolling.
10. WCAG 2.2: https://www.w3.org/TR/wcag/ — retain meaningful headings, visible focus, reflow, contrast, and keyboard access.
11. MDN reduced motion: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion — honor a user’s reduced-motion preference for non-essential transitions.
12. Google consent requirements: https://support.google.com/adsense/answer/13554020 — configure a certified TCF CMP before personalized ads serve to EEA, UK, or Swiss visitors.

### Audit findings and decisions

- All current public pages contain publisher content, explanatory paragraphs, formulas/assumptions where relevant, and crawlable internal navigation. No ad code, ads.txt, ad labels, interstitials, or ad-like placeholder exists in the prototype.
- Keep the current “no ads before approval” state. When ads are introduced, reserve fixed-size slots, label them only as permitted, keep distance from controls/navigation, and implement the actual privacy/CMP behavior before serving covered traffic.
- Treat current Core Web Vitals as unverified field metrics: the static build, minimal client boundaries, `next/font`, no analytics, and no images on content pages are favorable implementation signals, but production HTTPS and PageSpeed/Search Console measurements remain launch checks.
- The quality target in the PRD calls for at least eight high-quality calculators or equivalent depth before an AdSense application; the prototype currently has four complete calculator pages. This is a launch-readiness gap, not something to conceal with thin generated pages.

### Verification evidence

- Browser-audited all 12 public content routes at 320×800: each returned one `main`, exactly one H1, a unique title, a route-specific HTTPS canonical, meaningful rendered body text, and zero horizontal overflow.
- Desktop and Dark Mode spot checks at 1440×900 for home, Electricity, and Privacy preserved content, H1s, semantic surfaces, and zero overflow. The browser console reported no warnings or errors after the full route run.
- Browser endpoint checks returned 200 for `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/twitter-image`, and `/icon.svg`; sitemap URLs are absolute and limited to current public content routes.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (27/27), `pnpm build`, and `git diff --check` passed. The production build statically prerendered the content routes and metadata endpoints.

### Remaining pre-launch actions (not falsely claimed as complete)

- Provision and verify the Gmail mailbox represented by `wattandwall@gmail.com` before publishing the contact address as an operational support channel.
- Deploy to the verified HTTPS custom domain and re-check metadata, robots, sitemap, canonical URLs, and generated images from production.
- Add only the exact AdSense verification/ad code and `ads.txt` values from the approved account; configure the required certified CMP and update Privacy Policy before ads serve.
- Expand to the PRD’s internal eight-calculator quality target or document an equivalent depth of original useful content before requesting AdSense review.

## Stage 12 — Electricity Cost Calculator

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the Stage 11 electricity formula, validation and formatting utilities, calculator registry, shared calculator shell, input/button primitives, theme tokens, root layout, metadata conventions, and existing test structure before adding the route.
- The pure formula already returns unrounded daily, monthly, and annual energy/cost values. The page therefore consumes that function rather than repeating arithmetic in React or page copy.
- The route needs one small Client Component for immediate input updates and clipboard access. Its explanatory content, sources, example, FAQs, breadcrumbs, and metadata remain server-rendered.
- `/disclaimer` and the related Paint destination are approved staged dependencies. Their links are intentional, but HTTP 200 verification is deferred to Stages 16 and 14 respectively.

### Search sequence and decisions

1. EIA measuring electricity: https://www.eia.gov/energyexplained/electricity/measuring-electricity.php — explain watts, kilowatts, and kilowatthours distinctly and use kWh as the energy unit.
2. U.S. Department of Energy appliance-use estimation: https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use — combine wattage and operating time, while warning that cycling devices need measured or average draw for a better estimate.
3. EIA prices and factors: https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php — make the local USD-per-kWh price editable because location, customer type, fuel, regulation, and other factors change rates.
4. DOE appliance nameplate guidance: https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use — nameplate wattage can represent maximum draw, so input help recommends measured average power where appropriate.
5. FTC EnergyGuide guidance: https://consumer.ftc.gov/node/77485 — treat label costs as estimates because actual use and local energy price vary.
6. ENERGY STAR EnergyGuide label guidance: https://www.energystar.gov/products/energy_star_home_upgrade/energy_guide_label — do not present a label-style estimate as a bill or savings guarantee.
7. WAI form labels and instructions: https://www.w3.org/WAI/tutorials/forms/instructions/ — give every field a visible label, persistent unit/range hint, and clear required-field instruction.
8. WCAG status messages: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html — announce changing results and copy feedback without moving focus.
9. WCAG error identification: https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html — identify each invalid field in text and associate its message programmatically.
10. MDN Clipboard `writeText`: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText — use it only after the user's Copy action and provide success/failure feedback because access can be unavailable.
11. MDN number input: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number — retain numeric keyboards and native constraints, but keep explicit formula validation and visible instructions.
12. React controlled inputs: https://react.dev/reference/react-dom/components/input — keep editable values as strings, synchronously update state on change, and restore known defaults with Reset.
13. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — include the formula, worked example, assumptions, limitations, primary sources, FAQ, and review date instead of publishing a thin widget.
14. Google SoftwareApplication structured data: https://developers.google.com/search/docs/appearance/structured-data/software-app — defer this markup because required offer/review details and eligibility should not be invented for a free calculator page.
15. Google title-link guidance: https://developers.google.com/search/docs/appearance/title-link — provide a concise route-specific metadata title matching the visible calculator purpose.

### Chosen approach

- Add a static server-rendered calculator page with one narrowly scoped Client Component. Keep formulas and full-field validation in the shared pure module so UI, tests, examples, and later consumers use the same rules.
- Use controlled string inputs for power, power unit, active hours, active days, and editable USD/kWh price. Parse only for validation/calculation so incomplete text does not silently become a believable result.
- Show a concise monthly headline plus daily/monthly/yearly energy and cost. Hide numeric results when any field is invalid, associate inline text errors with inputs, and use a pre-existing polite `output` for non-focus-changing result updates.
- Provide explicit Reset and Copy Result buttons. Clipboard feedback uses a separate polite region and exposes an alternative when the Clipboard API is unavailable.
- Keep calculation precision internally; format only displayed values. Explain the formula, use a programmatically generated worked example, document assumptions and bill limitations, cite primary sources, and link related tools.
- Use native `details` FAQs without FAQ structured data, and omit SoftwareApplication JSON-LD until the site-wide eligibility/validation stage.

### Rejected alternatives

- **A fixed national electricity rate:** rejected because user location, tariff, fees, and time-varying pricing can materially change cost.
- **One Calculate submit action:** rejected because these local inputs can update immediately and accessible live status communicates the result without a server round trip.
- **Duplicated formula code inside the component:** rejected because it could drift from tested engine behavior and worked examples.
- **Showing zero or stale results for incomplete fields:** rejected because it would make invalid input look like a trustworthy estimate.
- **An always-on assertive alert:** rejected because routine recalculation is not urgent and should not interrupt screen-reader users.
- **Ads, affiliate units, or structured-data review claims:** rejected because monetization inventory and unsupported eligibility signals are outside this implementation stage.

### Implementation and verification evidence

- Added the complete `/calculators/electricity-cost` vertical slice: route metadata, calculator widget, transparent formula, generated worked example, assumptions/rounding, three primary-source links, review date, limitations, four FAQs, and related calculators.
- Extended the shared engine with one all-fields validator. The calculation function now reuses it for its first corrective error, and tests assert all five simultaneous field messages as well as existing math behavior.
- Browser interaction confirmed the default 1,500 W example, a 1,000 W update ($14.40/month and $172.80/year), invalid negative-power identification, hidden invalid results, disabled Copy state, defaults restoration, and successful clipboard feedback.
- Light and Dark Mode retain the same values and geometry while using distinct semantic surfaces. Responsive checks passed at 1440×900, 768×900, and 320×800 with two columns only at desktop and no horizontal overflow.
- Full-page mobile visual inspection confirmed readable hierarchy, correctly stacked fields/actions/results/content, native FAQ behavior, related links, and Footer integration. Source links and FAQ summaries have explicit visible keyboard focus styling.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (23/23), `pnpm build`, and `git diff --check` passed. `/`, `/calculators`, and `/calculators/electricity-cost` are statically prerendered.

## Stage 13 — Appliance Running Cost Calculator

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the PRD's watts-only appliance requirements, the Stage 11 pure appliance formula/tests, the completed Electricity calculator's accessible interaction pattern, shared CalculatorShell, UI primitives, theme tokens, typed route registry, metadata pattern, and formatting utilities.
- The existing formula correctly converted watts and applied an active-day schedule, but it exposed only monthly/annual values and stopped at the first validation error. The required plain-English interpretation benefits from active-day energy/cost, and the form needs all field errors at once.
- The Electricity widget provides a proven Client Component boundary, but appliance-specific copy must distinguish active wattage from cycling, sleep, and standby use rather than presenting the pages as interchangeable.
- `/disclaimer` and the related Flooring destination remain approved staged dependencies; their HTTP 200 checks belong to Stages 16 and 15.

### Search sequence and decisions

1. U.S. DOE appliance estimation: https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use — convert watts to kW and multiply by operating time; recommend measured values where rated wattage does not represent typical operation.
2. EIA household electricity use: https://www.eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php — avoid generic household comparisons because end uses vary by region, home, and equipment.
3. FTC EnergyGuide consumer guidance: https://consumer.ftc.gov/node/77485 — label operating cost is an estimate based on typical use and an average rate; this page instead uses the user's schedule and local price.
4. ENERGY STAR appliance criteria search: https://www.energystar.gov/products/dishwashers/key_product_criteria — standardized annual values can include test-procedure schedules and standby energy, unlike this simple active-load model.
5. ENERGY STAR standby-power guidance: https://www.energystar.gov/sites/default/files/tools/Standby_Power_Highlights.pdf — visibly disclose that devices can draw power while apparently off.
6. ENERGY STAR home-energy monitoring criteria: https://www.energystar.gov/products/shems_key_product_criteria — measured plug-load data can represent real device consumption better than a single rated number.
7. ENERGY STAR television mode criteria: https://www.energystar.gov/products/televisions/key_product_criteria — active and standby modes have distinct measured power, reinforcing the need to state which mode the input represents.
8. ENERGY STAR connected-device criteria: https://www.energystar.gov/products/smart_home_tips/about_products_connected_functionality/connected_criteria_partners — connected products may report consumption and retain standby loads; do not imply one active wattage models every mode.
9. W3C accessible forms and validation: https://www.w3.org/WAI/tutorials/forms/validation/ — provide labels, numeric constraints, visible correction text, and retained values.
10. W3C status technique: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22.html — keep result/copy containers present and announce routine updates politely without moving focus.
11. MDN Clipboard `writeText`: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText — call from an explicit user action and handle unavailable or denied clipboard access.
12. Google people-first content and developer SEO guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content and https://developers.google.com/search/docs/fundamentals/get-started-developers — use descriptive metadata, semantic server-rendered content, formula context, original interpretation, assumptions, sources, and limitations rather than a thin duplicated widget.

### Chosen approach

- Extend the pure appliance result with active-day energy/cost and add an all-fields validator reused by the calculation function. Keep React responsible only for input strings, presentation, and clipboard behavior.
- Use four labelled fields: watts, active hours, whole active days, and editable USD/kWh. Apply the same corrective messages and invalid-result hiding as the tested formula layer.
- Present monthly cost as the headline, daily/monthly/annual energy and cost as a compact breakdown, and a generated plain-English interpretation that repeats the exact calculated monthly and annual values.
- Document that constant active wattage is the model boundary. Recommend measured average watts for cycling appliances and state that standby/sleep/startup power is excluded unless already represented in the input.
- Add a dedicated USD electricity-rate formatter with up to four decimal places. This prevents a value such as `$0.175/kWh` from displaying as `$0.18/kWh` while calculations still use the more precise input.
- Keep formula, worked example, assumptions, sources, FAQ, limitations, review date, breadcrumbs, metadata, and related links server-rendered. Reuse semantic theme tokens and native `details` disclosures.

### Rejected alternatives

- **An appliance-name dropdown with generic wattages:** rejected because models and operating modes vary, and an authoritative maintained dataset is outside this static prototype.
- **Treating nameplate watts as measured average consumption:** rejected because rated or maximum load can misrepresent cycling equipment.
- **Automatically adding a hidden standby percentage:** rejected because standby power differs by product and mode; an invisible assumption would create false precision.
- **Household-percent or savings claims:** rejected because the calculator models one entered load and does not know the user's full bill, baseline, location, or replacement product.
- **Reusing two-decimal currency formatting for the electricity rate:** rejected after visual QA showed `$0.175/kWh` becoming `$0.18/kWh`, which made the displayed assumption inconsistent with the calculation.
- **FAQ or SoftwareApplication structured data now:** rejected because eligibility and site-wide schema validation remain Stage 17 work, and unsupported offer/review data must not be invented.

### Implementation and verification evidence

- Added `/calculators/appliance-running-cost` with route metadata, the complete live widget, formula, generated example, explicit interpretation, assumptions/rounding, four primary-source links, review date, limitations, four FAQs, and related calculators.
- Extended the pure formula and tests without changing its monthly/annual math. The shared validator now reports every invalid appliance field, and formatting tests cover the precise `$0.175` rate display.
- Browser checks confirmed one H1/main, four labelled required inputs, exact defaults, `$4.20` monthly and `$50.40` annual output, and the correct related-route links.
- Changing wattage to 1,000 W produced 30 kWh and `$5.25` per month plus `$63.00` per year in both the live status and plain-English interpretation. Negative wattage showed associated corrective text, hid results, and disabled Copy.
- Reset restored 800 W and Copy produced polite success feedback. Keyboard focus styling is visible; native FAQ summaries expose their disclosure semantics without a JavaScript accordion.
- Light and Dark Mode preserved values and geometry with distinct surfaces. Layout checks passed at 1440×900, 768×900, and 320×800 with no horizontal overflow; full-page mobile visual review confirmed readable stacked content and Footer integration.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (24/24), `pnpm build`, and `git diff --check` passed. All four implemented public routes are statically prerendered.

## Stage 14 — Paint Quantity Calculator

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the PRD's room/openings/coats/coverage requirements, pure paint formula and conversion helper, validation utilities/tests, completed calculator interaction pattern, shared shell/primitives, typed routes, themes, and metadata/content conventions.
- The pure engine already preserved raw gallons/litres and rounded only the final whole-gallon suggestion. It needed all-field validation plus a combined openings error suitable for an eight-input accessible form.
- The 20 sq ft/door and 15 sq ft/window constants required direct source confirmation. Coverage and waste must remain editable because product, surface, application, and touch-up needs vary.

### Search sequence and decisions

1. Sherwin-Williams paint calculator guidance: https://ltx-www.sherwin-williams.com/en-us/color/color-tools/paint-calculator — typical paint coverage is about 350–400 sq ft/gal, but surface and application change it.
2. Behr coverage calculator: https://www.behr.com/consumer/products/paint-and-stain-calculator — room dimensions, doors/windows, and a visible touch-up option are material inputs; results are estimates.
3. Benjamin Moore quantity guide: https://media.benjaminmoore.com/WebServices/prod/ColorCards2012/transformyourhome/offline/download.pdf — directly confirms perimeter × height, 15 sq ft/window, 20 sq ft/door, coats, and the 12×10×8 worked example.
4. PPG product guidance: https://www.ppgpaints.com/PDFs/LEED-V4-Certification/12-110XI-TDS — coverage is product-specific and can exclude porosity, irregularity, and application losses.
5. Behr measuring guide: https://www.behr.com/how-to/interior/determine-how-much-interior-paint-to-buy — use room perimeter × height and product-label coverage; porous/textured surfaces or color changes may need more paint.
6. Sherwin-Williams rounding guidance: https://blog.sherwin-williams.com/projects/project-product-advice/the-diy-painters-handbook/ — preserve the estimate but round the purchase quantity up for adequate coverage/touch-ups.
7. Benjamin Moore product data: https://www.benjaminmoore.com/en-us/product/regal-select-waterborne-interior-paint-flat-1-gallon-chantilly-lace-2121-70/N547/ZWB100000001973182 — coverage and recommended coats vary by actual product.
8. Behr visible touch-up allowance: https://www.behr.com/consumer/products/paint-and-stain-calculator — supports a visible, user-controlled allowance rather than hidden waste.
9. NIST volume conversion: https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9 — one US gallon converts to 3.785412 litres.
10. W3C control grouping: https://www.w3.org/WAI/tutorials/forms/grouping/ — split the dense form into named room, openings, and paint-plan fieldsets.
11. W3C status messages: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html — announce concise result changes politely without moving focus or making the form chatty.
12. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — add original formula explanation, generated example, assumptions, sources, limitations, and FAQ instead of publishing a thin calculator clone.

### Chosen approach

- Keep the pure formula as the only arithmetic source. Add an all-fields validator and a combined `openings` error only after the eight individual values are valid; the calculation function reuses its first error.
- Group visible inputs in three semantic fieldsets: room dimensions, unpainted openings, and coats/coverage/waste. Associate the impossible-opening error with both door and window controls.
- Use the source-backed 20/15 sq ft opening allowances as explicit documented assumptions. Keep coverage and 0–100% waste editable and visible.
- Show paintable/coated areas, raw gallons before/after waste, litres, and a separately labelled whole-US-gallon suggestion. Apply `Math.ceil` only after waste, never to intermediate calculations.
- Keep route metadata, formula, generated example, assumptions, source notes, limitations, FAQ, and related links server-rendered; only form state and clipboard access are client-side.

### Rejected alternatives

- **A universal fixed 400 sq ft/gal result:** rejected because coverage varies materially by product, surface, and application.
- **Hidden 10% extra:** rejected because waste/touch-up needs vary; the allowance must be visible and editable.
- **Rounding all gallon values:** rejected because users need the transparent calculated quantity as well as the practical whole-container suggestion.
- **Measuring ceilings, trim, painted doors, primer, or exterior shapes in this form:** rejected because they require different surfaces, coverage, and geometry; the page explicitly scopes itself to rectangular-room walls.
- **One flat eight-field group:** rejected because semantic and visual grouping makes the form easier to understand and navigate.

### Implementation and verification evidence

- Added `/calculators/paint-quantity` with grouped live inputs, formula-backed validation, Copy/Reset, complete result breakdown, exact worked example, assumptions, four sources, review date, limitations, four FAQs, and related calculators.
- Tests now cover all eight invalid fields plus the source-backed impossible-openings case while preserving the existing 302 sq ft, 1.661 US gal, 6.287 L, and 2-gallon expected values.
- Browser checks confirmed one main/H1, three fieldsets, eight labelled required controls, default 2 US gal suggestion, 1.66 US gal/6.29 L live result, four native FAQs, and no horizontal overflow.
- Changing room length to 20 ft produced 2.37 US gal, 8.95 L, and a 3-gallon suggestion. Impossible openings marked both controls invalid, associated the shared error text, hid results, and disabled Copy; Reset and clipboard feedback worked.
- Light and Dark Mode retained identical results and layout. Checks passed at 1440×900, 768×900, and 320×800; mobile visual QA prompted stacked result rows for long values and confirmed readable form/content/Footer integration.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (25/25), `pnpm build`, and `git diff --check` passed. All five implemented public routes are statically prerendered.

## Stage 10 — Footer

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the approved route map, root layout, shared logo, site configuration, primary navigation, typed calculator registry, completed Final CTA, legal-page schedule, and existing focus/theme primitives.
- The footer belongs after page content in the root layout and can remain a Server Component. Reusing the client-side active-navigation component would add unnecessary path state to a static landmark.
- Calculator destinations already have a typed source of truth. Trust and company destinations needed one shared typed data set so navigation labels and routes remain reviewable and testable.
- The approved destination pages are scheduled for Stages 11–16. This stage verifies complete, correct `href` coverage; HTTP 200 checks for those links are deliberately deferred until the destination routes exist.

### Search sequence and decisions

1. WAI landmark regions: https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/ — use one top-level `footer` as the page's `contentinfo` landmark.
2. WAI navigation landmark example: https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html — give multiple navigation landmarks distinct accessible labels.
3. Google link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — use real crawlable links with concise, descriptive anchor text.
4. Google sitelinks guidance: https://developers.google.com/search/docs/appearance/sitelinks — preserve a logical site structure and link important destinations from relevant pages.
5. Google AdSense cookie guidance: https://support.google.com/adsense/answer/7549925 — make the Privacy policy easy to find because publishers must disclose cookie use.
6. Google AdSense CMP setup: https://support.google.com/adsense/answer/7670013 — retain a clear privacy route and plan certified consent handling before ads serve in applicable regions.
7. Google publisher CMP requirements: https://support.google.com/adsense/answer/13554116 — serving personalized ads in the EEA, UK, or Switzerland requires an appropriate Google-certified TCF CMP.
8. Google European regulations messages: https://support.google.com/adsense/answer/10961068 — disclosures and consent controls are launch requirements, not decorative footer copy.
9. WCAG link purpose: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html — every footer label should identify its destination without vague “learn more” wording.
10. WCAG focus visible: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible — retain the shared two-layer visible keyboard focus treatment on every link.
11. WCAG reflow: https://www.w3.org/TR/WCAG22/#reflow — stack navigation groups without two-dimensional scrolling at 320 CSS pixels.
12. WCAG contrast minimum: https://www.w3.org/TR/WCAG22/#contrast-minimum — use established semantic foreground and muted tokens in both themes.
13. Next.js Link: https://nextjs.org/docs/app/api-reference/components/link — use `Link` for internal anchor semantics and client navigation.
14. Next.js prefetching guide: https://nextjs.org/docs/app/guides/prefetching — disable viewport prefetch for the footer's route list to avoid loading many low-intent destinations at once.

### Chosen approach

- Add one non-sticky, server-rendered `SiteFooter` after page content in the root layout. Use the native top-level `footer` element and no redundant `role`.
- Reuse `SiteLogo` and `siteConfig.description`; derive calculator links from the typed calculator registry and keep Trust/Company routes in shared typed site data.
- Present three navigation groups—Calculators, Trust, and Company—each labelled by its visible H2 through `aria-labelledby`. Use list semantics and descriptive link labels.
- Give every link a 44px minimum height, visible two-layer focus ring, semantic theme colors, and reduced-motion-safe hover treatment. Use one mobile column, two tablet columns, and four desktop columns.
- Render the current copyright year on the server with `Date#getFullYear`; do not introduce client state or hydration solely for the year.

### Rejected alternatives

- **One unlabelled link cloud:** rejected because distinct named navigation landmarks make a long footer easier to understand and navigate.
- **Reusing active header navigation:** rejected because pathname-aware client code is unnecessary in a static footer and would expand hydration scope.
- **Hard-coded duplicate calculator routes:** rejected because route drift is less likely when footer links come from the tested registry.
- **A sticky footer:** rejected because it can obscure keyboard focus and consume limited mobile viewport space.
- **External social links or unsupported legal claims:** rejected because no approved accounts or finalized legal content exists yet.
- **Enabling automatic prefetch for all footer links:** rejected because Next.js specifically identifies large footer lists as a case where disabling prefetch may reduce unnecessary resource use.

### Implementation and verification evidence

- Added shared Trust/Company footer data and a test protecting every approved route. The calculator group is derived from the existing typed registry rather than duplicated.
- Added one Server Component with a native contentinfo landmark, three uniquely labelled navigation regions, semantic lists, descriptive internal links, brand summary, and server-rendered 2026 copyright. No client boundary or dependency was added.
- Browser DOM inspection confirmed one contentinfo landmark, exact headings and destinations, 12 total links, 44px link targets, and a visible two-layer keyboard focus ring.
- Responsive checks passed at 1440×900, 768×1024, and 320×800. The layout changes from four columns to two to one, with zero horizontal overflow and clean mobile wrapping/order.
- Light and Dark Mode preserve content and geometry while using distinct semantic background and foreground colors. Full-page mobile visual inspection found no clipping or hierarchy issue; the browser reported no warnings or errors.
- Approved destination `href` values are complete, but route availability remains a known staged dependency until Stages 11–16 create those pages; this stage does not falsely claim live-link success.

## Stage 11 — Calculator engine and directory

Date: 2026-08-22  
Status: Complete.

### File and architecture audit

- Audited all PRD calculator inputs/results, the typed registry and tests, hero electricity example, UI primitives, route map, rendering rules, dependencies, theme shell, and proposed calculator directory/component structure.
- Read the installed Next.js 16.3.2 Server/Client Component and forms guides before implementation. Static pages, explanatory content, directory cards, and CalculatorShell remain server-rendered; future live widgets alone will own state and event handlers.
- No formula directory, shared calculator shell, formatting utilities, or directory route existed. The four home cards duplicated the visual card pattern that the directory also needed.
- Stage 11 establishes formula and shared-page foundations. The four full destination pages remain intentionally scheduled for Stages 12–15; their approved links are present, but HTTP 200 checks are not claimed until each vertical slice exists.

### Search sequence and decisions

1. U.S. EIA electricity measurement: https://www.eia.gov/energyexplained/electricity/measuring-electricity.php — one kWh is one kW used for one hour; watts must be divided by 1,000.
2. U.S. Department of Energy energy formula: https://www.energy.gov/sites/default/files/2014/06/f16/basics_intermediateenergyinfobook.pdf — energy equals power multiplied by time; cost equals kWh multiplied by the local price per kWh.
3. ENERGY STAR appliance calculation search — confirmed that usage schedules require both time and active-day assumptions; no unsupported product-efficiency claim is included.
4. Sherwin-Williams paint coverage search: https://images.sherwin-williams.com/content_images/sw-pdf-painter-skills-training-class-presentation-presenter-notes.pdf — manufacturer training identifies roughly 350–400 sq ft per gallon, so coverage must remain user-editable.
5. Benjamin Moore paint quantity guide: https://media.benjaminmoore.com/WebServices/prod/ColorCards2012/transformyourhome/offline/download.pdf — wall area is perimeter × height, with 20 sq ft per door and 15 sq ft per window as documented estimating allowances.
6. Behr paint calculator: https://www.behr.com/consumer/products/paint-and-stain-calculator — doors, windows, room dimensions, coats/product coverage, and touch-up allowance materially change results; outputs are estimates.
7. Lowe's flooring calculation search: https://www.lowes.com/questions/style-selections-lwd20434rc7-vinyl-plank/5016711587/3de34bc7-b09e-5415-8f5b-7f184980f6b8 — area is length × width, then waste is added before dividing by carton coverage.
8. Home Depot tile overage search: https://www.homedepot.com/catalog/pdfImages/4c/4c4e55bb-3792-4c1b-a74a-c95fcd9a33e3.pdf — 10% is common but layout-dependent, so waste is an explicit input rather than an invisible constant.
9. Daltile quantity search: https://digitalassets.daltile.com/content/dam/Daltile/website/resources/trade-professionals/architects-designers/AD_fillableform.pdf — project and maintenance overage varies; the tool must describe user-selected waste rather than guarantee sufficiency.
10. WAI form validation: https://www.w3.org/WAI/tutorials/forms/validation/ — reject invalid values with specific text and be forgiving only where formats remain unambiguous.
11. MDN numeric input search: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input — native input constraints help but do not replace explicit calculation validation and visible instructions.
12. WCAG status messages: https://www.w3.org/WAI/WCAG22/Techniques/failures/F103.html — future live result updates need a pre-existing `output`, status role, or live region.
13. MDN finite-number/rounding search: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite — explicitly reject NaN and infinity; apply `Math.ceil` only to purchasable whole units.
14. Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — directory and future pages must add transparent formulas, assumptions, examples, and sources rather than thin search-first text.
15. Google crawlable links: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — every calculator needs a descriptive real link from the server-rendered directory.

### Chosen approach

- Create one pure typed module per calculator under `lib/calculators`, plus shared validation, conversion, and formatting utilities. Formula modules do not import React, UI, locale formatting, or route code.
- Return unrounded numeric results. Use tolerance in precision-sensitive tests and keep `Intl.NumberFormat` in a separate display layer so presentation never changes formula output.
- Throw `CalculatorValidationError` with the responsible field and corrective text for non-finite, zero/negative, out-of-range, non-whole, unsupported-unit, or physically impossible values.
- Energy formulas convert watts to kW, multiply by active hours/days, and then apply the user-entered local rate. Annual values extend the monthly schedule by 12 without hiding a regional default.
- Paint uses `2 × (length + width) × height`, subtracts documented opening allowances, multiplies coats, divides by editable coverage, then applies visible waste. It preserves raw gallons/litres and rounds only the whole-gallon purchase quantity up.
- Flooring uses length × width, adds the selected waste area, divides by product coverage, and rounds only the final pack/tile count up.
- Add one static `/calculators` directory grouped by the typed category registry, a shared card used on home and directory pages, and a server-rendered CalculatorShell with breadcrumb/header slots for Stages 12–15.

### Rejected alternatives

- **Rounding inside formula functions:** rejected because hidden rounding compounds error and makes later formatting changes alter results.
- **One generic formula switch:** rejected because calculator-specific input/result types and focused tests provide safer change boundaries.
- **Zod or a form/state dependency:** rejected because small explicit numeric guards cover this prototype and avoid unnecessary bundle/dependency cost.
- **Server Actions for live calculations:** rejected because no data is stored or submitted; immediate browser calculation belongs in small future Client Components.
- **A universal hidden 10% waste:** rejected because products and layouts vary; the user must see and control the allowance.
- **Thin placeholder calculator routes:** rejected because they would create low-value indexable pages. Complete vertical slices follow in Stages 12–15.

### Implementation and verification evidence

- Added four pure modules with explicit input/result types, field-aware validation, watt/kW and US-gallon/litre conversion, and separate USD/decimal display formatting.
- Added tests covering PRD examples, decimals, active schedules, conversion, raw precision, openings, coats, coverage, waste, final `ceil`, NaN, negative, zero/range, fractional whole-number fields, unsupported units, and impossible opening area.
- Added the static directory route, server CalculatorShell, and one shared CalculatorCard. Home and directory now consume the same typed card implementation, preventing visual and route drift.
- Browser inspection confirmed one H1, two labelled category sections, four descriptive calculator links with exact approved `href` values, correct metadata title, visible focus, and no console warnings/errors.
- Responsive checks passed at 1440×900, 768×1024, and 320×800 with 2/2/1 card columns as designed and zero horizontal overflow. Full-page mobile visual inspection confirmed clean hierarchy, wrapping, card order, and footer integration.
- Light and Dark Mode preserve all directory content and geometry while applying distinct semantic page/card surfaces.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (22/22), `pnpm build`, and `git diff --check` passed. Both `/` and `/calculators` are statically prerendered.

## Stage 9 — Final CTA

Date: 2026-08-22  
Status: Complete.

### File audit

- Audited the completed home narrative, Hero/header CTA repetition, calculator route registry, shared button variants, adjacent FAQ spacing, planned Footer, and the PRD requirement for one honest final action.
- “Browse calculators” already names the established primary journey and `/calculators` is the approved directory route. The final action should reinforce that route rather than introduce a competing action or claim.
- The shared primary link treatment already provides a 44px target, semantic theme colors, visible focus, reduced-motion behavior, and consistent hover styling.
- No ad slots exist. The section must remain visually identifiable as publisher content and leave future advertising clearly separated and explicitly labelled.

### Search sequence and decisions

1. Google AdSense placement policies: https://support.google.com/adsense/answer/1346295 — keep navigation/actions clearly distinguishable from ads and avoid layouts that encourage accidental clicks.
2. Google AdSense program policies: https://support.google.com/adsense/answer/48182 — do not use deceptive navigation, non-existent destinations, or ads that imitate site actions.
3. Next.js Link: https://nextjs.org/docs/app/api-reference/components/link — use `Link` for the real internal route and retain native anchor semantics and prefetching.
4. WAI native-action technique: https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35.html — use a real anchor with `href` for navigation rather than a scripted button or clickable container.
5. GOV.UK button guidance: https://design-system.service.gov.uk/components/button/ — sentence-case action text should describe what happens; a start action that navigates should be a link.
6. USWDS button guidance: https://designsystem.digital.gov/components/button/ — use short action words that clearly explain the result of activation.
7. WCAG target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum — keep the CTA comfortably above the 24px AA minimum and preserve the project's 44px preference.
8. WCAG contrast: https://www.w3.org/TR/WCAG22/#contrast-minimum — retain semantic button/background combinations that meet readable text contrast in both modes.
9. WCAG reflow: https://www.w3.org/TR/WCAG22/#reflow — stack copy and action at narrow widths with no two-dimensional scrolling at 320px.
10. WCAG animation from interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions — keep motion non-essential and respect reduced-motion preferences.
11. GOV.UK clear link text: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/add-links/ — use meaningful action text instead of “click here,” “more,” or a vague label.
12. GOV.UK clear language: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/ — use active voice, plain words, and a short supporting sentence.

### Chosen approach

- Add one server-rendered final action section after the FAQ with the heading “Ready to make a clearer estimate?” and one factual sentence describing the next steps.
- Use one `Link` to `/calculators` with the descriptive label “Browse all calculators.” Reuse the shared primary variant instead of creating new interaction styling.
- Place the copy and action in a bordered, low-intensity primary-tint publisher-content panel. Do not add ad-like labels, sponsor language, countdowns, urgency, proof badges, or secondary actions.
- Stack the action full-width on mobile, retain natural-width presentation from `sm`, and align copy/action horizontally only at `lg`.

### Rejected alternatives

- **“Start saving now,” guaranteed savings, or instant-result copy:** rejected because savings and result quality depend on user values and assumptions.
- **Two competing CTAs:** rejected because the final section should reinforce one next step after users have reviewed the FAQ.
- **A button with router event handling:** rejected because this is navigation and a crawlable link provides correct semantics without client JavaScript.
- **A highly promotional banner or animated arrow:** rejected because it could resemble ad inventory, create unnatural attention, and add unnecessary motion.
- **Placing an ad inside or immediately against the CTA panel:** rejected because Google requires clear separation between site actions and ads.

### Implementation and verification evidence

- Added a server-rendered Final CTA with one H2, one supporting paragraph, and exactly one real internal link. It introduces no client boundary, event handler, dependency, unsupported claim, or secondary action.
- Browser inspection confirmed the exact `/calculators` destination, “Browse all calculators” accessible text, one link, zero buttons, a 44px target, and a visible two-layer focus ring.
- Responsive checks passed at 1440×900, 768×1024, and 320×800. The desktop panel balances copy and action horizontally, while tablet/mobile stack the action with zero horizontal overflow.
- Mobile visual review found and corrected an awkward two-line eyebrow; “Start your estimate” now remains one line at 320px. The action spans the available mobile content width without clipping.
- Light and Dark Mode preserve content and geometry while using distinct semantic primary-tint surfaces. The browser console reported no warnings or errors.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` (7/7), `pnpm build`, and `git diff --check` passed. `/` remains statically prerendered.
