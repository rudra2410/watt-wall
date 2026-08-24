"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-xs outline-none transition-colors duration-150 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none",
        className,
      )}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="hidden dark:inline-flex">
        <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      </span>
      <span className="inline-flex dark:hidden">
        <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
          <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" fill="currentColor" />
        </svg>
      </span>
      <span className="sr-only">Change color theme</span>
    </button>
  );
}
