import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { gallery, galleryCategories, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { PageBanner } from "@/components/ui-custom/PageBanner";
import { X } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Selected works from the Aurum Craft Studio bench — rings, chains, bangles, bridal collections and bespoke commissions.",
      },
      { property: "og:title", content: "Portfolio — Aurum Craft Studio" },
      { property: "og:description", content: "A measured selection of recent works." },
    ],
  }),
  component: PortfolioPage,
});

type Filter = GalleryCategory | "All";

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const filters: Filter[] = ["All", ...galleryCategories];

  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
        eyebrow="Selected works"
        title="Excellence, made visible."
        description="A measured selection of recent commissions. Many of our finest works remain under NDA."
      />

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
            {filters.map((f) => {
              const isActive = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] border transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className="group relative overflow-hidden bg-card aspect-[4/5] text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary mb-1">
                    {item.category}
                  </div>
                  <div className="font-display text-xl text-foreground">{item.title}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{item.metal}</div>
                </div>
              </button>
            ))}
          </div>

          {items.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">No pieces in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 size-11 border border-border text-foreground flex items-center justify-center hover:border-primary hover:text-primary"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div
            className="max-w-5xl w-full grid md:grid-cols-[2fr_1fr] gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-4">
                {active.category}
              </div>
              <h3 className="font-display text-4xl mb-4">{active.title}</h3>
              <div className="text-sm text-muted-foreground">{active.metal}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}