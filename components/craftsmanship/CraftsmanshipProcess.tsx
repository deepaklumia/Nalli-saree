"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CRAFTSMANSHIP_STAGES } from "@/data/craftsmanship";
import { Sparkles, CheckCircle, ArrowRight, Layers, Award } from "lucide-react";

export const CraftsmanshipProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStage = CRAFTSMANSHIP_STAGES[activeStep];

  return (
    <section id="craftsmanship" className="py-24 sm:py-32 bg-[#3A070F] text-[#F8F4ED] relative overflow-hidden">
      
      {/* Background Mandala & Silk Weave Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#5A0E1A]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              The Master Weaver Guild
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F4ED] tracking-tight">
            The Anatomy of Pure Craftsmanship
          </h2>
          <p className="mt-4 text-[#E8D9B5] font-serif text-lg italic">
            Each Nalli Kanchipuram takes up to 45 days of coordinated mastery between two weavers, 24-karat sovereign gold, and Grade 4A+ mulberry silk.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {CRAFTSMANSHIP_STAGES.map((stage, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left border transition-all duration-300 relative group ${
                  isSelected
                    ? "bg-[#5A0E1A] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10"
                    : "bg-[#2A050A]/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#5A0E1A]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                    isSelected ? "text-[#D4AF37]" : "text-[#E8D9B5]/60"
                  }`}>
                    {stage.number}
                  </span>
                  <span className={`font-cinzel text-sm font-semibold ${
                    isSelected ? "text-white" : "text-[#D4AF37]/70"
                  }`}>
                    {stage.step}
                  </span>
                </div>
                <p className={`font-serif text-sm font-medium line-clamp-1 ${
                  isSelected ? "text-white" : "text-[#E8D9B5]/90"
                }`}>
                  {stage.title}
                </p>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage Feature Presentation */}
        <div className="bg-[#2A050A] border border-[#D4AF37]/35 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Visual Asset with Gold Frame */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-[#D4AF37]/50 shadow-2xl group">
                  <Image
                    src={currentStage.image}
                    alt={currentStage.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Step Seal */}
                  <div className="absolute top-4 left-4 bg-[#3A070F]/90 backdrop-blur-sm border border-[#D4AF37]/60 px-3 py-1.5 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E8D9B5]">
                      Stage {currentStage.step} / 05
                    </span>
                  </div>
                </div>

                {/* Artisan Quote underneath */}
                <div className="mt-4 p-3.5 bg-[#3A070F] border-l-2 border-[#D4AF37] text-xs">
                  <p className="font-serif italic text-[#E8D9B5] text-sm leading-relaxed">
                    &ldquo;{currentStage.artisanQuote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Craftsmanship Deep Dive */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
                    {currentStage.subtitle}
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {currentStage.title}
                  </h3>
                </div>

                <p className="text-neutral-300 font-serif text-base sm:text-lg leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Technical Bullet Points */}
                <div className="space-y-3 pt-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                    Mastery Standards:
                  </p>
                  {currentStage.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8F4ED]/90">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Next Step Nav */}
                <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep((prev) => (prev - 1 + CRAFTSMANSHIP_STAGES.length) % CRAFTSMANSHIP_STAGES.length)}
                    className="text-xs uppercase tracking-widest text-[#E8D9B5]/80 hover:text-white transition-colors"
                  >
                    ← Previous Phase
                  </button>

                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % CRAFTSMANSHIP_STAGES.length)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white font-semibold transition-colors"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
