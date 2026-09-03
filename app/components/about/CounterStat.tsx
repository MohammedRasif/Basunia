"use client";

import { useState, useEffect, useRef } from "react";

interface CounterStatProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number; // duration in ms, default 2500ms
}

export default function CounterStat({
  target,
  suffix = "+",
  label,
  duration = 2500,
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;
          const startValue = 0;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease-out quad curve for natural decelerating count-up
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(progress) * (target - startValue));

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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col">
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8E1831] font-marcellus tracking-tight">
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm text-slate-500 font-medium font-arimo mt-1">
        {label}
      </p>
    </div>
  );
}
