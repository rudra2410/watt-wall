"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NavigationLinks } from "@/components/navigation-links";
import { ThemeSelect } from "@/components/theme-select";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mobileNavigationId = "mobile-primary-navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktopQuery = window.matchMedia("(min-width: 64rem)");

    function closeForDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    function closeFromOutside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeFromEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    desktopQuery.addEventListener("change", closeForDesktop);
    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromEscape);

    return () => {
      desktopQuery.removeEventListener("change", closeForDesktop);
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={buttonRef}
        aria-controls={mobileNavigationId}
        aria-expanded={open}
        className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-secondary px-3 text-sm font-semibold text-secondary-foreground shadow-xs outline-none transition-colors duration-150 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
          {open ? (
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id={mobileNavigationId}
          className="absolute inset-x-0 top-full z-50 border-y border-border bg-background shadow-sm"
        >
          <div className="mx-auto grid w-full max-w-[75rem] gap-5 px-4 py-5 sm:px-6">
            <nav aria-label="Mobile primary">
              <NavigationLinks
                className="grid gap-1"
                linkClassName="w-full justify-start px-4"
                onNavigate={() => setOpen(false)}
              />
            </nav>
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-5">
              <ThemeSelect compact id="theme-preference-mobile" />
              <Link
                className={cn(buttonVariants(), "grow sm:grow-0")}
                href="/calculators"
                onClick={() => setOpen(false)}
              >
                Browse calculators
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
