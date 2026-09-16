"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, ChevronRight, Sparkles, Award } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface HeroScene {
  id: number;
  chapter: string;
  image: string;
  tagline: string;
  theme: string;
  narrative: string;
  linkText: string;
  linkHref: string;
  objectPosition: string;
}

const HERO_SCENES: HeroScene[] = [
  {
    id: 1,
    chapter: "Chapter I",
    image: "/images/hero/hero_bridal.jpg",
    tagline: "Imperial Bridal Trousseau",
    theme: "24K Sovereign Gold Zari & Aadheenam Crimson",
    narrative: "Woven over 180 meticulous hours on ancestral pit looms, embodying the auspicious red and sovereign gold. Masterpieces preserved for future generations.",
    linkText: "Explore Bridal Weaves",
    linkHref: "#collections",
    objectPosition: "object-[center_18%]",
  },
  {
    id: 2,
    chapter: "Chapter II",
    image: "/images/hero/hero_korvai.jpg",
    tagline: "The Sacred Korvai Loom",
    theme: "Interlocking Shuttles Mastered by Generations",
    narrative: "Two master artisans in synchronized cadence across opposing shuttles, creating seamless contrasts and structural strength impossible by modern machines.",
    linkText: "Discover Korvai Craft",
    linkHref: "#craftsmanship",
    objectPosition: "object-[center_18%]",
  },
  {
    id: 3,
    chapter: "Chapter III",
    image: "/images/hero/hero_sonachandi.jpg",
    tagline: "Sona-Chandi Dual Harmony",
    theme: "Celestial Silver & Sunlit Gold Silks",
    narrative: "A timeless play of pure silver-gilt thread and warm golden warp, illuminating celebratory dusk, temple rituals, and grand gala soirees.",
    linkText: "View Sona-Chandi Edit",
    linkHref: "#collections",
    objectPosition: "object-[center_18%]",
  },
];

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);

  // Bind Framer Motion scroll progress to the hero's multi-screen height container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active stage for indicators (0: Overture, 1: Scene 1, 2: Scene 2, 3: Scene 3)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.16) {
      setActiveStage(0);
    } else if (latest < 0.44) {
      setActiveStage(1);
    } else if (latest < 0.72) {
      setActiveStage(2);
    } else {
      setActiveStage(3);
    }
  });

  // Stage 0: Overture Image Transforms (Visible on load 0 to 0.14, then fades out as Chapter 1 enters)
  const img0Opacity = useTransform(scrollYProgress, [0, 0.14, 0.20, 1], [1, 1, 0, 0], { clamp: true });
  const img0Scale = useTransform(scrollYProgress, [0, 0.18, 1], [1, 1.05, 1.05], { clamp: true });

  // Initial Hero Typography Transforms
  // Visible on initial load (0 to 0.14), then gently dims as Chapter 1 takes center stage
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.14, 0.22, 1], [1, 1, 0, 0], { clamp: true });
  const heroTextScale = useTransform(scrollYProgress, [0, 0.18, 1], [1, 0.94, 0.94], { clamp: true });
  const heroTextY = useTransform(scrollYProgress, [0, 0.18, 1], [0, -35, -35], { clamp: true });

  // Initial Scroll Cue Indicator (Only visible on initial stage 0 to 0.14)
  const scrollPromptOpacity = useTransform(scrollYProgress, [0, 0.08, 0.14, 1], [1, 0.9, 0, 0], { clamp: true });

  // Image 1 transforms (Chapter I: 0.16 to 0.44)
  // Strictly 0 opacity on initial page load (0 to 0.16)
  const img1Opacity = useTransform(scrollYProgress, [0, 0.16, 0.24, 0.36, 0.44, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const img1Scale = useTransform(scrollYProgress, [0, 0.16, 0.30, 0.44, 1], [1.08, 1.08, 1.0, 0.98, 0.98], { clamp: true });
  const card1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.26, 0.36, 0.42, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const card1Y = useTransform(scrollYProgress, [0, 0.18, 0.26, 0.36, 0.42, 1], [30, 30, 0, 0, -20, -20], { clamp: true });

  // Image 2 transforms (Chapter II: 0.44 to 0.72)
  const img2Opacity = useTransform(scrollYProgress, [0, 0.44, 0.52, 0.64, 0.72, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const img2Scale = useTransform(scrollYProgress, [0, 0.44, 0.56, 0.72, 1], [1.08, 1.08, 1.0, 0.98, 0.98], { clamp: true });
  const card2Opacity = useTransform(scrollYProgress, [0, 0.46, 0.54, 0.64, 0.70, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const card2Y = useTransform(scrollYProgress, [0, 0.46, 0.54, 0.64, 0.70, 1], [30, 30, 0, 0, -20, -20], { clamp: true });

  // Image 3 transforms (Chapter III: 0.72 to 1.0)
  const img3Opacity = useTransform(scrollYProgress, [0, 0.72, 0.80, 0.96, 1], [0, 0, 1, 1, 0.9], { clamp: true });
  const img3Scale = useTransform(scrollYProgress, [0, 0.72, 0.84, 1], [1.08, 1.08, 1.0, 1.0], { clamp: true });
  const card3Opacity = useTransform(scrollYProgress, [0, 0.74, 0.82, 0.96, 1], [0, 0, 1, 1, 0.85], { clamp: true });
  const card3Y = useTransform(scrollYProgress, [0, 0.74, 0.82, 0.96, 1], [30, 30, 0, 0, -10], { clamp: true });

  // Helper to scroll to a specific stage
  const scrollToStage = (stageIndex: number) => {
    if (!containerRef.current) return;
    const targetScrollPoints = [0, 0.28, 0.56, 0.85];
    const targetRatio = targetScrollPoints[stageIndex];
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: containerTop + scrollableDistance * targetRatio,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380vh] bg-[#0A0204]"
      id="hero-scroll-container"
    >
      {/* Pinned Viewport Screen */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0204]">
        
        {/* Base Luxury Canvas Background (Always present, rich ambient texture) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0409] via-[#0D0204] to-[#0A0204]" />
        {/* Traditional gold stardust & mandala grid watermark */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-25 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#5A0E1A]/40 blur-3xl pointer-events-none" />

        {/* ======================================================== */}
        {/* STAGE 0: OVERTURE FULL-SCREEN IMAGE                      */}
        {/* Visible on initial load, fades out cleanly on scroll      */}
        {/* ======================================================== */}
        <motion.div
          style={{ opacity: img0Opacity, scale: img0Scale }}
          className="absolute inset-0 z-10 pointer-events-none will-change-transform"
        >
          <Image
            src="/images/hero/hero_overture.jpg"
            alt="Nalli Sovereign Royal Saree Overture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%] filter saturate-[0.95] contrast-[1.05]"
          />
          {/* Luxury Vignette and Tint Gradients for High Editorial Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0307] via-black/35 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#5A0E1A]/15 to-black/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-mandala-pattern opacity-10" />
        </motion.div>

        {/* ======================================================== */}
        {/* STAGE 1: CHAPTER I (Imperial Bridal Trousseau)            */}
        {/* Appears on scroll between 0.16 and 0.44                  */}
        {/* ======================================================== */}
        <motion.div
          style={{ opacity: img1Opacity, scale: img1Scale }}
          className="absolute inset-0 z-10 pointer-events-none will-change-transform"
        >
          <Image
            src={HERO_SCENES[0].image}
            alt={HERO_SCENES[0].tagline}
            fill
            sizes="100vw"
            priority
            className={`object-cover ${HERO_SCENES[0].objectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0307] via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1C0307]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#5A0E1A]/15 to-black/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-mandala-pattern opacity-10" />
        </motion.div>

        {/* ======================================================== */}
        {/* STAGE 2: CHAPTER II (The Sacred Korvai Loom)             */}
        {/* Appears on scroll between 0.44 and 0.72                  */}
        {/* ======================================================== */}
        <motion.div
          style={{ opacity: img2Opacity, scale: img2Scale }}
          className="absolute inset-0 z-10 pointer-events-none will-change-transform"
        >
          <Image
            src={HERO_SCENES[1].image}
            alt={HERO_SCENES[1].tagline}
            fill
            sizes="100vw"
            className={`object-cover ${HERO_SCENES[1].objectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0307] via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1C0307]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#5A0E1A]/15 to-black/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-mandala-pattern opacity-10" />
        </motion.div>

        {/* ======================================================== */}
        {/* STAGE 3: CHAPTER III (Sona-Chandi Dual Harmony)          */}
        {/* Appears on scroll between 0.72 and 1.00                  */}
        {/* ======================================================== */}
        <motion.div
          style={{ opacity: img3Opacity, scale: img3Scale }}
          className="absolute inset-0 z-10 pointer-events-none will-change-transform"
        >
          <Image
            src={HERO_SCENES[2].image}
            alt={HERO_SCENES[2].tagline}
            fill
            sizes="100vw"
            className={`object-cover ${HERO_SCENES[2].objectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0307] via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1C0307]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#5A0E1A]/15 to-black/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-mandala-pattern opacity-10" />
        </motion.div>

        {/* Gold Border Accents for Editorial Depth */}
        <div className="absolute inset-4 sm:inset-8 border border-[#D4AF37]/20 pointer-events-none z-30" />
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none z-30" />
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none z-30" />
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none z-30" />
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none z-30" />

        {/* ======================================================== */}
        {/* PRIMARY HERO CONTENT (Visible on Initial Overture)        */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: heroTextOpacity,
            scale: heroTextScale,
            y: heroTextY,
          }}
          className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center text-[#F8F4ED] will-change-transform"
        >
          {/* Heritage Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#3A070F]/85 backdrop-blur-md mb-6 shadow-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E8D9B5] font-semibold">
              Purveyors of Pure Silks • Since 1928
            </span>
            <span className="w-1 h-3 border-r border-[#D4AF37]/40" />
            <span className="text-[10px] text-[#D4AF37] tracking-wider uppercase hidden sm:inline">
              Silk Mark Certified
            </span>
          </div>

          {/* Imperial Headline */}
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.08em] leading-[1.12] text-white max-w-4xl mx-auto drop-shadow-2xl">
            Crafting Modern Heirlooms <br />
            <span className="text-gold-gradient italic font-serif font-normal">Since 1928</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#E8D9B5] font-serif font-light max-w-2xl mx-auto leading-relaxed tracking-wide italic drop-shadow-md">
            Where timeless craftsmanship meets contemporary elegance. Discover exquisite silk sarees, handcrafted for generations.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#collections"
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#E8D9B5] text-[#3A070F] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Collections</span>
              <ChevronRight className="w-4 h-4 text-[#3A070F] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#heritage"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-[#F8F4ED] border border-[#D4AF37]/60 hover:border-[#D4AF37] font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discover Heritage</span>
            </Link>
          </div>

          {/* Overture Quality Ribbon */}
          <div className="mt-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#3A070F]/70 backdrop-blur-md shadow-lg">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] text-[#E8D9B5] tracking-widest uppercase font-medium">
              Tested 24K Sovereign Gold Zari • 100% Pure Mulberry Silk
            </span>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* SEQUENTIAL STORYTELLING NARRATIVE CARDS                  */}
        {/* ======================================================== */}

        {/* Story Card 1 (Tied to Scene 1) */}
        <motion.div
          style={{ opacity: card1Opacity, y: card1Y }}
          className={`absolute z-20 inset-x-4 sm:inset-x-auto sm:left-12 md:left-16 sm:max-w-md ${
            activeStage === 1 ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="p-6 sm:p-7 rounded-sm bg-[#1A0408]/85 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                {HERO_SCENES[0].chapter} • Heirloom Weave
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
              {HERO_SCENES[0].tagline}
            </h3>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-serif italic mt-1">
              {HERO_SCENES[0].theme}
            </p>
            <p className="text-xs sm:text-sm text-[#F8F4ED]/85 mt-3 leading-relaxed font-light font-sans">
              {HERO_SCENES[0].narrative}
            </p>
            <div className="mt-5 pt-4 border-t border-[#D4AF37]/25 flex items-center justify-between">
              <Link
                href={HERO_SCENES[0].linkHref}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#E8D9B5] hover:text-[#D4AF37] transition-colors group"
              >
                <span>{HERO_SCENES[0].linkText}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-[10px] tracking-widest text-[#D4AF37]/70 font-mono">01 / 03</span>
            </div>
          </div>
        </motion.div>

        {/* Story Card 2 (Tied to Scene 2) */}
        <motion.div
          style={{ opacity: card2Opacity, y: card2Y }}
          className={`absolute z-20 inset-x-4 sm:inset-x-auto sm:left-12 md:left-16 sm:max-w-md ${
            activeStage === 2 ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="p-6 sm:p-7 rounded-sm bg-[#1A0408]/85 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                {HERO_SCENES[1].chapter} • Loom Artistry
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
              {HERO_SCENES[1].tagline}
            </h3>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-serif italic mt-1">
              {HERO_SCENES[1].theme}
            </p>
            <p className="text-xs sm:text-sm text-[#F8F4ED]/85 mt-3 leading-relaxed font-light font-sans">
              {HERO_SCENES[1].narrative}
            </p>
            <div className="mt-5 pt-4 border-t border-[#D4AF37]/25 flex items-center justify-between">
              <Link
                href={HERO_SCENES[1].linkHref}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#E8D9B5] hover:text-[#D4AF37] transition-colors group"
              >
                <span>{HERO_SCENES[1].linkText}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-[10px] tracking-widest text-[#D4AF37]/70 font-mono">02 / 03</span>
            </div>
          </div>
        </motion.div>

        {/* Story Card 3 (Tied to Scene 3) */}
        <motion.div
          style={{ opacity: card3Opacity, y: card3Y }}
          className={`absolute z-20 inset-x-4 sm:inset-x-auto sm:left-12 md:left-16 sm:max-w-md ${
            activeStage === 3 ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="p-6 sm:p-7 rounded-sm bg-[#1A0408]/85 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                {HERO_SCENES[2].chapter} • Celestial Palette
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
              {HERO_SCENES[2].tagline}
            </h3>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-serif italic mt-1">
              {HERO_SCENES[2].theme}
            </p>
            <p className="text-xs sm:text-sm text-[#F8F4ED]/85 mt-3 leading-relaxed font-light font-sans">
              {HERO_SCENES[2].narrative}
            </p>
            <div className="mt-5 pt-4 border-t border-[#D4AF37]/25 flex items-center justify-between">
              <Link
                href={HERO_SCENES[2].linkHref}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#E8D9B5] hover:text-[#D4AF37] transition-colors group"
              >
                <span>{HERO_SCENES[2].linkText}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-[10px] tracking-widest text-[#D4AF37]/70 font-mono">03 / 03</span>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* INTERACTIVE SCROLL NAVIGATION RAIL (Right Side)          */}
        {/* ======================================================== */}
        <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-5">
          <div className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-mono mb-1">
            Scroll Narrative
          </div>
          {[
            { label: "Overture", stage: 0 },
            { label: "I. Imperial Bridal", stage: 1 },
            { label: "II. Korvai Loom", stage: 2 },
            { label: "III. Sona Chandi", stage: 3 },
          ].map((item) => {
            const isActive = activeStage === item.stage;
            return (
              <button
                key={item.stage}
                onClick={() => scrollToStage(item.stage)}
                className="group flex items-center gap-3 text-right focus:outline-none cursor-pointer"
                aria-label={`Jump to ${item.label}`}
              >
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase transition-all duration-300 font-medium ${
                    isActive
                      ? "text-[#D4AF37] scale-105 font-bold"
                      : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-3 h-3 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
                      : "w-2 h-2 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Floating Worldwide Shipping Badge (Bottom-Right) */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 z-30 pointer-events-none">
          <div className="text-right text-[11px] text-[#E8D9B5] tracking-widest uppercase">
            <p className="font-semibold text-[#D4AF37]">Complimentary Express</p>
            <p className="text-[10px] opacity-80">Insured Delivery Across 120+ Countries</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#3A070F]/80 flex items-center justify-center text-[#D4AF37]">
            <Shield className="w-4 h-4" />
          </div>
        </div>

        {/* Initial Scroll Cue (Visible only when user is at the top) */}
        <motion.div
          style={{ opacity: scrollPromptOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto"
        >
          <button
            onClick={() => scrollToStage(1)}
            className="flex flex-col items-center text-[#E8D9B5] hover:text-[#D4AF37] transition-colors group cursor-pointer focus:outline-none"
            aria-label="Scroll down to reveal heirloom gallery"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium mb-2.5 opacity-85 group-hover:opacity-100 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              Scroll to Unveil Stories
            </span>
            <div className="w-5 h-9 border border-[#D4AF37]/70 rounded-full flex justify-center p-1 backdrop-blur-sm bg-black/20">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-1 h-2 bg-[#D4AF37] rounded-full"
              />
            </div>
          </button>
        </motion.div>

      </div>
    </div>
  );
};
