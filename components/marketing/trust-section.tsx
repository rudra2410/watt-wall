import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustLinks, trustPoints } from "@/data/home";

export function TrustSection() {
  return (
    <section aria-labelledby="trust-title" className="border-y border-border bg-card py-16 text-card-foreground sm:py-20 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <SectionHeading
            description="Useful planning numbers need clear limits and enough context to check them. These rules guide every Watt & Wall calculator."
            eyebrow="Built for clarity"
            title="Know what is behind each estimate"
            titleId="trust-title"
          />

          <nav aria-label="Trust and policy pages" className="mt-8 flex flex-col items-start gap-1">
            {trustLinks.map((link) => (
              <Link
                className="group flex min-h-11 items-center gap-2 rounded-md px-1 font-semibold text-primary outline-none transition-colors duration-150 hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card motion-reduce:transition-none"
                href={link.href}
                key={link.href}
              >
                {link.label}
                <svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 24 24">
                  <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li className="border-t border-border pt-5" key={point.title}>
              <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary">
                <svg className="size-4" fill="none" viewBox="0 0 24 24">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
              <h3 className="mt-4 text-lg leading-7 font-semibold tracking-tight">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
