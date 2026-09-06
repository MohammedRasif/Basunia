import Image from "next/image";

interface AboutHeroBannerProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function AboutHeroBanner({
  title = "About us",
  subtitle = "We strive to explain the most complex legal issues in an easy to understand manner.",
  imageSrc = "/assets/images/Frame 2147229286.png",
}: AboutHeroBannerProps) {
  return (
    <section className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image Frame */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-dm-serif-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4">
          {title}
        </h1>
        <p className="arimo text-slate-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
