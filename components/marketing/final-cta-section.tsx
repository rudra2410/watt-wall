import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative isolate flex min-h-[25rem] items-center overflow-hidden rounded-2xl bg-foreground px-6 py-8 text-card shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-card/15" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-32 size-72 rounded-full bg-card/5" />

          <div className="relative grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:items-center lg:gap-12">
            <div className="max-w-[43rem]">
              <p className="text-sm leading-5 font-bold tracking-[0.12em] text-primary uppercase">Start your estimate</p>
              <h2 id="final-cta-title" className="mt-3 text-[1.75rem] leading-9 font-semibold tracking-[-0.025em] text-balance sm:text-4xl sm:leading-[2.75rem]">
                Ready to make a clearer estimate?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-[1.625] text-card/75">
                Choose a calculator, enter the values you know, and review the formula and assumptions behind the result.
              </p>
              <p className="mt-5 text-sm leading-6 text-card/70">No account required. Your values stay in your browser.</p>
            </div>

            <div className="w-full rounded-xl bg-card/10 p-4 sm:p-5">
              <p className="text-xs leading-5 font-bold tracking-[0.12em] text-card/70 uppercase">Ready when you are</p>
              <Link
                className={cn(
                  buttonVariants(),
                  "group mt-4 min-h-12 w-full justify-between px-6 focus-visible:ring-offset-foreground",
                )}
                href="/calculators"
              >
                Choose a calculator
                <Icon className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" name="arrow-right" />
              </Link>
              <p className="mt-3 text-sm leading-6 text-card/70">Use values from your bill, product label, or supplier.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
