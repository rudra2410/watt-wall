import Link from "next/link";

import { CalculatorCard } from "@/components/calculators/calculator-card";
import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { calculatorCategories, calculators, type CalculatorSlug } from "@/data/calculators";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Home Energy, Renovation and Decor Calculators",
  description: "Browse free calculators for home energy costs, appliance use, paint, flooring, furniture fit, rug sizing, and curtain measurements with clear formulas.",
  path: "/calculators",
});

const calculatorComparison = {
  "electricity-cost": {
    bestFor: "One device or electrical load with a known power value",
    inputs: "Power, daily use, active days, electricity rate",
    result: "Daily, monthly, and annual kWh and cost",
  },
  "appliance-running-cost": {
    bestFor: "Comparing several household appliances together",
    inputs: "Appliance wattage, schedule, duty cycle, electricity rate",
    result: "Per-appliance and combined monthly cost",
  },
  "paint-quantity": {
    bestFor: "Planning wall paint for a rectangular room",
    inputs: "Room dimensions, openings, coats, coverage, waste",
    result: "Estimated paint volume after adjustments",
  },
  "flooring-tile": {
    bestFor: "Buying flooring packs or individual tiles",
    inputs: "Floor dimensions, product coverage or tile size, waste",
    result: "Adjusted area and whole packs or tiles",
  },
  "furniture-fit": {
    bestFor: "Checking room clearance and a delivery opening",
    inputs: "Room, furniture, clearance, and opening dimensions",
    result: "Room fit, remaining space, and opening check",
  },
  "rug-size": {
    bestFor: "Sizing a rug around a sofa, table, or bed",
    inputs: "Room, furniture, layout, and clearance dimensions",
    result: "Minimum rug size and room-fit check",
  },
  "curtain-measurement": {
    bestFor: "Planning a rod, curtain drop, and ready-made panels",
    inputs: "Window size, rod extension, fullness, panel width",
    result: "Rod width, fabric width, drop, and panel count",
  },
} as const satisfies Record<CalculatorSlug, { bestFor: string; inputs: string; result: string }>;

export default function CalculatorsPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteConfig.url }, { name: "Calculators", url: `${siteConfig.url}/calculators` }]} />
      <section className="bg-background py-14 sm:py-18 lg:py-22">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Calculators</li>
            </ol>
          </nav>
          <p className="mt-10 text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Calculator directory</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            Free home energy, renovation, furniture and decor calculators
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Choose a focused tool, enter your own local values, and review the formula, assumptions, and units behind the estimate.
          </p>
        </Container>
      </section>

      {calculatorCategories.map((category, index) => {
        const categoryCalculators = calculators.filter((calculator) => calculator.category === category.name);
        const headingId = `calculator-category-${category.slug}`;

        return (
          <section aria-labelledby={headingId} className={index % 2 === 0 ? "bg-card-section py-16 sm:py-20" : "bg-background py-16 sm:py-20"} key={category.name}>
            <Container>
              <div className="max-w-2xl">
                <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">{category.name}</p>
                <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id={headingId}>{category.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{category.directoryDescription}</p>
              </div>
              <ul className="mt-10 grid gap-5 md:grid-cols-2">
                {categoryCalculators.map((calculator) => (
                  <li className="h-full" key={calculator.slug}>
                    <CalculatorCard calculator={calculator} description={calculator.directoryDescription} showCategory={false} />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <section aria-labelledby="calculator-comparison-title" className="bg-card-section py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Compare the tools</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id="calculator-comparison-title">Choose the right calculator</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">Start with the decision you need to make, then check that you have the required measurements or usage details.</p>
          </div>

          <div aria-label="Calculator comparison" className="mt-10 overflow-x-auto rounded-xl border border-border bg-card shadow-sm" role="region" tabIndex={0}>
            <table className="w-full min-w-[52rem] border-collapse text-left text-sm leading-6">
              <thead className="bg-secondary text-foreground">
                <tr>
                  <th className="px-5 py-4 font-semibold" scope="col">Calculator</th>
                  <th className="px-5 py-4 font-semibold" scope="col">Best for</th>
                  <th className="px-5 py-4 font-semibold" scope="col">Inputs needed</th>
                  <th className="px-5 py-4 font-semibold" scope="col">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {calculators.map((calculator) => {
                  const comparison = calculatorComparison[calculator.slug];

                  return (
                    <tr key={calculator.slug}>
                      <th className="px-5 py-4 font-semibold text-foreground" scope="row">
                        <Link className="rounded-sm text-primary underline decoration-primary/35 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" href={calculator.href}>{calculator.name}</Link>
                      </th>
                      <td className="px-5 py-4">{comparison.bestFor}</td>
                      <td className="px-5 py-4">{comparison.inputs}</td>
                      <td className="px-5 py-4">{comparison.result}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </main>
  );
}
