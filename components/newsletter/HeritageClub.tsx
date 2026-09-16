"use client";

import React, { useState } from "react";
import { Sparkles, Mail, CheckCircle2, Gift } from "lucide-react";
import confetti from "canvas-confetti";

export const HeritageClub: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#D4AF37", "#5A0E1A", "#FFFFFF"],
    });
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Frame */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#3A070F] text-[#F8F4ED] border-2 border-[#D4AF37]/50 shadow-2xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

          {/* Crest */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <Gift className="w-4 h-4 text-[#D4AF37]" />
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-2">
            The Private Circle of Connoisseurs
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            Become Part of the Nalli Legacy
          </h2>

          <p className="mt-4 text-[#E8D9B5] font-serif text-base sm:text-lg italic max-w-xl mx-auto leading-relaxed">
            Members enjoy private previews of archival weaving revivals, invitations to our annual Sona-Chandi exhibition, and our complimentary Mulberry Silk Swatch Experience Box.
          </p>

          {/* Membership Benefits Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto my-8 pt-6 border-t border-[#D4AF37]/25 text-left text-xs">
            <div className="space-y-1">
              <span className="text-[#D4AF37] font-bold block">01 / Archival Access</span>
              <span className="text-neutral-300 text-[11px]">Early access to limited wedding releases</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#D4AF37] font-bold block">02 / Silk Swatch Box</span>
              <span className="text-neutral-300 text-[11px]">Complimentary tactile silk texture kit</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#D4AF37] font-bold block">03 / Personal Stylist</span>
              <span className="text-neutral-300 text-[11px]">Dedicated wedding trousseau concierge</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#D4AF37] font-bold block">04 / Heritage Gazette</span>
              <span className="text-neutral-300 text-[11px]">Quarterly print journal on silk care</span>
            </div>
          </div>

          {/* Form */}
          {subscribed ? (
            <div className="p-6 bg-[#2A050A] border border-[#D4AF37]/50 max-w-md mx-auto animate-in fade-in space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mx-auto" />
              <h4 className="font-cinzel text-lg font-bold text-white">
                Welcome to the Nalli Legacy
              </h4>
              <p className="text-xs text-[#E8D9B5] font-serif italic">
                Your private welcome invitation and silk swatch kit voucher have been dispatched to {email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="Enter your personal email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 text-xs bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] border border-neutral-300"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E8D9B5] text-[#3A070F] text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-lg whitespace-nowrap"
              >
                Join Connoisseurs
              </button>
            </form>
          )}

          <p className="text-[10px] text-neutral-400 mt-4 uppercase tracking-widest">
            We honor your privacy. Unsubscribe at any time with a single click.
          </p>
        </div>
      </div>
    </section>
  );
};
