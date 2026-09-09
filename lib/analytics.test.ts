import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendGAEvent } = vi.hoisted(() => ({
  sendGAEvent: vi.fn(),
}));

vi.mock("@next/third-parties/google", () => ({ sendGAEvent }));

import { trackCalculatorCopy, trackCalculatorReset } from "./analytics";

describe("calculator analytics", () => {
  beforeEach(() => {
    sendGAEvent.mockClear();
  });

  it("tracks a successful copy without calculator inputs or results", () => {
    trackCalculatorCopy("electricity-cost");

    expect(sendGAEvent).toHaveBeenCalledWith("event", "calculator_copy_result", {
      calculator_slug: "electricity-cost",
    });
  });

  it("tracks a reset without calculator inputs or results", () => {
    trackCalculatorReset("rug-size");

    expect(sendGAEvent).toHaveBeenCalledWith("event", "calculator_reset", {
      calculator_slug: "rug-size",
    });
  });
});
