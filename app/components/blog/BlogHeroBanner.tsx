"use client";

import Image from "next/image";

interface BlogHeroBannerProps {
  title?: string;
  bgImage?: string;
}

export default function BlogHeroBanner({
  title = "BLOGS",
  bgImage = "/assets/images/Frame 2147229286.png",
}: BlogHeroBannerProps) {
  return (
    <section className="relative w-full h-[240px] sm:h-[300px] md:h-[380px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Blogs Hero Banner"
        fill
        priority
        className=""
      />

      {/* Centered Main Headline */}
      <div className="relative z-10 text-center px-4 mx-auto flex items-center justify-center">
        <h1 className="font-dm-serif-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[0.08em] font-normal text-white uppercase select-none drop-shadow-sm">
          {title}
        </h1>
      </div>
    </section>
  );
}
