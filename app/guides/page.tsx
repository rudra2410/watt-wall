import Link from "next/link";

import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { Icon } from "@/components/ui/icon";
import { buttonVariants } from "@/components/ui/button";
import { guideCategories, guideNavigation, siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Home Energy, Renovation and Decor Guides",
  description: "Read practical home energy, appliance, renovation, furniture, rug and curtain guides with clear formulas, measurements, assumptions, and source links.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main className="bg-background" id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteConfig.url }, { name: "Guides", url: `${siteConfig.url}/guides` }]} />
      <section className="bg-background pt-14 pb-10 sm:pt-18 sm:pb-12 lg:pt-22 lg:pb-14">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card-section" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Guides</li>
            </ol>
          </nav>
          <div className="mt-10 max-w-2xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Watt & Wall guides</p>
            <h1 className="mt-3 text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-5xl">Practical home energy, renovation and decor guides</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Choose a focused guide for an energy-cost question, renovation measurement, furniture decision, rug, or curtain project. Each guide states its assumptions and links to its sources.</p>
          </div>
        </Container>
      </section>

      <div className="bg-card-section py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Guide library</p>
            <p className="mt-2 text-3xl leading-tight font-semibold tracking-tight">Choose a topic area</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">Start with the decision you need to make. The category descriptions explain which group is most likely to contain the answer.</p>
          </div>

          <div className="mt-12 space-y-14 sm:space-y-16">
            {guideCategories.map((category) => {
              const categoryGuides = guideNavigation.filter((guide) => guide.category === category.name);
              const headingId = `guide-category-${category.slug}`;

              return (
                <section aria-labelledby={headingId} className="border-t border-border pt-8" key={category.slug}>
                  <div className="max-w-2xl">
                    <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">{category.name}</p>
                    <h2 className="mt-2 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id={headingId}>{category.title}</h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">{category.description}</p>
                  </div>

                  <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryGuides.map((guide) => (
                      <li key={guide.href}>
                        <Link className="group flex h-full min-h-48 flex-col rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm outline-none transition-colors duration-200 hover:border-primary/40 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card-section motion-reduce:transition-none" href={guide.href}>
                          <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{guide.category} guide</span>
                          <h3 className="mt-4 text-xl leading-tight font-semibold tracking-tight group-hover:text-primary">{guide.label}</h3>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.directoryDescription}</p>
                          <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">Read guide <Icon className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" name="arrow-right" /></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </div>

      <section className="bg-background py-14 sm:py-18" aria-labelledby="guide-cta-title">
        <Container>
          <div className="rounded-2xl bg-foreground px-6 py-16 text-center text-background shadow-sm sm:px-10 sm:py-20">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Put the guide into practice</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl" id="guide-cta-title">Ready to work with your numbers?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-background/75">Use a focused calculator and review every assumption behind the result.</p>
            <Link className={cn(buttonVariants({ variant: "secondary" }), "mt-7 gap-3 bg-background text-foreground hover:bg-secondary")} href="/calculators">Browse calculators <Icon className="size-4" name="arrow-right" /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
