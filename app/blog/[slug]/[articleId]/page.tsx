import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllArticlesParams,
  getArticleDetails,
} from "@/app/data/blogs";
import SingleArticleDetailSection from "@/app/components/blog/SingleArticleDetailSection";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
    articleId: string;
  }>;
}

export async function generateStaticParams() {
  return getAllArticlesParams();
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug, articleId } = await params;
  const data = getArticleDetails(slug, articleId);

  if (!data) {
    return {
      title: "Article Not Found | Basunia & Associate",
    };
  }

  return {
    title: `${data.article.title} | ${data.blog.title} | Basunia & Associate`,
    description: data.article.description,
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug, articleId } = await params;
  const data = getArticleDetails(slug, articleId);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
      {/* Blog Single Article Details Section (Left: Full Content + Right: 6 Stacked Articles) */}
      <SingleArticleDetailSection
        blog={data.blog}
        article={data.article}
        sidebarArticles={data.sidebarArticles}
      />
    </div>
  );
}
