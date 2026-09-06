import type { Metadata } from "next";
import CategoryHeroBanner from "@/app/components/categories/CategoryHeroBanner";

export const metadata: Metadata = {
  title: "Our Expertise & Practice Areas | Basunia & Associate",
  description:
    "Explore our full spectrum of legal expertise, corporate advisory, litigation, and regulatory consultancy services in Bangladesh.",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* 1. Hero Banner Section (Centered HD Boardroom Background) */}
      <CategoryHeroBanner
        title="Leading Corporate Lawyers in Bangladesh"
        imageSrc="/assets/images/expertise-banner-meeting.jpg"
        ctaText="Book A consultation"
        ctaHref="/contact"
      />
    </div>
  );
}