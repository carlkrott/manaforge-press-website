import { Metadata } from 'next';
import Link from 'next/link';
import { books, getGenreClass } from '@/data/content';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Browse all books from Manaforge Press — grimdark fantasy, LitRPG, progression fantasy, and dungeon crawler adventures.',
};

const allGenres = ['All', 'Grimdark Fantasy', 'LitRPG', 'Progression Fantasy', 'Dungeon Crawler', 'Science Fantasy'];

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Book Catalog
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          Every title forged at Manaforge Press. From grimdark epics to dungeon-crawling adventures.
        </p>
      </div>

      {/* Genre filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allGenres.map((genre) => (
          <span
            key={genre}
            className={`rounded-full px-4 py-2 text-sm font-semibold cursor-pointer transition-colors ${
              genre === 'All'
                ? 'bg-brand-amber text-bg-deep'
                : 'border border-border-subtle text-text-dim hover:border-brand-amber hover:text-brand-amber'
            }`}
          >
            {genre}
          </span>
        ))}
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`/books/${book.slug}`}
            className="group rounded-xl glass-panel border border-border-subtle overflow-hidden hover:border-brand-amber/30 transition-all"
          >
            <div className="book-cover flex items-center justify-center p-6">
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-amber transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {book.title}
                </h3>
                <p className="text-text-dim text-sm mt-1">{book.authorName}</p>
                {book.seriesName && (
                  <p className="text-text-dim text-xs mt-0.5">{book.seriesName} #{book.bookNumber}</p>
                )}
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {book.genres.slice(0, 2).map((genre) => (
                  <span key={genre} className={`genre-badge text-xs ${getGenreClass(genre)}`}>
                    {genre}
                  </span>
                ))}
              </div>
              <p className="text-text-dim text-sm italic">&ldquo;{book.tagline}&rdquo;</p>
              {book.status === 'editing' ? (
                <span className="inline-block mt-2 text-xs font-semibold text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded">Editing</span>
              ) : (
                <span className="inline-block mt-2 text-xs font-semibold text-text-dim bg-bg-surface px-2 py-0.5 rounded">Coming Soon</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
