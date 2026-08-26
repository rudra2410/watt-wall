import Link from "next/link";

import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { buttonVariants } from "@/components/ui/button";
import { TrustLink } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Choose one question",
    description: "Pick the calculator that matches the decision you are checking. Each one has a deliberately narrow scope, so its inputs, formula, and limits can be read together.",
  },
  {
    number: "02",
    title: "Use your local values",
    description: "Replace illustrative defaults with the measurements, schedule, rate, coverage, or product-unit information that applies to your project.",
  },
  {
    number: "03",
    title: "Inspect the estimate",
    description: "Read the result beside its units, formula, assumptions, rounding, source notes, and worked example before using the number in a decision.",
  },
  {
    number: "04",
    title: "Check the next source",
    description: "Use a bill, tariff, product label, installation guide, or qualified professional when the decision needs more detail than a planning estimate can provide.",
  },
] as const;

const calculatorInputs = [
  {
    href: "/calculators/electricity-cost",
    title: "Electricity cost",
    description: "Device power, active hours, active days each month, and your USD price per kWh.",
  },
  {
    href: "/calculators/appliance-running-cost",
    title: "Appliance running cost",
    description: "Appliance wattage, a typical schedule, active days each month, and your USD price per kWh.",
  },
  {
    href: "/calculators/paint-quantity",
    title: "Paint quantity",
    description: "Room length, width, wall height, doors, windows, coats, product coverage, and a waste allowance.",
  },
  {
    href: "/calculators/flooring-tile",
    title: "Flooring and tile",
    description: "Floor length and width, coverage per carton, pack, sheet, or tile unit, plus a waste allowance.",
  },
  {
    href: "/calculators/furniture-fit",
    title: "Furniture fit",
    description: "Room, furniture, preferred clearance, and tightest delivery-opening measurements in metric or imperial units.",
  },
  {
    href: "/calculators/rug-size",
    title: "Rug size",
    description: "Room layout, reference furniture, and an editable rug extension around each side.",
  },
  {
    href: "/calculators/curtain-measurement",
    title: "Curtain measurement",
    description: "Window and panel widths, rod extension, fullness, and the intended finished drop.",
  },
] as const;

export const metadata = createPageMetadata({
  title: "How It Works",
  description: "Learn how to choose a Watt & Wall calculator, enter local values, inspect a transparent result, and use it as an early planning estimate.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <main className="bg-background" id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteConfig.url }, { name: "How it works", url: `${siteConfig.url}/how-it-works` }]} />

      <section className="bg-background">
        <Container className="py-8 sm:py-10 lg:py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">How it works</li>
            </ol>
          </nav>

          <header className="mt-8 max-w-4xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">A clear path to a planning estimate</p>
            <h1 className="mt-3 text-4xl leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">How Watt &amp; Wall works</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">Use one focused calculator, bring your own local details, and read the result with the context needed to decide what to check next.</p>
          </header>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants()} href="/calculators">Browse calculators</Link>
            <Link className={buttonVariants({ variant: "secondary" })} href="/methodology">Read our methodology</Link>
          </div>
        </Container>
      </section>

      <section aria-labelledby="four-steps-title" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Four simple steps</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id="four-steps-title">From a local value to a clearer next step</h2>
          </div>

          <ol className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <li className="rounded-2xl bg-card p-5 shadow-sm sm:p-6" key={step.number}>
                <span aria-hidden="true" className="grid size-11 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">{step.number}</span>
                <h3 className="mt-5 text-xl leading-7 font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="inputs-title" className="bg-card-section py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12">
            <div className="max-w-md">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Before you start</p>
              <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id="inputs-title">Bring the detail that changes the result</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">The most useful estimate begins with the value closest to the real situation: a device label or measured average, your bill or tariff, product coverage, and carefully measured room, furniture, window, or material dimensions.</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">All calculator values stay in your browser. Replace the starting values whenever your project has better information.</p>
            </div>

            <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
              {calculatorInputs.map((calculator) => (
                <li className="rounded-xl bg-card p-5 shadow-sm" key={calculator.href}>
                  <h3 className="text-lg leading-7 font-semibold"><Link className="rounded-sm outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href={calculator.href}>{calculator.title}</Link></h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{calculator.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="read-result-title" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-card p-6 shadow-sm sm:p-7">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">As you enter values</p>
              <h2 className="mt-3 text-2xl leading-8 font-semibold tracking-tight" id="read-result-title">The estimate updates only when the inputs are valid</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Each field has a visible label and hint. If a value is incomplete or outside the supported range, the result is withheld until it can be calculated from valid inputs.</p>
            </article>

            <article className="rounded-2xl bg-card p-6 shadow-sm sm:p-7">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Before you rely on it</p>
              <h2 className="mt-3 text-2xl leading-8 font-semibold tracking-tight">Read the formula, units, and assumptions</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Every calculator page shows the formula, a worked example, source notes, rounding information, and assumptions beside the calculator rather than hiding them behind the result.</p>
            </article>

            <article className="rounded-2xl bg-primary/10 p-6 sm:p-7">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Planning aid, not a quote</p>
              <h2 className="mt-3 text-2xl leading-8 font-semibold tracking-tight">Use the result to prepare the next check</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Actual bills can include changing rates, taxes, fees, and tariff rules. Product instructions, surface condition, cuts, installation choices, and container sizes can change material needs.</p>
              <Link className="mt-5 inline-flex min-h-11 items-center rounded-md font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary/10" href="/disclaimer">Read estimate limitations <span aria-hidden="true" className="ml-2">›</span></Link>
            </article>
          </div>
        </Container>
      </section>

      <section aria-labelledby="sources-title" className="bg-card-section py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="rounded-2xl bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Source context</p>
              <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id="sources-title">Why local inputs matter</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">A kilowatt-hour measures one kilowatt of electricity used for one hour. The electricity tools use that relationship, but the cost still depends on your own usage and local price. For materials, product coverage and unit coverage are product-specific, so the product label or installation guidance should take priority over a general starting value.</p>
            </div>

            <ul className="mt-7 grid list-none gap-3 p-0 text-sm leading-6 sm:grid-cols-2">
              <li><TrustLink external href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. EIA: measuring electricity and kWh</TrustLink></li>
              <li><TrustLink external href="https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php">U.S. EIA: factors affecting electricity prices</TrustLink></li>
              <li><TrustLink external href="https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances">FTC: using an EnergyGuide label</TrustLink></li>
              <li><TrustLink external href="https://www.sherwin-williams.com/en-us/project-center/faqs/paint-faq">Sherwin-Williams: paint area and coverage</TrustLink></li>
              <li><TrustLink external href="https://pdf.lowes.com/project-planner.pdf">Lowe&apos;s: flooring carton coverage planner</TrustLink></li>
              <li><TrustLink external href="https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9">NIST: U.S. gallon-to-litre conversion</TrustLink></li>
            </ul>

            <p className="mt-7 text-xs leading-5 text-muted-foreground">Last reviewed: August 24, 2026. For the calculator maintenance and source-review policy, read the <Link className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 outline-none hover:text-primary-strong focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href="/methodology">Methodology page</Link>.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
