import GalleryHeroBanner from "@/app/components/gallery/GalleryHeroBanner";
import GalleryGridSection from "@/app/components/gallery/GalleryGridSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery & Professional Moments | Basunia & Associate",
  description:
    "Explore photo highlights from Basunia & Associate's court appearances, chamber discussions, international legal conferences, and client consultations in Dhaka, Bangladesh.",
  openGraph: {
    title: "Gallery & Professional Moments | Basunia & Associate",
    description:
      "A glimpse into our courtroom advocacy, legal conferences, and chambers environment.",
    images: ["/assets/images/gallery/gallery-img-7.webp"],
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 pb-12 sm:pb-20">
      {/* 1. Hero Banner */}
      <GalleryHeroBanner
        title="GALLERY"
        subtitle="A glimpse into our chambers, Supreme Court advocacy, legal workshops, and distinguished corporate conferences."
      />

      {/* 2. Interactive Filterable Gallery Grid with Fullscreen Lightbox */}
      <GalleryGridSection />
    </div>
  );
}
