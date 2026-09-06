"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "@/app/data/blogs";

export interface ArticleItem {
  id: string | number;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
}

const defaultArticles: ArticleItem[] = getAllBlogs()
  .slice(0, 3)
  .map((blog) => ({
    id: blog.featuredArticle.id,
    title: blog.featuredArticle.title,
    date: blog.featuredArticle.date,
    description: blog.featuredArticle.description,
    image: blog.featuredArticle.image,
    alt: blog.featuredArticle.alt || blog.featuredArticle.title,
    href: blog.featuredArticle.href || `/blog/${blog.slug}/${blog.featuredArticle.id}`,
  }));

interface ArticleSectionProps {
  articles?: ArticleItem[];
  title?: string;
  seeAllText?: string;
  seeAllHref?: string;
}

export default function ArticleSection({
  articles = defaultArticles,
  title = "Explore our latest articles",
  seeAllText = "See All airtical",
  seeAllHref = "/blog",
}: ArticleSectionProps) {
  return (
    <section className="relative w-full bg-white pb-14 sm:pb-18 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header Row */}
        <div className="flex flex-row items-center justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          {/* Main Title */}
          <h2 className="font-dm-serif-text text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] text-[#141414] font-normal leading-[1.18] tracking-tight">
            {title}
          </h2>

          {/* See All Link */}
          <Link
            href={seeAllHref}
            className="group font-geist inline-flex items-center gap-1 text-xl  font-medium text-[#8E1831] hover:text-[#761328] transition-colors whitespace-nowrap"
          >
            <span>{seeAllText}</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* 3 Columns Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7 xl:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col h-full bg-transparent"
            >
              {/* Featured Image Container */}
              <Link
                href={article.href || "/blog"}
                className="relative block w-full aspect-[16/10] overflow-hidden rounded-[2px] bg-slate-100 mb-4 sm:mb-5 shadow-xs"
              >
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={false}
                />
              </Link>

              {/* Publication Date Metadata Row */}
              <div className="flex items-center gap-1.5 text-xs sm:text-[14px] text-[#525252] mb-2.5">
                {/* Clean Clock Outline Icon */}
                <svg
                  className="w-3.5 h-3.5 text-[#555555] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-switzer font-normal tracking-wide">
                  {article.date}
                </span>
              </div>

              {/* Article Headline */}
              <h3 className="mb-2.5">
                <Link
                  href={article.href || "/blog"}
                  className="font-poppins font-medium text-lg sm:text-[20px] leading-[1.35] text-[#1e1e1e] group-hover:text-[#8E1831] transition-colors line-clamp-2 block"
                >
                  {article.title}
                </Link>
              </h3>

              {/* Excerpt / Summary Text */}
              <p className="font-switzer text-xs sm:text-sm text-[#666666] leading-relaxed mb-4 sm:mb-5 line-clamp-3 font-normal flex-1">
                {article.description}
              </p>

              {/* Read More Link */}
              <div className="mt-auto">
                <Link
                  href={article.href || "/blog"}
                  className="font-switzer inline-flex items-center gap-2 text-base  text-[#8E1831] hover:text-[#761328] transition-colors"
                >
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
