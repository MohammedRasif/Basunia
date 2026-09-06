"use client";

import Link from "next/link";
import CounterStat from "@/app/components/about/CounterStat";

export interface StatItem {
  target: number;
  suffix?: string;
  label: string;
}

const defaultStats: StatItem[] = [
  { target: 65, suffix: "+", label: "Professional team" },
  { target: 5, suffix: "+", label: "Professional team" },
  { target: 34, suffix: "+", label: "Professional team" },
  { target: 55, suffix: "+", label: "Professional team" },
];

interface AboutStatsConsultationSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  stats?: StatItem[];
}

export default function AboutStatsConsultationSection({
  title = "We Are Committed To Take Care Of Clients Seriously",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem i",
  ctaText = "GEt a consultation",
  ctaHref = "/contact",
  stats = defaultStats,
}: AboutStatsConsultationSectionProps) {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Side: Copy & Consultation Button (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-xl">
            {/* Heading */}
            <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-[36px]  font-normal text-[#262626] leading-[1.18] tracking-tight mb-5 sm:mb-6">
              {title}
            </h2>

            {/* Description Paragraph */}
            <p className="font-switzer text-sm sm:text-base md:text-[16px] text-[#525252] leading-[1.7] font-normal mb-8 sm:mb-10">
              {description}
            </p>

            {/* Consultation CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2.5 bg-[#8E1831] hover:bg-[#761328] text-white font-switzer font-medium text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 sm:px-7 sm:py-4 rounded-[2px] transition-colors shadow-xs"
              >
                <span>{ctaText}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: 2x2 Clean Stats Grid (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14 lg:gap-x-16 xl:gap-x-20 gap-y-10 sm:gap-y-12 lg:gap-y-14">
              {stats.map((stat, idx) => (
                <CounterStat
                  key={idx}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2500}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
