"use client";

import Link from "next/link";
import React from "react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  className = "",
  variant = "primary",
  showArrow = true,
  type = "button",
}: AnimatedButtonProps) {
  // Outer button container stays completely fixed in size and position
  const baseStyles =
    "group relative inline-flex items-center justify-center overflow-hidden px-6 py-3.5 font-arimo font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300 cursor-pointer shadow-md select-none";

  // Color variants
  const variantStyles = {
    primary:
      "bg-[#8E1831] hover:bg-[#721327] text-white border border-[#8E1831]",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white border border-slate-900",
    outline:
      "bg-transparent hover:bg-[#8E1831] text-[#8E1831] hover:text-white border-2 border-[#8E1831]",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {/* Inner wrapper: ONLY text + icon scale up / zoom bigger on hover (no vertical upward translation) */}
      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover:scale-110">
        <span>{children}</span>

        {/* Arrow Icon with micro-shift */}
        {showArrow && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}
