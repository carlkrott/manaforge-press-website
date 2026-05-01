import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Manaforge Press is a fantasy and LitRPG publishing imprint. Discover our authors, our worlds, and our mission.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
        About Manaforge Press
      </h1>

      {/* Mission */}
      <section className="mb-12">
        <div className="rounded-2xl glass-panel border border-border-subtle p-8 amber-glow">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            One Forge. Many Worlds.
          </h2>
          <div className="prose-manaforge">
            <p>
              Manaforge Press is a fantasy and LitRPG publishing house home to multiple authors, each with their own
              distinct voice, genre, and world — from the grimdark battlefields of The Ashmark to the corporate
              void-stations of Caelus, from the tactical depths of The Sunless Depths to worlds yet unnamed.
            </p>
            <p>
              Our mission is simple: deliver exceptional genre fiction that respects the reader&apos;s intelligence.
              Complex magic systems, morally grey characters, and worlds that feel lived-in — not sketched out.
            </p>
          </div>
        </div>
      </section>

      {/* What we publish */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          What We Forge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              genre: 'Grimdark Fantasy',
              desc: 'Dark worlds where morality is grey, gods are dying, and every choice has a cost.',
              author: 'R.K. Ashvane',
              color: 'border-red-900/40 hover:border-red-800/60',
            },
            {
              genre: 'LitRPG & Progression Fantasy',
              desc: 'Power systems that feel earned, fight scenes that crackle, and characters who grow through adversity.',
              author: 'D.F.Bruno',
              color: 'border-purple-900/40 hover:border-purple-800/60',
            },
            {
              genre: 'Dungeon Crawler',
              desc: 'Underground labyrinths, tactical combat, and emotion-fueled magic systems where survival demands adaptation.',
              author: 'V.K. Hollow',
              color: 'border-emerald-900/40 hover:border-emerald-800/60',
            },
            {
              genre: 'More to Come',
              desc: 'Two more authors are in the forge. New genres, new worlds, new voices.',
              author: 'TBA',
              color: 'border-amber-900/40 hover:border-amber-800/60',
            },
          ].map((item) => (
            <div key={item.genre} className={`rounded-xl glass-panel border p-6 transition-colors ${item.color}`}>
              <h3 className="text-lg font-bold text-text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.genre}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">{item.desc}</p>
              <p className="text-text-dim text-xs">
                {item.author !== 'TBA' ? (
                  <>by <Link href={`/authors/${item.author === 'R.K. Ashvane' ? 'rk-ashvane' : item.author === 'D.F.Bruno' ? 'df-bruno' : 'vk-hollow'}`} className="text-brand-amber hover:text-amber-400 transition-colors">{item.author}</Link></>
                ) : (
                  <span className="text-brand-amber">Coming Soon</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Authors', value: '3' },
            { label: 'Completed Books', value: '4' },
            { label: 'Genres Covered', value: '5' },
            { label: 'New Authors', value: '2' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl glass-panel border border-border-subtle p-6 text-center">
              <div className="text-3xl font-bold text-brand-amber mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <p className="text-text-dim text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Release cadence */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Release Cadence
        </h2>
        <div className="rounded-xl glass-panel border border-border-subtle p-6">
          <p className="text-text-muted mb-4">
            We publish on a monthly non-conflicting schedule across our authors. That means a new book or series entry every month — no long waits between releases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { author: 'R.K. Ashvane', genre: 'Grimdark Fantasy', next: 'Iron Hymn' },
              { author: 'D.F.Bruno', genre: 'LitRPG / Science Fantasy', next: 'VoidWalker, The Awakening' },
              { author: 'V.K. Hollow', genre: 'Dungeon Crawler', next: "Baildur's Pass" },
            ].map((item) => (
              <div key={item.author} className="rounded-lg bg-bg-deep/50 border border-border-subtle p-4">
                <p className="text-text-primary font-semibold text-sm">{item.author}</p>
                <p className="text-brand-amber text-xs">{item.genre}</p>
                <p className="text-text-dim text-xs mt-1">Next: {item.next}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* AI Disclaimer — subtle, bottom, skippable */}
          <section className="mt-16 pt-8 border-t border-border-subtle">
            <div className="rounded-xl bg-bg-deep/50 border border-border-subtle p-6">
              <h3 className="text-sm font-semibold text-text-dim uppercase tracking-wider mb-2">
                A Note on Our Process
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                Some of the tools used in our writing and editorial process are AI-assisted. Every work is
                conceived, directed, and approved by human creators. Each author has a distinct voice and quality
                standard that we stand behind — the stories, worlds, and characters are ours.
              </p>
            </div>
          </section>
    </div>
  );
}
