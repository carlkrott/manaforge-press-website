import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostSummaries, getAllCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News, author spotlights, release announcements, and free content from Manaforge Press.',
  alternates: { canonical: 'https://manaforge-press.vercel.app/blog' },
};

const categoryStyles: Record<string, string> = {
  Announcement: 'genre-progression',
  'Author Spotlight': 'genre-litrpg',
  'World Building': 'genre-grimdark',
  Release: 'genre-dungeon',
  'Free Content': 'genre-litrpg',
};

export default function BlogPage() {
  const posts = getAllPostSummaries();
  const categories = ['All', ...getAllCategories()];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          The Forge Blog
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          News, author spotlights, release announcements, and free content drops from Manaforge Press.
        </p>
      </div>

      {/* Category filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === 'All'
                  ? 'bg-brand-amber text-bg-deep'
                  : 'border border-border-subtle text-text-dim'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Posts */}
      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl glass-panel border border-border-subtle p-6 hover:border-brand-amber/20 transition-all group"
            >
              <article>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`genre-badge text-xs ${categoryStyles[post.category] || 'genre-progression'}`}>
                    {post.category}
                  </span>
                  <span className="text-text-dim text-xs">
                    {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-text-dim text-xs">· {post.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold text-text-primary group-hover:text-brand-amber transition-colors mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {post.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-text-dim text-xs">#{tag}</span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border-subtle p-8 text-center">
          <p className="text-text-dim">
            No posts yet. Subscribe to the newsletter to get notified when we publish.
          </p>
        </div>
      )}
    </div>
  );
}
