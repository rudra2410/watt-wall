import Link from "next/link";

import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { Icon } from "@/components/ui/icon";
import { buttonVariants } from "@/components/ui/button";
import { guideNavigation, siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Home Energy and Renovation Guides",
  description: "Practical guides for understanding electricity costs, appliance energy use, home energy audits, paint, flooring, and EnergyGuide labels.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main className="bg-background" id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteConfig.url }, { name: "Guides", url: `${siteConfig.url}/guides` }]} />
      <section className="bg-background py-14 sm:py-18 lg:py-22">
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
            <h1 className="mt-3 text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-5xl">Clear answers for better home planning.</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Simple, source-backed explanations for the numbers behind energy and renovation decisions.</p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-18 lg:py-22" aria-labelledby="guide-list-title">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">Guide library</p>
              <h2 className="mt-2 text-3xl leading-tight font-semibold tracking-tight" id="guide-list-title">Choose a topic.</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground sm:block">Read at your own pace, then use a calculator when you are ready.</p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideNavigation.map((guide, index) => (
              <li key={guide.href}>
                <Link className="group flex h-full min-h-48 flex-col rounded-xl bg-card-section p-6 outline-none transition-colors duration-200 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none" href={guide.href}>
                  <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Guide {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl leading-tight font-semibold tracking-tight group-hover:text-primary">{guide.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">Read guide <Icon className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" name="arrow-right" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

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
