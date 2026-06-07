import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`flex items-center gap-4 mb-5 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">{title}</h2>
      {description && (
        <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}