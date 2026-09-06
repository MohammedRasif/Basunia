import Image from "next/image";

interface CategoryOverviewSectionProps {
  badge?: string;
  heading: string;
  paragraphs: string[];
  imageSrc: string;
}

export default function CategoryOverviewSection({
  badge = "OVERVIEW",
  heading,
  paragraphs,
  imageSrc,
}: CategoryOverviewSectionProps) {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Top Centered Badge: OVERVIEW */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-marcellus text-base tracking-[0.25em] text-[#262626] uppercase font-normal inline-block">
            {badge}
          </span>
        </div>

        {/* 2. Main Two-Column Layout (items-start for top alignment with image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Image with exact Figma aspect ratio & alignment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] aspect-[396/515]">
              <Image
                src={imageSrc}
                alt={heading}
                fill
                priority
                quality={95}
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 396px"
              />
            </div>
          </div>

          {/* Right Column: Title & Multi-paragraph Description (Starts from top) */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-1 sm:pt-2">
            {/* Main Overview Heading */}
            <h2 className="font-dm-serif-text text-2xl sm:text-3xl md:text-[36px] font-normal text-[#262626] leading-[1.2] tracking-tight mb-5 sm:mb-6">
              {heading}
            </h2>

            {/* Paragraphs */}
            <div className="font-switzer space-y-5 sm:space-y-6 text-sm sm:text-[15px] md:text-[20px] text-[#525252] leading-[1.68] font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
