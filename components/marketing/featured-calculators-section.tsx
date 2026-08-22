import { CalculatorCard } from "@/components/calculators/calculator-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { calculators } from "@/data/calculators";

export function FeaturedCalculatorsSection() {
  return (
    <section aria-labelledby="featured-calculators-title" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Start with a focused estimate for energy use or renovation materials. Every tool will show the formula, assumptions, and values behind its result."
          eyebrow="Featured calculators"
          title="Choose the estimate you need"
          titleId="featured-calculators-title"
        />

        <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-4">
          {calculators.map((calculator) => (
            <li className="h-full" key={calculator.slug}>
              <CalculatorCard calculator={calculator} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
