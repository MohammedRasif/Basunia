"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images = {
    col1Bottom: {
      src: "/assets/images/gallery/gallery-img-1.jpg",
      alt: "Legal consultation and document review in conference room",
      caption: "Legal Consultation & Document Review",
    },
    col2Top: {
      src: "/assets/images/gallery/gallery-img-2.jpg",
      alt: "Associates collaborating and discussing legal matters",
      caption: "Collaborative Team Discussion",
    },
    col2Bottom: {
      src: "/assets/images/gallery/gallery-img-3.jpg",
      alt: "Legal team reviewing case files and contracts",
      caption: "Case Strategy & Contract Examination",
    },
    col3Top: {
      src: "/assets/images/gallery/gallery-img-4.jpg",
      alt: "Law library with vintage legal volumes and reference books",
      caption: "Comprehensive Legal Reference Library",
    },
    col3Bottom: {
      src: "/assets/images/gallery/gallery-img-5.jpg",
      alt: "Boardroom executive meeting and presentation",
      caption: "Executive Boardroom Session",
    },
    col4Top: {
      src: "/assets/images/gallery/gallery-img-6.jpg",
      alt: "Legal associates in formal suits conferring on client case",
      caption: "Professional Legal Representation",
    },
  };

  return (
    <section className="relative w-full bg-white  pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Tag: GALLERY */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="font-marcellus text-xs sm:text-sm md:text-[24px] tracking-[0.08em] text-[#262626] uppercase font-normal inline-block">
            GALLERY
          </span>
        </div>

        {/* ================= DESKTOP LAYOUT (Exact proportions matching reference design) ================= */}
        <div className="hidden lg:block relative w-full aspect-[1024/536] select-none">
          {/* 1. Heading & Description Text Block (Single-line Heading across to the Bookshelf) */}
          <div className="absolute left-0 top-0 w-[48%] max-w-[490px] xl:max-w-[510px]">
            <h2 className="font-dm-serif-text text-[19px] lg:text-[21.5px] xl:text-[25.5px] text-[#262626] font-normal leading-[1.25] tracking-tight whitespace-nowrap mb-2 xl:mb-2.5">
              A Glimpse Into Our Work &amp; Professional Environment
            </h2>
            <p className="font-switzer text-[11px] md:text-[14px] text-[#525252] leading-[1.55] font-normal max-w-[475px]">
              Explore moments from our team, office, legal events, meetings, and professional activities that reflect who we are and how we work.
            </p>
          </div>

          {/* 2. Image 1 (Col 1 Bottom: Two lawyers at table) */}
          <div
            onClick={() => setSelectedImage(images.col1Bottom)}
            style={{ left: "0%", top: "29.85%", width: "24.22%" }}
            className="absolute aspect-[248/234] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
          >
            <Image
              src={images.col1Bottom.src}
              alt={images.col1Bottom.alt}
              fill
              unoptimized
              priority
              sizes="25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* 3. Image 2 (Col 2 Top: 3 colleagues in breakroom) */}
          <div
            onClick={() => setSelectedImage(images.col2Top)}
            style={{ left: "26.07%", top: "20.15%", width: "23.63%" }}
            className="absolute aspect-[242/170] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
          >
            <Image
              src={images.col2Top.src}
              alt={images.col2Top.alt}
              fill
              unoptimized
              priority
              sizes="25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* 4. Image 3 (Col 2 Bottom: Team reviewing contracts) */}
          <div
            onClick={() => setSelectedImage(images.col2Bottom)}
            style={{ left: "25.88%", top: "55.04%", width: "32.13%" }}
            className="absolute aspect-[329/173] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
          >
            <Image
              src={images.col2Bottom.src}
              alt={images.col2Bottom.alt}
              fill
              unoptimized
              priority
              sizes="33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* 5. Image 4 (Col 3 Top: Law library bookshelf) */}
          <div
            onClick={() => setSelectedImage(images.col3Top)}
            style={{ left: "51.56%", top: "0%", width: "25.20%" }}
            className="absolute aspect-[258/278] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
          >
            <Image
              src={images.col3Top.src}
              alt={images.col3Top.alt}
              fill
              unoptimized
              priority
              sizes="26vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* 6. Image 5 (Col 3 Bottom: Boardroom meeting) */}
          <div
            onClick={() => setSelectedImage(images.col3Bottom)}
            style={{ left: "59.86%", top: "54.85%", width: "30.18%" }}
            className="absolute aspect-[309/142] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
          >
            <Image
              src={images.col3Bottom.src}
              alt={images.col3Bottom.alt}
              fill
              unoptimized
              priority
              sizes="31vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* 7. Image 6 (Col 4 Top: 3 lawyers in suits) */}
          <div
            onClick={() => setSelectedImage(images.col4Top)}
            style={{ left: "78.61%", top: "13.62%", width: "21.39%" }}
            className="absolute aspect-[219/205] overflow-hidden bg-[#F2F3F5] cursor-pointer group transition-all duration-300"
          >
            <Image
              src={images.col4Top.src}
              alt={images.col4Top.alt}
              fill
              unoptimized
              priority
              sizes="22vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* 8. "See more ↗" Button (Bottom Right) */}
          <div
            style={{ right: "0%", top: "92.5%" }}
            className="absolute z-10"
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 xl:px-6 xl:py-2.5 border border-[#8E1831] text-[#8E1831] font-switzer text-sm sm:text-[14.5px] font-normal transition-all duration-300 hover:bg-[#8E1831] hover:text-white group/btn active:scale-95 shadow-sm hover:shadow"
            >
              <span>See more</span>
              <svg
                className="w-3.5 h-3.5 stroke-current transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ================= MOBILE & TABLET LAYOUT (< lg) ================= */}
        <div className="block lg:hidden">
          {/* Top Text Block */}
          <div className="mb-8">
            <h2 className="font-dm-serif-text text-2xl sm:text-3xl text-[#262626] font-normal leading-[1.22] tracking-tight mb-3">
              A Glimpse Into Our Work &amp; Professional Environment
            </h2>
            <p className="font-switzer text-xs sm:text-sm text-[#525252] leading-[1.65] font-normal max-w-lg">
              Explore moments from our team, office, legal events, meetings, and professional activities that reflect who we are and how we work.
            </p>
          </div>

          {/* Grid Layout for Tablet/Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Image 1 */}
            <div
              onClick={() => setSelectedImage(images.col1Bottom)}
              className="relative aspect-[248/234] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
            >
              <Image
                src={images.col1Bottom.src}
                alt={images.col1Bottom.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              onClick={() => setSelectedImage(images.col2Top)}
              className="relative aspect-[242/170] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
            >
              <Image
                src={images.col2Top.src}
                alt={images.col2Top.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image 4 (Bookshelf) */}
            <div
              onClick={() => setSelectedImage(images.col3Top)}
              className="relative aspect-[258/278] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
            >
              <Image
                src={images.col3Top.src}
                alt={images.col3Top.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image 6 (3 lawyers) */}
            <div
              onClick={() => setSelectedImage(images.col4Top)}
              className="relative aspect-[219/205] overflow-hidden bg-[#F2F3F5] cursor-pointer group"
            >
              <Image
                src={images.col4Top.src}
                alt={images.col4Top.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div
              onClick={() => setSelectedImage(images.col2Bottom)}
              className="relative aspect-[329/173] overflow-hidden bg-[#F2F3F5] cursor-pointer group sm:col-span-2"
            >
              <Image
                src={images.col2Bottom.src}
                alt={images.col2Bottom.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Image 5 */}
            <div
              onClick={() => setSelectedImage(images.col3Bottom)}
              className="relative aspect-[309/142] overflow-hidden bg-[#F2F3F5] cursor-pointer group sm:col-span-2"
            >
              <Image
                src={images.col3Bottom.src}
                alt={images.col3Bottom.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Button Mobile */}
          <div className="flex justify-end mt-6">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#8E1831] text-[#8E1831] font-switzer text-sm font-medium transition-all duration-300 hover:bg-[#8E1831] hover:text-white group/btn active:scale-95 shadow-sm"
            >
              <span>See more</span>
              <svg
                className="w-3.5 h-3.5 stroke-current transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white overflow-hidden shadow-2xl transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image display */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Caption */}
            {selectedImage.caption && (
              <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-dm-serif-text text-lg sm:text-xl text-[#141414]">
                    {selectedImage.caption}
                  </h3>
                  <p className="font-switzer text-xs sm:text-sm text-[#666666] mt-0.5">
                    {selectedImage.alt}
                  </p>
                </div>
                <span className="text-xs font-marcellus text-[#8E1831] uppercase tracking-wider hidden sm:inline-block">
                  Basunia &amp; Associates
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
