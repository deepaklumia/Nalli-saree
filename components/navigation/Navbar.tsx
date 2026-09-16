"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  Sparkles,
  ShieldCheck,
  Globe
} from "lucide-react";
import { useLuxury, Currency } from "@/context/LuxuryContext";

export const Navbar: React.FC = () => {
  const {
    currency,
    setCurrency,
    cartCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsSearchOpen,
    isAudioPlaying,
    toggleAudio,
  } = useLuxury();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currencies: Currency[] = ["INR", "USD", "GBP", "AED"];

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#3A070F] text-[#E8D9B5] text-[11px] tracking-[0.2em] uppercase py-2 px-4 border-b border-[#D4AF37]/20 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>100% Pure Silk Mark Certified • Tested 24K Sovereign Gold Zari</span>
          </div>
          <div className="mx-auto md:mx-0 text-center flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span>Purveyors of Pure Silks Since 1928 • Free Insured Worldwide Delivery</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-[10px]">
            <span>Chennai • London • Singapore • Dallas</span>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#5A0E1A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#D4AF37]/30 mt-0"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 mt-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Mobile Toggle & Desktop Navigation */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#E8D9B5] hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 text-[12px] uppercase tracking-[0.22em] font-medium text-[#F8F4ED]">
              <div 
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setMegaMenuHover(true)}
                onMouseLeave={() => setMegaMenuHover(false)}
              >
                <Link 
                  href="#collections" 
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 py-1 border-b border-transparent hover:border-[#D4AF37]"
                >
                  Sarees
                  <ChevronDown className="w-3 h-3 text-[#D4AF37]" />
                </Link>

                {/* Mega Menu Dropdown */}
                {megaMenuHover && (
                  <div className="absolute top-full left-0 w-[520px] bg-[#3A070F]/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl p-6 text-[#F8F4ED] rounded-none animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-3 border-b border-[#D4AF37]/20 pb-1">
                          Imperial Weaves
                        </p>
                        <ul className="space-y-2 text-[13px] font-light">
                          <li><a href="#featured" className="hover:text-[#D4AF37] block">Authentic Kanchipuram</a></li>
                          <li><a href="#featured" className="hover:text-[#D4AF37] block">Pure Gold Zari Korvai</a></li>
                          <li><a href="#featured" className="hover:text-[#D4AF37] block">Sona-Chandi Dual Luster</a></li>
                          <li><a href="#featured" className="hover:text-[#D4AF37] block">Madisar 9-Yard Silks</a></li>
                          <li><a href="#featured" className="hover:text-[#D4AF37] block">Tissue Organza & Tussar</a></li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-3 border-b border-[#D4AF37]/20 pb-1">
                          Occasions & Edits
                        </p>
                        <ul className="space-y-2 text-[13px] font-light">
                          <li><a href="#wedding" className="hover:text-[#D4AF37] block">The Muhurtham Bridal Edit</a></li>
                          <li><a href="#collections" className="hover:text-[#D4AF37] block">Varalakshmi Pooja Weaves</a></li>
                          <li><a href="#collections" className="hover:text-[#D4AF37] block">Royal Reception Drape</a></li>
                          <li><a href="#collections" className="hover:text-[#D4AF37] block">Lightweight Contemporary</a></li>
                          <li><a href="#craftsmanship" className="hover:text-[#D4AF37] text-[#D4AF37] font-medium block">The Korvai Masterclass →</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="#collections" className="hover:text-[#D4AF37] transition-colors py-1 border-b border-transparent hover:border-[#D4AF37]">
                Festive
              </Link>
              <Link href="#wedding" className="hover:text-[#D4AF37] transition-colors py-1 border-b border-transparent hover:border-[#D4AF37]">
                Wedding Edit
              </Link>
              <Link href="#featured" className="hover:text-[#D4AF37] transition-colors py-1 border-b border-transparent hover:border-[#D4AF37]">
                New Arrivals
              </Link>
              <Link href="#heritage" className="hover:text-[#D4AF37] transition-colors py-1 border-b border-transparent hover:border-[#D4AF37]">
                Heritage
              </Link>
              <Link href="#boutiques" className="hover:text-[#D4AF37] transition-colors py-1 border-b border-transparent hover:border-[#D4AF37]">
                Boutiques
              </Link>
              <Link href="#journal" className="hover:text-[#D4AF37] transition-colors py-1 border-b border-transparent hover:border-[#D4AF37]">
                Journal
              </Link>
            </nav>
          </div>

          {/* Center: Brand Crest & Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="group flex flex-col items-center">
              {/* Royal Temple Arch Crest */}
              <div className="flex items-center gap-1.5 mb-1 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] text-[11px] tracking-[0.3em]">ESTD</span>
                <span className="text-[#D4AF37] font-serif text-sm italic font-bold">1928</span>
                <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
              </div>
              <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl tracking-[0.25em] text-[#F8F4ED] font-bold group-hover:text-gold-gradient transition-all duration-300">
                NALLI
              </h1>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#E8D9B5] font-light mt-0.5">
                SILKS • MADRAS
              </span>
            </Link>
          </div>

          {/* Right: Currency, Soundscape, Search, Wishlist, Account, Bag */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-[#F8F4ED]">
            
            {/* Currency Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 text-[11px] tracking-wider uppercase text-[#E8D9B5] hover:text-[#D4AF37] transition-colors py-1 px-2 border border-[#D4AF37]/30 rounded-none"
              >
                <Globe className="w-3 h-3 text-[#D4AF37]" />
                <span>{currency}</span>
                <ChevronDown className="w-2.5 h-2.5 text-[#D4AF37]" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#3A070F] border border-[#D4AF37]/40 shadow-xl py-1 z-50 animate-in fade-in">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-[11px] uppercase tracking-wider hover:bg-[#5A0E1A] hover:text-[#D4AF37] transition-colors flex items-center justify-between ${
                        currency === curr ? "text-[#D4AF37] font-semibold bg-[#5A0E1A]/60" : "text-[#F8F4ED]"
                      }`}
                    >
                      <span>{curr}</span>
                      <span className="text-[10px] text-[#E8D9B5]/60">
                        {curr === "INR" ? "₹" : curr === "USD" ? "$" : curr === "GBP" ? "£" : "AED"}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleAudio}
              className="text-[#E8D9B5] hover:text-[#D4AF37] transition-colors p-1.5 relative group"
              title={isAudioPlaying ? "Mute Royal Tanpura Sound" : "Listen to Royal Sitar Harmony"}
              aria-label="Soundscape toggle"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#E8D9B5]/80 hover:text-white" />
              )}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] bg-black/90 text-[#D4AF37] px-2 py-0.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider border border-[#D4AF37]/30">
                {isAudioPlaying ? "Chime On" : "Royal Sound"}
              </span>
            </button>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-[#E8D9B5] hover:text-[#D4AF37] transition-colors p-1.5"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="text-[#E8D9B5] hover:text-[#D4AF37] transition-colors p-1.5 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#3A070F] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Account / Private Client Concierge */}
            <button
              onClick={() => {
                const boutiqueSec = document.getElementById("boutiques");
                boutiqueSec?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:block text-[#E8D9B5] hover:text-[#D4AF37] transition-colors p-1.5"
              title="Private Client Concierge"
              aria-label="Account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Shopping Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 bg-[#D4AF37]/15 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/40 px-3 py-1.5 text-[#E8D9B5] hover:text-[#FFFFFF] transition-all group"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="text-[11px] tracking-wider uppercase font-semibold hidden sm:inline">Bag</span>
              <span className="bg-[#D4AF37] text-[#3A070F] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-start animate-in fade-in duration-300">
          <div className="w-[320px] bg-[#3A070F] h-full p-6 text-[#F8F4ED] border-r border-[#D4AF37]/30 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
                <div className="text-left">
                  <h2 className="font-cinzel text-xl text-[#F8F4ED] tracking-widest font-bold">NALLI</h2>
                  <p className="text-[9px] text-[#D4AF37] tracking-[0.3em] uppercase">Estd 1928 Madras</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#E8D9B5] hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Currency Bar */}
              <div className="mt-4 flex items-center gap-2 border border-[#D4AF37]/30 p-2">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[11px] text-[#E8D9B5] uppercase">Currency:</span>
                <div className="flex gap-2">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`text-[10px] px-1.5 py-0.5 uppercase ${
                        currency === curr ? "bg-[#D4AF37] text-[#3A070F] font-bold" : "text-[#F8F4ED]"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col space-y-4 text-[13px] tracking-[0.2em] uppercase font-light">
                <a
                  href="#collections"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Signature Collections</span>
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                </a>
                <a
                  href="#featured"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5"
                >
                  Pure Kanchipuram Sarees
                </a>
                <a
                  href="#wedding"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5"
                >
                  Bridal & Festive Edit
                </a>
                <a
                  href="#craftsmanship"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5"
                >
                  The Weaving Craft
                </a>
                <a
                  href="#heritage"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5"
                >
                  Heritage Since 1928
                </a>
                <a
                  href="#boutiques"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5"
                >
                  Global Flagships
                </a>
                <a
                  href="#journal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4AF37] py-1 border-b border-white/5"
                >
                  The Saree Gazette
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/20 text-[11px] text-[#E8D9B5]/80 space-y-2">
              <p>Bespoke Bridal Appointments: +91 44 2434 4115</p>
              <p className="text-[10px] text-[#D4AF37]">Insured Express Worldwide Shipping</p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};
