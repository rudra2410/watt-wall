import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = ComponentProps<"div"> & { eyebrow?: string; title: string; titleId?: string; description?: string };

export function SectionHeading({ className, eyebrow, title, titleId, description, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[45rem]", className)} {...props}>
      {eyebrow ? <p className="mb-3 text-sm leading-5 font-bold tracking-[0.12em] text-primary uppercase">{eyebrow}</p> : null}
      <h2 id={titleId} className="text-[1.75rem] leading-9 font-semibold tracking-[-0.025em] text-balance sm:text-4xl sm:leading-[2.75rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-[1.625] text-muted-foreground">{description}</p> : null}
    </div>
  );
}
