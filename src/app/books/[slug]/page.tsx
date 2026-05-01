import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { books, getBookBySlug, getGenreClass } from '@/data/content';

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  return {
    title: book.title,
    description: book.shortBlurb,
    alternates: {
      canonical: `https://manaforge-press.vercel.app/books/${book.slug}`,
    },
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const statusLabel = book.status === 'editing' ? 'Editing' : book.status === 'complete' ? 'Complete' : 'Coming Soon';
  const statusColor = book.status === 'editing' ? 'text-brand-amber bg-brand-amber/10' : 'text-text-dim bg-bg-surface';

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Book Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: book.title,
            description: book.shortBlurb,
            author: {
              '@type': 'Person',
              name: book.authorName,
              url: `https://manaforge-press.vercel.app/authors/${book.authorSlug}`,
            },
            genre: book.genres,
            ...(book.seriesName && {
              isPartOf: {
                '@type': 'BookSeries',
                name: book.seriesName,
                position: book.bookNumber,
              },
            }),
            publisher: {
              '@type': 'Organization',
              name: 'Manaforge Press',
              url: 'https://manaforge-press.vercel.app',
            },
          }),
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Book cover */}
        <div className="md:col-span-1">
          <div className="book-cover flex items-center justify-center p-8 md:sticky md:top-24">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                {book.title}
              </h2>
              {book.seriesName && (
                <p className="text-text-dim text-sm mt-2">{book.seriesName} #{book.bookNumber}</p>
              )}
            </div>
          </div>
        </div>

        {/* Book info */}
        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            {book.genres.map((genre) => (
              <span key={genre} className={`genre-badge ${getGenreClass(genre)}`}>
                {genre}
              </span>
            ))}
            <span className={`genre-badge ${statusColor}`}>
              {statusLabel}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            {book.title}
          </h1>
          <p className="text-brand-amber italic text-lg mb-2">&ldquo;{book.tagline}&rdquo;</p>
          <p className="text-text-dim mb-6">
            by <Link href={`/authors/${book.authorSlug}`} className="text-brand-amber hover:text-amber-400 transition-colors">{book.authorName}</Link>
          </p>

          {/* Blurb */}
          <div className="prose-manaforge mb-8">
            {book.blurb.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Purchase CTA */}
          <div className="rounded-xl glass-panel border border-border-subtle p-6 mb-8">
            <h3 className="text-lg font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Coming Soon to Amazon &amp; Kindle Unlimited
            </h3>
            <p className="text-text-dim text-sm mb-4">
              This title is not yet published. Sign up for our newsletter to be notified when it launches.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-6 py-2.5 text-sm font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all"
            >
              Notify Me at Launch
            </Link>
          </div>

          {/* Series context */}
          {book.seriesName && (
            <div className="rounded-xl glass-panel border border-border-subtle p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Part of {book.seriesName}
              </h3>
              <p className="text-text-dim text-sm">
                Book {book.bookNumber} in the {book.seriesName} series. Reading order and additional series information coming soon.
              </p>
            </div>
          )}

          {/* Free content placeholder */}
          <div className="rounded-xl border border-dashed border-border-subtle p-6 text-center">
            <h3 className="text-lg font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Free Content
            </h3>
            <p className="text-text-dim text-sm">
              Preview chapters, character art, and world maps will be available here at launch.
            </p>
          </div>

          {/* Merch placeholder */}
          <div className="mt-6 rounded-xl border border-dashed border-border-subtle p-4 text-center">
            <p className="text-text-dim text-sm">
              Merchandise coming soon — book-themed prints, apparel, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Back */}
      <Link href="/books" className="text-brand-amber hover:text-amber-400 transition-colors text-sm font-semibold">
        ← All Books
      </Link>
    </div>
  );
}
