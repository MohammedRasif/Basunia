"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface WaterfallLoadingProps {
  onComplete?: () => void;
  brandText?: string;
  subText?: string;
}

const WaterfallLoading = ({
  onComplete,
  brandText = "Basunia & Associates",
  subText = "Trusted Legal Solutions",
}: WaterfallLoadingProps) => {
  const waterfallRef = useRef<SVGRectElement | null>(null);
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const shuttersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fall = waterfallRef.current;
    const wrapper = mainWrapperRef.current;

    if (!fall || !wrapper) return;

    // Use gsap.context for clean cleanup in React
    const ctx = gsap.context(() => {
      // Set initial positions immediately to avoid frame flashes
      gsap.set(wrapper, { force3D: true, transformOrigin: "center center" });
      gsap.set(fall, { attr: { y: 200, height: 0 } });

      const tl = gsap.timeline();

      // 1. Smooth sideways water cycle across wider canvas
      gsap.to(fall, {
        attr: { x: 0 },
        duration: 2.5,
        ease: "none",
        repeat: -1,
      });

      // 2. Water filling from bottom to top
      tl.fromTo(
        fall,
        { attr: { y: 200, height: 0 } },
        {
          attr: { y: -30, height: 230 },
          duration: 3.1,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.killTweensOf(fall);
            startZoomAndShutterSequence();
          },
        }
      );

      // 3. Smooth zoom & shutter sequence (tuned scale so text never clips on zoom)
      const startZoomAndShutterSequence = () => {
        const seqTl = gsap.timeline();

        seqTl
          .to(wrapper, {
            scale: 1.35,
            duration: 1.2,
            ease: "power2.inOut",
            force3D: true,
          })
          .to(
            shuttersRef.current,
            {
              y: "0%",
              duration: 0.7,
              ease: "power3.inOut",
              stagger: 0.1,
            },
            "-=0.4"
          )
          .call(() => {
            if (onComplete) onComplete();
          });
      };
    });

    return () => ctx.revert();
  }, [onComplete]);

  const shutterCount = 5;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#F0F0F0] to-[#CBCBCB] flex items-center justify-center z-[9999] overflow-hidden select-none px-4 sm:px-6">
      {/* Main Container */}
      <div
        ref={mainWrapperRef}
        className="z-10 flex flex-col items-center justify-center w-full max-w-6xl will-change-transform"
      >
        <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.35em] sm:tracking-[0.5em] uppercase font-bold mb-2 text-center text-[#8E1831]">
          Initializing
        </p>

        {/* Wide SVG viewport to comfortably fit long brand text without shrinking font size */}
        <div className="w-full max-w-[96vw] md:max-w-[1200px] flex justify-center">
          <svg
            viewBox="0 0 1600 200"
            className="w-full h-auto overflow-visible"
          >
            <defs>
              <pattern
                id="water"
                width=".15"
                height="1.1"
                patternContentUnits="objectBoundingBox"
              >
                <path
                  fill="#8E1831"
                  d="M0.15,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.15,0C0.15,0.327,0.15,1,0.15,1z"
                />
              </pattern>

              <text
                id="brand-text-def"
                x="50%"
                y="68%"
                textAnchor="middle"
                fontSize="120"
                fontWeight="900"
                letterSpacing="-1"
              >
                {brandText}
              </text>

              <mask id="mask-text">
                <use xlinkHref="#brand-text-def" fill="white" />
              </mask>
            </defs>

            <use xlinkHref="#brand-text-def" fill="#8E1831" fillOpacity="0.18" />

            <rect
              ref={waterfallRef}
              id="water-fall"
              mask="url(#mask-text)"
              fill="url(#water)"
              x="-800"
              y="200"
              width="3200"
              height="0"
            />
          </svg>
        </div>

        <p className="text-[#978B8E] text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.4em] uppercase font-bold mt-2 text-center">
          {subText}
        </p>
      </div>

      {/* Shutters Overlay - Crimson Maroon Theme */}
      <div className="absolute inset-0 z-30 flex pointer-events-none">
        {Array.from({ length: shutterCount }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) shuttersRef.current[index] = el;
            }}
            className="h-full -translate-y-full border-r shadow-2xl bg-gradient-to-b from-[#8E1831] to-[#5C0F20] border-[#6B0E23]/60"
            style={{ width: `${100 / shutterCount}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterfallLoading;
