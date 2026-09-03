import Image from "next/image";
import Link from "next/link";
import CounterStat from "@/app/components/about/CounterStat";
import AnimatedButton from "@/app/components/shared/AnimatedButton";

export const metadata = {
  title: "About Us | Basunia & Associate",
  description:
    "Learn about Basunia & Associate's three-decade legacy of legal excellence, courtroom advocacy, and client commitment in Bangladesh and the UK.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 lg:pb-40 pb-16">
      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Image Frame 2147229286 */}
        <Image
          src="/assets/images/Frame 2147229286.png"
          alt="About Us Banner"
          fill
          priority
          className=" "
        />

        {/* Overlay Dark Gradient */}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-dm-serif-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4">
            About us
          </h1>
          <p className="arimo text-slate-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            We strive to explain the most complex legal issues in an easy to understand manner.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-12">
          <span className="marcellus text-2xl lg:text-20px uppercase tracking-[0.10em] font-bold text-slate-500">
            OUR STORY
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
              src="/assets/images/Frame 2147229465.png"
              alt="Our Story Legal Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. Feature Highlight Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#F9F9F9] border border-slate-100 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#8E1831]/10 flex items-center justify-center text-[#8E1831] mb-4">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a1 1 0 011 1v1h4a1 1 0 011 1v1a3 3 0 01-2.83 2.996L15 14h1.5a1 1 0 010 2H13v3h2a1 1 0 010 2H9a1 1 0 010-2h2v-3H9.5a1 1 0 010-2H11V8.996A3 3 0 018.17 6V5a1 1 0 011-1h4V3a1 1 0 011-1zm-4 6a1 1 0 00.993.883L9 8.877V6H7v2.877a1 1 0 001 1.123z" />
              </svg>
            </div>
            <h3 className="arimo font-bold text-slate-900 text-lg sm:text-xl">
              Certified Legal Services
            </h3>
            <p className="arimo text-xs sm:text-sm text-slate-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9F9F9] border border-slate-100 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#8E1831]/10 flex items-center justify-center text-[#8E1831] mb-4">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
              </svg>
            </div>
            <h3 className="arimo font-bold text-slate-900 text-lg sm:text-xl">
              Affordable Price
            </h3>
            <p className="arimo text-xs sm:text-sm text-slate-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9F9F9] border border-slate-100 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#8E1831]/10 flex items-center justify-center text-[#8E1831] mb-4">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <h3 className="arimo font-bold text-slate-900 text-lg sm:text-xl">
              99% Clients Satisfaction
            </h3>
            <p className="arimo text-xs sm:text-sm text-slate-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

        </div>
      </section>

      {/* 4. Stats & Consultation Section (Scroll 2.5s Count-Up Animation) */}
      <section className="bg-[#F7F7F7] py-16 sm:py-24 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Copy & Consultation CTA */}
            <div className="space-y-4 max-w-xl">
              <h2 className="marcellus text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
                We Are Committed To Take Care Of Clients Seriously
              </h2>
              <p className="arimo text-slate-600 text-xs sm:text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                Lorem i
              </p>
              <div className="pt-2">
                <AnimatedButton href="/contact">
                  Get a consultation
                </AnimatedButton>
              </div>
            </div>

            {/* Right Side: Animated 2x2 Count-Up Stat Grid */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-100">
              <CounterStat target={65} suffix="+" label="Professional team" duration={2500} />
              <CounterStat target={5} suffix="+" label="Professional team" duration={2500} />
              <CounterStat target={34} suffix="+" label="Professional team" duration={2500} />
              <CounterStat target={55} suffix="+" label="Professional team" duration={2500} />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
