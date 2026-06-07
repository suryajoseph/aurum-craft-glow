import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { PageBanner } from "@/components/ui-custom/PageBanner";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Custom jewellery manufacturing, CAD design, stone setting, polishing, bulk gold production, and bridal jewellery — under one master roof.",
      },
      { property: "og:title", content: "Services — Aurum Craft Studio" },
      { property: "og:description", content: "Comprehensive manufacturing services from CAD to delivery." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        eyebrow="What we make"
        title="Manufacturing services for the world's most discerning houses."
        description="Nine integrated disciplines, executed in-house — so quality, timeline and discretion stay under one roof."
      />

      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((svc, i) => (
              <article
                key={svc.slug}
                className="bg-background group relative overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-[10px] font-mono text-primary">
                    {String(i + 1).padStart(2, "0")} /
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed border-t border-border/60 pt-4 mt-auto">
                    {svc.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-display text-3xl md:text-4xl max-w-2xl mx-auto leading-snug text-balance">
              Not seeing what you need? Most of our work begins with a conversation.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-[var(--gold-soft)]"
            >
              Start a Conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}