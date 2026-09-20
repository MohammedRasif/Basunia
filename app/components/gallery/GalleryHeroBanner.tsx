"use client";

import Image from "next/image";
import Link from "next/link";

interface GalleryHeroBannerProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
}

export default function GalleryHeroBanner({
  title = "GALLERY",
  subtitle = "A visual archive of our court advocacy, chambers culture, legal conferences, and distinguished client representation.",
  bgImage = "/assets/images/Frame 2147229286.webp",
}: GalleryHeroBannerProps) {
  return (
    <section className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Contrast Overlay */}
      <Image
        src={bgImage}
        alt="Gallery Hero Banner"
        fill
        priority
        className="object-cover object-center"
      />
    

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
       

        {/* Main Headline */}
        <h1 className="font-dm-serif-text text-3xl sm:text-4xl md:text-5xl lg:text-[60px] tracking-[0.08em] font-normal text-white uppercase select-none drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-switzer text-xs sm:text-sm md:text-base text-slate-200/90 max-w-2xl mt-3 sm:mt-4 leading-relaxed font-light px-2">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
