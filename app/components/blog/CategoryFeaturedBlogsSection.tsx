"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogItem } from "@/app/data/blogs";

interface CategoryFeaturedBlogsSectionProps {
  blog: BlogItem;
}

export default function CategoryFeaturedBlogsSection({
  blog,
}: CategoryFeaturedBlogsSectionProps) {
  const featured = blog.featuredArticle;
  const sideArticles = blog.sideArticles || [];

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* 1. Left Featured Main Column */}
          {featured && (
            <article className="group flex flex-col h-full bg-transparent">
              {/* Main Featured Image */}
              <Link
                href={featured.href || `/blog/${blog.slug}/${featured.id}`}
                className="relative block w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100 mb-4 sm:mb-5 shadow-xs"
              >
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </Link>

              {/* Date Metadata */}
              <div className="flex items-center gap-1.5 text-xs sm:text-[14px] text-[#525252] mb-2.5">
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
                  {featured.date}
                </span>
              </div>

              {/* Title Headline */}
              <h3 className="mb-2.5">
                <Link
                  href={featured.href || `/blog/${blog.slug}/${featured.id}`}
                  className="font-poppins font-medium text-lg sm:text-[20px] md:text-[22px] leading-[1.35] text-[#262626] group-hover:text-[#8E1831] transition-colors block line-clamp-2"
                >
                  {featured.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="font-switzer text-xs sm:text-sm text-[#525252] leading-relaxed mb-4 sm:mb-5 line-clamp-3 font-normal">
                {featured.description}
              </p>

              {/* Read More Link */}
              <div className="mt-auto">
                <Link
                  href={featured.href || `/blog/${blog.slug}/${featured.id}`}
                  aria-label={`Read full article: ${featured.title}`}
                  className="font-switzer inline-flex items-center gap-2 text-sm sm:text-base text-[#8E1831] hover:text-[#761328] transition-colors font-medium"
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
          )}

          {/* 2. Right Column (3 Compact Stacked Horizontal Cards) */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-row items-center gap-4 sm:gap-5 bg-transparent"
              >
                {/* Thumbnail Image Container */}
                <Link
                  href={article.href || `/blog/${blog.slug}/${article.id}`}
                  aria-label={`View article: ${article.title}`}
                  className="relative w-[150px] sm:w-[190px] md:w-[225px] lg:w-[245px] aspect-[4/3] sm:aspect-[16/11] shrink-0 rounded-[2px] overflow-hidden bg-slate-100 shadow-xs"
                >
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 150px, (max-width: 1024px) 225px, 245px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Right Text Details */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  {/* Date Metadata */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-[#525252] mb-1">
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

                  {/* Title Headline */}
                  <h4 className="mb-1.5">
                    <Link
                      href={article.href || `/blog/${blog.slug}/${article.id}`}
                      className="font-poppins font-medium text-sm sm:text-[16px] md:text-[17px] leading-[1.35] text-[#262626] group-hover:text-[#8E1831] transition-colors block line-clamp-2 sm:line-clamp-3"
                    >
                      {article.title}
                    </Link>
                  </h4>

                  {/* Read More Link */}
                  <div>
                    <Link
                      href={article.href || `/blog/${blog.slug}/${article.id}`}
                      aria-label={`Read full article: ${article.title}`}
                      className="font-switzer inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#8E1831] hover:text-[#761328] transition-colors font-medium"
                    >
                      <span>Read more</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
