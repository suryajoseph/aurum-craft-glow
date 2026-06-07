export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "custom-manufacturing",
    title: "Custom Jewellery Manufacturing",
    description:
      "Bespoke pieces engineered from your sketches to a finished, hallmarked masterwork.",
    detail:
      "We translate your concept into CAD, prototype it in wax or resin, cast in 18k/22k gold or platinum, and hand-finish to your house standard.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "gold-production",
    title: "Gold Jewellery Production",
    description: "BIS-hallmarked 916/750/585 production at scale, without losing the artisan's hand.",
    detail:
      "Lost-wax casting, die-striking, and CNC milling for high-volume gold collections — rings, chains, bangles, pendants.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "silver-production",
    title: "Silver Jewellery Production",
    description: "Sterling 925 and Argentium production with mirror polishing and oxidised finishes.",
    detail:
      "Cast, hand-fabricated and electroformed silver pieces for designer collections and bridge-luxury brands.",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "jewellery-repair",
    title: "Jewellery Repair",
    description: "Restoration of heirlooms, vintage pieces, and contemporary work to original condition.",
    detail:
      "Re-tipping, retipping, shank replacement, chain repair, clasp work, and full restoration of antique and signed pieces.",
    image:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "polishing",
    title: "Jewellery Polishing",
    description: "Multi-stage polishing, rhodium plating, and PVD finishing for catalogue-grade luster.",
    detail:
      "Tripoli, rouge, ultrasonic and steam cleaning, plus electroplating in rhodium, yellow and rose gold.",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "stone-setting",
    title: "Stone Setting",
    description: "Pavé, micro-pavé, bezel, channel, prong, flush and invisible settings by master setters.",
    detail:
      "Calibrated stone work from melée to centre stones — VVS diamonds, rubies, emeralds, sapphires, calibrated colour matching.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cad-design",
    title: "CAD Design Services",
    description: "Rhino, Matrix and ZBrush sculpting for production-ready digital masters.",
    detail:
      "Concept-to-STL workflows, parametric ring sizing, hyper-realistic rendering for client approvals.",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bulk-manufacturing",
    title: "Bulk Manufacturing",
    description: "Production runs from 100 to 50,000 units with consistent hallmarking and QC.",
    detail:
      "Dedicated production lines, batch tracking, and per-SKU quality dossiers for retail-chain partners.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bridal-production",
    title: "Bridal Jewellery Production",
    description: "Heritage-grade bridal sets, engagement rings and ceremonial regalia.",
    detail:
      "Necklace-earring-bangle suites, mangalsutras, kundan, polki and contemporary bridal manufactured to order.",
    image:
      "https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?auto=format&fit=crop&w=1200&q=80",
  },
];