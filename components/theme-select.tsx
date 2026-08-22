"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

const emptySubscribe = () => () => undefined;

type ThemeSelectProps = {
  compact?: boolean;
  id?: string;
};

export function ThemeSelect({ compact = false, id = "theme-preference" }: ThemeSelectProps) {
  const { setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return (
    <div className={cn("grid gap-2", compact && "gap-0")}>
      <Label className={cn(compact && "sr-only")} htmlFor={id}>
        Appearance
      </Label>
      <select
        id={id}
        aria-label={compact ? "Appearance" : undefined}
        className={cn(
          "min-h-11 w-40 rounded-lg border border-input bg-background px-3 text-sm font-semibold text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/35 disabled:opacity-60",
          compact && "w-28",
        )}
        value={mounted ? theme : "system"}
        disabled={!mounted}
        onChange={(event) => setTheme(event.target.value)}
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
