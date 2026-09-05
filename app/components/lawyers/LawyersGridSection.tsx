"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers, TeamMember } from "@/app/data/team";

interface LawyersGridSectionProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

export default function LawyersGridSection({
  title = "THE PEOPLE BIHIND THE\nDISCOVARI",
  members = teamMembers,
}: LawyersGridSectionProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header Title */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-dm-serif-text text-2xl sm:text-3xl md:text-[36px] text-[#141414] font-normal tracking-[0.06em] uppercase leading-tight whitespace-pre-line">
            {title}
          </h2>
        </div>

        {/* 4-Columns Responsive Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {members.map((member, index) => (
            <Link
              key={`${member.id}-${index}`}
              href={`/properties/${member.id}`}
              className="group relative block bg-white border border-[#E5E7EB] rounded-lg p-3.5 transition-all duration-300 hover:shadow-lg hover:border-[#CBD5E1] cursor-pointer"
            >
              {/* Image Container with light neutral background */}
              <div className="relative w-full aspect-[4/4.8] bg-[#F2F3F5] rounded-[4px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Member Details */}
              <div className="pt-3.5 pb-1 px-1">
                <h3 className="font-inter font-bold text-[17px] sm:text-[18px] text-[#141414] tracking-tight group-hover:text-[#8E1831] transition-colors">
                  {member.name}
                </h3>
                <p className="font-inter text-xs sm:text-[13px] text-[#666666] mt-0.5 font-normal">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
