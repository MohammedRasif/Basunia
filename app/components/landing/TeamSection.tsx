"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member1.jpg",
  },
  {
    id: "2",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member2.jpg",
  },
  {
    id: "3",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member3.jpg",
  },
  {
    id: "4",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member4.jpg",
  },
  {
    id: "5",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member2.jpg",
  },
  {
    id: "6",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member1.jpg",
  },
  {
    id: "7",
    name: "Rohim",
    role: "Experienced Professionals",
    image: "/assets/images/team/member3.jpg",
  },
];

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState<"left" | "right">("right");

  const handleScroll = (direction: "left" | "right") => {
    setActiveButton(direction);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector<HTMLElement>(".team-card");
      const cardWidth = firstCard ? firstCard.offsetWidth : 300;
      const gap = 24; // 1.5rem (gap-6)
      const scrollStep = cardWidth + gap;

      const targetLeft =
        direction === "left"
          ? container.scrollLeft - scrollStep
          : container.scrollLeft + scrollStep;

      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-white pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Section */}
        <div className="mb-8 ">
          {/* Subtitle: OUR TEAM */}
          <span className="font-marcellus text-xs sm:text-sm md:text-[24px] tracking-[0.08em] text-[#262626] uppercase font-normal inline-block mb-3 sm:mb-4">
            OUR TEAM
          </span>

          {/* Row 1: Left Main Title + Right Description aligned with Title */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12">
            {/* Left Title Area */}
            <div className="max-w-xl">
              <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-[32px] lg:text-[36px] text-[#141414] font-normal leading-[1.18] tracking-tight">
                Meet the People Behind Your
                <br className="hidden sm:inline" />
                {" "}Legal Solutions
              </h2>
            </div>

            {/* Right Description */}
            <div className="max-w-xl lg:max-w-lg">
              <p className="font-switzer text-xs sm:text-sm md:text-[14px] text-[#555555] leading-[1.65] font-normal">
                Our team brings together experienced legal professionals with diverse expertise across corporate, commercial, banking, litigation, property, and other areas of law. We work collaboratively to provide clear advice, practical solutions, and dedicated representation for every client.
              </p>
            </div>
          </div>

          {/* Row 2: Carousel Navigation Buttons below description aligned right */}
          <div className="flex items-center justify-end gap-3 mt-4 sm:mt-6">
            {/* Left Prev Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous Team Members"
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer ${
                activeButton === "left"
                  ? "bg-[#8E1831] text-white hover:bg-[#721327] shadow-md shadow-[#8E1831]/20"
                  : "bg-[#E5E5E5] text-[#222222] hover:bg-[#D5D5D5]"
              }`}
            >
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Next Button */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next Team Members"
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer ${
                activeButton === "right"
                  ? "bg-[#8E1831] text-white hover:bg-[#721327] shadow-md shadow-[#8E1831]/20"
                  : "bg-[#E5E5E5] text-[#222222] hover:bg-[#D5D5D5]"
              }`}
            >
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Members Horizontal Carousel / Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar select-none pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="team-card w-[275px] sm:w-[290px] lg:w-[calc(25%-18px)] min-w-[265px] sm:min-w-[280px] lg:min-w-[285px] shrink-0 border border-[#E5E5E5] bg-white p-3.5 sm:p-4 transition-all duration-300 hover:shadow-md hover:border-[#D0D0D0] group"
            >
              {/* Member Image Box */}
              <div className="relative w-full aspect-[1/1.08] bg-[#F2F3F5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Member Info */}
              <div className="pt-3.5 sm:pt-4 pb-1">
                <h3 className="font-switzer text-lg sm:text-[19px] font-bold text-[#141414] tracking-tight">
                  {member.name}
                </h3>
                <p className="font-switzer text-xs sm:text-[13.5px] text-[#737373] mt-0.5 font-normal">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
