"use client";

import CounterStat from "@/app/components/about/CounterStat";
import AnimatedButton from "@/app/components/shared/AnimatedButton";

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
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem i",
  ctaText = "Get a consultation",
  ctaHref = "/contact",
  stats = defaultStats,
}: AboutStatsConsultationSectionProps) {
  return (
    <section className="bg-[#F7F7F7] py-16 sm:py-24 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Copy & Consultation CTA */}
          <div className="space-y-4 max-w-xl">
            <h2 className="marcellus text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
              {title}
            </h2>
            <p className="arimo text-slate-600 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
            <div className="pt-2">
              <AnimatedButton href={ctaHref}>
                {ctaText}
              </AnimatedButton>
            </div>
          </div>

          {/* Right Side: Animated 2x2 Count-Up Stat Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-100">
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
    </section>
  );
}
