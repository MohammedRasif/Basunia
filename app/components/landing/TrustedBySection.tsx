"use client";
import { useState } from "react";

interface ClientLogo {
  id: string;
  name: string;
  src: string;
  category: string;
  widthClass?: string;
  heightClass?: string;
}

const allCategories = [
  "Local",
  "International",
  "Government",
  "Bank & Financial Institution",
  "Textile Mills",
  "Admiralty/ Maritime",
];

// Row 1 Base Logos (5 unique logos)
const baseRow1: ClientLogo[] = [
  { id: "banglalink", name: "Banglalink", src: "/assets/images/clients/banglalink.svg", category: "Local", heightClass: "h-6 sm:h-7 lg:h-8" },
  { id: "crack-brigade", name: "Crack Brigade", src: "/assets/images/clients/crack-brigade.svg", category: "Local", heightClass: "h-4 sm:h-5 lg:h-[22px]" },
  { id: "solstice", name: "Solstice", src: "/assets/images/clients/solstice.svg", category: "Local", heightClass: "h-6 sm:h-7 lg:h-8" },
  { id: "city-bank", name: "City Bank", src: "/assets/images/clients/city-bank.svg", category: "Bank & Financial Institution", heightClass: "h-10 sm:h-12 lg:h-14" },
  { id: "rokomari", name: "Rokomari", src: "/assets/images/clients/rokomari.svg", category: "Local", heightClass: "h-7 sm:h-8 lg:h-9" },
];

// Row 2 Base Logos (5 unique logos)
const baseRow2: ClientLogo[] = [
  { id: "aamra", name: "aamra", src: "/assets/images/clients/aamra.svg", category: "Local", heightClass: "h-5 sm:h-6 lg:h-7" },
  { id: "bme", name: "BME Office Solutions", src: "/assets/images/clients/bme.svg", category: "Local", heightClass: "h-8 sm:h-9 lg:h-10" },
  { id: "square", name: "Square", src: "/assets/images/clients/square.svg", category: "Textile Mills", heightClass: "h-11 sm:h-13 lg:h-15" },
  { id: "giveme-deals", name: "GiveMe Deals", src: "/assets/images/clients/giveme-deals.svg", category: "Local", heightClass: "h-6 sm:h-7 lg:h-8" },
  { id: "tila", name: "TILA Empresa Platform", src: "/assets/images/clients/tila.svg", category: "International", heightClass: "h-6 sm:h-7 lg:h-8" },
];

export default function TrustedBySection() {
  const [activeCategory, setActiveCategory] = useState("Local");

  // Duplicate for smooth continuous seamless marquee
  const row1Repeated = [...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1];
  const row2Repeated = [...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2];

  return (
    <section className="relative w-full bg-white pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Row: Left Title + Right Description */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Left Title Area */}
          <div className="max-w-xl">
            <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-[32px] lg:text-[36px] text-[#141414] font-normal leading-[1.18] tracking-tight">
              Trusted by Businesses &amp;
              <br className="hidden sm:inline" />
              {" "}Leading Organizations
            </h2>
          </div>

          {/* Right Description */}
          <div className="max-w-xl lg:max-w-lg">
            <p className="font-switzer text-xs sm:text-sm md:text-[14px] text-[#555555] leading-[1.65] font-normal">
              We are proud to work with a diverse range of businesses and organizations. Our client relationships reflect the trust, professionalism, and confidence placed in our legal expertise.
            </p>
          </div>
        </div>

        {/* Category Tabs Bar */}
        <div className="border-b border-[#E5E5E5] mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth">
            {allCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-3 text-xs sm:text-sm md:text-[14px] font-switzer whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-[#141414] font-medium"
                      : "text-[#737373] hover:text-[#141414] font-normal"
                  }`}
                >
                  {category}
                  {/* Active Indicator Underline Bar */}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#8E1831] animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= Continuous Smooth Infinite Marquee with Snug Side-by-Side Gaps ================= */}
        <div className="relative w-full flex flex-col gap-6 sm:gap-7 lg:gap-8 overflow-hidden select-none py-1">
          {/* Left & Right Subtle Fade Overlays for Edge Softness */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 lg:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 lg:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Row 1 Marquee (Leftward scrolling) */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee gap-7 sm:gap-9 lg:gap-11 items-center">
              {row1Repeated.map((logo, idx) => (
                <div
                  key={`marquee-r1-${logo.id}-${idx}`}
                  className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`${logo.heightClass || "h-7 sm:h-8"} w-auto max-w-none object-contain block`}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Marquee (Smooth continuous reverse/alternating scrolling) */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-reverse gap-7 sm:gap-9 lg:gap-11 items-center">
              {row2Repeated.map((logo, idx) => (
                <div
                  key={`marquee-r2-${logo.id}-${idx}`}
                  className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`${logo.heightClass || "h-8 sm:h-9"} w-auto max-w-none object-contain block`}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
