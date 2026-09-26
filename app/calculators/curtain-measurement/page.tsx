import Link from "next/link";
import { CalculatorShell } from "@/components/calculators/calculator-shell";
import { CurtainMeasurementCalculator } from "@/components/calculators/decor-calculators";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Curtain Measurement Calculator", description: "Calculate curtain rod width, fabric fullness, ready-made panel count, and finished drop from your window measurements.", path: "/calculators/curtain-measurement" });
const sourceClass = "font-semibold text-primary underline decoration-primary/35 underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function CurtainMeasurementPage() {
  return <CalculatorShell category="Window decoration calculator" title="Curtain Measurement Calculator" description="Plan an outside-mount rod, total curtain fullness, whole ready-made panel count, and finished drop using metric or imperial measurements." path="/calculators/curtain-measurement">
    <CurtainMeasurementCalculator />
    <article className="mt-14 grid gap-10 rounded-2xl bg-card-section p-5 sm:mt-16 sm:p-8 lg:p-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:gap-12">
      <div className="min-w-0 space-y-10">
        <section>
          <p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">Ready-made panel estimate</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Curtain measurement formula</h2>
          <p className="mt-4 leading-7 text-muted-foreground">An outside-mount rod extends beyond both sides of the window. Fullness multiplies that complete rod width, and the panel count rounds up so the combined packaged width meets the target.</p>
          <div className="mt-6 space-y-3 rounded-xl bg-card p-5 font-mono text-sm leading-6 shadow-sm"><p>Rod width = window width + (side extension × 2)</p><p>Total fabric width = rod width × fullness</p><p>Panels = round total width ÷ one panel width up</p></div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Measure the installed position</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Use the full rod length for panel width and measure the finished drop from the actual rod or ring position. Header type, rings, hems, pattern matching, fabric shrinkage, radiators, and floor clearance can change the final order.</p>
          <p className="mt-4"><Link className={sourceClass} href="/guides/measuring-curtains">Read the curtain measuring guide</Link>.</p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold tracking-tight">Turn panel count into a purchase quantity</h2>
          <p className="mt-4 leading-7 text-muted-foreground">For a chosen 210 cm window with 25 cm of rod extension on each side, the rod is 260 cm wide. At 2.5× fullness, the target fabric width is 650 cm. If one panel is 130 cm wide, five individual panels meet that target exactly. These are example inputs, not a standard window size.</p>
          <p className="mt-4 leading-7 text-muted-foreground">If the selected product is sold as a pair, five panels means buying three two-panel packages, leaving one extra panel. Check whether an odd number of hanging panels suits the opening, then compare the actual package dimensions and price. The calculator reports panels, not packages.</p>
        </section>
      </div>
      <aside className="space-y-5">
        <section className="rounded-xl bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Source and review</h2>
          <a className={`${sourceClass} mt-4 inline-flex`} href="https://www.ikea.com/us/en/files/pdf/45/80/4580665c/betydlig_racka_hugad_oct_2022.pdf">IKEA: Measure your window</a>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">IKEA illustrates at least 6 in of rod extension on each side and 2× or 2.5× fullness. The calculator&apos;s 23 cm / 9 in extension is an editable planning example, not IKEA&apos;s specified minimum. The 1.5× and 3× choices are editable scenarios; check them against your chosen product. Source checked September 26, 2026.</p>
        </section>
        <section className="rounded-xl bg-primary/10 p-5">
          <h2 className="text-xl font-semibold">Check the product</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Packaged width and length conventions differ. Confirm whether dimensions describe one panel or a pair and follow the rod and curtain manufacturer instructions.</p>
        </section>
      </aside>
    </article>
  </CalculatorShell>;
}
