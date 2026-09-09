"use client";

import Link from "next/link";
import { getAllBlogs, BlogItem } from "@/app/data/blogs";
import {
  FaBriefcase,
  FaGavel,
  FaUsers,
  FaShieldHalved,
  FaLightbulb,
  FaBuilding,
  FaLandmark,
  FaUserTie,
  FaCalculator,
  FaShip,
} from "react-icons/fa6";

export default function BlogCategoryGrid() {
  const blogList: BlogItem[] = getAllBlogs();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "briefcase":
        return <FaBriefcase className="w-5 h-5 shrink-0" />;
      case "family":
        return <FaUsers className="w-5 h-5 shrink-0" />;
      case "gavel":
        return <FaGavel className="w-5 h-5 shrink-0" />;
      case "shield":
        return <FaShieldHalved className="w-5 h-5 shrink-0" />;
      case "lightbulb":
        return <FaLightbulb className="w-5 h-5 shrink-0" />;
      case "building":
        return <FaBuilding className="w-5 h-5 shrink-0" />;
      case "landmark":
        return <FaLandmark className="w-5 h-5 shrink-0" />;
      case "users":
        return <FaUserTie className="w-5 h-5 shrink-0" />;
      case "calculator":
        return <FaCalculator className="w-5 h-5 shrink-0" />;
      case "ship":
        return <FaShip className="w-5 h-5 shrink-0" />;
      default:
        return <FaBriefcase className="w-5 h-5 shrink-0" />;
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer Bordered Grid Box matching user's exact design */}
        <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-none shadow-none overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {blogList.map((item, index) => {
              // Calculate borders for clean table grid effect
              const isEvenIndex = index % 2 === 0;
              const isLastRow =
                index >= blogList.length - (blogList.length % 2 === 0 ? 2 : 1);

              return (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className={`group relative flex items-center justify-between p-6 sm:p-7 md:p-12 bg-[#FAFAFA] cursor-pointer overflow-hidden select-none border-b border-[#E5E5E5] ${
                    isEvenIndex ? "md:border-r md:border-[#E5E5E5]" : ""
                  } ${isLastRow ? "md:border-b-0" : ""}`}
                >
                  {/* Gentle, Luxury Background Fade Layer */}
                  <div className="absolute inset-0 bg-[#8E1831] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none" />

                  {/* Left Side: Icon + Title */}
                  <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                    <div className="flex items-center justify-center w-7 h-7 text-black group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-switzer text-[15px] sm:text-[16px] md:text-[20px] text-[#302B2B] group-hover:text-white transition-colors duration-500 ease-out tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Smooth Sliding Arrow */}
                  <div className="relative z-10 shrink-0 pl-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] text-[#8E1831] group-hover:text-white group-hover:translate-x-2"
                      viewBox="0 0 28 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M5 14h18M16 7l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
