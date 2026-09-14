import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { guideNavigation } from "@/lib/site";

const highlightedGuideHrefs = [
  "/guides/space-heater-monthly-cost",
  "/guides/dehumidifier-ief-cost",
  "/guides/tile-waste-boxes",
  "/guides/vaulted-ceiling-paint",
] as const;

export function GuideHighlightsSection() {
  const guides = highlightedGuideHrefs
    .map((href) => guideNavigation.find((guide) => guide.href === href))
    .filter((guide): guide is (typeof guideNavigation)[number] => Boolean(guide));

  return (
    <section aria-labelledby="guide-highlights-title" className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Read a practical answer first, then use the matching calculator with your own values and assumptions."
          eyebrow="From the guide library"
          title="Useful answers for your next home project"
          titleId="guide-highlights-title"
        />

        <ul className="mt-10 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                className="group flex h-full min-h-56 flex-col rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm outline-none transition-colors duration-200 hover:border-primary/40 hover:bg-card-section focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none sm:p-6"
                href={guide.href}
              >
                <h3 className="text-xl leading-tight font-semibold tracking-tight group-hover:text-primary">{guide.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                  Read the guide
                  <Icon className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" name="arrow-right" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary outline-none hover:text-primary/80 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" href="/guides">
          Browse all guides
          <Icon className="size-4" name="arrow-right" />
        </Link>
      </Container>
    </section>
  );
}
