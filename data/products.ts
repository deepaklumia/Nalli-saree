export interface Product {
  id: string;
  name: string;
  subtitle: string;
  collection: "Kanchipuram" | "Bridal" | "Festive" | "Contemporary" | "Varalakshmi" | "Sona Chandi";
  priceINR: number;
  priceUSD: number;
  priceGBP: number;
  priceAED: number;
  badge?: string;
  colorName: string;
  colorHex: string;
  zariGrade: string;
  silkType: string;
  weavingTechnique: string;
  weightGrams: number;
  motif: string;
  origin: string;
  images: string[];
  textureZoomImage: string;
  description: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "nalli-01",
    name: "Aadheenam Royal Crimson Kanchipuram",
    subtitle: "Pure 3-Ply Silk with Tested 24K Gold Zari Korvai Border",
    collection: "Bridal",
    priceINR: 148500,
    priceUSD: 1790,
    priceGBP: 1420,
    priceAED: 6580,
    badge: "Imperial Heirloom",
    colorName: "Kumkum Crimson & Antique Gold",
    colorHex: "#5A0E1A",
    zariGrade: "Certified 24K Gold Dipped Silver Zari",
    silkType: "100% Pure Mulberry Silk (Silk Mark Certified)",
    weavingTechnique: "Authentic Double-Pedal Korvai Handloom with Petni Joint",
    weightGrams: 920,
    motif: "Gopuram Temple Spire, Mayil (Peacock) & Annapakshi",
    origin: "Kanchipuram, Tamil Nadu",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    ],
    textureZoomImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop",
    description: "Handcrafted over 38 days by a fourth-generation master weaver in Kanchipuram. The Aadheenam Crimson saree embodies regal south Indian bridal grandeur with interlocking solid borders and an opulent grand pallu woven in 24K gold dipped zari.",
    rating: 5.0,
    reviewsCount: 38,
    inStock: true,
  },
  {
    id: "nalli-02",
    name: "Mayura Peacock Teal Sona-Chandi",
    subtitle: "Ganga-Jamuna Dual Luster Silk with Silver & Gold Floral Jaal",
    collection: "Sona Chandi",
    priceINR: 124000,
    priceUSD: 1490,
    priceGBP: 1180,
    priceAED: 5490,
    badge: "Rare Dual Weave",
    colorName: "Peacock Teal & Sterling Sheen",
    colorHex: "#0D3B43",
    zariGrade: "Real Silver & Electroplated 24K Gold Zari",
    silkType: "Heavy Murshidabad Twisted Mulberry Silk",
    weavingTechnique: "Kadwa Interlocking Weave with Meenakari Highlights",
    weightGrams: 860,
    motif: "Dancing Peacocks, Creeping Vines & Paisley Florals",
    origin: "Kanchipuram & Varanasi Atelier",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    ],
    textureZoomImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1600&auto=format&fit=crop",
    description: "An ode to the timeless harmony of sun and moon. Handwoven with alternate tracks of pure silver zari and 24K gold threads creating an ethereal celestial shimmer under chandelier lighting.",
    rating: 4.9,
    reviewsCount: 24,
    inStock: true,
  },
  {
    id: "nalli-03",
    name: "Kalyana Mangalyam Temple Emerald",
    subtitle: "Sacred Shanku-Chakra Motif with Heavy Temple Border",
    collection: "Varalakshmi",
    priceINR: 136000,
    priceUSD: 1640,
    priceGBP: 1290,
    priceAED: 6020,
    badge: "Sacred Temple Edit",
    colorName: "Deep Forest Emerald & Warm Gold",
    colorHex: "#0B3826",
    zariGrade: "Tested Grade-1 Heritage Gold Zari",
    silkType: "100% Pure Mulberry Silk",
    weavingTechnique: "3-Ply Traditional Korvai Handloom",
    weightGrams: 900,
    motif: "Shanku (Conch), Chakra (Discus) & Rudraksha",
    origin: "Kanchipuram, Tamil Nadu",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    ],
    textureZoomImage: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1600&auto=format&fit=crop",
    description: "Blessed with temple sacred motifs. The emerald body contrasts against an ancestral vermilion border stitched by three separate shuttles on hand-operated wooden looms.",
    rating: 5.0,
    reviewsCount: 46,
    inStock: true,
  },
  {
    id: "nalli-04",
    name: "Rajkumari Ivory & Champagne Gold Brocade",
    subtitle: "Imperial Tissue Silk with Floral Jangla & Muted Antique Border",
    collection: "Contemporary",
    priceINR: 112000,
    priceUSD: 1350,
    priceGBP: 1070,
    priceAED: 4970,
    badge: "Modern Masterpiece",
    colorName: "Ivory Pearl & Champagne Gold",
    colorHex: "#EFE8DC",
    zariGrade: "High-Luster Antique Champagne Zari",
    silkType: "Tissue Silk Infused with Fine Silk Warps",
    weavingTechnique: "Fine Jacquard Tissue Hand-Drape",
    weightGrams: 740,
    motif: "Stylized Lotus, Tree of Life & Delicate Florals",
    origin: "Bengaluru & Kanchi Design Studio",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    ],
    textureZoomImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop",
    description: "Understated modern luxury tailored for evening galas, high-fashion receptions, and contemporary brides seeking whisper-soft drape with regal presence.",
    rating: 4.8,
    reviewsCount: 19,
    inStock: true,
  },
  {
    id: "nalli-05",
    name: "Maharani Royal Violet & Mustard Gold Pattu",
    subtitle: "Heavy Archival Revival with Korvai Rudraksha Rows",
    collection: "Kanchipuram",
    priceINR: 155000,
    priceUSD: 1870,
    priceGBP: 1480,
    priceAED: 6870,
    badge: "Archival Reissue 1952",
    colorName: "Imperial Violet & Mustard Gold",
    colorHex: "#371A46",
    zariGrade: "24K Tested Gold Zari (Half-Fine Certified)",
    silkType: "100% Pure Kanchipuram Mulberry Silk",
    weavingTechnique: "Petni Interlocked Korvai Weave",
    weightGrams: 960,
    motif: "Vanki (Armlet), Rudraksha & Thazhampoo Rekku",
    origin: "Kanchipuram, Tamil Nadu",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop",
    ],
    textureZoomImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
    description: "An authentic reissue of the legendary 1952 design commissioned for the royal families of Travancore and Mysore. Deep violet body with high-contrast sunlit mustard borders.",
    rating: 5.0,
    reviewsCount: 31,
    inStock: true,
  },
  {
    id: "nalli-06",
    name: "Sundari Rani Pink & Antique Gold Brocade",
    subtitle: "Traditional Muhurtham Saree with Solid Gold Zari Pallu",
    collection: "Festive",
    priceINR: 98000,
    priceUSD: 1180,
    priceGBP: 935,
    priceAED: 4340,
    badge: "Festive Splendor",
    colorName: "Rani Gulabi Pink & Pure Gold",
    colorHex: "#A01B4B",
    zariGrade: "Authentic Gold Zari with Silk Core",
    silkType: "100% Pure South Indian Silk",
    weavingTechnique: "Traditional Korvai with Rich Zari Buttas",
    weightGrams: 820,
    motif: "Malli Moggu (Jasmine Bud) & Kamalam (Lotus)",
    origin: "Kanchipuram, Tamil Nadu",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    ],
    textureZoomImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop",
    description: "Captivating vibrant magenta-pink that radiates warmth. Adorned with delicate jasmine bud zari buttas scattered across the body and a solid gold-sheet pallu.",
    rating: 4.9,
    reviewsCount: 52,
    inStock: true,
  }
];
