import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";
import { siteConfig } from "@/lib/site";

type TrustPageShellProps = {
  category: string;
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export function TrustPageShell({ category, title, description, path, children }: TrustPageShellProps) {
  return (
    <main className="bg-background" id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteConfig.url }, { name: title, url: `${siteConfig.url}${path}` }]} />
      <Container className="py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li><Link className="rounded-md outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        <header className="mt-10 max-w-3xl">
          <p className="text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">{category}</p>
          <h1 className="mt-3 text-4xl leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
        </header>

        <article className="mt-12 max-w-3xl space-y-10 text-base leading-7">
          {children}
        </article>
      </Container>
    </main>
  );
}

type TrustSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export function TrustSection({ id, title, children }: TrustSectionProps) {
  return (
    <section className="space-y-4" id={id}>
      <h2 className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

export function TrustNote({ children }: { children: ReactNode }) {
  return <aside className="rounded-xl border border-primary/20 bg-primary/10 p-5 text-sm leading-6 text-foreground shadow-sm sm:p-6">{children}</aside>;
}

export function TrustList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-3 pl-6 text-muted-foreground marker:text-primary">{children}</ul>;
}

export function TrustLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 outline-none transition-colors hover:text-primary-strong focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
