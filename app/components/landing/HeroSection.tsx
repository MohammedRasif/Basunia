"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#EDEDED] via-[#F4F5F7] to-[#E3E5E8] pt-32 sm:pt-36 md:pt-40 lg:pt-44">
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,rgba(255,255,255,0.95),rgba(235,238,242,0)_80%)] pointer-events-none" />

      {/* Main Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-28">
        
        {/* Centered Main Hero Text Block */}
        <div className="relative z-20 max-w-2xl lg:max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
          
          {/* Cursive Subtitle */}
          <p
            className="font-marck-script text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#222222]  mb-1 sm:mb-2 "

          >
            We help good people
          </p>

          {/* Main Headline */}
          <h1
            className="font-dm-serif-text text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#141414] tracking-tight leading-[1.12] mb-4 sm:mb-5"
          >
            Through the bad time
          </h1>

          {/* Subtitle Paragraph */}
          <p
            className="font-switzer text-slate-600 text-xs sm:text-sm md:text-base max-w-md md:max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
          >
            We strive to explain the most complex legal issues in an easy to understand manner.
          </p>

          {/* Centered CTA Action Buttons */}
          <div className="font-poppins flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            
            {/* Schedule Consultation Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#8E1831] text-white text-lg sm:text-base shadow-md shadow-[#8E1831]/20 hover:bg-[#761328] hover:shadow-lg hover:shadow-[#8E1831]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Schedule consultation</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8801956565462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-white text-slate-800  text-lg sm:text-base shadow-sm border border-slate-200/90 hover:bg-slate-50 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-[#25D366] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Right Side 3D Gavel - positioned cleanly at the right side bottom */}
        <div className="mt-8 lg:mt-0 flex justify-center lg:block lg:absolute lg:right-0 xl:right-6 2xl:right-16 lg:bottom-4 xl:bottom-6 pointer-events-none z-10">
          <div className="relative w-52 sm:w-60 md:w-68 lg:w-[280px] xl:w-[320px] 2xl:w-[350px] aspect-square transition-transform duration-500 hover:scale-105">
            <Image
              src="/assets/images/gavel.png"
              alt="Judge Gavel and Sound Block"
              width={600}
              height={600}
              priority
              className="w-full h-full object-contain select-none"
            />
          </div>
        </div>

      </div>

      {/* Bottom Features & Trust Bar */}
      <div className="w-full border-t border-slate-300/80 bg-[#E2E5E8]/90 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="font-inter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-300/80">
            
            {/* 1. Free Consultation */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:px-6">
              <div className="text-[#8E1831] shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3a7 7 0 017 7m-3-7a4 4 0 014 4"
                  />
                </svg>
              </div>
              <span
                className=" font-semibold text-slate-800 text-sm sm:text-base tracking-tight"               
              >
                Get a Free Consultation
              </span>
            </div>

            {/* 2. Trusted Referral Destination */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:px-6">
              <div className="text-[#8E1831] shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span
                className=" font-semibold text-slate-800 text-sm sm:text-base tracking-tight"
                
              >
                A Trusted Referral Destination
              </span>
            </div>

            {/* 3. 20 Years of Experience */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:px-6">
              <div className="text-[#8E1831] shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <span
                className=" font-semibold text-slate-800 text-sm sm:text-base tracking-tight uppercase"
                
              >
                20 YEARS OF EXPERIENCE
              </span>
            </div>

            {/* 4. 1K+ Cases */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:px-6">
              <div className="text-[#8E1831] shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <span
                className="font-semibold text-slate-800 text-sm sm:text-base tracking-tight uppercase"
                
              >
                1K+ CASES
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}