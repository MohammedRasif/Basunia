import Image from "next/image";

interface AboutOurStorySectionProps {
  badge?: string;
  title?: string;
  imageSrc?: string;
}

export default function AboutOurStorySection({
  badge = "OUR STORY",
  imageSrc = "/assets/images/Frame 2147229465.png",
}: AboutOurStorySectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12">
        <span className="marcellus text-2xl lg:text-20px uppercase tracking-[0.10em] font-bold text-slate-500">
          {badge}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Text Column */}
        <div className="space-y-5">
          <h2 className="marcellus text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Founded To Fight. <br className="hidden sm:inline" />
            Built Around You.
          </h2>

          <p className="arimo text-slate-600 text-sm sm:text-base leading-relaxed">
            What began as a chamber built on courtroom advocacy has, over three
            decades, grown into a full-service practice spanning corporate law,
            admiralty and maritime disputes, tax and customs, labour and employment,
            banking and finance, intellectual property, and alternative dispute
            resolution.
          </p>

          <p className="arimo text-slate-600 text-sm sm:text-base leading-relaxed">
            Throughout that growth, the founding principle has stayed the same:
            meticulous documentation, robust representation, and the highest standard
            of professional and ethical conduct – in the courtroom and out of it.
          </p>

          <p className="arimo text-slate-600 text-sm sm:text-base leading-relaxed">
            Today, the firm is led by Barrister Md. Badruddoza as Managing Partner,
            supported by a team of partners and associates trained across Bangladesh and
            the United Kingdom, including practitioners called to the Bar at Lincoln&apos;s
            Inn and members of the Chartered Institute of Arbitrators.
          </p>
        </div>

        {/* Right Image Column (Frame 2147229465) */}
        <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={imageSrc}
            alt="Our Story Legal Team"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
