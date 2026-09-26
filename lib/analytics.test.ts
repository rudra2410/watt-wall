import { beforeEach, describe, expect, it, vi } from "vitest";

import { trackCalculatorCopy, trackCalculatorReset } from "./analytics";

describe("calculator analytics", () => {
  const gtag = vi.fn();

  beforeEach(() => {
    gtag.mockClear();
    vi.stubGlobal("window", { gtag });
  });

  it("tracks a successful copy without calculator inputs or results", () => {
    trackCalculatorCopy("electricity-cost");

    expect(gtag).toHaveBeenCalledWith("event", "calculator_copy_result", {
      calculator_slug: "electricity-cost",
    });
  });

  it("tracks a reset without calculator inputs or results", () => {
    trackCalculatorReset("rug-size");

    expect(gtag).toHaveBeenCalledWith("event", "calculator_reset", {
      calculator_slug: "rug-size",
    });
  });
});
