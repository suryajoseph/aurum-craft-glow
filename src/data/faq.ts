export type FaqItem = { question: string; answer: string; category: string };

export const faq: FaqItem[] = [
  {
    category: "Manufacturing Process",
    question: "What is your typical manufacturing turnaround?",
    answer:
      "For a custom one-off, 3–5 weeks from CAD approval. For bulk runs, lead times are quoted per project but typically range 6–10 weeks from sign-off.",
  },
  {
    category: "Manufacturing Process",
    question: "Do you work with materials I supply?",
    answer:
      "Yes. We accept client-supplied gold, gemstones and findings with full chain-of-custody documentation. Assay results are shared before and after production.",
  },
  {
    category: "Custom Orders",
    question: "What is the minimum order for a custom piece?",
    answer:
      "There is no minimum — we produce single-unit commissions for private clients as well as runs of tens of thousands for retail partners.",
  },
  {
    category: "Custom Orders",
    question: "Can you replicate a piece from a photograph?",
    answer:
      "Yes, provided the design is not protected by an existing trademark or copyright. We will request written confirmation of rights before commencing.",
  },
  {
    category: "Delivery Timeline",
    question: "Do you ship internationally?",
    answer:
      "We ship insured worldwide via Brinks and Ferrari Group. Transit times vary by destination; customs and duties are the buyer's responsibility unless otherwise agreed.",
  },
  {
    category: "Gold Purity",
    question: "What gold purities do you offer?",
    answer:
      "We hallmark in 916 (22k), 750 (18k), 585 (14k) and 375 (9k). All pieces carry the BIS hallmark and a unique HUID number for traceability.",
  },
  {
    category: "Gold Purity",
    question: "How do you verify metal purity?",
    answer:
      "Every melt is assayed by XRF before and after casting. Independent third-party verification is available on request for an additional fee.",
  },
  {
    category: "Repair Services",
    question: "Do you repair pieces you did not manufacture?",
    answer:
      "Yes. Our restoration bench works on heirloom, vintage and contemporary pieces from any maker, including signed antique work.",
  },
  {
    category: "Bulk Orders",
    question: "Do you offer dedicated production lines for retail partners?",
    answer:
      "Yes. Partners with annual volumes above 5,000 units typically receive a dedicated line, account manager and per-SKU quality dossier.",
  },
  {
    category: "Bulk Orders",
    question: "Can you white-label without any Aurum marking?",
    answer:
      "Absolutely. NDAs are standard. Your hallmark, your boxes, your paperwork — no Aurum signature appears unless requested.",
  },
];