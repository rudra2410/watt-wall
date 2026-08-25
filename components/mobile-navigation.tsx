"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

import { NavigationLinks } from "@/components/navigation-links";
import { Icon } from "@/components/ui/icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mobileNavigationId = "mobile-primary-navigation";
const mobileNavigationTitleId = "mobile-primary-navigation-title";
const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const mobileMenu = open ? (
    <div className="fixed inset-0 z-[110] overflow-y-auto overscroll-contain p-3 sm:p-6">
      <button
        aria-label="Close menu"
        className="mobile-navigation-backdrop absolute inset-0 bg-foreground/20"
        type="button"
        onClick={() => setOpen(false)}
      />

      <div
        ref={dialogRef}
        aria-labelledby={mobileNavigationTitleId}
        aria-modal="true"
        className="mobile-navigation-panel relative z-[111] mx-auto grid w-full max-w-lg gap-5 rounded-2xl bg-background p-4 shadow-lg sm:p-6"
        id={mobileNavigationId}
        role="dialog"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-foreground" id={mobileNavigationTitleId}>Menu</p>
          <button
            aria-label="Close menu"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground outline-none transition-colors duration-150 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
            type="button"
            onClick={() => setOpen(false)}
          >
            <Icon className="size-5" name="close" />
          </button>
        </div>

        <nav aria-label="Mobile primary">
          <NavigationLinks
            className="grid gap-1"
            linkClassName="w-full justify-start px-0 lg:px-3"
            onNavigate={() => setOpen(false)}
          />
        </nav>

        <Link
          className={cn(buttonVariants(), "w-full")}
          href="/calculators"
          onClick={() => setOpen(false)}
        >
          Browse calculators
        </Link>
      </div>
    </div>
  ) : null;

  useEffect(() => {
    if (!open) return;

    const desktopQuery = window.matchMedia("(min-width: 80rem)");
    const html = document.documentElement;
    const { body } = document;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousBodyWidth = body.style.width;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.width = "100%";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    function closeForDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    function closeFromEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    }

    function keepFocusInDialog(event: KeyboardEvent) {
      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    const focusMenu = window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    desktopQuery.addEventListener("change", closeForDesktop);
    document.addEventListener("keydown", closeFromEscape);
    document.addEventListener("keydown", keepFocusInDialog);

    return () => {
      window.cancelAnimationFrame(focusMenu);
      desktopQuery.removeEventListener("change", closeForDesktop);
      document.removeEventListener("keydown", closeFromEscape);
      document.removeEventListener("keydown", keepFocusInDialog);
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.paddingRight = previousBodyPaddingRight;
      body.style.width = previousBodyWidth;
      window.scrollTo(scrollX, scrollY);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        ref={buttonRef}
        aria-controls={mobileNavigationId}
        aria-expanded={open}
        className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-secondary px-3 text-sm font-semibold text-secondary-foreground shadow-xs outline-none transition-colors duration-150 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <Icon className="size-5" name={open ? "close" : "menu"} />
      </button>

      {typeof document !== "undefined" && mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </div>
  );
}
