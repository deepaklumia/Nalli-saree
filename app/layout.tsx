import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nalli Silks | Modern Heirlooms & Pure Silk Sarees Since 1928",
  description:
    "Discover exquisite handwoven Kanchipuram silk sarees, pure gold zari bridal heirlooms, and imperial weaves. Purveyors of royal craftsmanship since 1928. Free insured worldwide shipping.",
  keywords: [
    "Nalli Silks",
    "Kanchipuram Silk Saree",
    "Bridal Saree",
    "Pure Zari Saree",
    "Indian Luxury Fashion",
    "Handloom Silk",
    "Sabyasachi style luxury",
    "Wedding Trousseau",
  ],
  authors: [{ name: "Nalli Silks Heritage House" }],
  openGraph: {
    title: "Nalli Silks | Modern Heirlooms Since 1928",
    description:
      "Where timeless Indian craftsmanship meets contemporary luxury. Discover pure handwoven silk sarees crafted for generations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Nalli Royal Kanchipuram Silk Saree",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-[#F8F4ED] text-[#111111] min-h-screen flex flex-col selection:bg-[#5A0E1A] selection:text-[#D4AF37]">
        {children}
      </body>
    </html>
  );
}
