import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPracticeAreas, getPracticeAreaBySlug } from "@/app/data/practiceAreas";
import CategoryHeroBanner from "@/app/components/categories/CategoryHeroBanner";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export async function generateStaticParams() {
  const areas = getAllPracticeAreas();
  return areas.map((area) => ({
    categorySlug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const area = getPracticeAreaBySlug(categorySlug);

  if (!area) {
    return {
      title: "Expertise Not Found | Basunia & Associate",
    };
  }

  return {
    title: `${area.bannerTitle || area.title} | Basunia & Associate`,
    description: area.shortDescription || area.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const area = getPracticeAreaBySlug(categorySlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* 1. Hero Banner Section with Category-wise Title & Centered HD Boardroom Background */}
      <CategoryHeroBanner
        title={area.bannerTitle}
        categoryTitle={area.title}
        imageSrc="/assets/images/expertise-banner-meeting.jpg"
        ctaText="Book A consultation"
        ctaHref="/contact"
      />
    </div>
  );
}