"use client";

import Image from "next/image";

export default function WhoWeAreSection() {
  const features = [
    {
      id: "experience",
      title: "Proven Experience",
      description: "Experienced in handling diverse legal matters with professionalism and care.",
      icon: (
        <svg
          className="w-10 h-10 sm:w-11 sm:h-11 text-[#141414] stroke-[#141414]"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Sparkle stars on top-left */}
          <path d="M7 11l.8 1.4 1.6.4-1.2 1.2.3 1.6-1.5-.8-1.5.8.3-1.6-1.2-1.2 1.6-.4.8-1.4z" fill="none" strokeWidth="1.4" />
          <path d="M14 6l.6 1.1 1.2.3-.9.9.2 1.2-1.1-.6-1.1.6.2-1.2-.9-.9 1.2-.3.6-1.1z" fill="none" strokeWidth="1.4" />
          <path d="M17 14l.5.9 1 .2-.7.7.2 1-.9-.5-.9.5.2-1-.7-.7 1-.2.5-.9z" fill="none" strokeWidth="1.4" />
          
          {/* Main Medal Seal */}
          <circle cx="27" cy="22" r="10" />
          <circle cx="27" cy="22" r="7" strokeDasharray="2 3" strokeWidth="1.4" />
          <path d="M24 22l2 2 4-4" strokeWidth="1.8" />
          
          {/* Ribbon Tails */}
          <path d="M22 30.5l-3.5 9 5.5-2.5 3 2.5-1.5-9" />
          <path d="M32 30.5l3.5 9-5.5-2.5-3 2.5 1.5-9" />
        </svg>
      ),
    },
    {
      id: "guidance",
      title: "Trusted Guidance",
      description: "Providing clear, practical advice to help clients make confident decisions.",
      icon: (
        <svg
          className="w-10 h-10 sm:w-11 sm:h-11 text-[#141414] stroke-[#141414]"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield */}
          <path d="M24 6s13 3.5 13 13.5c0 12-13 21.5-13 21.5S11 31.5 11 19.5C11 9.5 24 6 24 6z" />
          {/* Checkmark */}
          <path d="M18 23l4 4 8-8" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "excellence",
      title: "Professional Excellence",
      description: "Committed to maintaining high standards in every case and transaction.",
      icon: (
        <svg
          className="w-10 h-10 sm:w-11 sm:h-11 text-[#141414] stroke-[#141414]"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Rosette/Star Seal */}
          <circle cx="24" cy="22" r="11" />
          {/* Star inside */}
          <polygon
            points="24,14 26.5,19 32,19.8 28,23.6 29,29 24,26.4 19,29 20,23.6 16,19.8 21.5,19"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Ribbons */}
          <path d="M18 31.5l-3 9 5.5-2.5 3.5 2.5-2-9" />
          <path d="M30 31.5l3 9-5.5-2.5-3.5 2.5 2-9" />
        </svg>
      ),
    },
    {
      id: "satisfaction",
      title: "Client Satisfaction",
      description: "Building lasting relationships through responsive and dependable legal support.",
      icon: (
        <svg
          className="w-10 h-10 sm:w-11 sm:h-11 text-[#141414] stroke-[#141414]"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stars on top-left */}
          <path d="M7 11l.8 1.4 1.6.4-1.2 1.2.3 1.6-1.5-.8-1.5.8.3-1.6-1.2-1.2 1.6-.4.8-1.4z" fill="none" strokeWidth="1.4" />
          <path d="M14 6l.6 1.1 1.2.3-.9.9.2 1.2-1.1-.6-1.1.6.2-1.2-.9-.9 1.2-.3.6-1.1z" fill="none" strokeWidth="1.4" />
          <path d="M17 14l.5.9 1 .2-.7.7.2 1-.9-.5-.9.5.2-1-.7-.7 1-.2.5-.9z" fill="none" strokeWidth="1.4" />

          {/* User Head */}
          <circle cx="28" cy="18" r="6" />
          {/* User Body */}
          <path d="M18 36c0-5.5 4.5-9 10-9s10 3.5 10 9" />
          {/* Checkmark Badge */}
          <circle cx="37" cy="35" r="5" fill="#ffffff" strokeWidth="1.8" />
          <path d="M35 35l1.5 1.5 3-3" strokeWidth="1.6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white  pb-16 sm:pb-20  lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="font-marcellus text-xs sm:text-sm md:text-[24px] tracking-[0.2em] text-[#333333] uppercase font-normal inline-block">
            WHO WE ARE
          </span>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Blush Box */}
          <div className="lg:col-span-7 relative w-full max-w-[640px] mx-auto lg:mx-0 pb-16 sm:pb-20 lg:pb-24">
            {/* Main Lawyer Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/images/whoweare.png"
                alt="Basunia & Associate - Who We Are"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Overlapping Floating Peach/Blush Box with Soft Gradient */}
            <div className="absolute left-3 sm:left-6 md:left-7 bottom-[-50] w-[94%] sm:w-[90%] md:w-[88%] lg:w-[89%] max-w-[540px] bg-gradient-to-b from-[#FDF4EE] via-[#FCE8E0] to-[#F5D4C7] px-6 py-6 sm:px-8 sm:py-7 md:px-8 md:py-7 lg:px-9 lg:py-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] z-10 border border-[#F6DBD1]/40">
              <h3 className="font-dm-serif-text text-xl sm:text-2xl md:text-[21.5px] lg:text-[22.5px] text-[#262626] font-normal leading-[1.3] tracking-tight mb-3 sm:mb-3.5">
                Trusted Legal Guidance. Proven Experience. Client-Focused Solutions.
              </h3>
              <p className="font-poppins text-xs sm:text-[13px] md:text-[13.5px] lg:text-[14px] text-[#737373] leading-[1.65] font-normal">
                We are a dedicated legal team providing practical and reliable legal solutions tailored to our clients&apos; needs. With experience across a wide range of legal matters, we combine professional expertise with a clear understanding of every client&apos;s unique situation.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Feature Points */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 sm:space-y-9 lg:space-y-10 pl-0 lg:pl-4 xl:pl-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-5 sm:gap-6 group">
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center pt-0.5 transition-transform duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-manrope text-lg sm:text-xl lg:text-[20px] font-semibold text-[#262626] tracking-tight leading-snug">
                    {feature.title}
                  </h4>
                  <p className="font-switzer text-xs sm:text-sm lg:text-[14px] text-[#737373] mt-1.5 sm:mt-2 leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
