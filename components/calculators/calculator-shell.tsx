import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type CalculatorShellProps = {
  category: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function CalculatorShell({ category, title, description, children }: CalculatorShellProps) {
  return (
    <main id="main-content">
      <Container className="py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/calculators">Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        <header className="mt-10 max-w-3xl">
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">{category}</p>
          <h1 className="mt-3 text-4xl leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
        </header>

        <div className="mt-12">{children}</div>
      </Container>
    </main>
  );
}
