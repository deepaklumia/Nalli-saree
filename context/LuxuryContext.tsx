"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export type Currency = "INR" | "USD" | "GBP" | "AED";

export interface CartItem {
  product: Product;
  quantity: number;
  blouseOption: "unstitched" | "bespoke" | "zardosi";
}

interface LuxuryContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (product: Product) => string;
  cart: CartItem[];
  addToCart: (product: Product, blouseOption?: "unstitched" | "bespoke" | "zardosi") => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  cartCount: number;
  cartSubtotalINR: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  activeInspectProduct: Product | null;
  setActiveInspectProduct: (product: Product | null) => void;
  quickShopProduct: Product | null;
  setQuickShopProduct: (product: Product | null) => void;
  appointmentModalBoutique: string | null;
  setAppointmentModalBoutique: (boutique: string | null) => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

const LuxuryContext = createContext<LuxuryContextType | undefined>(undefined);

export const LuxuryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(["nalli-01"]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeInspectProduct, setActiveInspectProduct] = useState<Product | null>(null);
  const [quickShopProduct, setQuickShopProduct] = useState<Product | null>(null);
  const [appointmentModalBoutique, setAppointmentModalBoutique] = useState<string | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Initialize from default or local storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("nalli_luxury_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        // Initial sample item to showcase the luxury bag
        setCart([{ product: PRODUCTS[0], quantity: 1, blouseOption: "unstitched" }]);
      }
      const savedWishlist = localStorage.getItem("nalli_luxury_wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch (e) {
      console.warn("Storage not available", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("nalli_luxury_cart", JSON.stringify(cart));
    } catch (e) {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("nalli_luxury_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      // ignore
    }
  }, [wishlist]);

  // Luxury Web Audio Tanpura/Chime sound effect
  const playLuxuryChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;
      
      const freqs = [554.37, 659.25, 830.61, 1108.73]; // C# Minor Pentatonic luxury chime
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.3);
      });
    } catch (e) {
      // audio context blocked or unsupported
    }
  };

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
    playLuxuryChime();
  };

  const formatPrice = (product: Product): string => {
    switch (currency) {
      case "USD":
        return `$${product.priceUSD.toLocaleString("en-US")}`;
      case "GBP":
        return `£${product.priceGBP.toLocaleString("en-GB")}`;
      case "AED":
        return `AED ${product.priceAED.toLocaleString("en-AE")}`;
      case "INR":
      default:
        return `₹${product.priceINR.toLocaleString("en-IN")}`;
    }
  };

  const addToCart = (product: Product, blouseOption: "unstitched" | "bespoke" | "zardosi" = "unstitched") => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.blouseOption === blouseOption);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.blouseOption === blouseOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, blouseOption }];
    });
    playLuxuryChime();
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        playLuxuryChime();
        return [...prev, productId];
      }
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotalINR = cart.reduce((acc, item) => {
    let extra = 0;
    if (item.blouseOption === "bespoke") extra = 4500;
    if (item.blouseOption === "zardosi") extra = 12500;
    return acc + (item.product.priceINR + extra) * item.quantity;
  }, 0);

  return (
    <LuxuryContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotalINR,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        activeInspectProduct,
        setActiveInspectProduct,
        quickShopProduct,
        setQuickShopProduct,
        appointmentModalBoutique,
        setAppointmentModalBoutique,
        isAudioPlaying,
        toggleAudio,
      }}
    >
      {children}
    </LuxuryContext.Provider>
  );
};

export const useLuxury = () => {
  const context = useContext(LuxuryContext);
  if (!context) {
    throw new Error("useLuxury must be used within a LuxuryProvider");
  }
  return context;
};
