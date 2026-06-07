import { createFileRoute } from "@tanstack/react-router";
import { testimonials } from "@/data/testimonials";
import { PageBanner } from "@/components/ui-custom/PageBanner";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Voices — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Client testimonials, partner accounts and success stories from three decades of master jewellery manufacturing.",
      },
      { property: "og:title", content: "Voices — Aurum Craft Studio" },
      { property: "og:description", content: "Client testimonials and partner accounts." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const clients = testimonials.filter((t) => t.type === "Client");
  const partners = testimonials.filter((t) => t.type === "Partner");
  const stories = testimonials.filter((t) => t.type === "Success Story");

  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "Voices" }]}
        eyebrow="Trust, in their words"
        title="Voices from the houses we serve."
        description="A small selection of accounts from partners and private clients. Many of our finest relationships remain confidential."
      />

      <Group title="Partner Maisons" items={partners} />
      <Group title="Private Clients" items={clients} dark />
      <Group title="Success Stories" items={stories} />

      {/* Trust building */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="container-prose text-center">
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-6">
            Trust, audited
          </div>
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-tight text-balance">
            Every relationship is built on the quietest currency: <em className="italic font-light">consistency</em>.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-4xl mx-auto">
            {[
              { v: "14", l: "Maison partners" },
              { v: "9 yr", l: "Avg. partnership" },
              { v: "99.9%", l: "Hallmark accuracy" },
              { v: "0", l: "Public clients" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-8">
                <div className="font-display text-3xl text-primary mb-2">{s.v}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Group({
  title,
  items,
  dark,
}: {
  title: string;
  items: typeof testimonials;
  dark?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section className={`py-20 md:py-28 ${dark ? "bg-card border-y border-border/40" : ""}`}>
      <div className="container-prose">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-10 bg-primary/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary">{title}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {items.map((t) => (
            <figure key={t.id} className={`p-10 ${dark ? "bg-card" : "bg-background"}`}>
              <div className="text-primary font-display text-5xl leading-none mb-6">“</div>
              <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-foreground/90 text-balance">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/60">
                <div className="font-display text-lg">{t.name}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}