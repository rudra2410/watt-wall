import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { siteConfig } from "@/lib/site";

type CalculatorShellProps = {
  category: string;
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export function CalculatorShell({ category, title, description, path, children }: CalculatorShellProps) {
  return (
    <main className="bg-background" id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteConfig.url }, { name: "Calculators", url: `${siteConfig.url}/calculators` }, { name: title, url: `${siteConfig.url}${path}` }]} />
      <section className="bg-card-section">
        <Container className="py-8 sm:py-10 lg:py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/calculators">Calculators</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>

          <header className="mt-8 max-w-4xl">
            <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">{category}</p>
            <h1 className="mt-3 text-4xl leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
          </header>
        </Container>
      </section>

      <Container className="py-10 sm:py-14 lg:py-16">
        {children}
      </Container>
    </main>
  );
}
