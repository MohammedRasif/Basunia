"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface GalleryMosaicItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category?: string;
  description?: string;
}

export default function GalleryGridSection() {
  const [selectedImage, setSelectedImage] = useState<GalleryMosaicItem | null>(null);

  // Set 1: Chambers & Legal Environment (Same 6 images as homepage)
  const set1Images = {
    col1Bottom: {
      id: "set1-1",
      src: "/assets/images/gallery/gallery-img-1.webp",
      alt: "Legal consultation and document review in conference room",
      caption: "Legal Consultation & Document Review",
      category: "Consultations & Clients",
      description: "In-depth case evaluation and client consultation session in our executive conference room.",
    },
    col2Top: {
      id: "set1-2",
      src: "/assets/images/gallery/gallery-img-2.webp",
      alt: "Judicial strategy and case analysis on legal dossier",
      caption: "Judicial Strategy & Case Analysis",
      category: "Court & Strategy",
      description: "Senior advocates strategizing litigation arguments and cross-referencing precedent records.",
    },
    col2Bottom: {
      id: "set1-3",
      src: "/assets/images/gallery/gallery-img-3.webp",
      alt: "Commercial settlement and corporate agreement in law firm",
      caption: "Commercial Settlement & Agreement",
      category: "Chamber & Practice",
      description: "Corporate law associates reviewing structured settlement terms and commercial contracts.",
    },
    col3Top: {
      id: "set1-4",
      src: "/assets/images/gallery/gallery-img-4.webp",
      alt: "Law library with vintage legal volumes and reference books",
      caption: "Comprehensive Legal Reference Library",
      category: "Library & Research",
      description: "Our historic legal reference library housing over 5,000 law reports and statutory compendiums.",
    },
    col3Bottom: {
      id: "set1-5",
      src: "/assets/images/gallery/gallery-img-5.webp",
      alt: "Case strategy and legal document analysis session",
      caption: "Case Strategy & Document Analysis",
      category: "Court & Strategy",
      description: "Collaborative litigation workshop examining judicial evidence and procedural timelines.",
    },
    col4Top: {
      id: "set1-6",
      src: "/assets/images/gallery/gallery-img-6.webp",
      alt: "Scales of justice and judicial gavel on legal desk",
      caption: "Professional Legal Representation",
      category: "Chamber & Practice",
      description: "Upholding judicial integrity, professional standards, and uncompromised client advocacy.",
    },
  };

  // Set 2: Courtroom Practice, Deals & Conferences (Set of 6 high-res moments)
  const set2Images = {
    col1Bottom: {
      id: "set2-1",
      src: "/assets/images/story-team.webp",
      alt: "Appellate team brief preparation and legal research",
      caption: "Appellate Team Brief Preparation",
      category: "Court & Strategy",
      description: "Legal researchers and advocates drafting appellate memorandums and legal submissions.",
    },
    col2Top: {
      id: "set2-2",
      src: "/assets/images/expertise-banner-meeting.webp",
      alt: "Corporate legal advisory and boardroom consultation",
      caption: "Corporate Advisory & Boardroom Counsel",
      category: "Chamber & Practice",
      description: "Advising enterprise stakeholders on regulatory compliance and corporate structuring.",
    },
    col2Bottom: {
      id: "set2-3",
      src: "/assets/images/gallery/gallery-img-8.webp",
      alt: "International legal seminar and keynote address on arbitration",
      caption: "International Legal Seminar & Keynote Address",
      category: "Events & Seminars",
      description: "Keynote presentation on arbitration frameworks and contemporary dispute resolution.",
    },
    col3Top: {
      id: "set2-4",
      src: "/assets/images/gallery/gallery-img-7.webp",
      alt: "Supreme Court practice and chamber conference",
      caption: "Supreme Court Practice & Chamber Conference",
      category: "Court & Strategy",
      description: "Partners and associates convening for a high-level briefing on upcoming appellate hearings.",
    },
    col3Bottom: {
      id: "set2-5",
      src: "/assets/images/gallery/gallery-img-9.webp",
      alt: "High-value agreement execution and contract signing ceremony",
      caption: "High-Value Agreement Execution & Signing",
      category: "Consultations & Clients",
      description: "Formal execution and closing ceremony for multinational commercial transactions.",
    },
    col4Top: {
      id: "set2-6",
      src: "/assets/images/whoweare.webp",
      alt: "Chambers leadership and courtroom counsel",
      caption: "Chambers Leadership & Courtroom Counsel",
      category: "Chamber & Practice",
      description: "Senior leadership setting strategic direction for firm practice and courtroom representation.",
    },
  };

  const allImagesList: GalleryMosaicItem[] = [
    set1Images.col1Bottom,
    set1Images.col2Top,
    set1Images.col2Bottom,
    set1Images.col3Top,
    set1Images.col3Bottom,
    set1Images.col4Top,
    set2Images.col1Bottom,
    set2Images.col2Top,
    set2Images.col2Bottom,
    set2Images.col3Top,
    set2Images.col3Bottom,
    set2Images.col4Top,
  ];

  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = allImagesList.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % allImagesList.length;
    setSelectedImage(allImagesList[nextIndex]);
  }, [selectedImage, allImagesList]);

  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = allImagesList.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + allImagesList.length) % allImagesList.length;
    setSelectedImage(allImagesList[prevIndex]);
  }, [selectedImage, allImagesList]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <div className="w-full bg-white space-y-12 sm:space-y-16 lg:space-y-20 py-4 sm:py-6 lg:py-8">
      
      {/* ========================================================================= */}
      {/* 1. FIRST MOSAIC BLOCK (Chambers & Legal Environment) */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">

          {/* ===== DESKTOP COLLAGE (Big & Small Asymmetric Layout matching Homepage) ===== */}
          <div className="hidden lg:block relative w-full aspect-[1024/536] select-none">
            
            {/* Image 1 (Col 1 Bottom: Two lawyers at table) */}
            <div
              onClick={() => setSelectedImage(set1Images.col1Bottom)}
              style={{ left: "0%", top: "29.85%", width: "24.22%" }}
              className="absolute aspect-[248/234] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set1Images.col1Bottom.src}
                alt={set1Images.col1Bottom.alt}
                fill
                unoptimized
                priority
                sizes="25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 2 (Col 2 Top: 3 colleagues in breakroom) */}
            <div
              onClick={() => setSelectedImage(set1Images.col2Top)}
              style={{ left: "26.07%", top: "20.15%", width: "23.63%" }}
              className="absolute aspect-[242/170] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set1Images.col2Top.src}
                alt={set1Images.col2Top.alt}
                fill
                unoptimized
                priority
                sizes="25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 3 (Col 2 Bottom: Team reviewing contracts) */}
            <div
              onClick={() => setSelectedImage(set1Images.col2Bottom)}
              style={{ left: "25.88%", top: "55.04%", width: "32.13%" }}
              className="absolute aspect-[329/173] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set1Images.col2Bottom.src}
                alt={set1Images.col2Bottom.alt}
                fill
                unoptimized
                priority
                sizes="33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 4 (Col 3 Top: Law library bookshelf) */}
            <div
              onClick={() => setSelectedImage(set1Images.col3Top)}
              style={{ left: "51.56%", top: "0%", width: "25.20%" }}
              className="absolute aspect-[258/278] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set1Images.col3Top.src}
                alt={set1Images.col3Top.alt}
                fill
                unoptimized
                priority
                sizes="26vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 5 (Col 3 Bottom: Boardroom meeting) */}
            <div
              onClick={() => setSelectedImage(set1Images.col3Bottom)}
              style={{ left: "59.86%", top: "54.85%", width: "30.18%" }}
              className="absolute aspect-[309/142] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set1Images.col3Bottom.src}
                alt={set1Images.col3Bottom.alt}
                fill
                unoptimized
                priority
                sizes="31vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 6 (Col 4 Top: 3 lawyers in suits) */}
            <div
              onClick={() => setSelectedImage(set1Images.col4Top)}
              style={{ left: "78.61%", top: "13.62%", width: "21.39%" }}
              className="absolute aspect-[219/205] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set1Images.col4Top.src}
                alt={set1Images.col4Top.alt}
                fill
                unoptimized
                priority
                sizes="22vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

          </div>

          {/* ===== MOBILE & TABLET COLLAGE (< lg) ===== */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div
                onClick={() => setSelectedImage(set1Images.col1Bottom)}
                className="relative aspect-[248/234] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set1Images.col1Bottom.src}
                  alt={set1Images.col1Bottom.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set1Images.col2Top)}
                className="relative aspect-[242/170] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set1Images.col2Top.src}
                  alt={set1Images.col2Top.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set1Images.col3Top)}
                className="relative aspect-[258/278] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set1Images.col3Top.src}
                  alt={set1Images.col3Top.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set1Images.col4Top)}
                className="relative aspect-[219/205] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set1Images.col4Top.src}
                  alt={set1Images.col4Top.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set1Images.col2Bottom)}
                className="relative aspect-[329/173] overflow-hidden bg-[#F2F3F5] cursor-pointer group sm:col-span-2"
              >
                <Image
                  src={set1Images.col2Bottom.src}
                  alt={set1Images.col2Bottom.alt}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set1Images.col3Bottom)}
                className="relative aspect-[309/142] overflow-hidden bg-[#F2F3F5] cursor-pointer group sm:col-span-2"
              >
                <Image
                  src={set1Images.col3Bottom.src}
                  alt={set1Images.col3Bottom.alt}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECOND MOSAIC BLOCK (Courtroom Advocacy, Seminars & Deal Signings) */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* ===== DESKTOP COLLAGE (Set 2 - Exact proportional non-overlapping formula) ===== */}
          <div className="hidden lg:block relative w-full aspect-[1024/536] select-none">
            
            {/* Image 1 (Col 1 Bottom: story-team) */}
            <div
              onClick={() => setSelectedImage(set2Images.col1Bottom)}
              style={{ left: "0%", top: "29.85%", width: "24.22%" }}
              className="absolute aspect-[248/234] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set2Images.col1Bottom.src}
                alt={set2Images.col1Bottom.alt}
                fill
                unoptimized
                priority
                sizes="25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 2 (Col 2 Top: expertise-banner-meeting) */}
            <div
              onClick={() => setSelectedImage(set2Images.col2Top)}
              style={{ left: "26.07%", top: "20.15%", width: "23.63%" }}
              className="absolute aspect-[242/170] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set2Images.col2Top.src}
                alt={set2Images.col2Top.alt}
                fill
                unoptimized
                priority
                sizes="25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 3 (Col 2 Bottom: gallery-img-8 International seminar) */}
            <div
              onClick={() => setSelectedImage(set2Images.col2Bottom)}
              style={{ left: "25.88%", top: "55.04%", width: "32.13%" }}
              className="absolute aspect-[329/173] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set2Images.col2Bottom.src}
                alt={set2Images.col2Bottom.alt}
                fill
                unoptimized
                priority
                sizes="33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 4 (Col 3 Top: gallery-img-7 Supreme Court conference) */}
            <div
              onClick={() => setSelectedImage(set2Images.col3Top)}
              style={{ left: "51.56%", top: "0%", width: "25.20%" }}
              className="absolute aspect-[258/278] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set2Images.col3Top.src}
                alt={set2Images.col3Top.alt}
                fill
                unoptimized
                priority
                sizes="26vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 5 (Col 3 Bottom: gallery-img-9 Agreement Signing) */}
            <div
              onClick={() => setSelectedImage(set2Images.col3Bottom)}
              style={{ left: "59.86%", top: "54.85%", width: "30.18%" }}
              className="absolute aspect-[309/142] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set2Images.col3Bottom.src}
                alt={set2Images.col3Bottom.alt}
                fill
                unoptimized
                priority
                sizes="31vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* Image 6 (Col 4 Top: whoweare Chambers Leadership) */}
            <div
              onClick={() => setSelectedImage(set2Images.col4Top)}
              style={{ left: "78.61%", top: "13.62%", width: "21.39%" }}
              className="absolute aspect-[219/205] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
            >
              <Image
                src={set2Images.col4Top.src}
                alt={set2Images.col4Top.alt}
                fill
                unoptimized
                priority
                sizes="22vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

          </div>

          {/* ===== MOBILE & TABLET COLLAGE (< lg) ===== */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div
                onClick={() => setSelectedImage(set2Images.col1Bottom)}
                className="relative aspect-[248/234] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set2Images.col1Bottom.src}
                  alt={set2Images.col1Bottom.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set2Images.col2Top)}
                className="relative aspect-[242/170] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set2Images.col2Top.src}
                  alt={set2Images.col2Top.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set2Images.col3Top)}
                className="relative aspect-[258/278] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set2Images.col3Top.src}
                  alt={set2Images.col3Top.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set2Images.col4Top)}
                className="relative aspect-[219/205] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
              >
                <Image
                  src={set2Images.col4Top.src}
                  alt={set2Images.col4Top.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set2Images.col2Bottom)}
                className="relative aspect-[329/173] overflow-hidden bg-[#F2F3F5] cursor-pointer group sm:col-span-2"
              >
                <Image
                  src={set2Images.col2Bottom.src}
                  alt={set2Images.col2Bottom.alt}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div
                onClick={() => setSelectedImage(set2Images.col3Bottom)}
                className="relative aspect-[309/142] overflow-hidden bg-[#F2F3F5] cursor-pointer group sm:col-span-2"
              >
                <Image
                  src={set2Images.col3Bottom.src}
                  alt={set2Images.col3Bottom.alt}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LIGHTBOX MODAL FOR FULL-SCREEN HIGH RESOLUTION VIEW */}
      {/* ========================================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white overflow-hidden shadow-2xl transition-all scale-100 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Left Prev Navigation Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 text-white hover:bg-[#8E1831] flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Next Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 text-white hover:bg-[#8E1831] flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Next photo"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* High-Res Photo Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>

            {/* Photo Metadata & Caption Footer */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                {selectedImage.category && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8E1831] block mb-1">
                    {selectedImage.category}
                  </span>
                )}
                <h3 className="font-dm-serif-text text-lg sm:text-2xl text-[#141414]">
                  {selectedImage.caption}
                </h3>
                {selectedImage.description && (
                  <p className="font-switzer text-xs sm:text-sm text-[#525252] mt-1 max-w-2xl leading-relaxed">
                    {selectedImage.description}
                  </p>
                )}
              </div>

              <div className="shrink-0 font-marcellus text-xs text-[#8E1831] uppercase tracking-wider font-semibold">
                Basunia &amp; Associate
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
