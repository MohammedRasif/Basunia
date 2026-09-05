import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Our Lawyers | Basunia & Associate",
  description:
    "Meet our team of experienced lawyers and legal professionals at Basunia & Associate, dedicated to providing high-quality counsel and courtroom representation.",
};

export default function OurLawyersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 pb-16 lg:pb-24">
      {/* ================= 1. Hero Banner Section (OUR TEAM) ================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Image: Frame 2147229286.png */}
        <Image
          src="/assets/images/Frame 2147229286.png"
          alt="Our Team Banner"
          fill
          priority
          className=""
        />

        {/* Subtle Dark Overlay */}
        

        {/* Centered Main Headline */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex items-center justify-center">
          <h1 className="font-dm-serif-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[0.08em] font-normal text-white uppercase select-none drop-shadow-sm">
            OUR TEAM
          </h1>
        </div>
      </section>
    </div>
  );
}
