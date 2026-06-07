export const company = {
  name: "Aurum Craft Studio",
  shortName: "Aurum Craft",
  tagline: "Where metallurgy becomes legacy.",
  established: 1994,
  yearsExperience: 30,
  description:
    "A premier jewellery manufacturing atelier serving global brands, independent designers, and private collectors with uncompromising craftsmanship and CAD-led precision.",
  story:
    "Founded in 1994 by master goldsmith Edoardo Marenghi, Aurum Craft Studio began as a single bench in the heart of the jewellery district. Three decades on, we operate a 24,000 sq. ft. workshop that quietly produces some of the finest haute joaillerie in circulation — for houses you know, and for collectors you don't.",
  mission:
    "To preserve the soul of traditional goldsmithing while engineering the future of precision manufacturing for the world's most discerning maisons.",
  vision:
    "A workshop where every gram of gold leaves more refined than it arrived — and every client relationship outlasts the piece itself.",
  values: [
    { title: "Mastery", description: "Bench expertise refined across generations." },
    { title: "Discretion", description: "White-label trust. Your designs, our hands, no signature." },
    { title: "Precision", description: "Micron-level CAD tolerances on every casting." },
    { title: "Integrity", description: "Hallmarked metals, traceable stones, audited purity." },
  ],
  founderMessage: {
    name: "Edoardo Marenghi",
    role: "Founder & Master Goldsmith",
    quote:
      "We do not chase trends. We refine the techniques our craft has trusted for centuries, and engineer the new ones it will trust tomorrow. Every piece that leaves this atelier carries that promise.",
  },
  stats: [
    { value: "30+", label: "Years Expertise" },
    { value: "500K", label: "Pieces Produced" },
    { value: "200+", label: "Master Artisans" },
    { value: "99.9%", label: "Purity Guarantee" },
  ],
  whyChooseUs: [
    {
      title: "In-house from sketch to setting",
      description:
        "CAD, casting, polishing, stone-setting and QC — all under one roof. No third-party blind spots.",
    },
    {
      title: "Audited metal & stone provenance",
      description: "BIS hallmarked gold, Kimberley-certified diamonds, full chain-of-custody on request.",
    },
    {
      title: "White-label discretion",
      description: "We work behind the names you trust. NDAs are standard, signatures are yours.",
    },
    {
      title: "Production scale without compromise",
      description: "From one-off commissions to runs of 50,000 units, the same hands oversee both.",
    },
  ],
  achievements: [
    "Manufacturing partner to 14 LVMH-tier houses (NDA)",
    "BIS 916 / 750 / 585 hallmarking license",
    "Responsible Jewellery Council member",
    "ISO 9001:2015 certified production",
    "Featured in Vogue Joaillerie 2022, 2024",
  ],
  team: [
    { name: "Edoardo Marenghi", role: "Founder & Master Goldsmith" },
    { name: "Sofia Renaud", role: "Head of CAD & Design Engineering" },
    { name: "Karim El-Sayed", role: "Director of Production" },
    { name: "Aria Volkov", role: "Master Stone Setter" },
    { name: "Priya Anand", role: "Quality & Hallmarking Lead" },
    { name: "Mateo Ferreira", role: "Client Atelier Director" },
  ],
  timeline: [
    { year: "1994", title: "Single bench, single goldsmith", description: "Edoardo opens a 200 sq. ft. workshop." },
    { year: "2001", title: "First B2B contract", description: "Begin white-label production for a Parisian house." },
    { year: "2008", title: "CAD studio established", description: "Adopt digital sculpting alongside hand techniques." },
    { year: "2014", title: "20,000 sq. ft. atelier", description: "Move to the current heritage-district workshop." },
    { year: "2019", title: "RJC certification", description: "Full chain-of-custody auditing." },
    { year: "2024", title: "Three decades of craft", description: "200+ artisans, 14 maison partnerships." },
  ],
  contact: {
    address: "12 Heritage Quarter, Gold District, London EC1N 8PN",
    phone: "+44 (0) 20 7946 0122",
    whatsapp: "+44 20 7946 0122",
    whatsappLink: "https://wa.me/442079460122",
    email: "atelier@aurumcraft.studio",
    hours: [
      { day: "Monday – Friday", time: "9:00 — 18:00" },
      { day: "Saturday", time: "10:00 — 16:00 (by appointment)" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  social: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Pinterest", url: "https://pinterest.com" },
  ],
} as const;

export type Company = typeof company;