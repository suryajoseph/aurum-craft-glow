import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageBanner({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative pt-32 pb-20 border-b border-border/50 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 0%, var(--gold) 0%, transparent 55%)",
        }}
      />
      <div className="container-prose relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground/70">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight size={11} className="text-muted-foreground/50" />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <span className="h-px w-10 bg-primary/60" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance max-w-4xl animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}