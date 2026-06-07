import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { faq } from "@/data/faq";
import { PageBanner } from "@/components/ui-custom/PageBanner";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Answers on manufacturing, custom orders, delivery timelines, gold purity, repairs, and bulk production.",
      },
      { property: "og:title", content: "FAQ — Aurum Craft Studio" },
      { property: "og:description", content: "Manufacturing, custom orders, gold purity, repairs and more." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const categories = useMemo(() => Array.from(new Set(faq.map((f) => f.category))), []);
  const [open, setOpen] = useState<string | null>(faq[0]?.question ?? null);

  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
        eyebrow="Questions, answered"
        title="Everything we are asked, often."
        description="Can't find what you need? Our atelier director responds personally to every direct enquiry."
      />

      <section className="py-20 md:py-28">
        <div className="container-prose max-w-4xl">
          {categories.map((cat) => (
            <div key={cat} className="mb-16">
              <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-6">{cat}</div>
              <div className="divide-y divide-border border-y border-border">
                {faq
                  .filter((f) => f.category === cat)
                  .map((f) => {
                    const isOpen = open === f.question;
                    return (
                      <div key={f.question}>
                        <button
                          onClick={() => setOpen(isOpen ? null : f.question)}
                          className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                        >
                          <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                            {f.question}
                          </span>
                          <span className="mt-1 size-8 border border-border flex items-center justify-center text-primary flex-shrink-0">
                            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pb-8 pr-12 text-muted-foreground leading-relaxed animate-fade-up">
                            {f.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}

          <div className="mt-16 text-center border-t border-border/60 pt-12">
            <p className="font-display text-2xl md:text-3xl mb-6 text-balance">
              Still have a question?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              Contact the Atelier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}