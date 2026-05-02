import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://manaforge-press.vercel.app/blog/${post.slug}`,
    },
  };
}

const categoryStyles: Record<string, string> = {
  Announcement: 'genre-progression',
  'Author Spotlight': 'genre-litrpg',
  'World Building': 'genre-grimdark',
  Release: 'genre-dungeon',
  'Free Content': 'genre-litrpg',
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: post.author,
              url: 'https://manaforge-press.vercel.app',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Manaforge Press',
              url: 'https://manaforge-press.vercel.app',
            },
          }),
        }}
      />

      {/* Back link */}
      <Link href="/blog" className="text-brand-amber hover:text-amber-400 transition-colors text-sm font-semibold mb-6 inline-block">
        ← All Posts
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`genre-badge ${categoryStyles[post.category] || 'genre-progression'}`}>
            {post.category}
          </span>
          <span className="text-text-dim text-sm">{formattedDate}</span>
          <span className="text-text-dim text-sm">· {post.readTime} read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {post.title}
        </h1>
        <p className="text-text-dim text-sm">
          By {post.author}
        </p>
      </header>

      {/* Body — rendered as prose */}
      <article className="prose-manaforge mb-12">
        {post.content.split('\n').map((line, i) => {
          // Handle headings
          if (line.startsWith('## ')) {
            return (
              <h2 key={i} className="text-2xl font-bold text-text-primary mt-10 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {line.replace('## ', '')}
              </h2>
            );
          }
          if (line.startsWith('### ')) {
            return (
              <h3 key={i} className="text-xl font-bold text-text-primary mt-8 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {line.replace('### ', '')}
              </h3>
            );
          }

          // Handle blockquotes
          if (line.startsWith('> ')) {
            return (
              <blockquote key={i} className="border-l-3 border-brand-amber pl-6 my-6 italic text-text-muted">
                {line.replace('> ', '')}
              </blockquote>
            );
          }

          // Handle bold lines (like separators or emphasis)
          if (line.startsWith('**') && line.endsWith('**')) {
            return (
              <p key={i} className="font-bold text-text-primary">
                {line.replace(/\*\*/g, '')}
              </p>
            );
          }

          // Handle italic text in paragraphs
          const renderedLine = line
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>');

          // Empty lines become spacing
          if (line.trim() === '') {
            return null;
          }

          return (
            <p key={i} dangerouslySetInnerHTML={{ __html: renderedLine }} />
          );
        })}
      </article>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border-subtle px-3 py-1 text-xs text-text-dim">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Post navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border-subtle">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="group text-left">
            <span className="text-text-dim text-xs uppercase tracking-wider">Previous</span>
            <p className="text-brand-amber group-hover:text-amber-400 transition-colors text-sm font-semibold mt-1">
              ← {prevPost.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="group text-right">
            <span className="text-text-dim text-xs uppercase tracking-wider">Next</span>
            <p className="text-brand-amber group-hover:text-amber-400 transition-colors text-sm font-semibold mt-1">
              {nextPost.title} →
            </p>
          </Link>
        ) : (
          <div />
        )}
      </nav>

      {/* Newsletter CTA */}
      <div className="mt-12 rounded-xl glass-panel border border-border-subtle p-6 sm:p-8 text-center">
        <h3 className="text-xl font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Stay in the Forge
        </h3>
        <p className="text-text-muted text-sm mb-4">
          Get notified when new books launch and receive free preview chapters.
        </p>
        <Link
          href="/#newsletter"
          className="inline-block rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-6 py-2.5 text-sm font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </div>
  );
}
