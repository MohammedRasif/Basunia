import type { Metadata } from "next";
import CategoryHeroBanner from "@/app/components/categories/CategoryHeroBanner";
import CategoryOverviewSection from "@/app/components/categories/CategoryOverviewSection";
import CategoryServicesSection from "@/app/components/categories/CategoryServicesSection";
import { practiceAreas } from "@/app/data/practiceAreas";

export const metadata: Metadata = {
  title: "Our Expertise & Practice Areas | Basunia & Associate",
  description:
    "Explore our full spectrum of legal expertise, corporate advisory, litigation, and regulatory consultancy services in Bangladesh.",
};

export default function CategoriesPage() {
  const defaultArea = practiceAreas[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* 1. Hero Banner Section (Centered HD Boardroom Background) */}
      <CategoryHeroBanner
        title={defaultArea?.bannerTitle || "Leading Corporate Lawyers in Bangladesh"}
        imageSrc="/assets/images/expertise-banner-meeting.jpg"
        ctaText="Book A consultation"
        ctaHref="/contact"
      />

      {/* 2. Overview Section from JSON */}
      <CategoryOverviewSection
        badge="OVERVIEW"
        heading={defaultArea?.overviewHeading || "Corporate Law Firm in Dhaka"}
        paragraphs={defaultArea?.overviewParagraphs || []}
        imageSrc={defaultArea?.overviewImage || "/assets/images/category.png"}
      />

      {/* 3. Services Section from JSON */}
      <CategoryServicesSection
        badge="SERVICES"
        services={defaultArea?.detailedServices || defaultArea?.services || []}
      />
    </div>
  );
}