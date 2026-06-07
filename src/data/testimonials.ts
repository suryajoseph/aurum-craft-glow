export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  type: "Client" | "Partner" | "Success Story";
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Aurum has been our quiet manufacturing partner for nine years. Their consistency at scale is the reason we sleep at night.",
    name: "Hélène Vauclair",
    role: "Production Director",
    company: "Maison V. (Paris)",
    type: "Partner",
  },
  {
    id: "t2",
    quote:
      "We sent them a sketch on a napkin and received a CAD render in 72 hours. Six weeks later, the bridal suite was on a Vogue cover.",
    name: "Anika Rao",
    role: "Creative Director",
    company: "Rao Atelier",
    type: "Client",
  },
  {
    id: "t3",
    quote:
      "Their stone-setters work at a level I have only seen in Geneva. Pavé tolerances are sub-micron.",
    name: "Tomás Becker",
    role: "Master Watchmaker",
    company: "Becker Horology",
    type: "Partner",
  },
  {
    id: "t4",
    quote:
      "Twelve thousand units, zero rejects, on time. That is not a manufacturing partner — that is a guarantee.",
    name: "Priscilla Onyemechi",
    role: "VP Operations",
    company: "Lumen Retail Group",
    type: "Success Story",
  },
  {
    id: "t5",
    quote:
      "They restored my grandmother's 1920s emerald brooch as if it had never aged. I cried when I opened the box.",
    name: "Margaret Holloway",
    role: "Private Client",
    company: "London",
    type: "Client",
  },
  {
    id: "t6",
    quote:
      "We've worked with five manufacturing houses. None match Aurum's chain-of-custody documentation.",
    name: "David Mercer",
    role: "Head of Sourcing",
    company: "Mercer & Hale",
    type: "Partner",
  },
];