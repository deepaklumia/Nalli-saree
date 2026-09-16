"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";
import { PRODUCTS } from "@/data/products";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, formatPrice, addToCart, setActiveInspectProduct } = useLuxury();
  const [searchTerm, setSearchTerm] = useState("");

  if (!isSearchOpen) return null;

  const quickTags = [
    "Kanchipuram Bridal",
    "24K Gold Zari",
    "Korvai Handloom",
    "Sona Chandi",
    "Temple Gopuram",
    "Tissue Brocade",
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.colorName.toLowerCase().includes(q) ||
      p.motif.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.weavingTechnique.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-start p-4 sm:p-8 animate-in fade-in duration-300">
      <div className="max-w-4xl w-full mx-auto bg-[#FAF7F2] border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Search Header */}
        <div className="p-6 bg-[#3A070F] text-[#F8F4ED] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 pr-4">
            <Search className="w-5 h-5 text-[#D4AF37]" />
            <input
              type="text"
              autoFocus
              placeholder="Search silk sarees, weaves, motifs (e.g. Korvai, Peacock, Crimson)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-sm sm:text-base text-[#F8F4ED] placeholder-[#E8D9B5]/50 focus:outline-none tracking-wide"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-[#E8D9B5] hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-6 py-3 bg-[#E8D9B5]/20 border-b border-[#D4AF37]/20 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-neutral-500 uppercase tracking-widest text-[10px] whitespace-nowrap font-medium">
            Trending Weaves:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag.split(" ")[0])}
              className="px-2.5 py-1 bg-white border border-[#D4AF37]/30 text-[#3A070F] text-[11px] hover:bg-[#5A0E1A] hover:text-[#E8D9B5] transition-colors whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
              {searchTerm ? `Found ${filteredProducts.length} heirlooms` : "Curated Masterpieces"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#D4AF37]/25 p-3 shadow-sm hover:border-[#D4AF37] hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden mb-3">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.badge && (
                      <span className="absolute top-2 left-2 bg-[#5A0E1A] text-[#E8D9B5] text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium border border-[#D4AF37]/40">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#3A070F] group-hover:text-[#5A0E1A] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                    {product.motif}
                  </p>
                  <p className="text-xs font-bold text-[#111111] mt-1">
                    {formatPrice(product)}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveInspectProduct(product);
                      setIsSearchOpen(false);
                    }}
                    className="flex-1 py-1.5 border border-[#5A0E1A] text-[#5A0E1A] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#5A0E1A] hover:text-[#E8D9B5] transition-colors"
                  >
                    Inspect Weave
                  </button>
                  <button
                    onClick={() => {
                      addToCart(product, "unstitched");
                      setIsSearchOpen(false);
                    }}
                    className="px-3 py-1.5 bg-[#5A0E1A] text-[#E8D9B5] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#3A070F] transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
