import { CalculatorCard } from "@/components/calculators/calculator-card";
import { Container } from "@/components/layout/container";
import { calculatorCategories, calculators } from "@/data/calculators";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home Energy, Renovation and Decor Calculators",
  description: "Browse transparent calculators for energy costs, renovation materials, furniture fit, rug sizing, and curtain measurements.",
  path: "/calculators",
});

export default function CalculatorsPage() {
  return (
    <main id="main-content">
      <section className="bg-background py-14 sm:py-18 lg:py-22">
        <Container>
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Calculator directory</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            Plan energy, renovation, furniture, and decor with clearer numbers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Choose a focused tool, enter your own local values, and review the formula, assumptions, and units behind the estimate.
          </p>
        </Container>
      </section>

      {calculatorCategories.map((category, index) => {
        const categoryCalculators = calculators.filter((calculator) => calculator.category === category.name);
        const headingId = `calculator-category-${category.name.toLowerCase()}`;

        return (
          <section aria-labelledby={headingId} className={index % 2 === 0 ? "bg-card-section py-16 sm:py-20" : "bg-background py-16 sm:py-20"} key={category.name}>
            <Container>
              <div className="max-w-2xl">
                <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">{category.name}</p>
                <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id={headingId}>{category.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{category.description}</p>
              </div>
              <ul className="mt-10 grid gap-5 md:grid-cols-2">
                {categoryCalculators.map((calculator) => (
                  <li className="h-full" key={calculator.slug}>
                    <CalculatorCard calculator={calculator} />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}
    </main>
  );
}
