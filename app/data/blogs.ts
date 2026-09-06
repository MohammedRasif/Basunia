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
