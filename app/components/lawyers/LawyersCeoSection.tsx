"use client";

import Image from "next/image";

interface LawyersCeoSectionProps {
  subtitle?: string;
  name?: string;
  image?: string;
  credentials?: string[];
}

const defaultCredentials: string[] = [
  "Of Lincoln's Inn Barrister-at-Law",
  "+ Senior Advocate, Supreme Court of Bangladesh",
  "Secretary, Law Affairs, National Executive Committ",
  "+ Chairman, Executive Committee, Bangladesh Bar C",
  "+ Former Secretary, Bangladesh Supreme Court Bar",
  "Former Deputy Attorney General for Bangladesh",
  "Former Secretary, Barristers' Association of Bangla",
];

export default function LawyersCeoSection({
  subtitle = "OUR CEO",
  name = "BRISTER TOFAEL",
  image = "/assets/images/team/member3.jpg",
  credentials = defaultCredentials,
}: LawyersCeoSectionProps) {
  return (
    <section className="relative w-full bg-white pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Outer Card with subtle pink/rose border matching reference design */}
        <div className="relative w-full bg-white border border-[#F3CDD5] p-6 sm:p-10 md:p-12 lg:p-14 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Text Column: CEO Info & Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Subtitle / Category: OUR CEO */}
              <span className="font-marcellus text-xs sm:text-sm md:text-[24px] tracking-[0.14em] text-[#333333] uppercase font-normal inline-block mb-1 sm:mb-2">
                {subtitle}
              </span>

              {/* CEO Name Headline */}
              <h2 className="font-dm-serif-text text-2xl sm:text-3xl md:text-[36px] text-[#262626]  tracking-tight uppercase mb-6 sm:mb-8 lg:mb-10">
                {name}
              </h2>

              {/* Credentials / Designations List */}
              <ul className="flex flex-col gap-3.5 sm:gap-4 md:gap-4.5">
                {credentials.map((item, index) => (
                  <li
                    key={index}
                    className="font-switzer text-xs sm:text-sm md:text-[20px] text-[#525252] leading-relaxed tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: CEO Portrait Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/4.8] sm:aspect-[4/4.9] bg-[#F2F3F5] overflow-hidden">
                <Image
                  src={image}
                  alt={`${name} - ${subtitle}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
