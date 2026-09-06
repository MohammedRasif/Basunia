"use client";

import { useState } from "react";
import { PracticeAreaServiceItem } from "@/app/data/practiceAreas";

interface CategoryServicesSectionProps {
  badge?: string;
  services?: PracticeAreaServiceItem[] | string[];
}

export default function CategoryServicesSection({
  badge = "SERVICES",
  services = [],
}: CategoryServicesSectionProps) {
  // Single-open accordion item: opening one closes the other
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Standardize services into { title, description }
  const formattedServices: PracticeAreaServiceItem[] = services.map((s) =>
    typeof s === "string" ? { title: s, description: "" } : s
  );

  if (!formattedServices.length) return null;

  return (
    <section className="relative w-full bg-white pb-16 sm:pb-20 lg:pb-28 pt-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Centered Header: --- SERVICES --- with Prominent Big Dashes */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex-1 h-[2px] flex items-center">
            <svg className="w-full h-[2px]" preserveAspectRatio="none">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#D1D5DB"
                strokeWidth="1.6"
                strokeDasharray="10 7"
              />
            </svg>
          </div>
          <span className="font-marcellus text-sm sm:text-base md:text-[24px] tracking-[0.25em] text-[#8E1831] uppercase font-normal px-2 shrink-0">
            {badge}
          </span>
          <div className="flex-1 h-[2px] flex items-center">
            <svg className="w-full h-[2px]" preserveAspectRatio="none">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#D1D5DB"
                strokeWidth="1.6"
                strokeDasharray="10 7"
              />
            </svg>
          </div>
        </div>

        {/* 2. Services Accordion List */}
        <div className="w-full divide-y divide-[#F0F0F0] border-t border-[#F0F0F0]">
          {formattedServices.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={service.title + idx}
                className="group transition-colors duration-200"
              >
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 md:py-6 text-left cursor-pointer select-none transition-all group-hover:opacity-90"
                  aria-expanded={isOpen}
                >
                  {/* Left: Bullet & Title */}
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <span className="text-[#262626] font-bold text-lg sm:text-xl shrink-0 leading-none group-hover:text-[#8E1831] transition-colors">
                      •
                    </span>
                    <h3 className="font-dm-serif-text text-lg sm:text-xl md:text-[20px] font-normal text-[#262626] leading-snug group-hover:text-[#8E1831] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Plus (+) Icon with Smooth Rotation */}
                  <div className="shrink-0 pl-2">
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isOpen
                          ? "rotate-45 text-[#8E1831]"
                          : "text-[#262626] group-hover:text-[#8E1831]"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {service.description && (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-switzer text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-[#555555] leading-relaxed pl-6 sm:pl-8 pr-4 pb-5 sm:pb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
