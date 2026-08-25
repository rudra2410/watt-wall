"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/mobile-navigation";
import { NavigationLinks } from "@/components/navigation-links";
import { SiteLogo } from "@/components/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={hasScrolled ? "min-h-20" : undefined}>
      <header
        className={cn(
          "z-40 bg-card-section transition-[background-color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none",
          hasScrolled
            ? "fixed inset-x-0 top-0 -translate-y-2 bg-card-section/95 shadow-sm backdrop-blur-sm motion-safe:translate-y-0"
            : "relative",
        )}
      >
      <Container className="grid min-h-[5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <SiteLogo />

        <nav aria-label="Primary" className="hidden xl:col-start-2 xl:block">
          <NavigationLinks className="items-center gap-1" />
        </nav>

        <Link
          className={cn(buttonVariants(), "hidden xl:col-start-3 xl:inline-flex xl:justify-self-end")}
          href="/calculators"
        >
          Browse calculators
        </Link>

        <MobileNavigation />
      </Container>
      </header>
    </div>
  );
}
