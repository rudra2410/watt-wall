import Link from "next/link";
import Image from "next/image";

export function SiteLogo() {
  return (
    <Link
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg font-semibold tracking-[-0.02em] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href="/"
    >
      <Image
        src="/watt-wall-logo.png"
        alt=""
        aria-hidden="true"
        className="size-9 object-contain"
        width={144}
        height={144}
        priority
      />
      <span className="text-lg">Watt and Wall</span>
    </Link>
  );
}
