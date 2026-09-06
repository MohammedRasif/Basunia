import Image from "next/image";

interface AboutOurStorySectionProps {
  badge?: string;
  title?: string;
  imageSrc?: string;
}

export default function AboutOurStorySection({
  badge = "OUR STORY",
  title = "Founded To Fight. Built Around You.",
  imageSrc = "/assets/images/story-team.jpg",
}: AboutOurStorySectionProps) {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Section Badge */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-dm-serif-text text-xl sm:text-2xl lg:text-[24px] uppercase tracking-[0.15em] text-[#555555] font-normal">
            {badge}
          </span>
        </div>

        {/* 2-Column Grid: Left Text + Right Team Image (items-start for top alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Text Column (7 cols - Starts at Top) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-[36px] font-normal text-[#262626] leading-[1.18] tracking-tight mb-5 sm:mb-6">
              {title}
            </h2>

            <div className="font-switzer space-y-4 sm:space-y-5 text-sm sm:text-[15px] md:text-[20px] text-[#262626] leading-[1.6] font-normal">
              <p>
                What began as a chamber built on courtroom advocacy has, over three
                decades, grown into a full-service practice spanning corporate law,
                admiralty and maritime disputes, tax and customs, labour and employment,
                banking and finance, intellectual property, and alternative dispute
                resolution. Throughout that growth, the founding principle has stayed
                the same: meticulous documentation, robust representation, and the
                highest standard of professional and ethical conduct – in the courtroom
                and out of it.
              </p>

              <p>
                Today, the firm is led by Barrister Md. Bodruddoza as Managing Partner,
                supported by a team of partners and associates trained across Bangladesh
                and the United Kingdom, including practitioners called to the Bar at
                Lincoln&apos;s Inn and members of the Chartered Institute of Arbitrators.
              </p>
            </div>
          </div>

          {/* Right Image Column (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[1/1] max-h-[350px] sm:max-h-[380px] lg:max-h-[440px] rounded-[2px] overflow-hidden bg-slate-100 shadow-xs group">
              <Image
                src={imageSrc}
                alt="Basunia & Associate Legal Team Consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
