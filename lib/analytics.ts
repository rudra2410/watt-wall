"use client";

import { sendGAEvent } from "@next/third-parties/google";

import type { CalculatorSlug } from "@/data/calculators";

export function trackCalculatorCopy(calculatorSlug: CalculatorSlug): void {
  sendGAEvent("event", "calculator_copy_result", { calculator_slug: calculatorSlug });
}

export function trackCalculatorReset(calculatorSlug: CalculatorSlug): void {
  sendGAEvent("event", "calculator_reset", { calculator_slug: calculatorSlug });
}
