import { describe, expect, it } from "vitest";

import { homeFaqs, howItWorksSteps, trustLinks, trustPoints } from "./home";

describe("home-page content", () => {
  it("keeps the approved three-step process in order", () => {
    expect(howItWorksSteps.map((step) => step.number)).toEqual(["01", "02", "03"]);
  });

  it("links each trust commitment to the approved policy routes", () => {
    expect(trustPoints).toHaveLength(4);
    expect(trustLinks.map((link) => link.href)).toEqual(["/methodology", "/privacy", "/disclaimer"]);
  });

  it("provides six unique, complete home-page FAQ answers", () => {
    expect(homeFaqs).toHaveLength(6);
    expect(new Set(homeFaqs.map((faq) => faq.question)).size).toBe(homeFaqs.length);
    expect(homeFaqs.every((faq) => faq.answer.length > 80)).toBe(true);
  });
});
