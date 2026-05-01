import { Metadata } from 'next';
import Link from 'next/link';
import { authors, getBooksByAuthor, getGenreClass } from '@/data/content';

export const metadata: Metadata = {
  title: 'Authors',
  description: 'Meet the pen names behind Manaforge Press — grimdark, LitRPG, progression fantasy, and dungeon crawler authors.',
};

export default function AuthorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Our Authors
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          Each pen name brings a unique voice and world to the forge. From grimdark epics to dungeon-crawling adventures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author) => {
          const authorBooks = getBooksByAuthor(author.slug);
          const isComingSoon = author.status === 'coming-soon';

          return (
            <div
              key={author.slug}
              className={`rounded-xl glass-panel border border-border-subtle p-6 transition-all ${
                isComingSoon
                  ? 'opacity-60'
                  : 'hover:border-brand-amber/30 group'
              }`}
            >
              {/* Avatar */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-amber/20 to-brand-gold/10 border border-border-subtle mb-4">
                {isComingSoon ? (
                  <span className="text-text-dim text-lg">?</span>
                ) : (
                  <span className="text-2xl font-bold text-brand-amber" style={{ fontFamily: 'var(--font-heading)' }}>
                    {author.name.charAt(0)}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {isComingSoon ? 'New Author' : author.name}
              </h3>
              <p className="text-brand-amber text-sm italic mb-3">{author.tagline}</p>

              {author.genres.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {author.genres.map((genre) => (
                    <span key={genre} className={`genre-badge ${getGenreClass(genre)}`}>
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {!isComingSoon && author.bio && (
                <p className="text-text-dim text-sm line-clamp-3 mb-4">
                  {author.bio.substring(0, 150)}...
                </p>
              )}

              {authorBooks.length > 0 && (
                <div className="mb-4">
                  <p className="text-text-dim text-xs uppercase tracking-wider mb-2">Books</p>
                  <div className="flex flex-wrap gap-2">
                    {authorBooks.map((book) => (
                      <span key={book.slug} className="text-sm text-text-secondary bg-bg-deep/50 px-2 py-1 rounded">
                        {book.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {isComingSoon ? (
                <span className="inline-block text-xs font-semibold text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              ) : (
                <Link
                  href={`/authors/${author.slug}`}
                  className="inline-block text-sm font-semibold text-brand-amber hover:text-amber-400 transition-colors"
                >
                  View Profile →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
