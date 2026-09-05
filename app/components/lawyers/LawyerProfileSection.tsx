"use client";

import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { TeamMember } from "@/app/data/team";

interface LawyerProfileSectionProps {
  member: TeamMember;
}

const defaultCareerHistory: string[] = [
  "Barrister Rasheduzzaman Chowdhury is a seasoned advocate at the district and sessions court in Dhaka, specializing in corporate, commercial, and criminal litigation. Known for his robust legal advisory, trial advocacy, and appellate litigation skills, Rasheduzzaman has established a formidable reputation as an outstanding associate.",
  "As an Associate at Kazi Law Chamber, he plays a critical role in managing corporate advisory, high-stakes litigation, and appeals before the Lower Courts. His responsibilities include navigating commercial disputes, ensuring regulatory compliance, corporate structuring, and providing strategic legal representation for high-profile clients. His dedication to legal excellence, strategic litigation, and client advocacy marks him as a remarkable associate.",
  "Rasheduzzaman's legal career commenced in December 2018 as an intern at Chowdhury & Associates, gaining practical experience in case preparation and legal research. In 2019, he became a Research Associate at A.S & Associates, contributing to Bangladesh's One Stop Service Project (OSS) and performing due diligence for corporate clients.",
  "Between 2020 and 2022, he served as an Associate at Sadat Sarwat & Associates, refining his expertise in corporate litigation, contract drafting, company law disputes, and regulatory compliance. His duties encompassed managing corporate agreements, company petitions, writ petitions, and representing corporate clients before various tribunals and judicial forums.",
];

const defaultQualifications: string[] = [
  "Of Lincoln's Inn Barrister-at-law",
  "Advocate, Supreme Court of Bangladesh",
  "Associate, Kazi Law Chamber",
];

const defaultEducation: string[] = [
  "Corporate & Commercial Law",
  "Banking & Finance | Real Estate",
  "Labour | Criminal Defense & Litigation",
];

export default function LawyerProfileSection({ member }: LawyerProfileSectionProps) {
  const careerHistory = member.careerHistory || defaultCareerHistory;
  const qualifications = member.qualifications || defaultQualifications;
  const education = member.education || defaultEducation;

  return (
    <section className="relative w-full bg-white pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* ================= 1. Top Lawyer Profile Header ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Lawyer Portrait Frame */}
          <div className="relative w-[170px] sm:w-[200px] md:w-[220px] aspect-[4/4.7] bg-[#F0F1F3] overflow-hidden shrink-0">
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              priority
              sizes="(max-width: 640px) 170px, 220px"
              className="object-cover object-top"
            />
          </div>

          {/* Lawyer Basic Information & Actions */}
          <div className="flex flex-col justify-center flex-1">
            {/* Tag / Role: ASSOCIATE */}
            <span className="font-marcellus text-xs sm:text-[16px] tracking-[0.14em] text-[#262626]  uppercase mb-1">
              {member.roleTag || "ASSOCIATE"}
            </span>

            {/* Lawyer Name */}
            <h1 className="font-dm-serif-text text-3xl md:text-[32px] text-[#525252] font-normal leading-tight mb-2 sm:mb-2.5">
              {member.name}
            </h1>

            {/* Court / Title Bullet */}
            <p className="font-switzer text-xs sm:text-base text-[#525252] font-normal mb-5 sm:mb-6 flex items-center gap-1.5">
              <span className="text-[10px] text-[#525252]">•</span>
              <span>{member.courtTitle || "Advocate, Supreme Court"}</span>
            </p>

            {/* Actions: Button + Social Media Outlined Icons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Book an appointment Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-[3px] bg-[#8E1831] text-white text-xs sm:text-sm font-semibold hover:bg-[#761328] active:scale-[0.98] transition-all shadow-xs"
              >
                Book an appoitment
              </Link>

              {/* Social Media Outlined Circular Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={member.socialLinks?.twitter || "https://x.com"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#737373]/50 flex items-center justify-center text-[#444444] hover:text-[#8E1831] hover:border-[#8E1831] transition-all"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>

                <a
                  href={member.socialLinks?.facebook || "https://facebook.com"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#737373]/50 flex items-center justify-center text-[#444444] hover:text-[#8E1831] hover:border-[#8E1831] transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>

                <a
                  href={member.socialLinks?.youtube || "https://youtube.com"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#737373]/50 flex items-center justify-center text-[#444444] hover:text-[#8E1831] hover:border-[#8E1831] transition-all"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= Horizontal Separator Divider ================= */}
        <div className="w-full border-b border-[#EDEDED] my-10 sm:my-14 lg:my-16" />

        {/* ================= 2. Main Content (Career History + Expertise) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: CAREER HISTORY */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h2 className="font-marcellus text-lg text-xl  text-[#262626] uppercase tracking-[0.08em] font-normal mb-6 sm:mb-8">
              CAREER HISTORY
            </h2>

            <div className=" font-switzer flex flex-col gap-5 sm:gap-6 font-inter text-xs sm:text-sm md:text-[14px] text-[#525252] leading-[1.75] font-normal">
              {careerHistory.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: EXPERTISE Box */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="bg-[#F5F5F7] p-6 sm:p-8 lg:p-10 rounded-[2px]">
              
              <h2 className="font-marcellus text-xl  text-[#222222] uppercase tracking-[0.08em] font-normal mb-6 sm:mb-7">
                EXPERTISE
              </h2>

              {/* Qualifications Sub-section */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-dm-serif-text text-xs sm:text-[14px] tracking-wider text-[#8E1831] uppercase mb-2.5">
                  QUALIFICATIONS
                </h3>
                <ul className="font-switzer flex flex-col gap-1.5 font-inter text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {qualifications.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Sub-section */}
              <div>
                <h3 className="font-dm-serif-text text-xs sm:text-[14px] tracking-wider text-[#8E1831] uppercase mb-2.5">
                  EDUCATION
                </h3>
                <ul className="font-switzer flex flex-col gap-1.5 font-inter text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {education.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
