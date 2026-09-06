import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllBlogs, getBlogBySlug, BlogItem } from "@/app/data/blogs";
import BlogHeroBanner from "@/app/components/blog/BlogHeroBanner";
import CategoryFeaturedBlogsSection from "@/app/components/blog/CategoryFeaturedBlogsSection";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Basunia & Associate",
    };
  }

  return {
    title: `${blog.title} | Basunia & Associate`,
    description: blog.shortDescription,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog: BlogItem | undefined = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 pb-16 lg:pb-24">
      {/* 1. Hero Banner */}
      <BlogHeroBanner title={blog.title} />

      {/* 2. 1st Section: Featured Blog Grid (1 Large Left + 3 Stacked Right) matching exact mockup */}
      <CategoryFeaturedBlogsSection blog={blog} />
    </div>
  );
}
