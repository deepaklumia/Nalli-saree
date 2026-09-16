"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GLOBAL_BOUTIQUES, Boutique } from "@/data/boutiques";
import { MapPin, Globe, Clock, Phone, Sparkles, Calendar, Navigation } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";

export const GlobalPresenceMap: React.FC = () => {
  const { setAppointmentModalBoutique } = useLuxury();
  const [selectedBoutique, setSelectedBoutique] = useState<Boutique>(GLOBAL_BOUTIQUES[0]);

  // World map coordinates normalized to SVG viewBox [0 0 1000 500]
  // Roughly: x: (lng + 180) * (1000 / 360), y: (90 - lat) * (500 / 180)
  const getMapCoordinates = (lat: number, lng: number) => {
    const x = ((lng + 180) * 1000) / 360;
    const y = ((90 - lat) * 500) / 180;
    return { x, y };
  };

  return (
    <section id="boutiques" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A0E1A] font-semibold">
              Global Heritage Footprint
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A070F] tracking-tight">
            Flagship Boutiques & Worldwide Salons
          </h2>
          <p className="mt-4 text-neutral-600 font-serif text-lg italic">
            From our founding sanctum in Chennai to luxury salons in London, Singapore, and Dallas. Serving discerning connoisseurs across 120+ nations with insured delivery.
          </p>
        </div>

        {/* Interactive Map Visualizer Canvas */}
        <div className="bg-[#3A070F] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 mb-12 relative overflow-hidden text-white">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D4AF37]/20 mb-6 gap-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
              <Globe className="w-4 h-4" />
              <span>Interactive Global Flagship Network</span>
            </div>
            <span className="text-[11px] text-[#E8D9B5]/80 font-serif italic">
              Click any animated gold pin to view boutique appointments & private salons
            </span>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] bg-[#2A050A] border border-[#D4AF37]/20 overflow-hidden flex items-center justify-center">
            
            {/* World Landmass Silhouettes (Stylized SVG Outlines) */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-cover opacity-35"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
            >
              {/* Simplified stylized world landmass paths */}
              {/* North America */}
              <path
                d="M120,110 Q180,90 240,110 Q280,160 220,240 Q180,260 140,210 Z"
                fill="#5A0E1A"
                fillOpacity="0.4"
              />
              {/* South America */}
              <path
                d="M230,270 Q280,280 290,360 Q260,450 220,440 Q200,350 230,270 Z"
                fill="#5A0E1A"
                fillOpacity="0.4"
              />
              {/* Europe & UK */}
              <path
                d="M450,110 Q500,100 530,130 Q510,180 470,180 Q430,150 450,110 Z"
                fill="#5A0E1A"
                fillOpacity="0.4"
              />
              {/* Africa */}
              <path
                d="M470,200 Q540,190 560,260 Q550,370 490,380 Q450,290 470,200 Z"
                fill="#5A0E1A"
                fillOpacity="0.4"
              />
              {/* Asia & India */}
              <path
                d="M580,120 Q700,100 780,160 Q820,240 760,280 Q690,320 630,260 Q560,220 580,120 Z"
                fill="#5A0E1A"
                fillOpacity="0.4"
              />
              {/* India subcontinent accent */}
              <path
                d="M680,220 L730,240 L700,320 Z"
                fill="#D4AF37"
                fillOpacity="0.2"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              {/* Australia */}
              <path
                d="M800,340 Q880,330 890,390 Q850,440 790,410 Z"
                fill="#5A0E1A"
                fillOpacity="0.4"
              />
            </svg>

            {/* Pulsing Boutique Pinpoints */}
            {GLOBAL_BOUTIQUES.map((boutique) => {
              const { x, y } = getMapCoordinates(boutique.latitude, boutique.longitude);
              const isSelected = selectedBoutique.id === boutique.id;

              return (
                <div
                  key={boutique.id}
                  style={{ left: `${(x / 1000) * 100}%`, top: `${(y / 500) * 100}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => setSelectedBoutique(boutique)}
                >
                  {/* Ping Animation ring */}
                  <span className={`absolute -inset-2 rounded-full bg-[#D4AF37] opacity-60 animate-ping ${
                    isSelected ? "block" : "hidden group-hover:block"
                  }`} />

                  {/* Marker Pin */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${
                      isSelected
                        ? "bg-[#D4AF37] border-white text-[#3A070F] scale-125"
                        : "bg-[#3A070F] border-[#D4AF37] text-[#E8D9B5] group-hover:scale-110"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>

                  {/* Floating Tooltip */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none whitespace-nowrap transition-all duration-300 z-30 ${
                    isSelected ? "opacity-100 scale-100" : "opacity-0 group-hover:opacity-100 scale-95"
                  }`}>
                    <div className="bg-[#111111] text-[#E8D9B5] text-[10px] uppercase tracking-wider py-1 px-2.5 border border-[#D4AF37]/50 shadow-xl">
                      <span className="font-bold text-[#D4AF37]">{boutique.city}</span> • {boutique.country}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Boutique Showcase Card */}
        <div className="bg-white border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Boutique Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#D4AF37]/40 shadow-lg">
              <Image
                src={selectedBoutique.image}
                alt={selectedBoutique.name}
                fill
                className="object-cover"
              />
              {selectedBoutique.isFlagship && (
                <span className="absolute top-3 left-3 bg-[#5A0E1A] text-[#E8D9B5] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold border border-[#D4AF37]/50">
                  Historic Flagship
                </span>
              )}
            </div>
          </div>

          {/* Boutique Details & Appointment Trigger */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5A0E1A] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{selectedBoutique.city}, {selectedBoutique.country}</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3A070F] mt-1">
                {selectedBoutique.name}
              </h3>
              <p className="text-neutral-500 font-serif italic text-sm mt-0.5">
                {selectedBoutique.tagline}
              </p>
            </div>

            <div className="space-y-2 text-xs text-neutral-700">
              <p className="flex items-start gap-2">
                <Navigation className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{selectedBoutique.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{selectedBoutique.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{selectedBoutique.hours}</span>
              </p>
            </div>

            {/* Bespoke Services Offered */}
            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                Salons & Services:
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedBoutique.services.map((svc, i) => (
                  <span
                    key={i}
                    className="bg-[#F8F4ED] text-[#3A070F] border border-[#D4AF37]/30 text-[10px] uppercase tracking-wider px-2.5 py-1 font-medium"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Appointment CTA */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setAppointmentModalBoutique(selectedBoutique.city)}
                className="py-3 px-6 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors border border-[#D4AF37]/40 shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Reserve Private Bridal Consultation</span>
              </button>

              <a
                href={`tel:${selectedBoutique.phone}`}
                className="py-3 px-5 border border-neutral-300 hover:border-[#5A0E1A] text-neutral-700 text-xs uppercase tracking-wider text-center font-medium transition-colors"
              >
                Call Concierge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
