export interface CraftStage {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  artisanQuote: string;
}

export const CRAFTSMANSHIP_STAGES: CraftStage[] = [
  {
    step: "01",
    number: "Phase I",
    title: "Pure Mulberry Silk Sourcing",
    subtitle: "Grade 4A+ Twisted Filaments",
    description: "Every Nalli Kanchipuram saree begins with Grade 4A+ mulberry silk cocoons cultivated in South India. Twisted into robust 3-ply yarn (Muru Muru), this high-density silk provides the legendary durability and weight that can withstand 100 years of wear without tearing.",
    details: [
      "3-ply twisted silk warp (high tensile resilience)",
      "Naturally degummed and washed in temple tank waters",
      "Dyed using eco-friendly, fade-resistant colorants",
    ],
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    artisanQuote: "The silk must feel alive in the hand before it even touches the loom.",
  },
  {
    step: "02",
    number: "Phase II",
    title: "24K Pure Tested Gold Zari",
    subtitle: "Silver Core Electroplated in Sovereign Gold",
    description: "Our zari is crafted using the ancient Surat and Varanasi method: pure silver thread flattened over a fine red silk core, then electroplated with 24-karat pure gold. This metallurgical authenticity ensures the zari does not blacken or oxidize over decades.",
    details: [
      "98.5% pure silver substrate core",
      "Electroplated with 0.5% sovereign 24-karat gold",
      "Tested with certified chemical burn analysis in our laboratory",
    ],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
    artisanQuote: "Gold and silver do not age; they merely acquire the dignity of an heirloom.",
  },
  {
    step: "03",
    number: "Phase III",
    title: "The Sacred Korvai Weaving Technique",
    subtitle: "Three Shuttles, Two Master Weavers, One Saree",
    description: "Korvai is the ultimate test of a handloom virtuoso. The border and the body are woven with distinct shuttles and interlocked with a sawtooth 'Petni' seam. It requires two weavers sitting side by side, coordinating pedal rhythm and shuttle throws in perfect harmony.",
    details: [
      "Triple-shuttle simultaneous interlocking",
      "Zero structural compromise: border never tears from body",
      "Takes between 28 to 45 days to complete one single bridal saree",
    ],
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop",
    artisanQuote: "Two hearts, four hands, moving to the rhythmic clatter of cedar wood.",
  },
  {
    step: "04",
    number: "Phase IV",
    title: "Temple Motifs & Sacred Geometry",
    subtitle: "Annapakshi, Mayil, Rudraksha & Gopuram",
    description: "Every motif woven into a Nalli saree has an ancestral meaning rooted in Dravidian temple architecture. The mythical Annapakshi bird represents divine discernment; the Mayil peacock celebrates beauty; the Temple Gopuram connects the earthly to the eternal.",
    details: [
      "Etched onto traditional hand-punched jacquard cards",
      "Intricate Meenakari colored thread inlays within zari motifs",
      "Pallu designs featuring up to 10,000 individually counted threads",
    ],
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
    artisanQuote: "We do not weave cloth; we weave stories carved in granite centuries ago.",
  },
  {
    step: "05",
    number: "Phase V",
    title: "Silk Mark & Archival Quality Inspection",
    subtitle: "The 32-Point Seal of Royalty",
    description: "Before being folded into our signature crimson heirloom box with gold tissue and neem leaves, each saree undergoes 32 meticulous checks: zari purity verification, tensile warp density, dye fastness, and official Silk Mark certification by the Silk Board of India.",
    details: [
      "Govt of India Silk Mark authenticating 100% natural silk",
      "Official metallurgical certificate of Zari purity included",
      "Archival acid-free tissue and scented cedar packaging",
    ],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
    artisanQuote: "When a bride opens the crimson box, she should smell purity and heritage.",
  },
];
