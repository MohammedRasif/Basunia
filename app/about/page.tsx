import AboutHeroBanner from "@/app/components/about/AboutHeroBanner";
import AboutOurStorySection from "@/app/components/about/AboutOurStorySection";
import AboutFeaturesSection from "@/app/components/about/AboutFeaturesSection";
import AboutStatsConsultationSection from "@/app/components/about/AboutStatsConsultationSection";

export const metadata = {
  title: "About Us | Basunia & Associate",
  description:
    "Learn about Basunia & Associate's three-decade legacy of legal excellence, courtroom advocacy, and client commitment in Bangladesh and the UK.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 lg:pb-40 pb-16">
      {/* 1. Hero Banner Section */}
      <AboutHeroBanner />

      {/* 2. Our Story Section */}
      <AboutOurStorySection />

      {/* 3. Feature Highlight Cards */}
      <AboutFeaturesSection />

      {/* 4. Stats & Consultation Section (Scroll Count-Up Animation) */}
      <AboutStatsConsultationSection />
    </div>
  );
}
