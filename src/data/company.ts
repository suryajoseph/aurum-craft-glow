export const company = {
  name: "Aurum Jewellery Works",
  shortName: "Aurum",
  tagline: "Quality jewellery, made to order.",
  established: 2005,
  yearsExperience: 20,
  description:
    "A trusted jewellery manufacturing workshop. We make gold and silver jewellery for shops, designers, and individual customers — honest work, fair prices.",
  story:
    "Aurum Jewellery Works started in 2005 as a small family workshop. Today we have a friendly team of skilled craftsmen who make jewellery for local shops, designers, and walk-in customers. We focus on doing simple, good work — on time and on budget.",
  mission:
    "To make beautiful, well-made jewellery for everyday people at a fair price.",
  vision:
    "A workshop our customers trust and come back to.",
  values: [
    { title: "Quality", description: "Careful work on every piece, big or small." },
    { title: "Honesty", description: "Clear pricing and no hidden charges." },
    { title: "On time", description: "We deliver when we say we will." },
    { title: "Trust", description: "Hallmarked gold and genuine stones." },
  ],
  founderMessage: {
    name: "Ravi Kumar",
    role: "Founder",
    quote:
      "We keep it simple — good materials, careful work, and a fair price. That's how we've kept our customers coming back for twenty years.",
  },
  stats: [
    { value: "20+", label: "Years in business" },
    { value: "10K+", label: "Happy customers" },
    { value: "15", label: "Skilled craftsmen" },
    { value: "100%", label: "Hallmarked gold" },
  ],
  whyChooseUs: [
    {
      title: "Everything done in-house",
      description:
        "Design, casting, polishing and stone-setting — all under one roof. No middlemen.",
    },
    {
      title: "Hallmarked gold, genuine stones",
      description: "Every piece is BIS hallmarked. What you pay for is what you get.",
    },
    {
      title: "Custom orders welcome",
      description: "Bring a photo or a sketch — we'll make it for you. Small orders are fine.",
    },
    {
      title: "Fair, transparent pricing",
      description: "Clear quotes upfront. No hidden charges, no surprises.",
    },
  ],
  achievements: [
    "BIS 916 / 750 hallmarking licence",
    "20+ years serving local shops and designers",
    "10,000+ orders completed",
    "Trusted by 50+ retail partners",
  ],
  team: [
    { name: "Ravi Kumar", role: "Founder" },
    { name: "Anita Sharma", role: "Design Lead" },
    { name: "Suresh Patel", role: "Workshop Manager" },
    { name: "Meena Iyer", role: "Stone Setter" },
    { name: "Arjun Mehta", role: "Quality Check" },
    { name: "Lakshmi Nair", role: "Customer Care" },
  ],
  timeline: [
    { year: "2005", title: "The workshop opens", description: "Ravi starts with two craftsmen and a small bench." },
    { year: "2010", title: "First retail partners", description: "Begin making jewellery for local shops." },
    { year: "2015", title: "New workshop", description: "Move to a larger space to handle more orders." },
    { year: "2018", title: "BIS hallmark licence", description: "Officially certified for 916 and 750 gold." },
    { year: "2022", title: "Custom orders online", description: "Launch a simple way to order online." },
    { year: "2025", title: "20 years on", description: "A team of 15, and thousands of happy customers." },
  ],
  contact: {
    address: "24 Market Street, Jewellers Lane, Chennai 600001",
    phone: "+91 98400 12345",
    whatsapp: "+91 98400 12345",
    whatsappLink: "https://wa.me/919840012345",
    email: "hello@aurumjewellery.in",
    hours: [
      { day: "Monday – Saturday", time: "10:00 — 19:00" },
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