import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { homeFaqs } from "@/data/home";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="bg-card-section py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          description="Quick answers about scope, local values, privacy, and what each result can—and cannot—tell you."
          eyebrow="Common questions"
          title="Before you use an estimate"
          titleId="faq-title"
        />

        <FaqAccordion className="border-y border-border" items={homeFaqs} />
      </Container>
    </section>
  );
}
