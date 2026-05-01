import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News, author spotlights, release announcements, and free content from Manaforge Press.',
};

const samplePosts = [
  {
    slug: 'welcome-to-the-forge',
    title: 'Welcome to the Forge',
    excerpt: 'Manaforge Press is born — a new publishing imprint bringing you grimdark epics, progression fantasy, and dungeon-crawling adventures from multiple pen names.',
    date: '2026-05-01',
    category: 'Announcement',
    readTime: '3 min',
  },
  {
    slug: 'rk-ashvane-spotlight',
    title: 'Author Spotlight: R.K. Ashvane',
    excerpt: 'Meet the mind behind Songs of the Fallen. Classic prose meets the dark fantasy edge — discover what makes this grimdark series unmissable.',
    date: '2026-05-01',
    category: 'Author Spotlight',
    readTime: '5 min',
  },
  {
    slug: 'voidwalker-world-preview',
    title: 'World Preview: The Caelus Universe',
    excerpt: 'Corporate-controlled void stations, incomprehensible entities, and a maintenance worker who holds the key to reality. Explore the world of VoidWalker.',
    date: '2026-05-01',
    category: 'World Building',
    readTime: '4 min',
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          The Forge Blog
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          News, author spotlights, release announcements, and free content drops from Manaforge Press.
        </p>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {samplePosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl glass-panel border border-border-subtle p-6 hover:border-brand-amber/20 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="genre-badge genre-progression text-xs">{post.category}</span>
              <span className="text-text-dim text-xs">{post.date}</span>
              <span className="text-text-dim text-xs">· {post.readTime} read</span>
            </div>
            <h2 className="text-xl font-bold text-text-primary group-hover:text-brand-amber transition-colors mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              {post.title}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>

      {/* Empty state note */}
      <div className="mt-12 rounded-xl border border-dashed border-border-subtle p-8 text-center">
        <p className="text-text-dim">
          Full blog posts coming soon. Subscribe to the newsletter to get notified when we publish.
        </p>
      </div>
    </div>
  );
}
