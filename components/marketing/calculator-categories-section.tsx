import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CalculatorIcon } from "@/components/marketing/calculator-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { calculatorCategories, calculators } from "@/data/calculators";

export function CalculatorCategoriesSection() {
  return (
    <nav aria-labelledby="calculator-categories-title" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Start with the kind of decision you are making, then choose a focused calculator for the values you already know."
          eyebrow="Browse by category"
          title="Energy costs and renovation materials"
          titleId="calculator-categories-title"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {calculatorCategories.map((category) => {
            const categoryCalculators = calculators.filter((calculator) => calculator.category === category.name);

            return (
              <div className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-7" key={category.name}>
                <div aria-hidden="true" className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <CalculatorIcon name={category.icon} />
                </div>
                <p className="mt-6 text-xs leading-5 font-bold tracking-[0.12em] text-primary uppercase">{category.name}</p>
                <h3 className="mt-2 text-2xl leading-8 font-semibold tracking-tight">{category.title}</h3>
                <p className="mt-3 max-w-[32rem] text-base leading-[1.625] text-muted-foreground">{category.description}</p>

                <ul className="mt-7 divide-y divide-border border-y border-border">
                  {categoryCalculators.map((calculator) => (
                    <li key={calculator.slug}>
                      <Link
                        className="group flex min-h-14 items-center justify-between gap-4 py-3 font-semibold outline-none transition-colors duration-150 hover:text-primary focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card motion-reduce:transition-none"
                        href={calculator.href}
                      >
                        <span>{calculator.name}</span>
                        <svg aria-hidden="true" className="size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24">
                          <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
