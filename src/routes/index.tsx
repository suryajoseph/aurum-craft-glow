import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { gallery } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum Craft Studio — Master Jewellery Manufacturing" },
      {
        name: "description",
        content:
          "Premier jewellery manufacturing atelier. Bespoke production, CAD design, master stone setting and bulk gold for global houses and private collectors.",
      },
      { property: "og:title", content: "Aurum Craft Studio — Master Jewellery Manufacturing" },
      {
        property: "og:description",
        content:
          "Thirty years of uncompromising craft. From single commissions to runs of 50,000 — every gram refined.",
      },
    ],
  }),
  component: Home,
});

const heroImage =
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2000&q=80";

function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredGallery = gallery.slice(0, 5);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] flex items-end overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Master goldsmith working at the bench"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
        </div>
        <div className="container-prose relative z-10 pb-20 md:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-primary/70" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-primary">
                Established {company.established}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
              Where metallurgy becomes <em className="italic gold-gradient-text">legacy</em>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {company.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-[var(--gold-soft)] transition-colors"
              >
                <span className="size-1.5 rounded-full bg-primary-foreground" />
                Begin a Commission
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/15 text-[11px] font-semibold uppercase tracking-[0.22em] hover:border-primary hover:text-primary transition-colors"
              >
                View Portfolio <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="py-24 md:py-32 border-b border-border/40">
        <div className="container-prose grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={`${company.yearsExperience}+ years of mastery`}
              title={
                <>
                  Thirty years of <em className="italic font-light">precision</em>
                  <br /> at your service.
                </>
              }
              description="Based in the heart of the heritage jewellery district, our workshop combines traditional bench technique with advanced CAD/CAM engineering — at scale, without compromise."
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1 hover:border-primary"
            >
              Read our story <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border">
            {company.stats.map((s) => (
              <div key={s.label} className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">{s.value}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Why Aurum"
            title="Quiet luxury. Audited rigour."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
            {company.whyChooseUs.map((item, i) => (
              <div key={item.title} className="bg-card p-10 group">
                <div className="text-[10px] font-mono text-primary mb-6">
                  0{i + 1} /
                </div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Manufacturing Expertise"
              title="Comprehensive technical solutions"
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground border-b border-border pb-1 hover:text-primary hover:border-primary transition-colors w-fit"
            >
              Explore all services <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {featuredServices.map((svc, i) => (
              <Link
                key={svc.slug}
                to="/services"
                className="group block"
              >
                <div className="h-px w-full bg-border group-hover:bg-primary/60 transition-colors mb-7" />
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                  0{i + 1} — {svc.title.split(" ")[0]}
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS HIGHLIGHTS */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="container-prose grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Workflow"
              title={
                <>
                  The path from <em className="italic font-light">concept</em>
                  <br /> to carbon.
                </>
              }
              description="Seven measured stages. Each one signed off before we move forward."
            />
            <Link
              to="/process"
              className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1"
            >
              See the full process <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="lg:col-span-7 space-y-10">
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.number} className="flex gap-8">
                <div className="font-display text-3xl text-primary/40 w-12 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading eyebrow="Recent Works" title="Excellence in execution." />
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground border-b border-border pb-1 hover:text-primary hover:border-primary transition-colors w-fit"
            >
              Full portfolio <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4">
            <PortfolioTile item={featuredGallery[0]} className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" />
            <PortfolioTile item={featuredGallery[1]} />
            <PortfolioTile item={featuredGallery[2]} />
            <PortfolioTile item={featuredGallery[3]} className="md:col-span-2 md:aspect-[2/1]" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="container-prose">
          <SectionHeading
            align="center"
            eyebrow="Voices"
            title="Trusted by the houses you trust."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {featuredTestimonials.map((t) => (
              <figure key={t.id} className="bg-card p-10 flex flex-col">
                <div className="text-primary font-display text-5xl leading-none mb-6">“</div>
                <blockquote className="font-display text-xl italic leading-snug text-foreground/90 flex-grow text-balance">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/60">
                  <div className="text-sm text-foreground">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    {t.role} · {t.company}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary border-b border-primary/40 pb-1"
            >
              Read more accounts <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 60%)",
          }}
        />
        <div className="container-prose relative text-center">
          <h2 className="font-display text-5xl md:text-7xl text-balance max-w-3xl mx-auto leading-[1.05]">
            Let's create something <em className="italic gold-gradient-text">extraordinary</em>.
          </h2>
          <p className="mt-6 text-base text-muted-foreground max-w-xl mx-auto">
            From a single commission to a global collection — speak with a master technician about
            your next project.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              Send an Enquiry
            </Link>
            <a
              href={company.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/15 text-[11px] font-semibold uppercase tracking-[0.22em] hover:border-primary hover:text-primary"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-16 border-t border-border/50 bg-card">
        <div className="container-prose grid md:grid-cols-3 gap-10">
          <ContactBlock icon={<Phone size={16} />} label="Telephone" value={company.contact.phone} />
          <ContactBlock icon={<Mail size={16} />} label="Atelier" value={company.contact.email} />
          <ContactBlock
            icon={<MessageCircle size={16} />}
            label="WhatsApp"
            value={company.contact.whatsapp}
            href={company.contact.whatsappLink}
          />
        </div>
      </section>
    </>
  );
}

function PortfolioTile({
  item,
  className = "",
}: {
  item: (typeof gallery)[number];
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-card aspect-square ${className}`}>
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
        <div className="text-[10px] uppercase tracking-[0.22em] text-primary mb-1">
          {item.category}
        </div>
        <div className="font-display text-lg text-foreground">{item.title}</div>
      </div>
    </div>
  );
}

function ContactBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-1 size-10 border border-primary/30 flex items-center justify-center text-primary">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
        <div className="font-display text-lg text-foreground mt-1">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}
