"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ZoomIn, ShoppingBag, Eye, Sparkles, Filter } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useLuxury } from "@/context/LuxuryContext";

export const FeaturedProducts: React.FC = () => {
  const {
    formatPrice,
    addToCart,
    wishlist,
    toggleWishlist,
    setActiveInspectProduct,
    setQuickShopProduct,
  } = useLuxury();

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = [
    { label: "All Masterpieces", value: "All" },
    { label: "Imperial Bridal", value: "Bridal" },
    { label: "Kanchipuram Pattu", value: "Kanchipuram" },
    { label: "Sona-Chandi Weaves", value: "Sona Chandi" },
    { label: "Temple Varalakshmi", value: "Varalakshmi" },
    { label: "Contemporary Brocade", value: "Contemporary" },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.collection === activeFilter);

  return (
    <section id="featured" className="py-24 sm:py-32 bg-[#F8F4ED] relative">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A0E1A] font-semibold">
              The Sovereign Showcase
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A070F] tracking-tight">
            Curated Silk Heirlooms
          </h2>
          <p className="mt-4 text-neutral-600 font-serif text-lg italic">
            Each drape is an authentic testament to ancient South Indian temple aesthetics, hand-interlocked with 24-karat tested zari.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center justify-center overflow-x-auto pb-4 mb-12 gap-2 sm:gap-3">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 whitespace-nowrap border ${
                  isActive
                    ? "bg-[#5A0E1A] text-[#E8D9B5] border-[#D4AF37] shadow-md shadow-[#5A0E1A]/20"
                    : "bg-white text-neutral-600 border-neutral-300 hover:border-[#D4AF37] hover:text-[#5A0E1A]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => {
            const isSaved = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group bg-white border border-[#D4AF37]/30 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:border-gold-glow relative"
              >
                {/* Image Container with Floating Actions */}
                <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className="bg-[#3A070F] text-[#E8D9B5] text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold border border-[#D4AF37]/50 shadow-md">
                        {product.badge}
                      </span>
                    )}
                    <span className="bg-white/90 backdrop-blur-sm text-[#3A070F] text-[9px] uppercase tracking-wider px-2 py-0.5 font-bold border border-neutral-200">
                      Silk Mark
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:text-[#5A0E1A] shadow-md transition-all hover:scale-110"
                    aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isSaved ? "fill-[#5A0E1A] text-[#5A0E1A]" : ""
                      }`}
                    />
                  </button>

                  {/* Hover Overlay with Quick Action Buttons */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2 z-10">
                    <button
                      onClick={() => setActiveInspectProduct(product)}
                      className="w-full py-2.5 bg-[#FAF7F2] hover:bg-white text-[#3A070F] text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-lg transition-transform"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>10x Inspect Weave</span>
                    </button>

                    <button
                      onClick={() => setQuickShopProduct(product)}
                      className="w-full py-2.5 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-lg transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Quick Drape Preview</span>
                    </button>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-6 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#5A0E1A] font-semibold mb-1">
                      <span>{product.origin}</span>
                      <span>{product.weightGrams}g Pure Silk</span>
                    </div>

                    <h3 className="font-cinzel text-lg font-bold text-[#3A070F] group-hover:text-[#5A0E1A] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-neutral-500 font-serif italic mt-1 line-clamp-1">
                      {product.subtitle}
                    </p>

                    <div className="mt-2 text-[11px] text-neutral-600 bg-[#F8F4ED] p-2 border border-[#D4AF37]/20 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                      <span className="line-clamp-1">{product.motif}</span>
                    </div>
                  </div>

                  {/* Price & Primary CTA */}
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                        Investment Value
                      </span>
                      <span className="font-sans text-base font-bold text-[#111111]">
                        {formatPrice(product)}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, "unstitched")}
                      className="px-4 py-2.5 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5 transition-all group-hover:shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
