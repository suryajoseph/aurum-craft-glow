import { createFileRoute, Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import { PageBanner } from "@/components/ui-custom/PageBanner";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Three decades of master jewellery manufacturing. Our story, mission, leadership and workshop.",
      },
      { property: "og:title", content: "The Atelier — Aurum Craft Studio" },
      { property: "og:description", content: "Our story, mission and workshop." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "The Atelier" }]}
        eyebrow="Since 1994"
        title="A workshop, not a brand."
        description={company.story}
      />

      {/* MISSION / VISION */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-10 md:p-14">
            <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-6">Mission</div>
            <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
              {company.mission}
            </p>
          </div>
          <div className="bg-background p-10 md:p-14">
            <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-6">Vision</div>
            <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
              {company.vision}
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="container-prose">
          <SectionHeading eyebrow="Core values" title="What we will not compromise." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {company.values.map((v, i) => (
              <div key={v.title}>
                <div className="text-[10px] font-mono text-primary mb-4">0{i + 1}</div>
                <h3 className="font-display text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-24 md:py-32">
        <div className="container-prose max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-8">
            A message from the founder
          </div>
          <blockquote className="font-display italic text-3xl md:text-4xl leading-snug text-balance">
            &ldquo;{company.founderMessage.quote}&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-10 bg-primary/60" />
            <div>
              <div className="font-display text-lg">{company.founderMessage.name}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                {company.founderMessage.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="container-prose">
          <SectionHeading eyebrow="The hands" title="A team of master artisans." />
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {company.team.map((m) => (
              <div key={m.name} className="bg-card p-8">
                <div className="size-14 mb-6 rounded-full border border-primary/40 flex items-center justify-center font-display text-primary text-lg">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="font-display text-xl">{m.name}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2">
                  {m.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-card">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
              alt="The Aurum workshop"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The workshop"
              title={
                <>
                  24,000 sq. ft. of <em className="italic font-light">quiet</em> obsession.
                </>
              }
              description="Ten production zones, three CAD studios, a master setting bench, an assay lab and a private client atelier — all under one roof."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {["CAD Studio", "Lost-wax Casting", "Stone Setting", "Polishing & Plating", "Assay Lab", "Client Atelier"].map(
                (z) => (
                  <li key={z} className="border border-border/60 px-4 py-3 text-[11px] uppercase tracking-[0.18em]">
                    {z}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="container-prose">
          <SectionHeading eyebrow="Timeline" title="Three decades, measured." />
          <div className="mt-16 relative">
            <div className="absolute left-[7.5rem] top-2 bottom-2 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {company.timeline.map((t) => (
                <div key={t.year} className="md:grid md:grid-cols-[8rem_1fr] md:gap-8 items-start relative">
                  <div className="font-display text-3xl text-primary md:text-right md:pr-8">
                    {t.year}
                  </div>
                  <div className="mt-2 md:mt-0 md:pl-10 relative">
                    <div className="hidden md:block absolute -left-[6px] top-3 size-3 rounded-full bg-primary ring-4 ring-card" />
                    <h4 className="font-display text-xl mb-2">{t.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <SectionHeading eyebrow="Recognition" title="Quietly accumulated." />
          <ul className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6">
            {company.achievements.map((a, i) => (
              <li key={a} className="flex gap-5 border-t border-border/60 pt-5">
                <span className="font-mono text-[10px] text-primary mt-1">0{i + 1}</span>
                <span className="text-base text-foreground/90">{a}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1"
            >
              Speak with our team <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}