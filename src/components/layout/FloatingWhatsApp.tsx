import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function FloatingWhatsApp() {
  return (
    <a
      href={company.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire via WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 pl-4 pr-5 py-3 bg-primary text-primary-foreground rounded-full shadow-2xl shadow-black/40 hover:scale-105 transition-transform"
    >
      <MessageCircle size={18} strokeWidth={2.4} />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] hidden sm:inline">
        Enquire
      </span>
    </a>
  );
}