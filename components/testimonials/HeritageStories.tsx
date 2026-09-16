"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/journal";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeritageStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#3A070F] text-[#F8F4ED] relative overflow-hidden">
      
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Generations of Devotion
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Living Heirloom Chronicles
          </h2>
          <p className="mt-4 text-[#E8D9B5] font-serif text-lg italic">
            A Nalli saree is not bought for one season; it is cherished by grandmothers, mothers, and daughters over generations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#2A050A] border border-[#D4AF37]/40 shadow-2xl p-8 sm:p-12 lg:p-16">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Portrait & Generation Tag */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-xl mb-4">
                  <Image
                    src={current.image}
                    alt={current.clientName}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="inline-block px-3 py-1 bg-[#5A0E1A] border border-[#D4AF37]/50 text-[10px] uppercase tracking-widest text-[#E8D9B5] font-semibold mb-1">
                  {current.generation}
                </div>

                <h4 className="font-cinzel text-lg font-bold text-white mt-1">
                  {current.clientName}
                </h4>

                <p className="text-xs text-[#D4AF37] font-serif italic">
                  {current.city}
                </p>

                {/* Star rating */}
                <div className="flex gap-1 mt-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              {/* Right Column: Quoted Story & Trousseau Detail */}
              <div className="md:col-span-8 space-y-6 md:pl-6 md:border-l border-[#D4AF37]/20">
                <Quote className="w-10 h-10 text-[#D4AF37]/40" />

                <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#F8F4ED] leading-relaxed">
                  &ldquo;{current.story}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">Auspicious Occasion</span>
                    <span className="text-white font-medium">{current.occasion}</span>
                  </div>

                  <div>
                    <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">Family Heirloom Drape</span>
                    <span className="text-[#D4AF37] font-medium">{current.sareeDetails}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-[#D4AF37]/20">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#E8D9B5] hover:bg-[#D4AF37] hover:text-[#3A070F] transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="flex items-center text-xs tracking-widest text-[#E8D9B5] font-serif">
              {currentIndex + 1} of {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#E8D9B5] hover:bg-[#D4AF37] hover:text-[#3A070F] transition-all"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
