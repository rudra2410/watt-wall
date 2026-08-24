import Link from "next/link";

import { CalculatorShell } from "@/components/calculators/calculator-shell";
import { PaintQuantityCalculator } from "@/components/calculators/paint-quantity-calculator";
import { calculators } from "@/data/calculators";
import { paintQuantityAssumptions, paintQuantityDefaults, paintQuantityExample, paintQuantityFaqs } from "@/data/paint-quantity";
import { formatDecimal } from "@/lib/calculators/formatting";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Paint Quantity Calculator",
  description: "Estimate wall paint in US gallons and litres from room dimensions, openings, coats, product coverage, and a visible waste allowance.",
  path: "/calculators/paint-quantity",
});

const sourceLinkClassName = "rounded-sm font-semibold text-primary underline decoration-primary/35 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function PaintQuantityPage() {
  const relatedCalculators = calculators.filter((calculator) => calculator.slug === "flooring-tile" || calculator.slug === "electricity-cost");

  return (
    <CalculatorShell
      category="Renovation calculator"
      description="Estimate wall paint from room dimensions, unpainted doors and windows, number of coats, product coverage, and your chosen waste allowance."
      path="/calculators/paint-quantity"
      title="Paint Quantity Calculator"
    >
      <PaintQuantityCalculator />

      <article className="mt-16 grid gap-12 border-t border-border pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16">
        <div className="space-y-14">
          <section aria-labelledby="paint-formula-title">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Transparent calculation</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight" id="paint-formula-title">Wall-paint formula</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">The calculation starts with the perimeter of a rectangular room, subtracts rule-of-thumb unpainted openings, then applies coats, product coverage, and the visible waste allowance.</p>
            <div className="mt-6 space-y-3 rounded-xl border border-border bg-card p-5 font-mono text-sm leading-6 shadow-sm sm:p-7">
              <p>Gross wall area = 2 × (length + width) × height</p>
              <p>Opening allowance = doors × 20 sq ft + windows × 15 sq ft</p>
              <p>Paintable area = gross wall area − opening allowance</p>
              <p>Gallons before waste = paintable area × coats ÷ coverage</p>
              <p>Gallons with waste = gallons × (1 + waste % ÷ 100)</p>
              <p>Whole gallons to buy = round gallons with waste up</p>
            </div>
          </section>

          <section aria-labelledby="paint-example-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="paint-example-title">Worked example</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">For a {formatDecimal(paintQuantityDefaults.roomLengthFeet)} ft × {formatDecimal(paintQuantityDefaults.roomWidthFeet)} ft room with {formatDecimal(paintQuantityDefaults.wallHeightFeet)} ft walls, one door, two windows, two coats, {formatDecimal(paintQuantityDefaults.coverageSquareFeetPerGallon)} sq ft/US gal coverage, and {formatDecimal(paintQuantityDefaults.wastePercent)}% waste:</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <ExampleResult label="Paintable walls" value={`${formatDecimal(paintQuantityExample.paintableAreaSquareFeet)} sq ft`} />
              <ExampleResult label="Calculated quantity" value={`${formatDecimal(paintQuantityExample.gallonsWithWaste)} US gal · ${formatDecimal(paintQuantityExample.litresWithWaste)} L`} />
              <ExampleResult label="Whole-gallon suggestion" value={`${formatDecimal(paintQuantityExample.wholeGallonsToBuy)} US gal`} />
            </dl>
          </section>

          <section aria-labelledby="paint-faq-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="paint-faq-title">Paint quantity questions</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {paintQuantityFaqs.map((faq, index) => (
                <details className="group" key={faq.question} open={index === 0}>
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded-md py-4 font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="text-primary"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
                  </summary>
                  <p className="max-w-2xl pb-5 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8" aria-label="Assumptions, sources, and related calculators">
          <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="paint-assumptions-title">
            <h2 className="text-xl leading-7 font-semibold" id="paint-assumptions-title">Assumptions and rounding</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
              {paintQuantityAssumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">Calculations keep full numeric precision. Displayed area and volume values are rounded to at most two decimals; only the separate whole-gallon purchase suggestion uses ceiling rounding.</p>
          </section>

          <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="paint-sources-title">
            <h2 className="text-xl leading-7 font-semibold" id="paint-sources-title">Sources and review</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li><a className={sourceLinkClassName} href="https://media.benjaminmoore.com/WebServices/prod/ColorCards2012/transformyourhome/offline/download.pdf">Benjamin Moore: Room and opening estimate</a></li>
              <li><a className={sourceLinkClassName} href="https://www.behr.com/how-to/interior/determine-how-much-interior-paint-to-buy">Behr: Measuring walls and coverage</a></li>
              <li><a className={sourceLinkClassName} href="https://ltx-www.sherwin-williams.com/en-us/color/color-tools/paint-calculator">Sherwin-Williams: Coverage guidance</a></li>
              <li><a className={sourceLinkClassName} href="https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9">NIST: US gallon-to-litre conversion</a></li>
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">Formula and source context last reviewed August 22, 2026.</p>
          </section>

          <section className="rounded-xl border border-primary/25 bg-primary/10 p-5 sm:p-6" aria-labelledby="paint-limit-title">
            <h2 className="text-xl leading-7 font-semibold" id="paint-limit-title">Wall estimate, not a purchase guarantee</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Confirm measurements, product coverage, coats, primer needs, surface condition, application method, and available can sizes before buying. This result excludes ceilings, trim, and painted openings.</p>
            <Link className="mt-4 inline-flex min-h-11 items-center rounded-md font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/disclaimer">Read the full estimate disclaimer</Link>
          </section>

          <nav className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="paint-related-title">
            <h2 className="text-xl leading-7 font-semibold" id="paint-related-title">Related calculators</h2>
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
  return <div className="rounded-xl border border-border bg-card p-5 shadow-sm"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-2 font-mono text-sm leading-6 font-semibold">{value}</dd></div>;
}
