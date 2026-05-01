import Link from 'next/link';
import { authors, books } from '@/data/content';
import { NewsletterForm } from '@/components/NewsletterForm';

export default function HomePage() {
  const activeAuthors = authors.filter((a) => a.status === 'active');

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-amber/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <div className="animate-fade-in-up">
            <p className="text-brand-amber font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Fantasy &amp; LitRPG Publishing
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Stories Forged in{' '}
              <span className="bg-gradient-to-r from-brand-amber to-brand-gold bg-clip-text text-transparent">
                Darkness
              </span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Multiple authors. One forge. Grimdark epics, progression fantasy, and dungeon crawler adventures — discover your next obsession.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/books"
                className="rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-8 py-3 text-base font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all"
              >
                Browse Books
              </Link>
              <Link
                href="/authors"
                className="rounded-full border border-border-default px-8 py-3 text-base font-semibold text-text-secondary hover:border-brand-amber hover:text-brand-amber transition-all"
              >
                Meet Our Authors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            From the Forge
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Every book is crafted with care — grimdark worlds, progression systems, and characters you won&apos;t forget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group rounded-xl glass-panel border border-border-subtle overflow-hidden hover:border-brand-amber/30 transition-all"
            >
              {/* Book cover placeholder */}
              <div className="book-cover flex items-center justify-center p-6">
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-amber transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {book.title}
                  </h3>
                  <p className="text-text-dim text-sm mt-1">{book.authorName}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {book.genres.slice(0, 2).map((genre) => (
                    <span key={genre} className={`genre-badge ${genre === 'Grimdark Fantasy' || genre === 'Epic Fantasy' ? 'genre-grimdark' : genre === 'Dungeon Crawler' ? 'genre-dungeon' : genre === 'Progression Fantasy' ? 'genre-progression' : 'genre-litrpg'}`}>
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-text-dim text-sm italic">&ldquo;{book.tagline}&rdquo;</p>
                {book.status === 'editing' && (
                  <span className="inline-block mt-2 text-xs font-semibold text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded">Editing</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Authors */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The Authors
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Each author brings a distinct voice, genre, and world to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeAuthors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="group rounded-xl glass-panel border border-border-subtle p-6 hover:border-brand-amber/30 transition-all"
            >
              {/* Avatar placeholder */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-amber/20 to-brand-gold/10 border border-border-subtle mb-4">
                <span className="text-2xl font-bold text-brand-amber" style={{ fontFamily: 'var(--font-heading)' }}>
                  {author.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-amber transition-colors mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {author.name}
              </h3>
              <p className="text-brand-amber text-sm italic mb-3">{author.tagline}</p>
              <div className="flex flex-wrap gap-1.5">
                {author.genres.map((genre) => (
                  <span key={genre} className={`genre-badge text-xs ${genre === 'Grimdark Fantasy' || genre === 'Epic Fantasy' ? 'genre-grimdark' : genre === 'Dungeon Crawler' ? 'genre-dungeon' : genre === 'Progression Fantasy' ? 'genre-progression' : 'genre-litrpg'}`}>
                    {genre}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl glass-panel border border-border-subtle p-8 md:p-12 text-center amber-glow">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Join the Forge
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8">
            Get notified when new books launch, receive free preview chapters, and be the first to discover new authors.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
