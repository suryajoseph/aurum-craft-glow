import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { company } from "@/data/company";
import { PageBanner } from "@/components/ui-custom/PageBanner";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurum Craft Studio" },
      {
        name: "description",
        content:
          "Speak with a master technician about your next commission. Workshop, phone, email and WhatsApp details.",
      },
      { property: "og:title", content: "Contact — Aurum Craft Studio" },
      { property: "og:description", content: "Begin a commission or partnership conversation." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Valid email required").max(255),
  interest: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company") || undefined,
      email: fd.get("email"),
      interest: fd.get("interest"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageBanner
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        eyebrow="Begin a conversation"
        title="Let's create something extraordinary."
        description="Whether you're a designer scaling a collection or a private client commissioning a single piece — the atelier is open."
      />

      <section className="py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="space-y-8">
              <Detail icon={<Phone size={16} />} label="Telephone" value={company.contact.phone} />
              <Detail icon={<Mail size={16} />} label="Atelier" value={company.contact.email} />
              <Detail
                icon={<MessageCircle size={16} />}
                label="WhatsApp"
                value={company.contact.whatsapp}
                href={company.contact.whatsappLink}
              />
              <Detail icon={<MapPin size={16} />} label="Workshop" value={company.contact.address} />
            </div>

            <div className="mt-12 border-t border-border/60 pt-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={16} className="text-primary" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-primary">Atelier Hours</span>
              </div>
              <ul className="space-y-3">
                {company.contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm border-b border-border/40 pb-3">
                    <span className="text-foreground">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 aspect-[5/3] bg-card border border-border/60 flex items-center justify-center relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, var(--gold) 0%, transparent 50%)",
                }}
              />
              <div className="relative text-center">
                <MapPin size={24} className="mx-auto text-primary mb-3" />
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Map placeholder
                </div>
                <div className="font-display text-lg mt-2">{company.contact.address}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border/60 p-8 md:p-12">
            <h2 className="font-display text-3xl mb-2">Send an enquiry</h2>
            <p className="text-sm text-muted-foreground mb-10">
              We respond personally within 48 hours.
            </p>

            {status === "sent" ? (
              <div className="border border-primary/40 bg-primary/5 p-8 text-center">
                <div className="font-display text-2xl text-primary mb-3">Thank you.</div>
                <p className="text-sm text-muted-foreground">
                  Your message has reached the atelier. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field name="name" label="Name" placeholder="Full name" error={errors.name} />
                  <Field name="company" label="Company / House" placeholder="Optional" error={errors.company} />
                </div>
                <Field name="email" type="email" label="Email" placeholder="you@example.com" error={errors.email} />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Interested in
                  </label>
                  <select
                    name="interest"
                    defaultValue="Custom Manufacturing"
                    className="w-full bg-background border border-border px-4 py-3.5 text-sm focus:border-primary focus:outline-none"
                  >
                    <option>Custom Manufacturing</option>
                    <option>Bulk Production</option>
                    <option>CAD Design</option>
                    <option>Stone Setting</option>
                    <option>Repair & Restoration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project"
                    className="w-full bg-background border border-border px-4 py-3.5 text-sm focus:border-primary focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-[var(--gold-soft)] transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
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
  const body = (
    <div className="flex items-start gap-5">
      <span className="mt-1 size-11 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{label}</div>
        <div className="font-display text-xl mt-1">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
      {body}
    </a>
  ) : (
    body
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-background border border-border px-4 py-3.5 text-sm focus:border-primary focus:outline-none"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}