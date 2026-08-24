import Link from "next/link";

import { CalculatorShell } from "@/components/calculators/calculator-shell";
import { FlooringTileCalculator } from "@/components/calculators/flooring-tile-calculator";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { calculators } from "@/data/calculators";
import { flooringTileAssumptions, flooringTileDefaults, flooringTileExample, flooringTileFaqs } from "@/data/flooring-tile";
import { formatDecimal } from "@/lib/calculators/formatting";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Flooring and Tile Calculator",
  description: "Estimate floor area, waste-adjusted material area, and whole flooring units from room dimensions and product coverage.",
  path: "/calculators/flooring-tile",
});

const sourceLinkClassName = "rounded-sm font-semibold text-primary underline decoration-primary/35 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function FlooringTilePage() {
  const relatedCalculators = calculators.filter((calculator) => calculator.slug === "paint-quantity" || calculator.slug === "electricity-cost");

  return (
    <CalculatorShell
      category="Renovation calculator"
      description="Estimate the floor area, waste-adjusted material area, and whole cartons, packs, sheets, or tiles needed for a simple rectangular space."
      path="/calculators/flooring-tile"
      title="Flooring and Tile Calculator"
    >
      <FlooringTileCalculator />

      <article className="mt-14 grid gap-10 rounded-2xl bg-card-section p-5 sm:mt-16 sm:p-8 lg:p-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:gap-12">
        <div className="space-y-12">
          <section aria-labelledby="flooring-formula-title">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Transparent calculation</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight" id="flooring-formula-title">Flooring quantity formula</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Measure a rectangular floor, add the waste allowance for cuts and replacements, then divide by the coverage printed on one product unit.</p>
            <div className="mt-6 space-y-3 rounded-xl bg-card p-5 font-mono text-sm leading-6 shadow-sm sm:p-7">
              <p>Required area = length × width</p>
              <p>Waste area = required area × waste % ÷ 100</p>
              <p>Adjusted area = required area + waste area</p>
              <p>Units to buy = round adjusted area ÷ coverage per unit up</p>
            </div>
          </section>

          <section aria-labelledby="flooring-example-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="flooring-example-title">Worked example</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">For a {formatDecimal(flooringTileDefaults.floorLengthFeet)} ft × {formatDecimal(flooringTileDefaults.floorWidthFeet)} ft floor, a product covering {formatDecimal(flooringTileDefaults.coveragePerUnitSquareFeet)} sq ft per unit, and {formatDecimal(flooringTileDefaults.wastePercent)}% waste:</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <ExampleResult label="Required area" value={`${formatDecimal(flooringTileExample.requiredAreaSquareFeet)} sq ft`} />
              <ExampleResult label="Adjusted area" value={`${formatDecimal(flooringTileExample.adjustedAreaSquareFeet)} sq ft`} />
              <ExampleResult label="Whole units" value={`${formatDecimal(flooringTileExample.unitsNeeded)} units`} />
            </dl>
          </section>

          <section aria-labelledby="flooring-faq-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="flooring-faq-title">Flooring quantity questions</h2>
            <FaqAccordion className="mt-6 border-y border-border" items={flooringTileFaqs} />
          </section>
        </div>

        <aside className="space-y-5" aria-label="Assumptions, sources, and related calculators">
          <section className="rounded-xl bg-card p-5 shadow-sm sm:p-6" aria-labelledby="flooring-assumptions-title">
            <h2 className="text-xl leading-7 font-semibold" id="flooring-assumptions-title">Assumptions and rounding</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
              {flooringTileAssumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">Calculations keep full numeric precision. Displayed areas and percentages are rounded to at most two decimals; only the final unit suggestion uses ceiling rounding.</p>
          </section>

          <section className="rounded-xl bg-card p-5 shadow-sm sm:p-6" aria-labelledby="flooring-sources-title">
            <h2 className="text-xl leading-7 font-semibold" id="flooring-sources-title">Sources and review</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li><a className={sourceLinkClassName} href="https://www.homedepot.com/c/ah/how-to-lay-out-tile/9ba683603be9fa5395fab9035335ddf">Home Depot: Measure tile area and waste</a></li>
              <li><a className={sourceLinkClassName} href="https://www.lowes.com/pdf/project-planner.pdf">Lowe&apos;s: Flooring project planner</a></li>
              <li><a className={sourceLinkClassName} href="https://www.lowes.com/n/how-to/install-luxury-vinyl-tile-flooring">Lowe&apos;s: Carton coverage and extras</a></li>
              <li><a className={sourceLinkClassName} href="https://pdf.lowes.com/productdocuments/3f70b1c9-8ab7-4125-a2e7-9a3d080d2861/08130541.pdf">Mullican: Straight and diagonal waste guidance</a></li>
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">Formula and source context last reviewed August 24, 2026.</p>
          </section>

          <section className="rounded-xl bg-primary/10 p-5 sm:p-6" aria-labelledby="flooring-limit-title">
            <h2 className="text-xl leading-7 font-semibold" id="flooring-limit-title">Simple rectangle estimate</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">L-shaped rooms, alcoves, offsets, diagonal patterns, fixtures, grout/joint details, product defects, and future replacement stock can change the final quantity. Measure complex sections separately and follow the product instructions.</p>
            <Link className="mt-4 inline-flex min-h-11 items-center rounded-md font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/disclaimer">Read the full estimate disclaimer</Link>
          </section>

          <nav className="rounded-xl bg-card p-5 shadow-sm sm:p-6" aria-labelledby="flooring-related-title">
            <h2 className="text-xl leading-7 font-semibold" id="flooring-related-title">Related calculators</h2>
            <ul className="mt-3 divide-y divide-border">
              {relatedCalculators.map((calculator) => (
                <li key={calculator.slug}>
                  <Link className="flex min-h-14 items-center justify-between gap-3 rounded-md py-3 font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href={calculator.href}>
                    {calculator.name}<span aria-hidden="true" className="text-primary">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </article>
    </CalculatorShell>
  );
}

function ExampleResult({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl bg-card p-5 shadow-sm"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-2 font-mono text-sm leading-6 font-semibold">{value}</dd></div>;
}
