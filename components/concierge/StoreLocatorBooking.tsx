"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Video, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";

export const StoreLocatorBooking: React.FC = () => {
  const { setAppointmentModalBoutique } = useLuxury();

  const storeExperiences = [
    {
      title: "The Panagal Park Sanctum",
      city: "Chennai (Est. 1928)",
      desc: "Our founding four-story flagship. House of over 10,000 pure Kanchipuram weaves, private bridal suites, and our Master Zari Testing Laboratory.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
      tag: "Founding Maison",
    },
    {
      title: "The Mayfair Salon",
      city: "London, UK",
      desc: "An exclusive townhouse boutique opposite Grosvenor Square offering private champagne appointments, bespoke UK tax-free trousseau services, and express delivery across Europe.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
      tag: "European Flagship",
    },
    {
      title: "The South Extension Pavilion",
      city: "New Delhi",
      desc: "A sprawling heritage destination in South Delhi dedicated to royal North & South Indian bridal pairings, high-luster tissue brocades, and heirloom gifting.",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
      tag: "Capital Atelier",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#2A050A] text-[#F8F4ED] relative overflow-hidden">
      
      {/* Background Ornamentation */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Bespoke Client Experience
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Enter the Private Salons of Nalli
          </h2>
          <p className="mt-4 text-[#E8D9B5] font-serif text-lg italic">
            Whether visiting in person amidst the fragrance of fresh jasmine or connecting across continents via private video salon, experience our legendary hospitality.
          </p>
        </div>

        {/* 3 Experience Vignettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {storeExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#3A070F] border border-[#D4AF37]/35 overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#2A050A]/90 text-[#D4AF37] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold border border-[#D4AF37]/40">
                    {exp.tag}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#D4AF37]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.city}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-gold-gradient transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-serif leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setAppointmentModalBoutique(exp.city.split(" ")[0])}
                  className="w-full py-2.5 bg-[#5A0E1A] hover:bg-[#D4AF37] text-[#E8D9B5] hover:text-[#3A070F] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-[#D4AF37]/40"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Private Salon</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Client Video Banner */}
        <div className="bg-gradient-to-r from-[#5A0E1A] via-[#3A070F] to-[#2A050A] border border-[#D4AF37]/50 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold flex items-center justify-center lg:justify-start gap-1.5">
              <Video className="w-4 h-4 text-[#D4AF37]" />
              <span>Worldwide Virtual Video Concierge</span>
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold">
              Cannot Visit Us in Person? Connect with Our Heritage Drape Master.
            </h3>
            <p className="text-xs text-[#E8D9B5]/80 font-serif italic max-w-xl">
              We bring the Panagal Park showroom to your drawing room via 4K high-definition video call. Touch, inspect color undertones, and see full drapes live under natural lighting.
            </p>
          </div>

          <button
            onClick={() => setAppointmentModalBoutique("Virtual Live Video")}
            className="py-3.5 px-8 bg-[#D4AF37] hover:bg-[#E8D9B5] text-[#3A070F] text-xs uppercase tracking-[0.25em] font-semibold whitespace-nowrap shadow-xl transition-all flex items-center gap-2"
          >
            <span>Schedule Video Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
