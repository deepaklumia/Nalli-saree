"use client";

import React from "react";
import { LuxuryProvider } from "@/context/LuxuryContext";
import { Navbar } from "@/components/navigation/Navbar";
import { CartDrawer } from "@/components/navigation/CartDrawer";
import { WishlistDrawer } from "@/components/navigation/WishlistDrawer";
import { SearchModal } from "@/components/navigation/SearchModal";
import { HeroSection } from "@/components/hero/HeroSection";
import { HeritageTimeline } from "@/components/heritage/HeritageTimeline";
import { SignatureCollections } from "@/components/collections/SignatureCollections";
import { CraftsmanshipProcess } from "@/components/craftsmanship/CraftsmanshipProcess";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { FabricInspectorModal } from "@/components/products/FabricInspectorModal";
import { QuickShopModal } from "@/components/products/QuickShopModal";
import { WeddingEdit } from "@/components/campaign/WeddingEdit";
import { GlobalPresenceMap } from "@/components/global/GlobalPresenceMap";
import { HeritageStories } from "@/components/testimonials/HeritageStories";
import { SareeJournal } from "@/components/journal/SareeJournal";
import { StoreLocatorBooking } from "@/components/concierge/StoreLocatorBooking";
import { AppointmentModal } from "@/components/concierge/AppointmentModal";
import { HeritageClub } from "@/components/newsletter/HeritageClub";
import { LuxuryFooter } from "@/components/footer/LuxuryFooter";

export default function Home() {
  return (
    <LuxuryProvider>
      <div className="relative min-h-screen bg-[#F8F4ED] text-[#111111] overflow-x-clip selection:bg-[#5A0E1A] selection:text-[#D4AF37]">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: Heritage Story with Interactive Timeline (1928 - Today) */}
        <HeritageTimeline />

        {/* Section 2: Signature Collections (Kanchipuram, Bridal, Festive, Contemporary, Varalakshmi, Sona Chandi) */}
        <SignatureCollections />

        {/* Section 3: Craftsmanship Experience (Silk Sourcing, Hand Weaving, Zari, Motifs, Silk Mark) */}
        <CraftsmanshipProcess />

        {/* Section 4: Featured Products Showcase (Filters, 10x Macro Weave Inspection, Drape Preview, Bag) */}
        <FeaturedProducts />

        {/* Section 5: Wedding & Festive Edit (Editorial Campaign) */}
        <WeddingEdit />

        {/* Section 6: Global Presence (Interactive World Map with Flagship Markers) */}
        <GlobalPresenceMap />

        {/* Section 7: Customer Testimonials & Heirloom Chronicles */}
        <HeritageStories />

        {/* Section 8: Journal & Stories (The Saree Gazette) */}
        <SareeJournal />

        {/* Section 9: Private Client Store Experience & Salons */}
        <StoreLocatorBooking />

        {/* Section 10: VIP Newsletter / Heritage Club */}
        <HeritageClub />

        {/* Luxury Footer */}
        <LuxuryFooter />

        {/* Interactive Drawers & Modals */}
        <CartDrawer />
        <WishlistDrawer />
        <SearchModal />
        <FabricInspectorModal />
        <QuickShopModal />
        <AppointmentModal />
      </div>
    </LuxuryProvider>
  );
}
