"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface PracticeItem {
  id: string;
  uniqueKey: string;
  title: string;
  description?: string;
  href: string;
}

const practiceRows: [PracticeItem, PracticeItem][] = [
  [
    {
      id: "01",
      uniqueKey: "item-01",
      title: "Corporate & Commercial Law",
      description: "Advising on corporate governance, commercial contracts, and regulatory compliance.",
      href: "/categories/corporate-commercial-law",
    },
    {
      id: "05",
      uniqueKey: "item-05",
      title: "Corporate & Commercial Law",
      description: "Structuring commercial partnerships, trade negotiations, and corporate advisory.",
      href: "/categories/corporate-commercial-law",
    },
  ],
  [
    {
      id: "02",
      uniqueKey: "item-02",
      title: "Litigation & Dispute Resolution",
      description: "Advising on business formation, contracts, mergers, acquisitions",
      href: "/categories/litigation-dispute-resolution",
    },
    {
      id: "06",
      uniqueKey: "item-06",
      title: "Family & Estate Planning Law",
      description: "Comprehensive matrimonial, guardianship, and trust management services.",
      href: "/categories/family-estate-planning-law",
    },
  ],
  [
    {
      id: "03",
      uniqueKey: "item-03",
      title: "Family & Estate Planning Law",
      description: "Legal support for family matters, succession planning, and estate administration.",
      href: "/categories/family-estate-planning-law",
    },
    {
      id: "07",
      uniqueKey: "item-07",
      title: "Intellectual Property Rights Her",
      description: "Enforcing patent protection, IP infringement lawsuits, and brand security.",
      href: "/categories/intellectual-property-rights",
    },
  ],
  [
    {
      id: "04",
      uniqueKey: "item-04",
      title: "Intellectual Property Rights Her",
      description: "Protecting trademarks, patents, copyright defense, and licensing rights.",
      href: "/categories/intellectual-property-rights",
    },
    {
      id: "08",
      uniqueKey: "item-08",
      title: "Intellectual Property Rights Her",
      description: "Digital copyright defense, trade secrets, and media law consultancy.",
      href: "/categories/intellectual-property-rights",
    },
  ],
  [
    {
      id: "05",
      uniqueKey: "item-04b",
      title: "Intellectual Property Rights Her",
      description: "Strategic IP portfolio advisory and cross-border trademark protection.",
      href: "/categories/intellectual-property-rights",
    },
    {
      id: "09",
      uniqueKey: "item-08b",
      title: "Intellectual Property Rights Her",
      description: "Global trademark registrations and international IP conflict management.",
      href: "/categories/intellectual-property-rights",
    },
  ],
];

export default function PracticeAreaSection() {
  const [activeKey, setActiveKey] = useState<string>("item-02");

  const renderCard = (item: PracticeItem) => {
    const isActive = activeKey === item.uniqueKey;

    return (
      <Link
        key={item.uniqueKey}
        href={item.href}
        onMouseEnter={() => setActiveKey(item.uniqueKey)}
        className={`group relative flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 h-[155px] sm:h-[165px] lg:h-[175px] transition-colors duration-300 cursor-pointer overflow-hidden ${
          isActive
            ? "bg-[#8E1831] text-white z-10"
            : "bg-[#FAFAFA] hover:bg-[#8E1831] text-[#1e1e1e] hover:text-white"
        }`}
      >
        {/* Left Side: Number & (Title + Description) - Perfectly Centered */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 pr-4 flex-1">
          {/* Number */}
          <span
            className={`font-switzer text-lg sm:text-xl md:text-[22px] font-normal shrink-0 transition-colors duration-300 ${
              isActive ? "text-white" : "text-[#222222] group-hover:text-white"
            }`}
          >
            {item.id}
          </span>

          {/* Title & Description Block */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h3
              className={`font-switzer text-xl sm:text-2xl md:text-[24px]  font-normal leading-tight tracking-tight transition-colors duration-300 ${
                isActive ? "text-white" : "text-[#141414] group-hover:text-white"
              }`}
            >
              {item.title}
            </h3>

            {/* Description: Positioned naturally right under the title */}
            {item.description && (
              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  isActive
                    ? "max-h-24 opacity-100 mt-2 sm:mt-2.5"
                    : "max-h-0 opacity-0 mt-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 sm:group-hover:mt-2.5"
                }`}
              >
                <p
                  className={`font-switzer text-xs sm:text-sm md:text-[14.5px] leading-snug sm:leading-relaxed max-w-sm sm:max-w-md transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 group-hover:text-white"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sleek Arrow */}
        <div className="shrink-0 pl-2">
          <svg
            className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ${
              isActive
                ? "text-white translate-x-1.5"
                : "text-[#8E1831] group-hover:text-white group-hover:translate-x-1.5"
            }`}
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path
              d="M5 14h18M16 7l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    );
  };

  return (
    <section className="relative w-full bg-white pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="font-marcellus text-xs sm:text-sm md:text-[16px] tracking-[0.2em] text-[#333333] uppercase font-normal inline-block mb-3 sm:mb-4">
            PRACTICE AREA
          </span>

          <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#141414] font-normal leading-[1.15] tracking-tight">
            Legal Expertise Across
            <br />
            Every Stage of Your Needs
          </h2>
        </div>

        {/* Practice Areas Grid Box with #E5E5E5 Borders and Dividers */}
        <div className="w-full border border-[#E5E5E5] bg-[#E5E5E5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
            {practiceRows.map(([leftItem, rightItem]) => (
              <div key={leftItem.uniqueKey + rightItem.uniqueKey} className="contents">
                {renderCard(leftItem)}
                {renderCard(rightItem)}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner: Need Help Finding the Right Legal Service? */}
        <div className="relative w-full mt-6 sm:mt-8 border border-[#E5E5E5] bg-[#FAFAFA] overflow-hidden p-6 sm:p-8 md:px-10 md:py-8 lg:px-12 lg:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          {/* Background Watermark Image: practice.avif */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/assets/images/practice.avif"
              alt="Legal Service Pattern"
              fill
              className="object-cover object-[center_12%] opacity-[0.14] mix-blend-multiply"
            />
          </div>

          {/* Left Text Block */}
          <div className="relative z-10 ">
            <h3 className="font-inter text-lg sm:text-xl md:text-[20px] font-bold text-[#141414] tracking-tight">
              Need Help Finding the Right Legal Service?
            </h3>
            <p className="font-inter text-xs sm:text-sm md:text-[12px] text-[#555555] mt-1.5 sm:mt-2 leading-relaxed">
              Not sure which legal service is right for your situation? Our legal team is here to understand your needs and guide you toward the right solution.
            </p>
          </div>

          {/* Right Action Button: Contact us ↗ */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="font-geist group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-[#8E1831]/30 bg-white/95 backdrop-blur-xs text-[#8E1831] text-xl sm:text-[15px] font-medium transition-all duration-300 hover:bg-[#8E1831] hover:text-white hover:border-[#8E1831] hover:shadow-md active:scale-[0.98]"
            >
              <span>Contact us</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
    </section>
  );
}



