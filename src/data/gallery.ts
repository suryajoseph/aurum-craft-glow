export type GalleryCategory =
  | "Rings"
  | "Chains"
  | "Necklaces"
  | "Bangles"
  | "Earrings"
  | "Bridal Collections"
  | "Custom Designs";

export const galleryCategories: GalleryCategory[] = [
  "Rings",
  "Chains",
  "Necklaces",
  "Bangles",
  "Earrings",
  "Bridal Collections",
  "Custom Designs",
];

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  metal: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  { id: "g1", title: "Meridian Solitaire", category: "Rings", metal: "Platinum · 1.8ct VVS", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" },
  { id: "g2", title: "Filigree Halo", category: "Rings", metal: "18k Yellow Gold", image: "https://images.unsplash.com/photo-1603561596112-db542a44ec6e?auto=format&fit=crop&w=900&q=80" },
  { id: "g3", title: "Architect Band", category: "Rings", metal: "Platinum · Brushed", image: "https://images.unsplash.com/photo-1591209627562-b73cb1336525?auto=format&fit=crop&w=900&q=80" },
  { id: "g4", title: "Heritage Link", category: "Chains", metal: "22k Gold · Solid", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" },
  { id: "g5", title: "Foxtail Rope", category: "Chains", metal: "18k Rose Gold", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80" },
  { id: "g6", title: "Emerald Heritage", category: "Necklaces", metal: "22k Gold · Emerald · Pearl", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80" },
  { id: "g7", title: "Celestial Drape", category: "Necklaces", metal: "18k Gold · Diamond Pavé", image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?auto=format&fit=crop&w=900&q=80" },
  { id: "g8", title: "Sculptural Cuff", category: "Bangles", metal: "18k Yellow Gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80" },
  { id: "g9", title: "Twin Kada", category: "Bangles", metal: "22k Gold · Hand Engraved", image: "https://images.unsplash.com/photo-1561591180-1a47b87c0cd9?auto=format&fit=crop&w=900&q=80" },
  { id: "g10", title: "Mughal Jhumka", category: "Earrings", metal: "22k Gold · Polki", image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80" },
  { id: "g11", title: "Linear Drop", category: "Earrings", metal: "18k Gold · Baguette Diamond", image: "https://images.unsplash.com/photo-1635767582909-345b96fe79a2?auto=format&fit=crop&w=900&q=80" },
  { id: "g12", title: "Maharani Suite", category: "Bridal Collections", metal: "22k Gold · Uncut Diamond · Ruby", image: "https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?auto=format&fit=crop&w=900&q=80" },
  { id: "g13", title: "Modern Bridal Set", category: "Bridal Collections", metal: "Platinum · Round Brilliant", image: "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?auto=format&fit=crop&w=900&q=80" },
  { id: "g14", title: "Architectural Pendant", category: "Custom Designs", metal: "18k Gold · Black Onyx", image: "https://images.unsplash.com/photo-1620391019aa-2c0a3f2d5b2c?auto=format&fit=crop&w=900&q=80" },
  { id: "g15", title: "Signature Crest", category: "Custom Designs", metal: "Platinum · Enamel", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80" },
];