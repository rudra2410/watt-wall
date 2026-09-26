"use client";

import type { CalculatorSlug } from "@/data/calculators";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function sendCalculatorEvent(eventName: string, calculatorSlug: CalculatorSlug): void {
  (window as AnalyticsWindow).gtag?.("event", eventName, { calculator_slug: calculatorSlug });
}

export function trackCalculatorCopy(calculatorSlug: CalculatorSlug): void {
  sendCalculatorEvent("calculator_copy_result", calculatorSlug);
}

export function trackCalculatorReset(calculatorSlug: CalculatorSlug): void {
  sendCalculatorEvent("calculator_reset", calculatorSlug);
}
