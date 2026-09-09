"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogItem, CategoryArticleItem } from "@/app/data/blogs";

interface SingleArticleDetailSectionProps {
  blog: BlogItem;
  article: CategoryArticleItem;
  sidebarArticles: CategoryArticleItem[];
}

export default function SingleArticleDetailSection({
  blog,
  article,
  sidebarArticles,
}: SingleArticleDetailSectionProps) {
  // Directly extract paragraphs from JSON data (or fallback to article.description)
  const paragraphs = article.paragraphs || (article.description ? [article.description] : []);

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* 1. Left Main Column: Full Article Content from JSON (7 cols) */}
          <main className="lg:col-span-7 flex flex-col">
            {/* Top Large Featured Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-[2px] bg-slate-100 mb-4 sm:mb-5 shadow-xs">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            {/* Publication Date Metadata Row */}
            <div className="flex items-center gap-1.5 text-xs sm:text-[14px] text-[#525252] mb-3">
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
            <h1 className="font-poppins font-medium text-xl sm:text-2xl md:text-[26px] leading-[1.3] text-[#262626] mb-5 tracking-tight">
              {article.title}
            </h1>

            {/* Full Article Body Paragraphs directly from JSON */}
            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-[14.5px] font-switzer text-[#525252] leading-[1.75] font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </main>

          {/* 2. Right Column: 6 Stacked Horizontal Article Cards from JSON (5 cols) */}
          <aside className="lg:col-span-5 flex flex-col gap-4 sm:gap-4.5">
            {sidebarArticles.map((sideItem, index) => (
              <article
                key={`${sideItem.id}-${index}`}
                className="group flex flex-row items-center gap-3.5 sm:gap-4 bg-transparent"
              >
                {/* Thumbnail Image Container */}
                <Link
                  href={`/blog/${blog.slug}/${sideItem.id}`}
                  className="relative w-[110px] sm:w-[135px] md:w-[155px] aspect-[4/3] sm:aspect-[16/11] shrink-0 rounded-[2px] overflow-hidden bg-slate-100 shadow-xs"
                >
                  <Image
                    src={sideItem.image}
                    alt={sideItem.alt}
                    fill
                    sizes="(max-width: 768px) 110px, 155px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Right Text Details */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  {/* Date Metadata */}
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[#525252] mb-1">
                    <svg
                      className="w-3 h-3 text-[#555555] shrink-0"
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
                      {sideItem.date}
                    </span>
                  </div>

                  {/* Title Headline */}
                  <h4 className="mb-1">
                    <Link
                      href={`/blog/${blog.slug}/${sideItem.id}`}
                      className="font-poppins font-medium text-xs sm:text-[14px] md:text-[15px] leading-[1.3] text-[#262626] group-hover:text-[#8E1831] transition-colors block line-clamp-2"
                    >
                      {sideItem.title}
                    </Link>
                  </h4>

                  {/* Read More Link */}
                  <div>
                    <Link
                      href={`/blog/${blog.slug}/${sideItem.id}`}
                      aria-label={`Read full article: ${sideItem.title}`}
                      className="font-switzer inline-flex items-center gap-1 text-xs text-[#8E1831] hover:text-[#761328] transition-colors font-medium"
                    >
                      <span>Read more</span>
                      <svg
                        className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
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
          </aside>

        </div>
      </div>
    </section>
  );
}
