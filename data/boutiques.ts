export interface Boutique {
  id: string;
  city: string;
  country: string;
  name: string;
  tagline: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  isFlagship?: boolean;
  latitude: number;
  longitude: number;
  services: string[];
}

export const GLOBAL_BOUTIQUES: Boutique[] = [
  {
    id: "chennai-flagship",
    city: "Chennai",
    country: "India",
    name: "The Original Panagal Park Flagship (Est. 1928)",
    tagline: "The Sanctum of South Indian Silk Heritage",
    address: "No. 9, Nageswaran Road, Panagal Park, T. Nagar, Chennai - 600017",
    phone: "+91 44 2434 4115",
    hours: "10:00 AM – 9:00 PM (Open 7 Days)",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    isFlagship: true,
    latitude: 13.0418,
    longitude: 80.2341,
    services: ["Private Bridal Salon", "Archival Masterpiece Vault", "Zari Certification Lab", "Custom Blouse Atelier"],
  },
  {
    id: "delhi-flagship",
    city: "New Delhi",
    country: "India",
    name: "South Extension Heritage Boutique",
    tagline: "Imperial Silks in the National Capital",
    address: "E-10, South Extension Part II, New Delhi - 110049",
    phone: "+91 11 4164 1928",
    hours: "10:30 AM – 8:30 PM",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    isFlagship: true,
    latitude: 28.5684,
    longitude: 77.2215,
    services: ["North Indian Wedding Concierge", "Private Draping Masterclass", "VIP Trousseau Suite"],
  },
  {
    id: "mumbai-kalaghoda",
    city: "Mumbai",
    country: "India",
    name: "Kala Ghoda Arts & Heritage Pavilion",
    tagline: "Bridging Colonial Architecture & Dravidian Silk",
    address: "Heritage District, Near Jehangir Art Gallery, Fort, Mumbai - 400001",
    phone: "+91 22 2288 1928",
    hours: "11:00 AM – 8:00 PM",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
    isFlagship: false,
    latitude: 18.9288,
    longitude: 72.8317,
    services: ["Celebrity Stylist Appointments", "High-Fashion Drapes", "Curated Tissue Silks"],
  },
  {
    id: "bengaluru-indiranagar",
    city: "Bengaluru",
    country: "India",
    name: "100 Feet Road Luxury Flagship",
    tagline: "Contemporary Opulence & Garden City Elegance",
    address: "744, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru - 560038",
    phone: "+91 80 4123 1928",
    hours: "10:30 AM – 9:00 PM",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop",
    isFlagship: false,
    latitude: 12.9716,
    longitude: 77.6412,
    services: ["Modern Saree Consultations", "Express Stitching", "Festive Hampers"],
  },
  {
    id: "london-mayfair",
    city: "London",
    country: "United Kingdom",
    name: "London Flagship Maison",
    tagline: "South Asian Haute Couture in the Heart of Mayfair",
    address: "42 South Audley Street, Mayfair, London W1K 2PS",
    phone: "+44 20 7499 1928",
    hours: "10:00 AM – 6:30 PM (Mon-Sat)",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    isFlagship: true,
    latitude: 51.5074,
    longitude: -0.1278,
    services: ["International Bridal Draping", "Worldwide Insured Express Delivery", "Private Champagne Appointments"],
  },
  {
    id: "singapore-serangoon",
    city: "Singapore",
    country: "Singapore",
    name: "Serangoon Heritage Galleria",
    tagline: "Southeast Asia's Premier Indian Silk Destination",
    address: "102 Serangoon Road, Little India, Singapore 218007",
    phone: "+65 6297 1928",
    hours: "10:30 AM – 8:30 PM",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    isFlagship: false,
    latitude: 1.3087,
    longitude: 103.8524,
    services: ["ASEAN Free Express Delivery", "Bridal Trousseau Curation", "Tax-Free Shopping Concierge"],
  },
  {
    id: "usa-dallas",
    city: "Dallas & San Jose",
    country: "United States",
    name: "North America Bridal Suite",
    tagline: "Bringing Chennai's Masterpieces to American Brides",
    address: "9454 N MacArthur Blvd, Irving, TX 75063",
    phone: "+1 972 555 1928",
    hours: "11:00 AM – 7:30 PM",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
    isFlagship: false,
    latitude: 32.814,
    longitude: -96.9489,
    services: ["USA Nationwide Fedex Overnight", "Virtual Live Video Saree Showcase", "Bridal Party Coordination"],
  },
];
