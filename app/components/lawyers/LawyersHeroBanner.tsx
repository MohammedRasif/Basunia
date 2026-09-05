"use client";

import Image from "next/image";

interface LawyersHeroBannerProps {
  title?: string;
  bgImage?: string;
}

export default function LawyersHeroBanner({
  title = "OUR TEAM",
  bgImage = "/assets/images/Frame 2147229286.png",
}: LawyersHeroBannerProps) {
  return (
    <section className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Our Team Banner"
        fill
        priority
        className=""
      />


      {/* Centered Main Headline */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex items-center justify-center">
        <h1 className="font-dm-serif-text text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0.08em] font-normal text-white uppercase select-none drop-shadow-sm">
          {title}
        </h1>
      </div>
    </section>
  );
}
