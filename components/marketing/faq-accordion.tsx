"use client";

import { useId, useState } from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const idPrefix = useId().replace(/:/g, "");
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  }

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        const answerId = `${idPrefix}-answer-${index}`;

        return (
          <div className="border-b border-border last:border-b-0" key={item.question}>
            <button
              aria-controls={answerId}
              aria-expanded={isOpen}
              className="flex min-h-17 w-full cursor-pointer items-center justify-between gap-5 rounded-md py-4 text-left font-semibold outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
              onClick={() => toggleItem(index)}
              type="button"
            >
              <span>{item.question}</span>
              <Icon
                className={cn(
                  "size-5 shrink-0 text-primary transition-transform duration-300 ease-out motion-reduce:transition-none",
                  isOpen && "rotate-45",
                )}
                name="plus"
              >
              </Icon>
            </button>

            <div
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
              id={answerId}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[42rem] pb-6 pr-10 text-sm leading-6 text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
