import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-amber to-brand-gold">
                <svg className="h-4 w-4 text-bg-deep" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                Manaforge Press
              </span>
            </div>
            <p className="text-text-dim text-sm leading-relaxed">
              Fantasy and LitRPG publishing. Multiple pen names, one forge.
            </p>
          </div>

          {/* Authors */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Authors</h3>
            <ul className="space-y-2">
              <li><Link href="/authors/rk-ashvane" className="text-text-dim hover:text-brand-amber text-sm transition-colors">R.K. Ashvane</Link></li>
              <li><Link href="/authors/df-bruno" className="text-text-dim hover:text-brand-amber text-sm transition-colors">D.F.Bruno</Link></li>
              <li><Link href="/authors/vk-hollow" className="text-text-dim hover:text-brand-amber text-sm transition-colors">V.K. Hollow</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/books" className="text-text-dim hover:text-brand-amber text-sm transition-colors">Book Catalog</Link></li>
              <li><Link href="/blog" className="text-text-dim hover:text-brand-amber text-sm transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-text-dim hover:text-brand-amber text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-text-dim hover:text-brand-amber text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><span className="text-text-dim text-sm">© {currentYear} Manaforge Press</span></li>
              <li><span className="text-text-dim text-sm">All rights reserved</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-subtle text-center">
          <p className="text-text-dim text-xs">
            Forged with magic. Powered by imagination.
          </p>
        </div>
      </div>
    </footer>
  );
}
