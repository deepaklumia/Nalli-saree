export interface JournalArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "journal-01",
    category: "Silk Encyclopedia",
    readTime: "6 Min Read",
    title: "The Anatomy of a 100-Year Kanchipuram: Preserving Real Gold Zari for Future Daughters",
    excerpt: "Why pure silver-gold zari sarees should never be dry cleaned with chemical solvents, and the ancient art of wrapping drapes in unbleached mul-mul cotton with dried neem leaves.",
    author: "Heritage Preservation Lab, Nalli",
    date: "September 2026",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "journal-02",
    category: "Weaving Artistry",
    readTime: "8 Min Read",
    title: "The Korvai Paradox: Why It Still Requires Two Weavers Sitting Side-by-Side in 2026",
    excerpt: "In a world of fast automated powerlooms, explore why the sacred petni joint connecting contrasting borders to the body remains an impossible feat for mechanical computers.",
    author: "K. Varadarajan, Master Weaver",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "journal-03",
    category: "Bridal Draping",
    readTime: "5 Min Read",
    title: "From M.S. Blue to Royal Crimson: 5 Imperial Color Palettes of South Indian Aristocracy",
    excerpt: "The historical significance of Arakku crimson, Vasantha green, and the iconic peacock shade created specifically for Bharat Ratna M.S. Subbulakshmi in our Panagal Park atelier.",
    author: "Editorial Fashion Desk",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "journal-04",
    category: "Haute Styling",
    readTime: "4 Min Read",
    title: "Modern Red Carpet Drapes: Styling Heavy Temple Zari with Contemporary Corsetry",
    excerpt: "How leading South Asian couture stylists in Mumbai, London, and New York are pairing heritage nine-yard silken weights with architectural bustiers and minimalist emerald chokers.",
    author: "Vogue India Contributor",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop",
  },
];

export interface Testimonial {
  id: string;
  clientName: string;
  generation: string;
  city: string;
  story: string;
  occasion: string;
  sareeDetails: string;
  image: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-01",
    clientName: "Dr. Arundhati Sundar & Meera Sundar",
    generation: "3rd Generation Nalli Bride",
    city: "Chennai & San Francisco",
    story: "My grandmother bought her wedding Kanchipuram from Nalli in 1954. My mother wore Nalli in 1982. When it was my wedding in Lake Como this summer, there was never any doubt. Wearing 24K gold zari that had direct lineage to my ancestors made me feel like an Indian princess in Europe.",
    occasion: "Bespoke Lake Como Wedding",
    sareeDetails: "Aadheenam Royal Crimson & Tested 24K Zari",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t-02",
    clientName: "Priyanka & Gayatri Swaminathan",
    generation: "Mother & Daughter Heirloom",
    city: "London, Mayfair",
    story: "Walking into the London boutique felt like stepping into an art gallery in Milan or Paris, yet smelling of sandalwood and fresh jasmine. The team helped us select three matching tissue drapes for our daughter's royal reception. The zari shine under ballroom chandeliers is unmatched by any luxury couture house in the West.",
    occasion: "Blenheim Palace Reception",
    sareeDetails: "Rajkumari Ivory & Antique Champagne Brocade",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t-03",
    clientName: "Rukmini Varma",
    generation: "Descendant of Royal House of Travancore",
    city: "Bengaluru",
    story: "The weight of pure silk and genuine silver-gold zari is something that cannot be faked. Nalli's revival of the 1950s palace motifs reproduces the exact tactile density and regal dignity that adorned the paintings of Raja Ravi Varma.",
    occasion: "Palace Anniversary Gala",
    sareeDetails: "Maharani Royal Violet & Mustard Gold Pattu",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400&auto=format&fit=crop",
    rating: 5,
  },
];
