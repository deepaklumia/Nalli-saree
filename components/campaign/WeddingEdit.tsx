"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Heart, Crown, Award } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useLuxury } from "@/context/LuxuryContext";

export const WeddingEdit: React.FC = () => {
  const { addToCart, setActiveInspectProduct } = useLuxury();
  const bridalHeroProduct = PRODUCTS[0]; // Aadheenam Royal Crimson

  return (
    <section id="wedding" className="py-24 sm:py-32 bg-[#2A040A] text-[#F8F4ED] relative overflow-hidden">
      
      {/* Subtle Temple Arch Motif Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The 2026 Haute Couture Campaign</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            The Muhurtham Bridal Edit
          </h2>
          <p className="mt-4 text-[#E8D9B5] font-serif text-lg sm:text-xl italic">
            Woven for the moment two lives unite under sacred fire. Heirlooms blessed with temple prayers and pure 24K gold zari.
          </p>
        </div>

        {/* Hero Campaign Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Massive Full-Bleed Campaign Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] w-full border-2 border-[#D4AF37]/60 shadow-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1400&auto=format&fit=crop"
                alt="Nalli Imperial Bridal Campaign"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Editorial Quote */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#3A070F]/85 backdrop-blur-md border border-[#D4AF37]/40 text-xs">
                <p className="font-serif italic text-base text-[#F8F4ED]">
                  &ldquo;A South Indian bride without a Nalli Kanchipuram is like a temple sanctum without a flame.&rdquo;
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mt-1">
                  — The Bridal Anthology, Vogue India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Campaign Story & Featured Trousseau Piece */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                The Sovereign Masterpiece
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
                {bridalHeroProduct.name}
              </h3>
              <p className="text-[#E8D9B5] font-serif text-base sm:text-lg leading-relaxed">
                Handcrafted over 38 days in our ancient Kanchipuram loom quarter. This bridal saree features a solid gold-sheet pallu depicting the celestial wedding procession of Shiva and Parvati.
              </p>
            </div>

            {/* Features Highlight */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-[#D4AF37]/30 py-6 text-xs">
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Loom Duration</span>
                <span className="font-bold text-white text-sm">38 Days Hand-Woven</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Zari Specification</span>
                <span className="font-bold text-[#D4AF37] text-sm">Tested 24K Sovereign Gold</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Weft Interlock</span>
                <span className="font-bold text-white text-sm">Triple-Shuttle Korvai</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Trousseau Box</span>
                <span className="font-bold text-white text-sm">Velvet Heirloom Case</span>
              </div>
            </div>

            {/* Campaign Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(bridalHeroProduct, "bespoke")}
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#E8D9B5] text-[#3A070F] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <span>Reserve with Bespoke Bridal Blouse</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveInspectProduct(bridalHeroProduct)}
                className="w-full py-3.5 bg-transparent hover:bg-white/10 text-[#E8D9B5] border border-[#D4AF37]/50 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                View 10x Metallurgical Macro Weave
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-neutral-400">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Includes Private Bridal Virtual Concierge Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
