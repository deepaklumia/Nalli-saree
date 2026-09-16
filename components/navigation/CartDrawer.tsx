"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";
import confetti from "canvas-confetti";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotalINR,
    currency,
  } = useLuxury();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = promoApplied ? Math.round(cartSubtotalINR * 0.1) : 0;
  const finalTotalINR = cartSubtotalINR - discountAmount;

  // Convert for selected currency display
  const getDisplayPrice = (inrAmount: number) => {
    switch (currency) {
      case "USD":
        return `$${Math.round(inrAmount / 83).toLocaleString("en-US")}`;
      case "GBP":
        return `£${Math.round(inrAmount / 105).toLocaleString("en-GB")}`;
      case "AED":
        return `AED ${Math.round(inrAmount / 22.5).toLocaleString("en-AE")}`;
      case "INR":
      default:
        return `₹${inrAmount.toLocaleString("en-IN")}`;
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "ROYAL1928" || promoCode.trim().toUpperCase() === "NALLI10") {
      setPromoApplied(true);
    } else {
      alert("Invalid code. Try promotional code 'ROYAL1928' for 10% Heritage Privilege.");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#5A0E1A", "#FAF7F2"],
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="w-full max-w-lg bg-[#FAF7F2] text-[#111111] h-full shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/40 relative z-10 animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-6 bg-[#3A070F] text-[#F8F4ED] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] font-semibold">
                Bespoke Trousseau
              </span>
            </div>
            <h2 className="font-cinzel text-xl tracking-wider text-[#F8F4ED]">Shopping Bag</h2>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderConfirmed(false);
            }}
            className="text-[#E8D9B5] hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Insured Worldwide Shipping Tracker */}
        <div className="bg-[#5A0E1A]/10 border-b border-[#D4AF37]/20 p-3.5 px-6">
          <div className="flex items-center justify-between text-[11px] font-medium text-[#5A0E1A] mb-1.5">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Complimentary Worldwide Insured Delivery
            </span>
            <span className="font-bold text-[#D4AF37]">Unlocked</span>
          </div>
          <div className="w-full bg-[#E8D9B5]/40 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] h-full w-full rounded-full"></div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderConfirmed ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 bg-[#5A0E1A] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-xl border border-[#D4AF37]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl text-[#3A070F] tracking-wide">
                Heritage Order Reserved
              </h3>
              <p className="text-sm text-neutral-600 font-serif italic max-w-sm mx-auto">
                Thank you. Your chosen masterwork has been tagged in our Chennai Panagal Park vault. A senior heritage concierge will contact you shortly to coordinate insured delivery and auspicious timing.
              </p>
              <div className="p-4 bg-white border border-[#D4AF37]/30 text-left text-xs space-y-1 mt-4">
                <p className="font-semibold text-[#5A0E1A]">Order Ref: #NL-1928-HEIRLOOM</p>
                <p className="text-neutral-500">Includes Silk Mark certificate & 24K Tested Zari authentication seal.</p>
              </div>
              <button
                onClick={() => {
                  setOrderConfirmed(false);
                  setIsCartOpen(false);
                }}
                className="mt-6 px-6 py-3 bg-[#5A0E1A] text-[#E8D9B5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#3A070F] transition-colors"
              >
                Continue Exploring
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 text-neutral-500 space-y-4">
              <p className="font-serif italic text-lg">Your shopping bag is currently empty.</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Discover modern heirlooms crafted in pure silk.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.blouseOption}`}
                  className="flex gap-4 p-4 bg-white border border-[#D4AF37]/20 shadow-sm relative group hover:border-[#D4AF37]/60 transition-all"
                >
                  <div className="w-20 h-28 relative flex-shrink-0 bg-neutral-100 overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start pr-6">
                        <h4 className="font-serif text-base font-semibold text-[#3A070F] leading-snug">
                          {item.product.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#5A0E1A] font-medium tracking-wide mt-0.5">
                        {item.product.colorName}
                      </p>
                      <div className="inline-block mt-1 bg-[#F8F4ED] px-2 py-0.5 text-[10px] text-neutral-600 border border-[#D4AF37]/30">
                        {item.blouseOption === "unstitched" && "Blouse: Matching Pure Silk (Unstitched)"}
                        {item.blouseOption === "bespoke" && "Blouse: Made-to-Measure Bespoke (+₹4,500)"}
                        {item.blouseOption === "zardosi" && "Blouse: Hand-Embroidered 24K Zardosi (+₹12,500)"}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-100 mt-2">
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 text-neutral-500 hover:text-black"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 text-neutral-500 hover:text-black"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-semibold text-sm text-[#3A070F]">
                        {getDisplayPrice(
                          (item.product.priceINR +
                            (item.blouseOption === "bespoke" ? 4500 : item.blouseOption === "zardosi" ? 12500 : 0)) *
                            item.quantity
                        )}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="absolute top-3 right-3 text-neutral-400 hover:text-[#5A0E1A] p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Promo Code Box */}
              <form onSubmit={handleApplyPromo} className="pt-2 flex gap-2">
                <input
                  type="text"
                  placeholder="Privilege Code (Try ROYAL1928)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-neutral-300 uppercase tracking-wider focus:outline-none focus:border-[#D4AF37] bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#3A070F] text-[#E8D9B5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5A0E1A]"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 10% Heritage Privilege Discount Applied!
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer with Calculations and Checkout */}
        {!orderConfirmed && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#D4AF37]/30 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>{getDisplayPrice(cartSubtotalINR)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Privilege Savings (10%)</span>
                  <span>-{getDisplayPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-600">
                <span>Insured Global Courier</span>
                <span className="text-[#5A0E1A] font-semibold uppercase text-[11px]">Complimentary</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Packaging</span>
                <span className="text-neutral-700">Archival Crimson Box & Silk Mark Seal</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#3A070F] pt-2 border-t border-neutral-200">
                <span>Estimated Total</span>
                <span className="text-lg">{getDisplayPrice(finalTotalINR)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 shadow-lg transition-all border border-[#D4AF37]/50 group"
            >
              {isCheckingOut ? (
                <span>Securing Silk Archive...</span>
              ) : (
                <>
                  <span>Proceed to Private Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>100% Guaranteed Pure Mulberry Silk & 24K Tested Zari</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
