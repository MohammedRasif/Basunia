import Image from "next/image";
import Link from "next/link";

interface CategoryHeroBannerProps {
  title?: string;
  categoryTitle?: string;
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CategoryHeroBanner({
  title,
  categoryTitle,
  imageSrc = "/assets/images/expertise-banner-meeting.jpg",
  ctaText = "Book A consultation",
  ctaHref = "/contact",
}: CategoryHeroBannerProps) {
  // Determine the display title:
  // If a custom title is provided, use it.
  // Otherwise, construct dynamic title based on categoryTitle or default.
  const displayTitle =
    title ||
    (categoryTitle
      ? `Leading ${categoryTitle.replace(/\s+Law$/i, "")} Lawyers in Bangladesh`
      : "Leading Corporate Lawyers in Bangladesh");

  // Function to break line before "Lawyers in Bangladesh"
  const renderFormattedTitle = (rawTitle: string) => {
    const target = "Lawyers in Bangladesh";
    if (rawTitle.includes(target)) {
      const prefix = rawTitle.slice(0, rawTitle.indexOf(target)).trim();
      return (
        <>
          {prefix}
          <br />
          {target}
        </>
      );
    }
    return rawTitle;
  };

  return (
    <section className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 1. Background HD Boardroom Image */}
      <Image
        src={imageSrc}
        alt={displayTitle}
        fill
        priority
        quality={95}
        className="object-cover object-center scale-[1.02] transform transition-transform duration-1000"
      />

      {/* 2. Soft, Clean & Balanced Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

      {/* 3. Centered Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center">
        {/* Dynamic Category-Wise Main Title */}
        <h1 className="font-dm-serif-text text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-[1.15] md:leading-[1.2] tracking-tight max-w-4xl mx-auto drop-shadow-md">
          {renderFormattedTitle(displayTitle)}
        </h1>

        {/* Action Button: "Book A consultation →" */}
        <div className="mt-8 sm:mt-10 md:mt-11">
          <Link
            href={ctaHref}
            className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 md:px-9 py-3.5 sm:py-4 bg-[#8E1831] hover:bg-[#721327] text-white text-sm sm:text-base md:text-[16px] font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#8E1831]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
          >
            <span>{ctaText}</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
