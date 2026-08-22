import type { Metadata } from "next";
import Link from "next/link";

import { ElectricityCostCalculator } from "@/components/calculators/electricity-cost-calculator";
import { CalculatorShell } from "@/components/calculators/calculator-shell";
import { electricityCostAssumptions, electricityCostDefaults, electricityCostExample, electricityCostFaqs } from "@/data/electricity-cost";
import { calculators } from "@/data/calculators";
import { formatDecimal, formatUsd, formatUsdRate } from "@/lib/calculators/formatting";

const sourceLinkClassName = "rounded-sm font-semibold text-primary underline decoration-primary/35 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const metadata: Metadata = {
  title: "Electricity Cost Calculator",
  description: "Estimate daily, monthly, and annual electricity use and cost from power, active hours, days, and your local USD price per kWh.",
};

export default function ElectricityCostPage() {
  const relatedCalculators = calculators.filter((calculator) => calculator.slug === "appliance-running-cost" || calculator.slug === "paint-quantity");

  return (
    <CalculatorShell
      category="Energy calculator"
      description="Estimate how much electricity a device uses and what that usage could cost over an active day, month, and year using your own schedule and local rate."
      title="Electricity Cost Calculator"
    >
      <ElectricityCostCalculator />

      <article className="mt-16 grid gap-12 border-t border-border pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16">
        <div className="space-y-14">
          <section aria-labelledby="electricity-formula-title">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Transparent calculation</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight" id="electricity-formula-title">Formula and units</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Power describes the rate of electricity use. Energy adds time: one kilowatt used for one hour equals one kilowatthour (kWh).</p>
            <div className="mt-6 space-y-3 rounded-xl border border-border bg-card p-5 font-mono text-sm leading-6 shadow-sm sm:p-7">
              <p>Power in kW = watts ÷ 1,000</p>
              <p>Active-day energy = power in kW × hours</p>
              <p>Monthly energy = active-day kWh × active days</p>
              <p>Cost = energy in kWh × USD price per kWh</p>
              <p>Annual estimate = monthly estimate × 12</p>
            </div>
          </section>

          <section aria-labelledby="electricity-example-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="electricity-example-title">Worked example</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">For a {formatDecimal(electricityCostDefaults.power)} W device used {formatDecimal(electricityCostDefaults.hoursPerActiveDay)} hours on {formatDecimal(electricityCostDefaults.activeDaysPerMonth)} days each month at {formatUsdRate(electricityCostDefaults.pricePerKilowattHour)}/kWh:</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <ExampleResult label="Active day" value={`${formatDecimal(electricityCostExample.energyPerActiveDayKilowattHours)} kWh · ${formatUsd(electricityCostExample.costPerActiveDay)}`} />
              <ExampleResult label="Month" value={`${formatDecimal(electricityCostExample.monthlyEnergyKilowattHours)} kWh · ${formatUsd(electricityCostExample.monthlyCost)}`} />
              <ExampleResult label="Year" value={`${formatDecimal(electricityCostExample.annualEnergyKilowattHours)} kWh · ${formatUsd(electricityCostExample.annualCost)}`} />
            </dl>
          </section>

          <section aria-labelledby="electricity-faq-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="electricity-faq-title">Electricity cost questions</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {electricityCostFaqs.map((faq, index) => (
                <details className="group" key={faq.question} open={index === 0}>
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded-md py-4 font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span aria-hidden="true" className="text-primary">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8" aria-label="Assumptions, sources, and related calculators">
          <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="electricity-assumptions-title">
            <h2 className="text-xl leading-7 font-semibold" id="electricity-assumptions-title">Assumptions and rounding</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
              {electricityCostAssumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">Calculations keep full numeric precision. Displayed energy and USD values are rounded to at most two decimal places.</p>
          </section>

          <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="electricity-sources-title">
            <h2 className="text-xl leading-7 font-semibold" id="electricity-sources-title">Sources and review</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li><a className={sourceLinkClassName} href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. EIA: Measuring electricity</a></li>
              <li><a className={sourceLinkClassName} href="https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php">U.S. EIA: Prices and factors affecting prices</a></li>
              <li><a className={sourceLinkClassName} href="https://consumer.ftc.gov/node/77485">FTC: Using the EnergyGuide label</a></li>
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">Formula and source context last reviewed August 22, 2026.</p>
          </section>

          <section className="rounded-xl border border-primary/25 bg-primary/10 p-5 sm:p-6" aria-labelledby="electricity-limit-title">
            <h2 className="text-xl leading-7 font-semibold" id="electricity-limit-title">Planning estimate, not a bill</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Actual consumption can change as devices cycle or operate at different loads. Utility bills may include fees, taxes, tiers, demand charges, and time-varying rates that this simple estimate does not model.</p>
            <Link className="mt-4 inline-flex min-h-11 items-center rounded-md font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/disclaimer">Read the full estimate disclaimer</Link>
          </section>

          <nav className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6" aria-labelledby="related-calculators-title">
            <h2 className="text-xl leading-7 font-semibold" id="related-calculators-title">Related calculators</h2>
            <ul className="mt-3 divide-y divide-border">
              {relatedCalculators.map((calculator) => (
                <li key={calculator.slug}>
                  <Link className="flex min-h-14 items-center justify-between gap-3 rounded-md py-3 font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href={calculator.href}>
                    {calculator.name}
                    <span aria-hidden="true" className="text-primary">›</span>
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
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-2 font-mono text-sm leading-6 font-semibold">{value}</dd>
    </div>
  );
}
