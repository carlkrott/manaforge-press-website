import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { authors, getAuthorBySlug, getBooksByAuthor, getGenreClass } from '@/data/content';

export async function generateStaticParams() {
  return authors
    .filter((a) => a.status === 'active')
    .map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: author.name,
    description: `${author.name} — ${author.tagline}. ${author.genres.join(', ')} author at Manaforge Press.`,
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author || author.status !== 'active') {
    notFound();
  }

  const authorBooks = getBooksByAuthor(slug);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Author header */}
      <div className="flex items-start gap-6 mb-12">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-amber/20 to-brand-gold/10 border border-border-subtle">
          <span className="text-3xl font-bold text-brand-amber" style={{ fontFamily: 'var(--font-heading)' }}>
            {author.name.charAt(0)}
          </span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            {author.name}
          </h1>
          <p className="text-brand-amber italic text-lg mb-3">{author.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {author.genres.map((genre) => (
              <span key={genre} className={`genre-badge ${getGenreClass(genre)}`}>
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>About</h2>
        <div className="prose-manaforge text-text-secondary leading-relaxed">
          {author.bio.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Comparable authors */}
      {author.comparableAuthors.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            If You Like
          </h2>
          <div className="flex flex-wrap gap-3">
            {author.comparableAuthors.map((comp) => (
              <span key={comp} className="rounded-full border border-border-subtle px-4 py-2 text-sm text-text-secondary">
                {comp}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Books */}
      {authorBooks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {authorBooks.map((book) => (
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
                    {book.seriesName && (
                      <p className="text-text-dim text-sm mt-1">{book.seriesName} #{book.bookNumber}</p>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-dim text-sm italic">&ldquo;{book.tagline}&rdquo;</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {book.genres.map((genre) => (
                      <span key={genre} className={`genre-badge text-xs ${getGenreClass(genre)}`}>
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Free content placeholder */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Free Content
        </h2>
        <div className="rounded-xl glass-panel border border-border-dashed border-border-subtle p-8 text-center">
          <p className="text-text-dim">Bonus chapters, character art, and world maps — coming with launch.</p>
        </div>
      </section>

      {/* Back */}
      <div className="mt-12">
        <Link href="/authors" className="text-brand-amber hover:text-amber-400 transition-colors text-sm font-semibold">
          ← All Authors
        </Link>
      </div>
    </div>
  );
}
