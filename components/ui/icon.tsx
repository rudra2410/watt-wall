import { cn } from "@/lib/utils";

export type IconName =
  | "arrow-right"
  | "bolt"
  | "check"
  | "close"
  | "grid"
  | "mail"
  | "menu"
  | "paint-roller"
  | "phone"
  | "plug"
  | "plus";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {name === "arrow-right" ? <path d="M5 12h13m-6-6 6 6-6 6" /> : null}
      {name === "bolt" ? <path d="m13 2-8 11h7l-1 9 8-11h-7l1-9Z" /> : null}
      {name === "check" ? <path d="m5 12 4 4L19 6" /> : null}
      {name === "close" ? <path d="m6 6 12 12M18 6 6 18" /> : null}
      {name === "grid" ? <><rect height="18" rx="1.5" width="18" x="3" y="3" /><path d="M12 3v18M3 12h18" /></> : null}
      {name === "mail" ? <><rect height="14" rx="2" width="18" x="3" y="5" /><path d="m4 7 8 6 8-6" /></> : null}
      {name === "menu" ? <path d="M4 7h16M4 12h16M4 17h16" /> : null}
      {name === "paint-roller" ? <><path d="M4 5h11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4V5Z" /><path d="M17 8h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6" /><path d="M12 14v7" /></> : null}
      {name === "phone" ? <path d="M6.6 3.5 9 3l2 5-2 1.5a13 13 0 0 0 5.5 5.5L16 13l5 2-.5 2.4a2 2 0 0 1-2.2 1.6C10.8 18.1 5.9 13.2 5 5.7A2 2 0 0 1 6.6 3.5Z" /> : null}
      {name === "plug" ? <><path d="M9 3v5m6-5v5M7 8h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8Z" /><path d="M12 15v6" /></> : null}
      {name === "plus" ? <path d="M12 5v14M5 12h14" /> : null}
    </svg>
  );
}
