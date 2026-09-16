"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles, User, Mail, Phone } from "lucide-react";
import { useLuxury } from "@/context/LuxuryContext";
import { GLOBAL_BOUTIQUES } from "@/data/boutiques";
import confetti from "canvas-confetti";

export const AppointmentModal: React.FC = () => {
  const { appointmentModalBoutique, setAppointmentModalBoutique } = useLuxury();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boutique: appointmentModalBoutique || "Chennai",
    date: "",
    timeSlot: "11:00 AM - 1:00 PM (Auspicious Morning Slot)",
    serviceType: "Imperial Bridal Trousseau (Private Salon)",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!appointmentModalBoutique) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ["#D4AF37", "#5A0E1A", "#FFFFFF"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] border border-[#D4AF37]/50 shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-5 bg-[#3A070F] text-[#F8F4ED] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] font-semibold">
                Private Client Concierge
              </span>
            </div>
            <h3 className="font-cinzel text-xl text-white mt-0.5">
              Reserve Private Boutique Salon
            </h3>
          </div>
          <button
            onClick={() => {
              setAppointmentModalBoutique(null);
              setIsSubmitted(false);
            }}
            className="text-[#E8D9B5] hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#5A0E1A] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-xl border border-[#D4AF37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-[#3A070F]">
                Salon Reserved
              </h4>
              <p className="text-sm font-serif italic text-neutral-600 max-w-md mx-auto">
                Thank you, {formData.name || "Esteemed Patron"}. Your private bridal stylist at our {formData.boutique} boutique has reserved your salon slot. You will receive a bespoke confirmation via telephone and encrypted email.
              </p>
              <div className="p-4 bg-white border border-[#D4AF37]/30 text-xs space-y-1 text-left max-w-sm mx-auto">
                <p><span className="font-semibold text-[#5A0E1A]">Salon:</span> {formData.boutique} Flagship</p>
                <p><span className="font-semibold text-[#5A0E1A]">Service:</span> {formData.serviceType}</p>
                <p><span className="font-semibold text-[#5A0E1A]">Time:</span> {formData.timeSlot}</p>
              </div>
              <button
                onClick={() => {
                  setAppointmentModalBoutique(null);
                  setIsSubmitted(false);
                }}
                className="mt-4 px-6 py-2.5 bg-[#5A0E1A] text-[#E8D9B5] text-xs uppercase tracking-widest font-semibold hover:bg-[#3A070F]"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                  Full Name of Patron / Bride
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sundaram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-neutral-300 focus:outline-none focus:border-[#5A0E1A] bg-white text-neutral-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-neutral-300 focus:outline-none focus:border-[#5A0E1A] bg-white text-neutral-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                    Telephone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-neutral-300 focus:outline-none focus:border-[#5A0E1A] bg-white text-neutral-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                    Preferred Boutique
                  </label>
                  <select
                    value={formData.boutique}
                    onChange={(e) => setFormData({ ...formData, boutique: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-[#5A0E1A]"
                  >
                    {GLOBAL_BOUTIQUES.map((b) => (
                      <option key={b.id} value={b.city}>
                        {b.city} ({b.country})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-[#5A0E1A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                  Service Selection
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-[#5A0E1A]"
                >
                  <option>Imperial Bridal Trousseau (Private Salon)</option>
                  <option>Virtual Live Video Saree Presentation (Worldwide)</option>
                  <option>Madisar 9-Yard Traditional Consultation</option>
                  <option>Heirloom Zari Restoration & Valuation</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#3A070F] font-bold mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-[#5A0E1A]"
                >
                  <option>11:00 AM - 1:00 PM (Auspicious Morning Slot)</option>
                  <option>2:30 PM - 4:30 PM (Afternoon Private Salon)</option>
                  <option>5:30 PM - 7:30 PM (Evening Candlelit Draping)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 bg-[#5A0E1A] hover:bg-[#3A070F] text-[#E8D9B5] text-xs uppercase tracking-[0.25em] font-semibold border border-[#D4AF37]/50 shadow-lg transition-colors"
              >
                Confirm Private Salon Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
