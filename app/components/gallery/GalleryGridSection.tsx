"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems, GalleryItem } from "@/app/data/galleryData";

export default function GalleryGridSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.categorySlug === activeCategory);

  const selectedImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section className="relative w-full bg-slate-50/60 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200">
          {/* Categories Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.slug;
              const count = cat.slug === "all"
                ? galleryItems.length
                : galleryItems.filter((i) => i.categorySlug === cat.slug).length;

              return (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    setSelectedImageIndex(null);
                  }}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#8E1831] text-white shadow-md shadow-[#8E1831]/20 scale-102"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/25 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Item Count Display */}
          <div className="text-xs sm:text-sm font-switzer text-slate-500 text-center md:text-right shrink-0">
            Showing <strong className="text-slate-800 font-semibold">{filteredItems.length}</strong> photo{filteredItems.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Gallery Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Shade Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider bg-[#8E1831] px-2.5 py-0.5 rounded-md text-white shadow-sm mb-1.5">
                      {item.tag || item.category}
                    </span>
                    <p className="text-xs text-slate-200 line-clamp-2">
                      Click to view full photo
                    </p>
                  </div>
                </div>

                {/* Top Corner Category Badge & Zoom Indicator */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Information Footer */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-dm-serif-text text-lg sm:text-xl text-slate-900 group-hover:text-[#8E1831] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-switzer text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-switzer">
                  <span className="text-[#8E1831] font-semibold">{item.tag || "Basunia Chambers"}</span>
                  {item.year && <span>{item.year}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-base">No photos found in this category.</p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 px-4 py-2 rounded-lg bg-[#8E1831] text-white text-sm font-semibold hover:bg-[#761328] transition-colors"
            >
              View All Photos
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal for High-Definition Full View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Lightbox Header */}
            <div className="p-4 px-5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#8E1831] text-white uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-slate-400 font-switzer">
                  Photo {(selectedImageIndex || 0) + 1} of {filteredItems.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="cursor-pointer w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Main Image Display with Prev/Next Controls */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-black flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                unoptimized
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />

              {/* Previous Navigation Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="cursor-pointer absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Navigation Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="cursor-pointer absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Bottom Caption & Details Bar */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-dm-serif-text text-lg sm:text-xl text-white">
                  {selectedImage.title}
                </h3>
                <p className="font-switzer text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <span className="text-xs font-marcellus text-[#F5B5C2] uppercase tracking-wider">
                  Basunia &amp; Associates
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
