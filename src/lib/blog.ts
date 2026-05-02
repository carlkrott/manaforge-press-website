/**
 * Blog content utilities for Manaforge Press
 *
 * Reads MDX files from src/content/blog/ with frontmatter.
 * This is the interface between the zeroclaw content pipeline and the website.
 *
 * Frontmatter contract:
 * ---
 * title: "Author Spotlight: R.K. Ashvane"
 * date: "2026-05-15"
 * category: "Author Spotlight"    # Announcement | Author Spotlight | World Building | Release | Free Content
 * excerpt: "Meet the mind behind..."
 * author: "Manaforge Press"       # optional, defaults to "Manaforge Press"
 * tags: ["grimdark", "spotlight"] # optional
 * readTime: "5 min"              # optional, auto-calculated if missing
 * coverImage: "/images/blog/x"   # optional
 * ---
 *
 * Zeroclaw pipeline: write .mdx files to src/content/blog/ with this frontmatter.
 * Website: this lib reads them, sorts by date, and feeds them to the blog pages.
 */

import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  tags: string[];
  readTime: string;
  coverImage?: string;
  content: string; // raw MDX body (after frontmatter)
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  tags: string[];
  readTime: string;
  coverImage?: string;
}

/**
 * Calculate estimated read time from word count
 */
function calculateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

/**
 * Parse frontmatter from an MDX file
 * Minimal parser — no dependency on gray-matter needed for basic YAML
 */
function parseFrontmatter(fileContent: string): { data: Record<string, unknown>; content: string } {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: fileContent };
  }

  const data: Record<string, unknown> = {};
  const frontmatter = match[1];

  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: unknown = line.slice(colonIndex + 1).trim();

    // Parse arrays (e.g. tags: ["a", "b"])
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    }

    // Strip surrounding quotes from strings
    if (typeof value === 'string' && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return { data, content: match[2] };
}

/**
 * Get all blog posts, sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = parseFrontmatter(raw);

    const readTime = (data.readTime as string) || calculateReadTime(content);

    return {
      slug,
      title: (data.title as string) || slug,
      date: (data.date as string) || '2026-01-01',
      category: (data.category as string) || 'Announcement',
      excerpt: (data.excerpt as string) || '',
      author: (data.author as string) || 'Manaforge Press',
      tags: (data.tags as string[]) || [],
      readTime,
      coverImage: data.coverImage as string | undefined,
      content,
    } satisfies BlogPost;
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

/**
 * Get all posts as summaries (no content body — for listing pages)
 */
export function getAllPostSummaries(): BlogPostSummary[] {
  return getAllPosts().map(({ content: _, ...summary }) => summary);
}

/**
 * Get all unique categories from existing posts
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories).sort();
}

/**
 * Get posts filtered by category
 */
export function getPostsByCategory(category: string): BlogPostSummary[] {
  if (category === 'All') return getAllPostSummaries();
  return getAllPostSummaries().filter((p) => p.category === category);
}
