"use client";

import React from "react";
import Image from "next/image";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";
import { PRODUCTS } from "@/data/products";

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice,
  } = useLuxury();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-[#FAF7F2] text-[#111111] h-full shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/40 relative z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 bg-[#3A070F] text-[#F8F4ED] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <h2 className="font-cinzel text-xl tracking-wider text-[#F8F4ED]">Curated Heirlooms</h2>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="text-[#E8D9B5] hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20 text-neutral-500 space-y-3">
              <Heart className="w-8 h-8 mx-auto text-neutral-300 stroke-1" />
              <p className="font-serif italic text-lg">No heirlooms saved yet.</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Explore our signature Kanchipuram weaves and tap the heart to save your favorites.
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-4 bg-white border border-[#D4AF37]/20 shadow-sm relative group"
              >
                <div className="w-20 h-28 relative flex-shrink-0 bg-neutral-100 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#3A070F] leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-[#5A0E1A] font-medium tracking-wide mt-0.5">
                      {product.colorName}
                    </p>
                    <p className="text-xs font-bold text-neutral-800 mt-1">
                      {formatPrice(product)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 mt-2 border-t border-neutral-100">
                    <button
                      onClick={() => addToCart(product, "unstitched")}
                      className="flex-1 py-1.5 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#D4AF37]" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="p-1.5 text-neutral-400 hover:text-[#5A0E1A]"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#D4AF37]/30 text-center text-xs text-neutral-500">
          <p className="italic font-serif">
            Saved items remain reserved in your private session.
          </p>
        </div>
      </div>
    </div>
  );
};
