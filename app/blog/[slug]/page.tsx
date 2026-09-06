import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogs, getBlogBySlug, BlogItem } from "@/app/data/blogs";
import BlogHeroBanner from "@/app/components/blog/BlogHeroBanner";
import AnimatedButton from "@/app/components/shared/AnimatedButton";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineChevronRight,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import {
  FaBriefcase,
  FaGavel,
  FaUsers,
  FaShieldHalved,
  FaLightbulb,
  FaBuilding,
  FaLandmark,
  FaUserTie,
  FaCalculator,
  FaShip,
} from "react-icons/fa6";

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

  const allBlogs = getAllBlogs();
  const otherBlogs = allBlogs.filter((item) => item.slug !== blog.slug);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "briefcase":
        return <FaBriefcase className="w-4 h-4 text-slate-800 shrink-0" />;
      case "family":
        return <FaUsers className="w-4 h-4 text-slate-800 shrink-0" />;
      case "gavel":
        return <FaGavel className="w-4 h-4 text-slate-800 shrink-0" />;
      case "shield":
        return <FaShieldHalved className="w-4 h-4 text-slate-800 shrink-0" />;
      case "lightbulb":
        return <FaLightbulb className="w-4 h-4 text-slate-800 shrink-0" />;
      case "building":
        return <FaBuilding className="w-4 h-4 text-slate-800 shrink-0" />;
      case "landmark":
        return <FaLandmark className="w-4 h-4 text-slate-800 shrink-0" />;
      case "users":
        return <FaUserTie className="w-4 h-4 text-slate-800 shrink-0" />;
      case "calculator":
        return <FaCalculator className="w-4 h-4 text-slate-800 shrink-0" />;
      case "ship":
        return <FaShip className="w-4 h-4 text-slate-800 shrink-0" />;
      default:
        return <FaBriefcase className="w-4 h-4 text-slate-800 shrink-0" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-slate-900 pt-24 sm:pt-28 pb-20">
      {/* 1. Hero Banner */}
      <BlogHeroBanner title={blog.title} />

      {/* 2. Breadcrumbs Bar */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-arimo">
          <Link href="/" className="hover:text-[#8E1831] transition-colors">
            Home
          </Link>
          <HiOutlineChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/blog" className="hover:text-[#8E1831] transition-colors">
            Blogs
          </Link>
          <HiOutlineChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">
            {blog.title}
          </span>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Left Column: Article Body (8 cols) */}
          <main className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-slate-200/70">
            
            {/* Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8E1831]/10 text-[#8E1831]">
                {blog.badge}
              </span>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 font-arimo">
                <span className="flex items-center gap-1.5">
                  <HiOutlineCalendar className="w-4 h-4 text-slate-400" />
                  {blog.publishedDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <HiOutlineClock className="w-4 h-4 text-slate-400" />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="marcellus text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 pt-6 pb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Author Profile */}
            <div className="flex items-center gap-4 py-4 mb-6 border-y border-slate-100">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-slate-100 shrink-0 border border-slate-200">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-slate-900 font-arimo">
                  {blog.author.name}
                </p>
                <p className="text-xs text-slate-500 font-arimo">
                  {blog.author.role}
                </p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[440px] rounded-xl overflow-hidden mb-8 shadow-sm">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Overview / Introduction */}
            <div className="bg-[#FAF9F7] p-5 sm:p-7 rounded-xl border-l-4 border-[#8E1831] mb-8">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium italic font-arimo">
                {blog.overview}
              </p>
            </div>

            {/* Structured Sections */}
            <div className="space-y-8">
              {blog.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="marcellus text-xl sm:text-2xl font-bold text-slate-900">
                    {sec.heading}
                  </h2>
                  <p className="arimo text-slate-600 text-sm sm:text-base leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="marcellus text-lg sm:text-xl font-bold text-[#8E1831] mb-4 flex items-center gap-2">
                <HiOutlineCheckCircle className="w-6 h-6 text-[#8E1831]" />
                Key Legal Takeaways
              </h3>
              <ul className="space-y-3">
                {blog.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-arimo">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E1831] mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                Tags:
              </span>
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-arimo"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </main>

          {/* Right Sidebar: Topics & CTA (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* 1. Practice Areas / All Topics List */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-slate-200/70">
              <h3 className="marcellus text-lg sm:text-xl font-bold text-slate-900 pb-4 border-b border-slate-100">
                All Legal Topics
              </h3>
              <div className="divide-y divide-slate-100 mt-2">
                {allBlogs.map((item) => {
                  const isCurrent = item.slug === blog.slug;
                  return (
                    <Link
                      key={item.id}
                      href={`/blog/${item.slug}`}
                      className={`flex items-center justify-between py-3.5 px-2 rounded-lg transition-all group ${
                        isCurrent
                          ? "bg-[#FAF0F2] text-[#8E1831] font-bold"
                          : "text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          {getCategoryIcon(item.icon)}
                        </div>
                        <span className="text-xs sm:text-sm font-arimo">
                          {item.title}
                        </span>
                      </div>
                      <HiOutlineChevronRight
                        className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                          isCurrent ? "text-[#8E1831]" : "text-slate-400"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 2. Need Consultation Banner */}
            <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-lg relative overflow-hidden space-y-4">
              <div className="relative z-10">
                <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase font-arimo">
                  Expert Legal Counsel
                </span>
                <h4 className="marcellus text-xl sm:text-2xl font-bold mt-1 mb-2">
                  Need tailored legal advice on this topic?
                </h4>
                <p className="arimo text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Schedule a confidential consultation with our seasoned advocates to assess your legal options.
                </p>
                <AnimatedButton href="/contact" className="w-full text-center">
                  Book a Consultation
                </AnimatedButton>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
