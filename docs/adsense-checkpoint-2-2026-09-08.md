# Checkpoint 2: duplicate improvements and proposed cleanup

The appliance calculator now has 28 sourced appliance presets, multiple appliance rows, separate usage schedules and duty cycles, and a combined monthly cost table. The electricity calculator retains its single-load purpose.

The electricity-costs guide now explains choosing a bill rate and handling tariffs. The appliance-energy-use guide explains measuring consumption and converting readings. The EnergyGuide guide no longer suggests putting annual kWh into a watts field. Sources and calculation assumptions are recorded in phase-2-source-ledger.md.

## Proposed deletions, pending approval

| File | Reason |
| --- | --- |
| public/next.svg | Unused Next.js starter logo; no references in app, components, data or lib. |
| public/vercel.svg | Unused starter hosting logo; no references in app, components, data or lib. |
| public/file.svg | Unused starter illustration; no references in app, components, data or lib. |
| public/globe.svg | Unused starter illustration; no references in app, components, data or lib. |
| public/window.svg | Unused starter illustration; no references in app, components, data or lib. |

No pages are proposed for deletion, merging or redirection. None of these files has been deleted.

## Verification

- Type checking passed.
- Vitest passed: 8 test files, 48 tests, including inventory totals and invalid duty cycles.
- ESLint exited successfully.
- Production build completed successfully, with static route generation and export.
- Export contains index.html, sitemap.xml, robots.txt, ads.txt and 404.html. The existing configuration exports page paths as flat HTML files.
- The publisher ID remains present in exported index.html.
- Browser verification of this change is pending: the in-app browser rejected both http://127.0.0.1:4173/calculators/appliance-running-cost and http://localhost:4173/calculators/appliance-running-cost with net::ERR_BLOCKED_BY_CLIENT. No mobile rendering, clipboard or browser interaction pass is claimed for these changes.
- Lighthouse and the complete site checks remain scheduled for phase 5.

Changes remain local and uncommitted. Checkpoint 2 approval is required by the objective before the five file deletions. After approval, phase 3 starts with topic validation and the first two new guides for checkpoint 3.

## Approval recorded

The user approved continuing after the explicit five-file deletion request. All five listed starter SVGs were removed on September 8, 2026. No pages were removed, merged or redirected.
