"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const target = 20;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease-out quad curve for natural decelerating count-up
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(progress) * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header: ABOUT US */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h3 className="font-marcellus text-base sm:text-lg md:text-[24px] tracking-[0.08em] text-[#1e1e1e] uppercase font-normal">
            ABOUT US
          </h3>
        </div>

        {/* 3 Divs Spaced Across 3 Sides with Gaps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16">
          
          {/* 1. Left Div: Heading & Detailed Description */}
          <div className="w-full lg:max-w-[430px] flex flex-col justify-center text-left">
            <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-[36px] text-[#262626] font-normal leading-[1.18] tracking-tight mb-6 sm:mb-7">
              Founded To Fight.
              <br />
              Built Around You.
            </h2>

            <p className="font-switzer text-[#52525B] text-sm sm:text-[15px] lg:text-[15.5px] xl:text-base leading-[1.75] font-normal">
              We understand that navigating the legal system -whether it&apos;s a criminal charge, a traffic matter, or a family dispute - can be one of the most stressful experiences of your life. That&apos;s why we don&apos;t just represent you in court. We stand beside you throughout the entire process, keeping you informed, heard, and confident.
            </p>
          </div>

          {/* 2. Middle Div: Shaped Image Subtract.png */}
          <div className="flex justify-center items-center shrink-0 my-2 lg:my-0">
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[380px] aspect-[360/460] transition-all duration-500 ease-out hover:-rotate-[3.5deg] hover:scale-105 cursor-pointer">
              <Image
                src="/assets/images/Subtract.png"
                alt="About Basunia & Associate - Legal Advocacy"
                width={500}
                height={500}
                priority
                className="w-full h-full object-contain select-none"
              />
            </div>
          </div>

          {/* 3. Right Div: 20+ Years Experience with Animated Count-Up */}
          <div 
            ref={statRef}
            className="w-full lg:w-auto lg:min-w-[220px] xl:min-w-[240px] flex flex-col items-center lg:items-end justify-center text-center lg:text-left"
          >
            <div className="font-inter text-6xl sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[104px] text-[#8E1831] leading-none tracking-tight">
              {count}+
            </div>
            <p className="font-marcellus-sc text-sm sm:text-base lg:text-[18px] text-[#1e1e1e] uppercase tracking-[0.14em] mt-3 sm:mt-4 font-normal">
              YEARS EXPERIENCE
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}



