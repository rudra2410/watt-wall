import type { ComponentProps } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <div className={cn("ui-select relative w-full", className)}>
      <select
        className="min-h-11 w-full min-w-0 appearance-none rounded-lg border border-input bg-background py-2 pr-9 pl-3 text-base text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/25 sm:text-sm"
        {...props}
      >
        {children}
      </select>
      <Icon
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
        name="chevron-down"
      />
    </div>
  );
}
