import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { buttonVariants } from "@/components/ui/button";
import { heroElectricityExample } from "@/lib/home-hero-example";
import { cn } from "@/lib/utils";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function HeroSection() {
  const example = heroElectricityExample;

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate overflow-hidden bg-background py-14 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-44 size-[34rem] rounded-full bg-primary/5 blur-3xl" />
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(23rem,0.92fr)] lg:gap-16">
        <div className="relative max-w-[44rem]">
          <p className="mb-5 flex items-center gap-2 text-sm leading-5 font-semibold tracking-[0.14em] text-primary uppercase">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            Practical home planning tools
          </p>
          <h1
            id="home-hero-title"
            className="max-w-[42rem] text-4xl leading-[1.22] font-semibold tracking-[-0.035em] text-balance sm:text-5xl sm:leading-[1.15] lg:text-[3.5rem] lg:leading-[4rem]"
          >
            Plan home projects with clearer numbers.
          </h1>
          <p className="mt-6 max-w-[40rem] text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            Estimate energy costs, renovation materials, furniture fit, rug sizes, and curtains using local values, transparent formulas, and plain-language assumptions.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link className={cn(buttonVariants(), "group sm:min-w-44")} href="/calculators">
              Browse calculators
              <Icon className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" name="arrow-right" />
            </Link>
            <Link className={cn(buttonVariants({ variant: "secondary" }), "sm:min-w-44")} href="/methodology">
              See our methodology
            </Link>
          </div>
          <p className="mt-5 max-w-[38rem] text-sm leading-5 text-muted-foreground">
            Planning estimates—not quotes. Your usage, measurements, and local prices determine the result.
          </p>
          <ul className="mt-6 grid max-w-[38rem] gap-3 text-sm text-muted-foreground sm:grid-cols-3 sm:gap-4">
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-3.5" name="check" />
              </span>
              Use local values
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-3.5" name="check" />
              </span>
              See each formula
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-3.5" name="check" />
              </span>
              No account needed
            </li>
          </ul>
        </div>

        <aside aria-label="Illustrative electricity cost example" className="relative rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-md sm:p-7">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm leading-5 font-semibold text-primary">Illustrative estimate</p>
              <p className="mt-1 text-xl leading-7 font-semibold tracking-tight">A 1.5 kW appliance</p>
            </div>
            <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-5" name="bolt" />
            </span>
          </div>

          <dl className="mt-6 grid gap-3 border-y border-border py-5 text-sm leading-5">
            <div className="flex items-center justify-between gap-5">
              <dt className="text-muted-foreground">Daily use</dt>
              <dd className="font-mono font-semibold">{numberFormatter.format(example.hoursPerDay)} hours</dd>
            </div>
            <div className="flex items-center justify-between gap-5">
              <dt className="text-muted-foreground">Example local rate</dt>
              <dd className="font-mono font-semibold">{currencyFormatter.format(example.pricePerKilowattHour)}/kWh</dd>
            </div>
            <div className="flex items-center justify-between gap-5">
              <dt className="text-muted-foreground">Daily energy</dt>
              <dd className="font-mono font-semibold">{numberFormatter.format(example.dailyEnergyKilowattHours)} kWh</dd>
            </div>
          </dl>

          <div className="mt-5 rounded-lg border border-primary/20 bg-primary/10 p-4">
            <p className="text-sm leading-5 text-muted-foreground">Estimated daily cost</p>
            <p className="mt-1 font-mono text-3xl leading-9 font-semibold tracking-tight text-foreground">
              {currencyFormatter.format(example.dailyCost)}
            </p>
            <p className="mt-2 font-mono text-xs leading-5 text-muted-foreground">
              {numberFormatter.format(example.powerKilowatts)} kW × {numberFormatter.format(example.hoursPerDay)} hr × {currencyFormatter.format(example.pricePerKilowattHour)}
            </p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
