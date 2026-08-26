import { CalculatorCard } from "@/components/calculators/calculator-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { calculators } from "@/data/calculators";

export function FeaturedCalculatorsSection() {
  return (
    <section aria-labelledby="featured-calculators-title" className="bg-card-section py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Choose a focused estimate for energy, renovation, furniture, or decoration. Every tool shows the formula, assumptions, and values behind its result."
          eyebrow="Planning calculators"
          title="Choose the estimate you need"
          titleId="featured-calculators-title"
        />

        <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-3">
          {calculators.map((calculator) => (
            <li className="h-full last:xl:col-start-2" key={calculator.slug}>
              <CalculatorCard calculator={calculator} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
