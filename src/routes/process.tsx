import { createFileRoute, Link } from "@tanstack/react-router";
import { processSteps } from "@/data/process";
import { PageBanner } from "@/components/ui-custom/PageBanner";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Seven measured stages from concept to delivery. The Aurum manufacturing workflow.",
      },
      { property: "og:title", content: "Process — Aurum Craft Studio" },
      { property: "og:description", content: "Concept to delivery in seven measured stages." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "Process" }]}
        eyebrow="Manufacturing workflow"
        title="From concept to carbon, in seven measured stages."
        description="Each stage signed off before we move forward. No assumptions, no rework."
      />

      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2 hidden sm:block" />
            <div className="space-y-16 md:space-y-24">
              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={step.number}
                    className={`relative grid sm:grid-cols-[3rem_1fr] md:grid-cols-2 md:gap-16 items-start ${
                      isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Marker column / hidden on md+ */}
                    <div className="sm:flex md:hidden font-display text-3xl text-primary">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className={`md:col-span-1 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div className="hidden md:block font-display text-5xl text-primary/40 mb-4">
                        {step.number}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl mb-4">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {step.description}
                      </p>
                    </div>

                    {/* Spacer image column */}
                    <div className="hidden md:flex items-center justify-center">
                      <div className="relative size-16 rounded-full bg-card border border-primary/40 flex items-center justify-center">
                        <span className="font-mono text-xs text-primary">{step.number}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 text-center border-t border-border/60 pt-16">
            <p className="font-display text-3xl md:text-4xl max-w-2xl mx-auto leading-snug text-balance">
              Begin your project with a brief — we'll respond within 48 hours.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-[var(--gold-soft)]"
            >
              Submit a Brief <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}