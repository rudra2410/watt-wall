"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { primaryNavigation } from "@/lib/site";

type NavigationLinksProps = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavigationLinks({
  className,
  linkClassName,
  onNavigate,
}: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("m-0 flex list-none p-0", className)}>
      {primaryNavigation.map((item) => {
        const isCurrent =
          item.href === "/calculators"
            ? pathname.startsWith(item.href)
            : pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-lg px-0 lg:px-3 text-sm font-semibold text-muted-foreground outline-none transition-colors duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none",
                isCurrent && "text-foreground",
                linkClassName,
              )}
              href={item.href}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
