import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";

const quickLinks = [
  { to: "/about", label: "The Atelier" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/testimonials", label: "Voices" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/60 mt-32">
      <div className="container-prose py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="size-7 border border-primary/60 rotate-45 flex items-center justify-center">
                <span className="-rotate-45 font-display text-primary text-xs">A</span>
              </span>
              <span className="font-display text-lg tracking-[0.25em] uppercase">
                {company.shortName}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {company.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-5">Atelier</h5>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-5">Contact</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{company.contact.address}</li>
              <li>{company.contact.phone}</li>
              <li>{company.contact.email}</li>
            </ul>
            <div className="flex gap-6 mt-8">
              {company.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Crafting eternity since {company.established}.</span>
        </div>
      </div>
    </footer>
  );
}