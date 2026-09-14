import Link from "next/link";

import { CalculatorIcon } from "@/components/marketing/calculator-icon";
import { Icon } from "@/components/ui/icon";
import type { CalculatorDefinition } from "@/data/calculators";

type CalculatorCardProps = {
  calculator: CalculatorDefinition;
  description?: string;
  showCategory?: boolean;
};

export function CalculatorCard({ calculator, description, showCategory = true }: CalculatorCardProps) {
  return (
    <article className="group relative flex h-full min-h-72 flex-col rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors duration-150 hover:border-primary/50 hover:bg-accent/40 focus-within:border-primary/50 motion-reduce:transition-none sm:p-6">
      <div aria-hidden="true" className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
        <CalculatorIcon name={calculator.icon} />
      </div>
      {showCategory ? <p className="mt-6 text-xs leading-5 font-bold tracking-[0.12em] text-primary uppercase">{calculator.category}</p> : null}
      <h3 className={showCategory ? "mt-2 text-xl leading-7 font-semibold tracking-tight" : "mt-6 text-xl leading-7 font-semibold tracking-tight"}>
        <Link
          className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring focus-visible:after:ring-offset-2 focus-visible:after:ring-offset-background"
          href={calculator.href}
        >
          {calculator.name}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description ?? calculator.description}</p>
      <span aria-hidden="true" className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
        Open calculator
        <Icon className="size-4" name="arrow-right" />
      </span>
    </article>
  );
}
