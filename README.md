# Watt & Wall

Watt & Wall is a static Next.js site with free home-energy, renovation, furniture, rug, and curtain calculators. Each tool shows its formula, assumptions, units, and source context. The site also publishes practical guides and trust pages for methodology, editorial review, privacy, and estimate limits.

Production: [https://wattandwall.com](https://wattandwall.com)

## Local development

Requirements: Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
pnpm run lint
pnpm run typecheck
pnpm test
pnpm run build
```

`pnpm run build` creates the static export in `out/`. The project has no API routes, middleware, server-side runtime, database, authentication, or CMS.

## Deployment and indexing

The `main` branch deploys to Cloudflare Pages. The canonical origin is `https://wattandwall.com`. Generated static outputs include `sitemap.xml`, `robots.txt`, metadata images, and route HTML. `public/ads.txt` contains the authorised AdSense publisher record.

Content and calculator changes should keep formulas, examples, source links, review dates, Article/WebApplication structured data, and sitemap dates aligned. Do not present a planning estimate as a quote, measured result, professional recommendation, or guaranteed saving.

## Audit evidence

- `docs/adsense-low-value-content-route-audit-2026-09-25.md`
- `docs/source-link-check-2026-09-26.md`
- `docs/adsense-readiness-verification-2026-09-26.md`
