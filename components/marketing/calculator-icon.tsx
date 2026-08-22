import type { CalculatorIconName } from "@/data/calculators";

type CalculatorIconProps = {
  name: CalculatorIconName;
};

export function CalculatorIcon({ name }: CalculatorIconProps) {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      {name === "bolt" ? (
        <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      ) : null}
      {name === "plug" ? (
        <>
          <path d="M9 3v5m6-5v5M7 8h10v2a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5V8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M12 15v6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </>
      ) : null}
      {name === "paint" ? (
        <>
          <path d="M4 5h11v6H4zM15 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6v3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M10 16h4v6h-4z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        </>
      ) : null}
      {name === "tile" ? (
        <>
          <path d="M3 3h18v18H3zM12 3v18M3 12h18" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="m3 12 9-9m0 18 9-9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </>
      ) : null}
    </svg>
  );
}
