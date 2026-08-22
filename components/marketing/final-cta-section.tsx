import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-title" className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-primary/20 bg-primary/10 p-6 sm:p-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="max-w-[43rem]">
            <p className="text-sm leading-5 font-bold tracking-[0.12em] text-primary uppercase">Start your estimate</p>
            <h2 id="final-cta-title" className="mt-3 text-[1.75rem] leading-9 font-semibold tracking-[-0.025em] text-balance sm:text-4xl sm:leading-[2.75rem]">
              Ready to make a clearer estimate?
            </h2>
            <p className="mt-4 text-base leading-[1.625] text-muted-foreground">
              Choose a calculator, enter the values you know, and review the formula and assumptions behind the result.
            </p>
          </div>

          <Link className={cn(buttonVariants(), "group w-full sm:w-auto sm:min-w-52")} href="/calculators">
            Browse all calculators
            <svg aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" fill="none" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
