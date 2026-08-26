import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { primaryNavigation } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not available. Use the links below to get back to the Watt & Wall calculators and guides.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content">
      <section aria-labelledby="not-found-title" className="relative isolate overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-44 size-[34rem] rounded-full bg-primary/5 blur-3xl" />
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,1.05fr)] lg:gap-12">
          <div className="relative max-w-[38rem]">
            <h1
              className="text-6xl leading-[1.05] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-8xl"
              id="not-found-title"
            >
              Oops!
            </h1>
            <p className="mt-6 max-w-[26rem] text-2xl leading-9 font-medium tracking-[-0.02em] text-balance sm:text-3xl sm:leading-10">
              We can&rsquo;t seem to find the page you&rsquo;re looking for.
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs leading-5 font-bold tracking-[0.14em] text-primary uppercase">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              Error code: 404
            </p>

            <p className="mt-10 text-sm leading-6 text-muted-foreground">Here are some helpful links instead:</p>
            <nav aria-label="Helpful links" className="mt-2">
              <ul className="flex flex-col items-start">
                {primaryNavigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="group flex min-h-11 items-center gap-2 rounded-md px-1 text-base font-semibold text-primary outline-none transition-colors duration-150 hover:text-primary-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
                      href={link.href}
                    >
                      {link.label}
                      <Icon
                        className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                        name="arrow-right"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div aria-hidden="true" className="relative justify-self-center lg:justify-self-end">
            <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[25rem] lg:max-w-[31rem]">
              <span className="absolute inset-[7%] rounded-full bg-primary/10" />
              <Image
                alt=""
                className="relative size-full object-contain"
                height={626}
                priority
                sizes="(min-width: 1024px) 31rem, (min-width: 640px) 25rem, 20rem"
                src="/men.png"
                width={626}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
