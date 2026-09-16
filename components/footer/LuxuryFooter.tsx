"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Heart, Globe, ArrowUp } from "lucide-react";

export const LuxuryFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A0307] text-[#F8F4ED] border-t-2 border-[#D4AF37]/40 relative overflow-hidden">
      
      {/* Top Heritage Hallmark Banner */}
      <div className="bg-[#2A050A] border-b border-[#D4AF37]/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">100% Pure Silk Mark</p>
              <p className="text-[11px] text-[#E8D9B5]/70">Central Silk Board of India</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">24K Tested Sovereign Zari</p>
              <p className="text-[11px] text-[#E8D9B5]/70">Certified Metallurgical Purity</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Free Worldwide Insured Delivery</p>
              <p className="text-[11px] text-[#E8D9B5]/70">Dispatched via DHL & FedEx Express</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Living Handloom Guild</p>
              <p className="text-[11px] text-[#E8D9B5]/70">5,000+ Master Weaver Families</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Dossier */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] text-[10px] tracking-[0.3em]">ESTD</span>
              <span className="text-[#D4AF37] font-serif text-sm italic font-bold">1928</span>
              <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
            </div>
            <h3 className="font-cinzel text-3xl font-bold tracking-[0.2em] text-white">
              NALLI
            </h3>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#E8D9B5] font-light">
              SILKS • MADRAS • CHENNAI
            </p>
            <p className="text-xs text-neutral-300 font-serif leading-relaxed max-w-sm pt-2">
              Purveyors of royal handwoven Kanchipuram silk sarees and modern heirlooms since 1928. Handcrafted on traditional cedar looms with pure silver and 24K sovereign gold zari.
            </p>
            <div className="pt-2 text-xs text-[#D4AF37]">
              Panagal Park Flagship: No. 9, Nageswaran Road, T. Nagar, Chennai - 600017
            </div>
          </div>

          {/* Column 1: Collections */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-4 border-b border-[#D4AF37]/20 pb-1.5">
              Imperial Weaves
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-light">
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Kanchipuram Silk Sarees</a></li>
              <li><a href="#wedding" className="hover:text-[#D4AF37] transition-colors">The Muhurtham Bridal Edit</a></li>
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Sona Chandi Dual Luster</a></li>
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Temple Varalakshmi Pattu</a></li>
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Tissue Organza Brocades</a></li>
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Traditional 9-Yard Madisar</a></li>
            </ul>
          </div>

          {/* Column 2: Heritage & Experience */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-4 border-b border-[#D4AF37]/20 pb-1.5">
              Heritage & Craft
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-light">
              <li><a href="#heritage" className="hover:text-[#D4AF37] transition-colors">The 1928 Inception Story</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#D4AF37] transition-colors">The Korvai Weaving Guild</a></li>
              <li><a href="#journal" className="hover:text-[#D4AF37] transition-colors">100-Year Silk Care Guide</a></li>
              <li><a href="#boutiques" className="hover:text-[#D4AF37] transition-colors">Global Flagship Boutiques</a></li>
              <li><a href="#boutiques" className="hover:text-[#D4AF37] transition-colors">Private Bridal Salon Booking</a></li>
              <li><a href="#journal" className="hover:text-[#D4AF37] transition-colors">The Saree Gazette</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Concierge */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-4 border-b border-[#D4AF37]/20 pb-1.5">
              Client Concierge
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-light">
              <li><a href="#boutiques" className="hover:text-[#D4AF37] transition-colors">Worldwide Insured Shipping</a></li>
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Silk Mark Authentication</a></li>
              <li><a href="#boutiques" className="hover:text-[#D4AF37] transition-colors">Virtual Video Consultation</a></li>
              <li><a href="#featured" className="hover:text-[#D4AF37] transition-colors">Custom Blouse Tailoring</a></li>
              <li><a href="tel:+914424344115" className="hover:text-[#D4AF37] transition-colors">+91 44 2434 4115</a></li>
              <li><a href="mailto:concierge@nalli.com" className="hover:text-[#D4AF37] transition-colors">concierge@nalli.com</a></li>
            </ul>
          </div>
        </div>

        {/* Global Cities Bar */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#E8D9B5]/80">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="text-[#D4AF37] font-semibold">Flagship Salons:</span>
            <span>Chennai (T. Nagar & Anna Nagar)</span>
            <span>•</span>
            <span>New Delhi (South Ex & CP)</span>
            <span>•</span>
            <span>Mumbai (Kala Ghoda)</span>
            <span>•</span>
            <span>Bengaluru</span>
            <span>•</span>
            <span>Hyderabad</span>
            <span>•</span>
            <span>London (Mayfair)</span>
            <span>•</span>
            <span>Singapore</span>
            <span>•</span>
            <span>Dallas</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <p>© 1928 – 2026 Nalli Silks Private Limited. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-[#D4AF37] cursor-pointer">Heritage Ethics</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Silk Mark Guarantee</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Charter</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Terms of Patronage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
