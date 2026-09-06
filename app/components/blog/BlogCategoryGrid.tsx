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
import { HiArrowRight } from "react-icons/hi2";

export default function BlogCategoryGrid() {
  const blogList: BlogItem[] = getAllBlogs();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "briefcase":
        return <FaBriefcase className="w-5 h-5 text-black shrink-0" />;
      case "family":
        return <FaUsers className="w-5 h-5 text-black shrink-0" />;
      case "gavel":
        return <FaGavel className="w-5 h-5 text-black shrink-0" />;
      case "shield":
        return <FaShieldHalved className="w-5 h-5 text-black shrink-0" />;
      case "lightbulb":
        return <FaLightbulb className="w-5 h-5 text-black shrink-0" />;
      case "building":
        return <FaBuilding className="w-5 h-5 text-black shrink-0" />;
      case "landmark":
        return <FaLandmark className="w-5 h-5 text-black shrink-0" />;
      case "users":
        return <FaUserTie className="w-5 h-5 text-black shrink-0" />;
      case "calculator":
        return <FaCalculator className="w-5 h-5 text-black shrink-0" />;
      case "ship":
        return <FaShip className="w-5 h-5 text-black shrink-0" />;
      default:
        return <FaBriefcase className="w-5 h-5 text-black shrink-0" />;
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
                  className={`group relative flex items-center justify-between p-6 sm:p-7 md:p-12 transition-all duration-200 bg-[#FAFAFA] hover:bg-[#F2F2F2] border-b border-[#E5E5E5] ${
                    isEvenIndex ? "md:border-r md:border-[#E5E5E5]" : ""
                  } ${isLastRow ? "md:border-b-0" : ""}`}
                >
                  {/* Left Side: Icon + Title */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex items-center justify-center w-7 h-7 text-black group-hover:scale-105 transition-transform duration-200">
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-switzer text-[15px] sm:text-[16px] md:text-[20px]  text-[#302B2B] group-hover:text-[#8E1831] transition-colors duration-200 tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Subtle hover arrow indicator */}
                  <div className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#8E1831]">
                    <HiArrowRight className="w-4 h-4" />
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
