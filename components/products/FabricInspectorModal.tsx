"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { X, ZoomIn, ShieldCheck, Sparkles, Eye, Info } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";

export const FabricInspectorModal: React.FC = () => {
  const { activeInspectProduct, setActiveInspectProduct, formatPrice, addToCart } = useLuxury();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  if (!activeInspectProduct) return null;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] border border-[#D4AF37]/50 shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto flex flex-col justify-between">
        
        {/* Modal Top Bar */}
        <div className="p-5 bg-[#3A070F] text-[#F8F4ED] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ZoomIn className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] font-semibold">
                Macro Weave Inspection Laboratory
              </span>
              <h3 className="font-cinzel text-lg text-white">
                {activeInspectProduct.name}
              </h3>
            </div>
          </div>
          <button
            onClick={() => setActiveInspectProduct(null)}
            className="text-[#E8D9B5] hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body: Two Columns */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Magnifier Viewport */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={imageContainerRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              className="relative w-full aspect-[4/5] bg-neutral-900 border-2 border-[#D4AF37]/60 overflow-hidden cursor-crosshair shadow-xl select-none"
            >
              {/* Base High Res Weave Image */}
              <Image
                src={activeInspectProduct.textureZoomImage}
                alt={activeInspectProduct.name}
                fill
                className="object-cover"
              />

              {/* Magnified Loupe Overlay */}
              {isHovering && (
                <div
                  style={{
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundImage: `url(${activeInspectProduct.textureZoomImage})`,
                    backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                    backgroundSize: "400%",
                  }}
                  className="absolute w-44 h-44 rounded-full border-2 border-[#D4AF37] shadow-2xl pointer-events-none z-20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 pointer-events-none" />
                </div>
              )}

              {/* Helper Tag */}
              <div className="absolute bottom-3 left-3 bg-[#3A070F]/90 text-[#E8D9B5] text-[10px] uppercase tracking-wider px-3 py-1 border border-[#D4AF37]/40 pointer-events-none">
                {isHovering ? "10x Zari Density Active" : "Hover over fabric to magnify weave"}
              </div>
            </div>

            <p className="mt-2 text-neutral-500 text-xs italic font-serif text-center">
              True-scale optical scan of 24K pure gold warp threads and interlocking Korvai joints.
            </p>
          </div>

          {/* Right: Technical Weave Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#5A0E1A] font-semibold">
                Authenticity Dossier
              </span>
              <h4 className="font-cinzel text-2xl font-bold text-[#3A070F] mt-1">
                Weave & Metallurgical Report
              </h4>
              <p className="text-lg font-bold text-[#111111] mt-1">
                {formatPrice(activeInspectProduct)}
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="space-y-3 bg-white p-4 border border-[#D4AF37]/30 text-xs divide-y divide-neutral-100">
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 uppercase tracking-wider">Silk Standard</span>
                <span className="font-semibold text-neutral-800 text-right">{activeInspectProduct.silkType}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 uppercase tracking-wider">Zari Composition</span>
                <span className="font-semibold text-[#5A0E1A] text-right">{activeInspectProduct.zariGrade}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 uppercase tracking-wider">Loom Technique</span>
                <span className="font-semibold text-neutral-800 text-right">{activeInspectProduct.weavingTechnique}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 uppercase tracking-wider">Fabric Weight</span>
                <span className="font-semibold text-neutral-800">{activeInspectProduct.weightGrams} grams</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 uppercase tracking-wider">Sacred Motifs</span>
                <span className="font-semibold text-neutral-800 text-right">{activeInspectProduct.motif}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 uppercase tracking-wider">Geographic Origin</span>
                <span className="font-semibold text-neutral-800">{activeInspectProduct.origin}</span>
              </div>
            </div>

            {/* Silk Mark Seal Alert */}
            <div className="p-3.5 bg-[#5A0E1A]/10 border border-[#5A0E1A]/20 flex items-start gap-2.5 text-xs text-[#5A0E1A]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Certified Silk Mark Attached</span>
                <span>Includes serialized QR verification code by Central Silk Board of India.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  addToCart(activeInspectProduct, "unstitched");
                  setActiveInspectProduct(null);
                }}
                className="w-full py-3.5 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-xs uppercase tracking-[0.25em] font-semibold transition-colors border border-[#D4AF37]/50 shadow-md"
              >
                Add Masterwork to Bag
              </button>

              <button
                onClick={() => setActiveInspectProduct(null)}
                className="w-full py-2.5 text-center text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-900"
              >
                Return to Showcase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
