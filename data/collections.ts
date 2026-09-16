export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  itemCount: number;
  highlightMotif: string;
}

export const SIGNATURE_COLLECTIONS: CollectionItem[] = [
  {
    id: "kanchipuram-silks",
    title: "Kanchipuram Silks",
    subtitle: "The Sovereign of Indian Weaves",
    badge: "Since 1928",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
    description: "Authentic double-warp mulberry silk with pure gold zari borders, hand-interlocked with the legendary Korvai technique.",
    itemCount: 142,
    highlightMotif: "Temple Gopuram & Annapakshi",
  },
  {
    id: "bridal-collection",
    title: "Bridal Collection",
    subtitle: "The Imperial Trousseau",
    badge: "Haute Couture",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    description: "Heirloom wedding sarees created to be passed down through generations. Masterpieces woven with 24K gold dipped silver threads.",
    itemCount: 88,
    highlightMotif: "Shanku, Chakra & Sacred Kalash",
  },
  {
    id: "festive-collection",
    title: "Festive Collection",
    subtitle: "Celebrations in Pure Luster",
    badge: "Diwali & Pongal Edit",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
    description: "Vibrant jewel tones harmonized with feather-light silk drape, crafted for joyous auspicious celebrations and royal festivities.",
    itemCount: 96,
    highlightMotif: "Jasmine Moggu & Floral Jaal",
  },
  {
    id: "contemporary-sarees",
    title: "Contemporary Sarees",
    subtitle: "Modern Drapes, Ancestral Soul",
    badge: "Runway & Galas",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop",
    description: "Subtle champagne hues, metallic tissue organza, and minimalist borders crafted for modern cocktail galas and global red carpets.",
    itemCount: 64,
    highlightMotif: "Abstract Lotus & Geometric Zari",
  },
  {
    id: "varalakshmi-collection",
    title: "Varalakshmi Collection",
    subtitle: "Sacred Temple Weaves & Grace",
    badge: "Devotional Heritage",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    description: "Traditional nine-yard (Madisar) and six-yard masterworks blessed with auspicious temple border motifs and pure silver zari.",
    itemCount: 54,
    highlightMotif: "Mayil (Peacock) & Rudraksha",
  },
  {
    id: "sona-chandi-collection",
    title: "Sona Chandi Collection",
    subtitle: "Dual Luster: Gold & Silver Symphony",
    badge: "Rare Masterpieces",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
    description: "An intricate weave of alternating 24K gold and pure silver warp threads, recreating the celestial balance of sun and moon.",
    itemCount: 38,
    highlightMotif: "Ganga-Jamuna Borders & Meenakari",
  },
];
