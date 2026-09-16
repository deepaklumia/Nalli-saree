"use client";

import React from "react";
import Image from "next/image";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export const SareeJournal: React.FC = () => {
  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#F8F4ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D4AF37]/30">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A0E1A] font-semibold">
                Textile Gazette & Styling
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A070F] tracking-tight">
              The Saree Gazette
            </h2>
            <p className="mt-2 text-neutral-600 font-serif text-lg italic max-w-xl">
              Curated essays on South Indian weaving lore, 100-year silk preservation, and contemporary bridal draping.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5A0E1A] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>Volume 98 • Issue Autumn 2026</span>
            </span>
          </div>
        </div>

        {/* 4-Grid Editorial Magazine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#D4AF37]/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Article Cover */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#3A070F]/90 text-[#E8D9B5] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold border border-[#D4AF37]/40">
                    {article.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-[#3A070F] group-hover:text-[#5A0E1A] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => alert(`Opening complete archival essay: "${article.title}"`)}
                  className="w-full pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-[#5A0E1A] group-hover:text-[#3A070F] transition-colors"
                >
                  <span>Read Archival Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
