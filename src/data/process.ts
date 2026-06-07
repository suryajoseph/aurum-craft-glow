export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Requirement Discussion",
    description:
      "A detailed brief with our client atelier director — aesthetics, metal purity, gemstone specs, volume, timeline.",
  },
  {
    number: "02",
    title: "Design Planning",
    description: "Hand sketches and reference boards translate the brief into a clear visual direction.",
  },
  {
    number: "03",
    title: "CAD Design",
    description:
      "Rhino and Matrix sculpting produces a digital master with photoreal renders for approval before any metal is cut.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description: "Vacuum casting, hand fabrication or CNC milling, depending on the geometry and run size.",
  },
  {
    number: "05",
    title: "Stone Setting",
    description: "Master setters complete pavé, bezel, prong, and channel work with calibrated stones.",
  },
  {
    number: "06",
    title: "Quality Inspection",
    description:
      "Three-stage QC: dimensional check, metal assay & hallmarking, then final visual against the approved render.",
  },
  {
    number: "07",
    title: "Delivery",
    description: "Insured logistics with full provenance dossier — hallmark certificate, stone grading, photography.",
  },
];