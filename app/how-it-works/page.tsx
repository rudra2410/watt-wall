import Link from "next/link";

import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { buttonVariants } from "@/components/ui/button";
import { TrustLink } from "@/components/trust-page-shell";
import { calculators } from "@/data/calculators";
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

const preparationInputs = [
  {
    href: "/guides/electricity-costs",
    linkLabel: "Read the electricity-cost guide",
    title: "Bill or tariff",
    description: "Bring the electricity rate, billing period, and details that separate variable usage charges from fixed fees. Choose the matching currency label and enter the rate in that currency; the calculators do not convert exchange rates.",
  },
  {
    href: "/guides/energyguide-labels",
    linkLabel: "Read the EnergyGuide guide",
    title: "Product label or manual",
    description: "Look for appliance watts or annual kWh, paint coverage, flooring carton coverage, tile dimensions, and the manufacturer instructions that apply to the product.",
  },
  {
    href: "/guides/measuring-rooms-and-furniture",
    linkLabel: "Read the room-measuring guide",
    title: "Project measurements",
    description: "Record room, wall, floor, furniture, opening, and window dimensions. Use one measurement system consistently and note any clearance the project needs.",
  },
  {
    href: "/guides/appliance-energy-use",
    linkLabel: "Read the appliance-measurement guide",
    title: "Observed usage",
    description: "Use the active hours, active days, duty cycle, and seasonal schedule that match how the appliance or project is actually used. A measured value is more useful than a generic starting point.",
  },
] as const;

export const metadata = createPageMetadata({
  title: "How Watt & Wall Calculators Work",
  description: "Learn how Watt & Wall calculators use local values, clear formulas, stated assumptions, and source notes to produce practical home-planning estimates.",
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
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Calculator arithmetic runs in your browser and is not submitted to a Watt &amp; Wall application server. Inputs can appear in the page URL, which analytics or advertising services may process. Do not enter confidential information, and read the <TrustLink href="/privacy">Privacy policy</TrustLink> for details.</p>
            </div>

            <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
              {preparationInputs.map((input) => (
                <li className="rounded-xl bg-card p-5 shadow-sm" key={input.title}>
                  <h3 className="text-lg leading-7 font-semibold">{input.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{input.description}</p>
                  <Link className="mt-4 inline-flex min-h-11 items-center rounded-md font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href={input.href}>{input.linkLabel} <span aria-hidden="true" className="ml-2">›</span></Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Available calculators" className="mt-10 border-t border-border pt-7">
            <p className="font-semibold">Available calculators</p>
            <ul className="mt-3 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
              {calculators.map((calculator) => (
                <li key={calculator.slug}>
                  <Link className="inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-primary outline-none hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card-section" href={calculator.href}>{calculator.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section aria-labelledby="read-result-title" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Reading the result</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id="read-result-title">How to read and use the result</h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-card p-6 shadow-sm sm:p-7">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">As you enter values</p>
              <h3 className="mt-3 text-2xl leading-8 font-semibold tracking-tight">Validate the inputs</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Each field has a visible label and hint. If a value is incomplete or outside the supported range, the result is withheld until it can be calculated from valid inputs.</p>
            </article>

            <article className="rounded-2xl bg-card p-6 shadow-sm sm:p-7">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Before you rely on it</p>
              <h3 className="mt-3 text-2xl leading-8 font-semibold tracking-tight">Read the formula and assumptions</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Every calculator page shows the formula, a worked example, source notes, rounding information, and assumptions beside the calculator rather than hiding them behind the result.</p>
            </article>

            <article className="rounded-2xl bg-primary/10 p-6 sm:p-7">
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Planning aid, not a quote</p>
              <h3 className="mt-3 text-2xl leading-8 font-semibold tracking-tight">Decide what to check next</h3>
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

            <p className="mt-7 text-xs leading-5 text-muted-foreground">Last reviewed: September 14, 2026. For the calculator maintenance and source-review policy, read the <Link className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 outline-none hover:text-primary-strong focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href="/methodology">Methodology page</Link>.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
