import blogsData from "./blogs.json";

export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface CategoryArticleItem {
  id: string;
  title: string;
  date: string;
  description: string;
  paragraphs?: string[];
  image: string;
  alt: string;
  href?: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  readTime: string;
  publishedDate: string;
  featuredArticle: CategoryArticleItem;
  sideArticles: CategoryArticleItem[];
  latestArticles?: CategoryArticleItem[];
  author: BlogAuthor;
  coverImage: string;
  badge: string;
  overview: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  tags: string[];
}

export const blogs: BlogItem[] = blogsData as BlogItem[];

export function getAllBlogs(): BlogItem[] {
  return blogs;
}

export function getBlogBySlug(slug: string): BlogItem | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getBlogById(id: string): BlogItem | undefined {
  return blogs.find((blog) => blog.id === id);
}

export function getAllArticlesParams() {
  const params: { slug: string; articleId: string }[] = [];
  blogs.forEach((blog) => {
    if (blog.featuredArticle?.id) {
      params.push({ slug: blog.slug, articleId: blog.featuredArticle.id });
    }
    blog.sideArticles?.forEach((art) => {
      if (art.id) params.push({ slug: blog.slug, articleId: art.id });
    });
    blog.latestArticles?.forEach((art) => {
      if (art.id) params.push({ slug: blog.slug, articleId: art.id });
    });
  });
  return params;
}

export function getArticleDetails(slug: string, articleId: string) {
  const blog = getBlogBySlug(slug);
  if (!blog) return undefined;

  const allCategoryArticles: CategoryArticleItem[] = [
    blog.featuredArticle,
    ...(blog.sideArticles || []),
    ...(blog.latestArticles || []),
  ].filter(Boolean);

  const article = allCategoryArticles.find((art) => art.id === articleId) || blog.featuredArticle;
  
  // 6 sidebar articles
  const otherArticles = allCategoryArticles.filter((art) => art.id !== articleId);
  const sidebarArticles = (otherArticles.length >= 6 ? otherArticles : [...allCategoryArticles, ...allCategoryArticles]).slice(0, 6);

  return {
    blog,
    article,
    sidebarArticles,
  };
}
