"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, Heart, Star, Sparkles, Scissors, Check } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";

export const QuickShopModal: React.FC = () => {
  const {
    quickShopProduct,
    setQuickShopProduct,
    formatPrice,
    addToCart,
    wishlist,
    toggleWishlist,
    currency,
  } = useLuxury();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [blouseChoice, setBlouseChoice] = useState<"unstitched" | "bespoke" | "zardosi">("unstitched");

  if (!quickShopProduct) return null;

  const isSaved = wishlist.includes(quickShopProduct.id);

  const handleAdd = () => {
    addToCart(quickShopProduct, blouseChoice);
    setQuickShopProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] border border-[#D4AF37]/50 shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#3A070F] text-[#F8F4ED] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Quick Drape Suite
            </span>
          </div>
          <button
            onClick={() => setQuickShopProduct(null)}
            className="text-[#E8D9B5] hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Gallery Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[3/4] w-full bg-neutral-900 border border-[#D4AF37]/40 overflow-hidden shadow-lg">
              <Image
                src={quickShopProduct.images[selectedImageIndex] || quickShopProduct.images[0]}
                alt={quickShopProduct.name}
                fill
                className="object-cover"
              />
              {quickShopProduct.badge && (
                <span className="absolute top-3 left-3 bg-[#5A0E1A] text-[#E8D9B5] text-[10px] uppercase tracking-wider px-3 py-1 font-semibold border border-[#D4AF37]/50">
                  {quickShopProduct.badge}
                </span>
              )}
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-3">
              {quickShopProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-20 border-2 overflow-hidden ${
                    selectedImageIndex === idx ? "border-[#D4AF37]" : "border-neutral-300 opacity-60"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details & Customization Column */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-amber-600 text-xs mb-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-neutral-500 font-serif">
                  ({quickShopProduct.reviewsCount} Connoisseur Reviews)
                </span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#3A070F]">
                {quickShopProduct.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#5A0E1A] font-semibold mt-0.5">
                {quickShopProduct.colorName}
              </p>
              <p className="text-xl font-bold text-neutral-900 mt-2">
                {formatPrice(quickShopProduct)}
              </p>
            </div>

            <p className="text-neutral-600 font-serif text-sm leading-relaxed border-t border-b border-neutral-200 py-3">
              {quickShopProduct.description}
            </p>

            {/* Blouse Atelier Customization */}
            <div className="space-y-2.5">
              <label className="text-[11px] uppercase tracking-widest text-[#3A070F] font-bold flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#D4AF37]" />
                Select Blouse Tailoring Option:
              </label>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setBlouseChoice("unstitched")}
                  className={`w-full p-3 border text-left text-xs flex items-center justify-between transition-all ${
                    blouseChoice === "unstitched"
                      ? "border-[#5A0E1A] bg-[#5A0E1A]/10 font-semibold"
                      : "border-neutral-300 hover:border-neutral-400 bg-white"
                  }`}
                >
                  <div>
                    <span className="block text-neutral-800">Matching Pure Silk Fabric (Unstitched)</span>
                    <span className="text-[10px] text-neutral-500">80 cm included with saree</span>
                  </div>
                  <span className="text-[11px] text-neutral-600 uppercase font-medium">Included</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBlouseChoice("bespoke")}
                  className={`w-full p-3 border text-left text-xs flex items-center justify-between transition-all ${
                    blouseChoice === "bespoke"
                      ? "border-[#5A0E1A] bg-[#5A0E1A]/10 font-semibold"
                      : "border-neutral-300 hover:border-neutral-400 bg-white"
                  }`}
                >
                  <div>
                    <span className="block text-neutral-800">Made-to-Measure Bespoke Stitching</span>
                    <span className="text-[10px] text-neutral-500">Our concierge contacts you for custom bridal measurements</span>
                  </div>
                  <span className="text-[11px] text-[#5A0E1A] font-semibold">+₹4,500</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBlouseChoice("zardosi")}
                  className={`w-full p-3 border text-left text-xs flex items-center justify-between transition-all ${
                    blouseChoice === "zardosi"
                      ? "border-[#5A0E1A] bg-[#5A0E1A]/10 font-semibold"
                      : "border-neutral-300 hover:border-neutral-400 bg-white"
                  }`}
                >
                  <div>
                    <span className="block text-neutral-800">Imperial Hand-Embroidered 24K Zardosi</span>
                    <span className="text-[10px] text-neutral-500">Intricate zari border embroidery to match the pallu</span>
                  </div>
                  <span className="text-[11px] text-[#5A0E1A] font-semibold">+₹12,500</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors border border-[#D4AF37]/50 shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Add to Shopping Bag</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickShopProduct.id)}
                className={`p-3.5 border transition-colors ${
                  isSaved
                    ? "border-[#5A0E1A] bg-[#5A0E1A] text-[#D4AF37]"
                    : "border-neutral-300 text-neutral-600 hover:border-neutral-400"
                }`}
                title={isSaved ? "Saved to Wishlist" : "Save to Wishlist"}
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-[#D4AF37]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
