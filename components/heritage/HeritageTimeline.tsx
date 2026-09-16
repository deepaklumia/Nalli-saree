"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { TIMELINE_MILESTONES } from "@/data/timeline";
import { Award, History, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export const HeritageTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEraIndex, setActiveEraIndex] = useState<number>(0);

  // Bind Framer Motion scroll to the multi-screen pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active era index (0 to 5) across 6 milestones
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.17) {
      setActiveEraIndex(0);
    } else if (latest < 0.33) {
      setActiveEraIndex(1);
    } else if (latest < 0.50) {
      setActiveEraIndex(2);
    } else if (latest < 0.67) {
      setActiveEraIndex(3);
    } else if (latest < 0.84) {
      setActiveEraIndex(4);
    } else {
      setActiveEraIndex(5);
    }
  });

  // Smooth scroll to milestone
  const scrollToMilestone = (index: number) => {
    setActiveEraIndex(index);
    if (!containerRef.current) return;
    const targetScrollPoints = [0.08, 0.25, 0.42, 0.59, 0.76, 0.93];
    const targetRatio = targetScrollPoints[index];
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: containerTop + scrollableDistance * targetRatio,
      behavior: "smooth",
    });
  };

  const currentMilestone = TIMELINE_MILESTONES[activeEraIndex] || TIMELINE_MILESTONES[0];

  return (
    <section
      id="heritage"
      ref={containerRef}
      className="relative w-full h-[520vh] bg-[#0A0204]"
    >
      {/* Pinned Viewport Full-Screen Documentary Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A0204] text-[#F8F4ED]">
        
        {/* ======================================================== */}
        {/* FULL-SCREEN CINEMATIC ARCHIVAL BACKDROP                  */}
        {/* The entire viewport is filled with the active era image. */}
        {/* On scroll, the previous full-screen image completely     */}
        {/* disappears via AnimatePresence mode='wait'.              */}
        {/* ======================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMilestone.year}
              initial={{ opacity: 0, scale: 1.07 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentMilestone.image}
                alt={currentMilestone.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center filter saturate-[0.95] contrast-[1.05]"
              />

              {/* Multi-layered luxury gradients for flawless editorial text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#120205]/95 via-[#120205]/75 to-transparent sm:w-3/4 lg:w-3/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0103] via-transparent to-[#0A0103]/80" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#0A0103]/90" />
              <div className="absolute inset-0 bg-mandala-pattern opacity-15 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Archival Year Numeral Glow in Background */}
        <div className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden select-none z-1 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentMilestone.year}
              initial={{ opacity: 0, scale: 1.1, x: 40 }}
              animate={{ opacity: 0.08, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -30 }}
              transition={{ duration: 0.55 }}
              className="font-cinzel text-[20vw] font-bold text-[#D4AF37] tracking-tighter leading-none block text-right"
            >
              {currentMilestone.year}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Gold Frame Border Lines */}
        <div className="absolute inset-4 sm:inset-6 border border-[#D4AF37]/25 pointer-events-none z-30" />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none z-30" />
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none z-30" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none z-30" />
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none z-30" />

        {/* ======================================================== */}
        {/* TOP DOCUMENTARY HEADER BAR                                */}
        {/* ======================================================== */}
        <header className="relative z-20 pt-8 sm:pt-10 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              The Living Legacy • 1928 to Present
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#E8D9B5]/80">
            <History className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Archival Chronicles of Royal Indian Luxury</span>
          </div>
        </header>

        {/* ======================================================== */}
        {/* CENTER STAGE: FULL-SCREEN DOCUMENTARY NARRATIVE          */}
        {/* Previous milestone disappears completely before new era  */}
        {/* ======================================================== */}
        <div className="relative z-20 flex-1 max-w-7xl mx-auto px-6 sm:px-12 w-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
            
            {/* LEFT TIMELINE RAIL (Vertical Golden Thread Navigation) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 py-6 border-l-2 border-[#D4AF37]/30 pl-6 backdrop-blur-md bg-black/25 rounded-r-sm max-w-[260px]">
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Documentary Rail</span>
              </div>
              {TIMELINE_MILESTONES.map((m, idx) => {
                const isActive = activeEraIndex === idx;
                return (
                  <button
                    key={m.year}
                    onClick={() => scrollToMilestone(idx)}
                    className="group flex flex-col items-start text-left focus:outline-none cursor-pointer transition-all duration-300"
                    aria-label={`Jump to era ${m.year}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "bg-[#D4AF37] border-[#D4AF37] shadow-[0_0_14px_#D4AF37] scale-125"
                            : "border-[#D4AF37]/40 bg-transparent group-hover:border-[#D4AF37]"
                        }`}
                      />
                      <span
                        className={`font-cinzel text-sm tracking-wider transition-colors duration-300 ${
                          isActive
                            ? "text-[#D4AF37] font-bold scale-105"
                            : "text-white/40 group-hover:text-white/80"
                        }`}
                      >
                        {m.year}
                      </span>
                    </div>
                    <span
                      className={`text-[9px] tracking-widest uppercase mt-0.5 ml-6 transition-colors duration-300 ${
                        isActive ? "text-[#E8D9B5] font-medium" : "text-neutral-500 group-hover:text-neutral-400"
                      }`}
                    >
                      {m.era.split("•")[0].slice(0, 24)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CENTER / EDITORIAL NARRATIVE OVERLAY */}
            <div className="lg:col-span-9 relative min-h-[460px] sm:min-h-[520px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMilestone.year}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -25, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="max-w-2xl text-left"
                >
                  {/* Era Badge & Milestone Numeral */}
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-bold text-gold-gradient tracking-tight drop-shadow-2xl">
                      {currentMilestone.year}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        {currentMilestone.archivalBadge}
                      </span>
                      <span className="text-sm text-[#E8D9B5] font-serif italic mt-0.5">
                        {currentMilestone.era}
                      </span>
                    </div>
                  </div>

                  {/* Milestone Title */}
                  <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-tight drop-shadow-lg">
                    {currentMilestone.title}
                  </h3>

                  {/* Subtitle / Historic Location */}
                  <p className="text-sm sm:text-base text-[#D4AF37] font-serif italic mt-2">
                    {currentMilestone.subtitle}
                  </p>

                  {/* Detailed Documentary Narrative */}
                  <p className="mt-4 text-xs sm:text-sm lg:text-base text-[#F8F4ED]/90 font-light leading-relaxed font-sans max-w-xl drop-shadow">
                    {currentMilestone.description}
                  </p>

                  {/* Archival Quote Box */}
                  <div className="mt-5 p-4 rounded-sm bg-[#1E0409]/85 border-l-2 border-[#D4AF37] backdrop-blur-md shadow-xl max-w-xl">
                    <p className="font-serif italic text-xs sm:text-sm text-[#F8F4ED] leading-relaxed">
                      &ldquo;{currentMilestone.quote}&rdquo;
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mt-1.5 font-sans font-semibold">
                      — {currentMilestone.quoteAuthor}
                    </p>
                  </div>

                  {/* Key Highlight Metric Badge */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A070F]/80 border border-[#D4AF37]/50 backdrop-blur-md text-[11px] text-[#E8D9B5] shadow-lg">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{currentMilestone.highlight}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm text-[10px] text-white/80 font-mono">
                      <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                      <span>Silk Mark Certified Heritage</span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM DOCUMENTARY NAVIGATION & PROGRESS TRACKER         */}
        {/* ======================================================== */}
        <footer className="relative z-20 pb-8 sm:pb-10 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#D4AF37]/25 pt-4">
          
          {/* Mobile Era Stepper Buttons */}
          <div className="flex lg:hidden items-center gap-2 overflow-x-auto max-w-[240px] sm:max-w-none pb-1 sm:pb-0">
            {TIMELINE_MILESTONES.map((m, idx) => (
              <button
                key={m.year}
                onClick={() => scrollToMilestone(idx)}
                className={`text-[10px] font-cinzel px-2.5 py-1 rounded-full border transition-colors ${
                  activeEraIndex === idx
                    ? "bg-[#D4AF37] text-[#3A070F] border-[#D4AF37] font-bold"
                    : "border-white/20 text-white/60 bg-black/40"
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Desktop Era Indicator */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
              Active Milestone:
            </span>
            <span className="text-xs uppercase tracking-widest text-[#F8F4ED] font-semibold">
              Era {currentMilestone.year} • {currentMilestone.era}
            </span>
            <span className="text-[10px] text-[#D4AF37]/70 font-mono">
              (0{activeEraIndex + 1} of 06)
            </span>
          </div>

          {/* Scroll Down Prompt for Next Era */}
          <button
            onClick={() => {
              if (activeEraIndex < 5) {
                scrollToMilestone(activeEraIndex + 1);
              } else {
                const el = document.getElementById("collections");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 text-[#E8D9B5] hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] font-medium">
              {activeEraIndex === 5 ? "Explore Collections" : "Scroll to Advance Era"}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </button>

        </footer>

      </div>
    </section>
  );
};
