import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/data/home";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          description="Quick answers about scope, local values, privacy, and what each result can—and cannot—tell you."
          eyebrow="Common questions"
          title="Before you use an estimate"
          titleId="faq-title"
        />

        <div className="border-y border-border">
          {homeFaqs.map((faq, index) => (
            <details className="group border-b border-border last:border-b-0" key={faq.question} open={index === 0}>
              <summary className="flex min-h-17 cursor-pointer list-none items-center justify-between gap-5 rounded-md py-4 font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <svg aria-hidden="true" className="size-5 shrink-0 text-primary group-open:rotate-45" fill="none" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </summary>
              <p className="max-w-[42rem] pb-6 pr-10 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
