# Product Requirements Document

## Home Energy & Renovation Calculators

**Status:** Draft for review  
**Product stage:** Basic working prototype  
**Recommended brand:** Watt & Wall  
**Recommended domain:** `wattandwall.com`, subject to purchase and formal trademark clearance.

## 1. Executive summary

We will build a fast, trustworthy website that helps homeowners make simple energy and renovation estimates without signing up. The product will use Next.js, React, TypeScript, Tailwind CSS, and the exact Claude+ theme foundation from tweakcn.

The prototype will prove the core experience with four working calculators and reusable page patterns. It will be designed for search discovery and future AdSense review, but we will not pretend that a small prototype is automatically AdSense-ready. Google asks for original, useful content, clear navigation, and a good user experience; it does not publish a guaranteed calculator or article count.

## 2. Before and after

**Before:** A homeowner searches several websites, manually compares formulas, and still does not know the assumptions behind an estimate.

**After:** The homeowner opens one focused calculator, enters a few values, receives an immediate result, and can see the formula, assumptions, source, example, and related guidance on the same page.

## 3. Product goal

Create a focused calculator website that:

- solves common home-energy and renovation questions;
- earns trust through transparent calculations and cited sources;
- can be crawled and understood by search engines;
- is structurally ready for AdSense review after sufficient original content is published;
- stays simple enough to build and maintain as a small prototype.

### Success measures

For the prototype:

- Four calculators work correctly on mobile, tablet, and desktop.
- Every calculator explains its result, formula, units, assumptions, and limitations.
- Users can reach any calculator from the home page in no more than two clicks.
- Lint, strict TypeScript checks, unit tests, and the production build pass.
- Accessibility and performance checks meet the acceptance criteria in section 11.

After public launch:

- Calculator completion rate, organic entrances, return visits, and related-tool clicks are measured.
- AdSense is requested only after the content and compliance gate in section 10 passes.
- No revenue or approval promise is presented to users or stakeholders.

## 4. Target users

### Primary user

A homeowner or renter who wants a quick, understandable estimate before buying a product, planning a project, or speaking with a contractor.

### Secondary users

- DIY users estimating materials.
- Buyers comparing appliance or vehicle energy costs.
- Contractors who want a simple customer-facing estimate.

### Initial market

English-speaking users, with US units and USD as the initial defaults. Each calculator must let the user enter a local rate or price so the result is not falsely presented as universal. Metric-unit and wider regional support can follow after the prototype.

## 5. Prototype scope

### 5.1 Working calculators

1. **Electricity Cost Calculator**  
   Inputs: watts or kilowatts, hours used, days used, and electricity price per kWh.  
   Results: daily, monthly, and annual energy use and cost.

2. **Appliance Running Cost Calculator**  
   Inputs: appliance wattage, daily usage, active days, and electricity price.  
   Results: monthly and annual running cost, with a plain-English interpretation.

3. **Paint Quantity Calculator**  
   Inputs: room dimensions, doors/windows, number of coats, and paint coverage.  
   Results: paintable area and estimated litres/gallons, rounded up with a visible waste allowance.

4. **Flooring and Tile Calculator**  
   Inputs: floor dimensions, pack/tile coverage, and waste percentage.  
   Results: required area, adjusted area, and number of packs/tiles.

These four cover two energy and two renovation jobs while keeping the first release manageable. Solar payback, EV charging, insulation, HVAC sizing, and project-cost tools are later candidates because they require more regional data or more assumptions.

### 5.2 Pages

- `/` — home/landing page
- `/calculators` — calculator directory
- `/calculators/electricity-cost`
- `/calculators/appliance-running-cost`
- `/calculators/paint-quantity`
- `/calculators/flooring-tile`
- `/methodology` — how formulas, sources, rounding, and updates are handled
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/disclaimer`

### 5.3 Home page structure

1. Header with logo, Calculators, Methodology, About, and a clear “Browse calculators” action.
2. Hero explaining the user benefit in one sentence, with one primary action and a compact sample calculation card.
3. Featured calculator cards for the four prototype tools.
4. “How it works” in three steps: enter values, review assumptions, use the estimate.
5. Energy and renovation category section with contextual links.
6. Trust section explaining transparent formulas, source dates, privacy, and no-sign-up use.
7. Short FAQ answering accuracy, data storage, units, and professional-estimate limitations.
8. Final action and footer with all trust and legal links.

No fake user numbers, testimonials, ratings, savings claims, or “AdSense approved” messaging will appear.

### 5.4 Calculator page pattern

Every calculator page contains:

- breadcrumb and one clear H1;
- short description of the decision it helps with;
- labelled input form with units and safe defaults;
- immediate result summary and useful result breakdown;
- Reset and Copy result actions;
- formula and worked example;
- assumptions, rounding rules, source and “last reviewed” date;
- limitations/disclaimer;
- relevant FAQs and links to two related calculators;
- reserved ad positions that remain empty until approval.

## 6. Design system: Claude+

Source: [Claude+ theme on tweakcn](https://tweakcn.com/themes/cmdght103000n04lh3e2ae93r). The theme is described as corporate, minimal, professional, and startup-oriented. We will install or reproduce its Tailwind v4 registry tokens rather than approximate its appearance.

### Visual direction

- Warm, calm, credible, and practical.
- Warm off-white page background with soft stone cards.
- Burnt-orange primary actions; neutral dark text.
- Rounded but professional surfaces, subtle borders, and restrained shadows.
- No glassmorphism, heavy gradients, parallax, decorative charts, or unnecessary animation.

### Core tokens

| Token | Claude+ light value | Use |
|---|---|---|
| Background | `oklch(0.9818 0.0054 95.0986)` | Page canvas |
| Foreground | `oklch(0.3438 0.0269 95.7226)` | Main text |
| Card | `oklch(0.9665 0.0067 97.3521)` | Calculator/card surfaces |
| Primary | `oklch(0.6171 0.1375 39.0427)` | Main actions and active states |
| Secondary | `oklch(0.9245 0.0138 92.9892)` | Supporting actions |
| Muted | `oklch(0.9341 0.0153 90.2390)` | Quiet backgrounds |
| Muted text | `oklch(0.5341 0.0078 97.4503)` | Supporting text |
| Border | `oklch(0.8847 0.0069 97.3627)` | Dividers and fields |
| Focus ring | `oklch(0.6171 0.1375 39.0427)` | Keyboard focus |

- Font: Outfit for interface and content; Geist Mono only for formulas or technical values.
- Base radius: `1rem`, with the Claude+ derived radius scale.
- Shadows: Claude+ low-elevation 1–3px family; cards should normally use border plus `shadow-sm` or no shadow.
- Spacing: Tailwind’s 4px base rhythm.
- Light and Dark Mode are both required across the complete website. Retain the supplied Claude+ `.dark` token set, including background `oklch(0.2679 0.0036 106.6427)`, foreground `oklch(0.9576 0.0027 106.4494)`, card `oklch(0.2928 0.0018 106.5092)`, primary `oklch(0.6724 0.1308 38.7559)`, and border `oklch(0.3618 0.0101 106.8928)`.
- Icons: one consistent outline icon set; icons never replace visible input labels.

### Type, layout, and interaction rules

- H1: 36/44px on mobile and up to 56/64px on desktop; one H1 per page.
- H2: 28/36px; H3: 20/28px; body: 16/26px; supporting text: 14/20px.
- Main page container: maximum 1200px; reading content: maximum 720px; calculator content: maximum 960px.
- Page padding: 16px mobile, 24px tablet, and 32px desktop. Use Tailwind’s standard `sm`, `md`, `lg`, and `xl` breakpoints rather than custom device rules.
- Calculator cards: one column on mobile, two on tablet, and up to four on wide screens.
- Inputs and primary controls: minimum 44px height with visible hover, active, disabled, error, and focus states.
- An accessible theme control in the header offers Light, Dark, and System choices. The first visit follows the device setting; an explicit user choice is remembered on later visits.
- Motion: simple colour/opacity transitions of 150–200ms; no essential animation and respect `prefers-reduced-motion`.

All real text/background and control combinations must pass WCAG AA contrast. If a supplied token pairing fails, we will use a darker token from the same Claude+ palette for that specific accessible state rather than inventing a new brand colour.

### Reusable components

Only create components used by the prototype:

- Button, Input, Select, Card, Badge, Accordion, Breadcrumb, Alert, Tooltip
- SiteHeader, SiteFooter, SectionHeading, CalculatorCard
- CalculatorShell, InputField, ResultCard, FormulaBlock, SourceNote

No large internal component library or Storybook is required for the prototype. A single `/design-system` development page may be added temporarily for visual checking and excluded from indexing/production navigation.

## 7. Functional behaviour

- Results update in the browser without a page reload.
- Inputs reject empty, negative, non-finite, or impossible values and show a specific text error.
- Units and currency are explicit; values are never inferred invisibly.
- Calculations use deterministic pure TypeScript functions.
- Display formatting is separate from the formula so rounding does not change the underlying result.
- Calculator input is not uploaded or stored in the prototype.
- Copy result produces a short text summary; social accounts or login are not required.
- Browser back/forward navigation and normal crawlable links continue to work.
- Changing the colour mode never changes calculator values, content, layout, or available actions.
- The selected mode applies to every page and component without a bright loading flash or mixed-theme state.

## 8. Technical approach

### Stack

- Latest stable Next.js App Router at implementation time
- React and strict TypeScript
- Tailwind CSS v4
- shadcn/ui-compatible components with Claude+ CSS variables
- `next-themes` for the small, proven Light/Dark/System preference layer
- Vitest for pure calculation unit tests
- ESLint and the Next.js production build as required gates

Dependencies will be pinned by the lockfile. We will not add a database, authentication, CMS, API layer, state library, animation framework, or analytics abstraction for the prototype.

### Rendering model

- Pages, explanatory content, metadata, navigation, and JSON-LD use Server Components/static rendering.
- Only calculator forms, result interactions, copy buttons, and theme control use small Client Components.
- Each formula lives in `lib/calculators/` with explicit input and result types.
- Shared calculator metadata lives in a typed registry used by the directory, related links, sitemap, and page metadata.
- TypeScript `strict` and `noImplicitAny` remain enabled. The codebase must not contain explicit or implicit `any`; use concrete types, generics, discriminated unions, or `unknown` with narrowing.

### Proposed structure

```text
app/
  calculators/[slug]/
  about/ contact/ methodology/ privacy/ terms/ disclaimer/
  globals.css layout.tsx page.tsx robots.ts sitemap.ts
components/
  ui/ calculators/ marketing/
content/
  calculators.ts faqs.ts
lib/
  calculators/ formatting.ts site.ts
tests/
  calculators/
public/
```

## 9. SEO and content requirements

- One descriptive title, description, canonical URL, H1, and indexable explanation per page.
- Generate `robots.ts`, `sitemap.ts`, Open Graph metadata, favicon, and social image through Next.js conventions.
- Use semantic HTML and real `<a href>`/Next `Link` navigation.
- Add accurate `WebSite`/`Organization` data globally and `SoftwareApplication` JSON-LD only where the visible calculator content supports it.
- Do not add structured data solely to chase rich results; validate it with Google’s tools.
- Keep formulas, worked examples, FAQs, sources, update dates, and limitations in rendered HTML, not hidden behind client-only execution.
- Every factual rate or default identifies its geography, source, and review date. User-entered local rates override averages.
- Content must have a clear author/reviewer identity before AdSense application.
- Do not mass-generate thin location pages, copied articles, or artificial word-count filler.

## 10. AdSense-readiness gate

The prototype will prepare the structure but ads will not be shown before approval.

Before requesting review:

- Custom domain, HTTPS, canonical URLs, sitemap, robots, and Search Console are working.
- Every public page is complete, reachable, mobile-friendly, and free of placeholder text.
- The site has a clear purpose, original explanations, transparent authorship, contact details, methodology, privacy, terms, and disclaimer pages.
- At least eight high-quality calculators or an equivalent depth of original, useful content is published. This is an internal quality target, not a Google rule.
- Important pages are indexed and real traffic sources are checked for quality; no traffic is purchased solely to trigger ad impressions.
- Consent messaging is configured where legally required.
- The AdSense verification code is added through the root layout only when applying.
- `ads.txt` is added from the exact AdSense account value after it becomes available.
- Ad slots never imitate buttons, results, navigation, or download actions and never outnumber the useful content.
- Space is reserved for future ads to prevent layout shift.

## 11. Quality and acceptance criteria

### Accuracy

- Unit tests cover normal values, zero/empty boundaries, decimals, invalid values, unit conversion, waste allowance, and result rounding.
- Every formula is reviewed against its cited source or documented industry assumption.
- Estimates explicitly say they are planning aids, not contractor quotes or guaranteed savings.

### Accessibility

- WCAG 2.2 AA target.
- Every field has a visible programmatic label and unit/instruction.
- Error text identifies the field and correction; colour is not the only signal.
- All controls work by keyboard with visible focus.
- Normal text contrast is at least 4.5:1 and large text at least 3:1.
- Every page, reusable component, form state, result state, tooltip, focus ring, and future ad placeholder is checked in both Light and Dark Mode.
- Layout remains usable at 200% zoom and narrow mobile widths.

### Performance

- Core Web Vitals targets at the 75th percentile: LCP at or below 2.5s, INP at or below 200ms, and CLS at or below 0.1.
- Use `next/font` for Outfit, dimensions for media, minimal client JavaScript, and fixed ad-slot dimensions.
- Run Lighthouse/PageSpeed checks on the home page and at least one calculator page; lab results do not replace later field data.

### Required engineering gates

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `git diff --check` after Git is initialized
- Manual checks at mobile, tablet, and desktop sizes
- No console errors, broken links, placeholder copy, or explicit/implicit `any`

## 12. Out of scope for the prototype

- Accounts, saved projects, cloud history, payments, subscriptions, comments, or user uploads
- AI-generated estimates or chatbot
- Live contractor quotes, marketplace, or lead selling
- Automatic address detection or complex geolocation
- Full CMS, localization system, native app, or offline PWA
- Automated energy-provider integrations
- Ad optimization experiments before approval

## 13. Step-by-step implementation plan

1. **Create the foundation**  
   Initialize a Next.js App Router project with TypeScript, ESLint, Tailwind v4, import aliases, strict mode, and Git. Add `lint`, `typecheck`, `test`, and `build` scripts. Record the generated versions in the lockfile.

2. **Install the approved design system**  
   Add only the required shadcn components. Import the Claude+ registry theme or its exact Tailwind v4 OKLCH tokens into `app/globals.css`; configure Outfit with `next/font`; add `next-themes` with Light, Dark, and System choices; prevent theme flash during loading; and verify both modes, contrast, focus states, spacing, radius, and shadows on a temporary design-system page.

3. **Build the shared public shell**  
   Create the root layout, metadata defaults, header, footer, responsive container, buttons, cards, breadcrumbs, form fields, result cards, alerts, and source notes. Build the landing page and calculator directory using the approved section order.

4. **Implement formulas safely**  
   Define explicit input/result types and pure functions under `lib/calculators/`. Add unit tests before connecting the UI. Keep validation, calculation, and display formatting separate so later edits cannot silently alter unrelated calculators.

5. **Build the four calculator pages**  
   Reuse `CalculatorShell`, connect accessible controlled inputs, display immediate results, and add formula, example, assumptions, sources, FAQ, disclaimer, and related links. Do not introduce a global state library.

6. **Add trust, SEO, and AdSense foundations**  
   Add About, Contact, Methodology, Privacy, Terms, and Disclaimer content; page metadata; canonical URLs; sitemap; robots; social images; crawlable internal links; and validated JSON-LD. Keep future ad slots empty and visually distinct from calculator actions.

7. **Verify before handoff**  
   Run lint, strict typecheck, unit tests, production build, and diff checks. Test keyboard flow, text errors, contrast, formula examples, links, metadata, structured data, and responsive layouts. Run Lighthouse on the home page and one calculator page and document any limits that require real production traffic.

### Change-safety rule

There are currently no repository functions to preserve. Once implementation begins, calculator formulas will be isolated and covered by tests; shared UI changes must not modify formula modules. Work will be delivered in small reviewable stages, and unrelated generated or user-created files will not be overwritten.

## 14. Risks and controls

| Risk | Control |
|---|---|
| Estimates appear more precise than reality | Show assumptions, source dates, ranges where appropriate, and planning-only disclaimer |
| Generic pages are judged low-value | Focus on four deep pages first; require original examples, methodology, and related guidance |
| Regional prices become stale | Let users enter local values and display source geography/date |
| Ads damage usability or CLS | Reserve space, apply only after approval, and keep ads away from form controls/results |
| Too much client JavaScript hurts SEO/performance | Server-render content; isolate only the interactive calculator widget as a Client Component |
| Theme colours fail accessibility in a real state | Test every used pairing and select a darker Claude+ token for the failing state |

## 15. Recorded decisions and remaining checks

Recorded decisions:

1. Recommended brand and domain: **Watt & Wall** at `wattandwall.com`.
2. Light, Dark, and System modes are included in the prototype and must work consistently across the entire website.

Before purchasing the domain, repeat the live registry check and complete a formal trademark search in the countries where the brand will operate. Domain availability and preliminary web screening are not legal clearance.

## 16. Research basis

The PRD was informed by more than 20 targeted web searches and direct inspection of the Claude+ theme. Primary references:

- [Google: people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: choosing a concise, unique site name](https://developers.google.com/search/docs/appearance/site-names)
- [Google: AdSense site readiness](https://support.google.com/adsense/answer/7299563?hl=en)
- [Google Publisher Policies](https://support.google.com/adsense/answer/10502938?hl=en)
- [Google: crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google: SoftwareApplication structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Next.js: App Router](https://nextjs.org/docs/app)
- [Next.js: metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js: production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Tailwind CSS: theme variables](https://tailwindcss.com/docs/theme)
- [shadcn/ui: Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4)
- [shadcn/ui: Dark Mode for Next.js](https://ui.shadcn.com/docs/dark-mode/next)
- [React: input controls](https://react.dev/reference/react-dom/components/input)
- [TypeScript: noImplicitAny](https://www.typescriptlang.org/tsconfig/noImplicitAny.html)
- [W3C: accessible forms](https://www.w3.org/WAI/tutorials/forms/)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [EIA: electricity data](https://www.eia.gov/electricity/data.php)
- [NREL: PVWatts](https://pvwatts.nrel.gov/)
- [ENERGY STAR savings calculator](https://www.energystar.gov/products/heating_cooling/guide/savings-calculator/standalone)
- [Google publisher story: Omni Calculator](https://help.youtube.com/ads/publisher/stories/omni_calculator/)
