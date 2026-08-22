import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg font-semibold tracking-[-0.02em] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href="/"
    >
      <svg
        aria-hidden="true"
        className="size-8 text-primary"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          d="M4.5 15.25 16 5l11.5 10.25V27H4.5V15.25Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m17.9 10.5-5.2 7h4l-2.1 4.5 5.3-6.75h-4.1l2.1-4.75Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-lg">Watt &amp; Wall</span>
    </Link>
  );
}
