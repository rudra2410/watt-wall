import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorksSteps } from "@/data/home";

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-title" className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="A useful estimate should be easy to create and easy to inspect. Each calculator follows the same clear path."
          eyebrow="How it works"
          title="From your values to a clearer estimate"
          titleId="how-it-works-title"
        />

        <ol className="mt-10 grid list-none gap-8 p-0 lg:grid-cols-3 lg:gap-10">
          {howItWorksSteps.map((step) => (
            <li className="pt-6" key={step.number}>
              <span aria-hidden="true" className="grid size-11 place-items-center rounded-lg border border-primary/20 bg-primary/10 font-mono text-sm font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl leading-7 font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-[22rem] text-base leading-[1.625] text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
