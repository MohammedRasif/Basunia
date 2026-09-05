import type { Metadata } from "next";
import LawyersHeroBanner from "@/app/components/lawyers/LawyersHeroBanner";
import LawyersGridSection from "@/app/components/lawyers/LawyersGridSection";

export const metadata: Metadata = {
  title: "Our Team | Basunia & Associate",
  description:
    "Meet our team of experienced lawyers and legal professionals at Basunia & Associate, dedicated to providing high-quality counsel and courtroom representation.",
};

export default function OurLawyersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 pb-16 lg:pb-24">
      {/* 1. Hero Banner Section */}
      <LawyersHeroBanner />

      {/* 2. Team Grid Section */}
      <LawyersGridSection />
    </div>
  );
}
