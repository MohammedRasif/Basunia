"use client";

import Image from "next/image";
import Link from "next/link";
import { TeamMember, teamMembers } from "@/app/data/team";

interface LawyerProfileSectionProps {
  member: TeamMember;
  otherMembers?: TeamMember[];
}

export default function LawyerProfileSection({
  member,
  otherMembers = teamMembers.filter((m) => m.id !== member.id).slice(0, 4),
}: LawyerProfileSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 font-inter">
        <Link href="/" className="hover:text-[#8E1831] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/properties" className="hover:text-[#8E1831] transition-colors">
          Our Lawyers
        </Link>
        <span>/</span>
        <span className="text-[#141414] font-medium">{member.name}</span>
      </div>

      {/* Lawyer Profile Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 lg:p-10 mb-16 shadow-xs">
        {/* Left Column: Lawyer Portrait Photo */}
        <div className="lg:col-span-4 w-full">
          <div className="relative w-full aspect-[4/4.8] bg-[#F2F3F5] rounded-xl overflow-hidden shadow-sm border border-[#E5E7EB]">
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: Lawyer Details & Bio */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#8E1831]/10 text-[#8E1831] mb-3">
              {member.experience || "Senior Legal Counsel"}
            </div>

            {/* Name & Role */}
            <h1 className="font-dm-serif-text text-3xl sm:text-4xl text-[#141414] tracking-tight mb-1">
              {member.name}
            </h1>
            <p className="font-inter text-base sm:text-lg font-medium text-[#8E1831] mb-4">
              {member.designation || member.role}
            </p>

            <hr className="border-[#E5E7EB] my-5" />

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-inter mb-6">
              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">
                  Specialization
                </span>
                <span className="font-semibold text-slate-800">
                  {member.specialization || "Corporate, Commercial & Dispute Resolution"}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">
                  Direct Email
                </span>
                <a
                  href={`mailto:${member.email || "info@basunialaw.com"}`}
                  className="font-medium text-[#8E1831] hover:underline"
                >
                  {member.email || "info@basunialaw.com"}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">
                  Phone / Consultation
                </span>
                <a
                  href={`tel:${member.phone || "01956565462"}`}
                  className="font-medium text-slate-800 hover:text-[#8E1831]"
                >
                  {member.phone || "+880 1956 565462"}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">
                  Chamber Location
                </span>
                <span className="font-semibold text-slate-800">
                  Dhaka &amp; London Practice
                </span>
              </div>
            </div>

            {/* Bio Summary */}
            <div className="space-y-3 font-inter text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                With extensive background in courtroom advocacy, commercial negotiation, and regulatory compliance, {member.name} provides strategic legal counsel tailored to corporate entities, institutions, and individuals across high-stakes matters.
              </p>
              <p>
                Specializing in complex statutory interpretation, contract drafting, and dispute management, our team prioritizes client trust, rigorous preparation, and ethical legal solutions.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#8E1831] text-white font-medium hover:bg-[#761328] transition-colors shadow-sm"
            >
              <span>Book a Consultation</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#D1D5DB] text-slate-700 font-medium hover:bg-slate-100 transition-colors"
            >
              ← Back to Team
            </Link>
          </div>
        </div>
      </div>

      {/* Other Team Members Section */}
      <div>
        <h2 className="font-dm-serif-text text-2xl sm:text-3xl text-[#141414] tracking-tight mb-8">
          Other Legal Professionals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {otherMembers.map((other) => (
            <Link
              key={other.id}
              href={`/properties/${other.id}`}
              className="group block bg-white border border-[#E5E7EB] rounded-lg p-3.5 transition-all duration-300 hover:shadow-lg hover:border-[#CBD5E1]"
            >
              <div className="relative w-full aspect-[4/4.8] bg-[#F2F3F5] rounded-[4px] overflow-hidden mb-3">
                <Image
                  src={other.image}
                  alt={other.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-inter font-bold text-base text-[#141414] group-hover:text-[#8E1831] transition-colors">
                {other.name}
              </h3>
              <p className="font-inter text-xs text-[#666666] mt-0.5">
                {other.role}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
