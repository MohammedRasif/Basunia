import BlogHeroBanner from "@/app/components/blog/BlogHeroBanner";
import BlogCategoryGrid from "@/app/components/blog/BlogCategoryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Practice Insights | Basunia & Associate",
  description:
    "Explore comprehensive legal articles, courtroom insights, and practice area updates from the advocates at Basunia & Associate.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* 1. Hero Banner Section */}
      <BlogHeroBanner title="BLOGS" />

      {/* 2. Practice Area Blog Categories List (2-Column Bordered Grid) */}
      <BlogCategoryGrid />
    </div>
  );
}
