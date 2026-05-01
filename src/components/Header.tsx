'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/authors', label: 'Authors' },
  { href: '/books', label: 'Books' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-deep/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-amber to-brand-gold">
            <svg className="h-6 w-6 text-bg-deep" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-bold text-text-primary group-hover:text-brand-amber transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
              Manaforge Press
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-brand-amber transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-5 py-2 text-sm font-bold text-bg-deep hover:from-amber-400 hover:to-brand-amber transition-all"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-secondary hover:text-brand-amber transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border-subtle bg-bg-deep/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-text-muted hover:text-brand-amber transition-colors text-sm font-semibold uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#newsletter"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-full bg-gradient-to-r from-brand-amber to-brand-gold px-5 py-2 text-sm font-bold text-bg-deep mt-2"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
