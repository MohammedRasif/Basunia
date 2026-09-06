import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllArticlesParams,
  getArticleDetails,
} from "@/app/data/blogs";
import SingleArticleDetailSection from "@/app/components/blog/SingleArticleDetailSection";
import RelevantBlogsSection from "@/app/components/blog/RelevantBlogsSection";

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
    <div className="min-h-screen bg-white text-slate-900 pt-28 sm:pt-32 lg:pt-36">
      {/* 1st Section: Blog Single Article Details (Left: Full Content + Right: 6 Stacked Articles) */}
      <SingleArticleDetailSection
        blog={data.blog}
        article={data.article}
        sidebarArticles={data.sidebarArticles}
      />

      {/* 2nd Section: Relevant blogs (3 Cards Grid) */}
      <RelevantBlogsSection
        blog={data.blog}
        articles={data.relevantArticles}
        title="Relevant blogs"
      />
    </div>
  );
}
