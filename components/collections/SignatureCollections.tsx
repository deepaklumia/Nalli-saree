"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { SIGNATURE_COLLECTIONS } from "@/data/collections";

export const SignatureCollections: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Bind scroll progress to the pinned horizontal track container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal translation:
  // With 6 cards, translating from 0% to approximately -68% moves the entire deck across the screen smoothly
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPercent(Math.round(latest * 100));
    const cardIndex = Math.min(
      Math.floor(latest * SIGNATURE_COLLECTIONS.length),
      SIGNATURE_COLLECTIONS.length - 1
    );
    setActiveIndex(cardIndex);
  });

  // Helper to scroll smoothly along the horizontal pinned range
  const scrollHorizontalTo = (direction: "next" | "prev") => {
    if (!targetRef.current) return;
    const totalHeight = targetRef.current.offsetHeight - window.innerHeight;
    const currentScroll = window.scrollY - targetRef.current.offsetTop;
    const currentRatio = Math.max(0, Math.min(1, currentScroll / totalHeight));
    const step = 1 / (SIGNATURE_COLLECTIONS.length - 1);

    let nextRatio = direction === "next" ? currentRatio + step : currentRatio - step;
    nextRatio = Math.max(0, Math.min(1, nextRatio));

    window.scrollTo({
      top: targetRef.current.offsetTop + totalHeight * nextRatio,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="collections"
      ref={targetRef}
      className="relative h-[340vh] bg-[#FAF7F2]"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F2] py-8 sm:py-10">
        
        {/* Subtle Decorative Traditional Watermark Pattern */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-[#5A0E1A]/5 blur-3xl pointer-events-none" />

        {/* ======================================================== */}
        {/* TOP HEADER SECTION                                       */}
        {/* ======================================================== */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 sm:pb-6 border-b border-[#D4AF37]/30 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#5A0E1A] font-semibold">
                  Haute Handloom Catalog • Horizontal Gallery
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#3A070F] tracking-tight">
                Signature Collections
              </h2>
              <p className="mt-1 sm:mt-2 text-neutral-600 font-serif text-sm sm:text-base lg:text-lg italic max-w-xl">
                Scroll vertically to glide horizontally through six masterwork silk repertoires.
              </p>
            </div>

            {/* Controls & Progress Indicator */}
            <div className="flex items-center gap-4 sm:gap-6 self-start md:self-end">
              
              {/* Progress Rail */}
              <div className="hidden sm:flex flex-col items-end gap-1.5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#5A0E1A] font-mono font-semibold">
                  <span>Collection {String(activeIndex + 1).padStart(2, "0")}</span>
                  <span className="text-neutral-400">/</span>
                  <span className="text-neutral-400">06</span>
                </div>
                <div className="w-36 h-1 bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#5A0E1A] transition-all duration-300 rounded-full"
                    style={{ width: `${Math.max(12, scrollPercent)}%` }}
                  />
                </div>
              </div>

              {/* Prev / Next Manual Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollHorizontalTo("prev")}
                  aria-label="Previous Collection"
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-white/80 hover:bg-[#5A0E1A] text-[#3A070F] hover:text-[#E8D9B5] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollHorizontalTo("next")}
                  aria-label="Next Collection"
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-white/80 hover:bg-[#5A0E1A] text-[#3A070F] hover:text-[#E8D9B5] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL SCROLL TRACK                                   */}
        {/* Images move horizontally across the screen as user scrolls*/}
        {/* ======================================================== */}
        <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden my-auto py-4">
          <motion.div
            style={{ x }}
            className="flex items-center gap-6 sm:gap-8 lg:gap-10 pl-6 sm:pl-12 lg:pl-20 pr-12 will-change-transform"
          >
            {SIGNATURE_COLLECTIONS.map((col, index) => (
              <div
                key={col.id}
                className="group relative w-[320px] sm:w-[380px] lg:w-[430px] flex-shrink-0 bg-white border border-[#D4AF37]/35 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-gold-glow flex flex-col justify-between"
              >
                {/* Image Container with Silk Zoom & Luxury Vignette */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#2A050B]">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 768px) 320px, (max-width: 1200px) 380px, 430px"
                    className="object-cover object-center group-hover:scale-108 group-hover:opacity-95 transition-transform duration-700 ease-out"
                  />

                  {/* Editorial Gradient & Gold Border Frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180307]/90 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Floating Collection Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#3A070F]/90 backdrop-blur-md text-[#E8D9B5] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold border border-[#D4AF37]/50 shadow-md">
                      {col.badge}
                    </span>
                  </div>

                  {/* Design Count Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black/75 backdrop-blur-sm text-[#D4AF37] text-[10px] uppercase tracking-wider px-2.5 py-1 border border-[#D4AF37]/40 font-mono">
                      {col.itemCount} Weaves
                    </span>
                  </div>

                  {/* Corner Accent Ticks */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/80 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#D4AF37]/80 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#D4AF37]/80 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/80 pointer-events-none" />

                  {/* In-Image Typography Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-mono">
                      {col.subtitle}
                    </p>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide mt-0.5 text-white group-hover:text-gold-gradient transition-colors">
                      {col.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer: Narrative & Quick Action */}
                <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <p className="text-neutral-600 text-xs sm:text-sm font-serif leading-relaxed line-clamp-3">
                      {col.description}
                    </p>
                    
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#5A0E1A] font-medium border-t border-neutral-100">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="font-sans text-[11px]">Motif: {col.highlightMotif}</span>
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        0{index + 1} / 06
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100">
                    <a
                      href="#featured"
                      className="w-full py-2.5 sm:py-3 bg-[#F8F4ED] hover:bg-[#5A0E1A] text-[#3A070F] hover:text-[#E8D9B5] border border-[#D4AF37]/40 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group-hover:bg-[#5A0E1A] group-hover:text-[#E8D9B5]"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM HORIZONTAL PROGRESS & SCROLL HINT                  */}
        {/* ======================================================== */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0 flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
          <div className="flex items-center gap-2 text-neutral-500 text-[10px] sm:text-xs tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Scroll vertically to traverse collections</span>
          </div>

          <a
            href="#featured"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#5A0E1A] hover:text-[#3A070F] transition-colors"
          >
            <span>View All 420+ Weaves</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

      </div>
    </section>
  );
};
