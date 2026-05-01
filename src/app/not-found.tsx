import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="mb-8">
        <span className="text-6xl font-bold text-brand-amber/20" style={{ fontFamily: 'var(--font-heading)' }}>
          404
        </span>
      </div>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Lost in the Depths
      </h1>
      <p className="text-text-muted mb-8 leading-relaxed">
        This page has vanished like an echo in the void. Perhaps it was never forged,
        or perhaps it has been consumed by the darkness between worlds.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-8 py-3 text-sm font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all"
        >
          Return to the Forge
        </Link>
        <Link
          href="/books"
          className="rounded-full border border-border-default px-8 py-3 text-sm font-semibold text-text-secondary hover:border-brand-amber hover:text-brand-amber transition-all"
        >
          Browse Books
        </Link>
      </div>
    </div>
  );
}
