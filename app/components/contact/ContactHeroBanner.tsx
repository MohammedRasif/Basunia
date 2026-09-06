import Image from "next/image";

interface ContactHeroBannerProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function ContactHeroBanner({
  title = "Contact us",
  subtitle = "Get in touch with our trusted legal team for professional advice and support.",
  imageSrc = "/assets/images/Frame 2147229286.png",
}: ContactHeroBannerProps) {
  return (
    <section className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className=""
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-dm-serif-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
          {title}
        </h1>
        <p className="arimo text-slate-200 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
