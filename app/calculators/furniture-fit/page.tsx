import Link from "next/link";
import { CalculatorShell } from "@/components/calculators/calculator-shell";
import { FurnitureFitCalculator } from "@/components/calculators/decor-calculators";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Furniture Fit Calculator", description: "Use a furniture fit calculator to compare room, furniture, walking-clearance, and delivery-opening measurements in metric or imperial units.", path: "/calculators/furniture-fit" });
const sourceClass = "font-semibold text-primary underline decoration-primary/35 underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function FurnitureFitPage() {
  return <CalculatorShell category="Furniture and layout calculator" title="Furniture Fit Calculator" description="Check whether a rectangular furniture footprint fits your room, compare a preferred walking clearance, and flag a tight delivery opening before you order." path="/calculators/furniture-fit">
    <FurnitureFitCalculator />
    <article className="mt-14 grid gap-10 rounded-2xl bg-card-section p-5 sm:mt-16 sm:p-8 lg:p-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:gap-12">
      <div className="space-y-10">
        <section><p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">Transparent check</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">How the furniture fit check works</h2><p className="mt-4 leading-7 text-muted-foreground">The calculator compares the furniture width and depth with the room in its standard and 90-degree rotated orientations. It selects the orientation with the most balanced remaining space, then compares half of that space with your requested clearance.</p><div className="mt-6 space-y-3 rounded-xl bg-card p-5 font-mono text-sm leading-6 shadow-sm"><p>Remaining space = room dimension − furniture dimension</p><p>Side clearance = smaller remaining dimension ÷ 2</p><p>Opening check = at least one rectangular furniture face fits the opening</p></div></section>
        <section><h2 className="text-3xl font-semibold tracking-tight">Measure before buying</h2><p className="mt-4 leading-7 text-muted-foreground">Measure the usable room, the furniture at its widest assembled points, and the clear inside size of the tightest doorway. Include handles, cushions, trim, door swings, radiators, columns, and other fixed obstacles on a separate room sketch.</p><p className="mt-4 leading-7 text-muted-foreground">For a step-by-step workflow, read the <Link className={sourceClass} href="/guides/measuring-rooms-and-furniture">room and furniture measuring guide</Link>.</p></section>
      </div>
      <aside className="space-y-5"><section className="rounded-xl bg-card p-5 shadow-sm"><h2 className="text-xl font-semibold">Sources and review</h2><ul className="mt-4 space-y-3 text-sm leading-6"><li><a className={sourceClass} href="https://www.homedepot.com/c/ah/how-to-measure-a-room-for-furniture/9ba683603be9fa5395fab90156745f05">Home Depot: Measure a room for furniture</a></li><li><a className={sourceClass} href="https://www.ikea.com/in/en/files/pdf/ac/c1/acc1f97f/ikea-measurement-guide.pdf">IKEA: Room measurement guide</a></li></ul><p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">Formula and source context reviewed August 26, 2026.</p></section><section className="rounded-xl bg-primary/10 p-5"><h2 className="text-xl font-semibold">Preliminary planning only</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">A pass does not prove delivery is possible. Hallway turns, stairs, lifts, tilt angles, packaging, removable parts, weight, and safe handling require a separate check.</p><Link className={`${sourceClass} mt-4 inline-flex min-h-11 items-center`} href="/disclaimer">Read estimate limitations</Link></section></aside>
    </article>
  </CalculatorShell>;
}

