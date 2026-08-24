import Link from "next/link";

import { ApplianceRunningCostCalculator } from "@/components/calculators/appliance-running-cost-calculator";
import { CalculatorShell } from "@/components/calculators/calculator-shell";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { applianceRunningCostAssumptions, applianceRunningCostDefaults, applianceRunningCostExample, applianceRunningCostFaqs } from "@/data/appliance-running-cost";
import { calculators } from "@/data/calculators";
import { formatDecimal, formatUsd, formatUsdRate } from "@/lib/calculators/formatting";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Appliance Running Cost Calculator",
  description: "Estimate one appliance's monthly and annual electricity use and running cost from wattage, active time, and your local USD price per kWh.",
  path: "/calculators/appliance-running-cost",
});

const sourceLinkClassName = "rounded-sm font-semibold text-primary underline decoration-primary/35 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function ApplianceRunningCostPage() {
  const relatedCalculators = calculators.filter((calculator) => calculator.slug === "electricity-cost" || calculator.slug === "flooring-tile");

  return (
    <CalculatorShell
      category="Energy calculator"
      description="Estimate the monthly and annual electricity cost of one appliance using its wattage, your active-use schedule, and your local electricity price."
      path="/calculators/appliance-running-cost"
      title="Appliance Running Cost Calculator"
    >
      <ApplianceRunningCostCalculator />

      <article className="mt-14 grid gap-10 rounded-2xl bg-card-section p-5 sm:mt-16 sm:p-8 lg:p-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:gap-12">
        <div className="space-y-12">
          <section aria-labelledby="appliance-formula-title">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Transparent calculation</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight" id="appliance-formula-title">Running-cost formula</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Wattage is power. Multiplying power by active time estimates energy in kilowatthours (kWh), the unit used to calculate this electricity cost.</p>
            <div className="mt-6 space-y-3 rounded-xl bg-card p-5 font-mono text-sm leading-6 shadow-sm sm:p-7">
              <p>Power in kW = appliance watts ÷ 1,000</p>
              <p>Active-day energy = power in kW × active hours</p>
              <p>Monthly energy = active-day kWh × active days</p>
              <p>Monthly cost = monthly kWh × USD price per kWh</p>
              <p>Annual estimate = monthly estimate × 12</p>
            </div>
          </section>

          <section aria-labelledby="appliance-example-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="appliance-example-title">Worked example</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">For an {formatDecimal(applianceRunningCostDefaults.wattage)} W appliance used {formatDecimal(applianceRunningCostDefaults.hoursPerActiveDay)} hours on {formatDecimal(applianceRunningCostDefaults.activeDaysPerMonth)} days each month at {formatUsdRate(applianceRunningCostDefaults.pricePerKilowattHour)}/kWh:</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <ExampleResult label="Active day" value={`${formatDecimal(applianceRunningCostExample.energyPerActiveDayKilowattHours)} kWh · ${formatUsd(applianceRunningCostExample.costPerActiveDay)}`} />
              <ExampleResult label="Month" value={`${formatDecimal(applianceRunningCostExample.monthlyEnergyKilowattHours)} kWh · ${formatUsd(applianceRunningCostExample.monthlyCost)}`} />
              <ExampleResult label="Year" value={`${formatDecimal(applianceRunningCostExample.annualEnergyKilowattHours)} kWh · ${formatUsd(applianceRunningCostExample.annualCost)}`} />
            </dl>
          </section>

          <section aria-labelledby="appliance-faq-title">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight" id="appliance-faq-title">Appliance cost questions</h2>
            <FaqAccordion className="mt-6 border-y border-border" items={applianceRunningCostFaqs} />
          </section>
        </div>

        <aside className="space-y-5" aria-label="Assumptions, sources, and related calculators">
          <section className="rounded-xl bg-card p-5 shadow-sm sm:p-6" aria-labelledby="appliance-assumptions-title">
            <h2 className="text-xl leading-7 font-semibold" id="appliance-assumptions-title">Assumptions and rounding</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
              {applianceRunningCostAssumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">Calculations keep full numeric precision. Displayed energy and USD values are rounded to at most two decimal places.</p>
          </section>

          <section className="rounded-xl bg-card p-5 shadow-sm sm:p-6" aria-labelledby="appliance-sources-title">
            <h2 className="text-xl leading-7 font-semibold" id="appliance-sources-title">Sources and review</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li><a className={sourceLinkClassName} href="https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use">U.S. DOE: Estimating appliance energy use</a></li>
              <li><a className={sourceLinkClassName} href="https://consumer.ftc.gov/node/77485">FTC: Using the EnergyGuide label</a></li>
              <li><a className={sourceLinkClassName} href="https://www.energystar.gov/sites/default/files/tools/Standby_Power_Highlights.pdf">ENERGY STAR: Standby power</a></li>
              <li><a className={sourceLinkClassName} href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. EIA: Measuring electricity</a></li>
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">Formula and source context last reviewed August 22, 2026.</p>
          </section>

          <section className="rounded-xl bg-primary/10 p-5 sm:p-6" aria-labelledby="appliance-limit-title">
            <h2 className="text-xl leading-7 font-semibold" id="appliance-limit-title">One scheduled load, not a bill</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">This simple model assumes constant active wattage. It does not separately model cycling, standby, startup surges, changing modes, seasonal schedules, or the other appliances and charges on a utility bill.</p>
            <Link className="mt-4 inline-flex min-h-11 items-center rounded-md font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/disclaimer">Read the full estimate disclaimer</Link>
          </section>

          <nav className="rounded-xl bg-card p-5 shadow-sm sm:p-6" aria-labelledby="appliance-related-title">
            <h2 className="text-xl leading-7 font-semibold" id="appliance-related-title">Related calculators</h2>
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
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-2 font-mono text-sm leading-6 font-semibold">{value}</dd>
    </div>
  );
}
