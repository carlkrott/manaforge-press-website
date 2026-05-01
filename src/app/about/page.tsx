import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Manaforge Press is a fantasy and LitRPG publishing imprint. Learn about our process, our authors, and our mission.',
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
              Manaforge Press is a fantasy and LitRPG publishing imprint unifying multiple pen names under one brand. 
              Each author brings a distinct voice, genre, and world — from the grimdark battlefields of The Ashmark 
              to the corporate void-stations of Caelus, from the tactical depths of The Sunless Depths to worlds yet unnamed.
            </p>
            <p>
              Our mission is simple: deliver exceptional genre fiction that respects the reader&apos;s intelligence. 
              Complex magic systems, morally grey characters, and worlds that feel lived-in — not sketched out.
            </p>
          </div>
        </div>
      </section>

      {/* Process — AI Transparency */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Our Process
        </h2>
        <div className="prose-manaforge mb-6">
          <p>
            Every Manaforge Press book is created through an AI-assisted pipeline that handles the heavy lifting 
            of world-building, prose generation, and editorial review. Here&apos;s how it works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Outline', desc: 'Detailed chapter-by-chapter structure with character arcs and plot beats' },
            { step: '02', title: 'Prose', desc: 'AI-generated first draft following the author\'s unique voice and style guide' },
            { step: '03', title: 'Editing', desc: 'Structural and line editing for pacing, consistency, and prose quality' },
            { step: '04', title: 'Checks', desc: 'Continuity verification, plot hole detection, and character consistency review' },
            { step: '05', title: 'Audit', desc: 'Final quality pass before publication — ensuring every book meets our standard' },
          ].map((item) => (
            <div key={item.step} className="rounded-xl glass-panel border border-border-subtle p-4 text-center">
              <span className="text-brand-amber text-xs font-bold uppercase tracking-wider">{item.step}</span>
              <h3 className="text-text-primary font-bold mt-1 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
              <p className="text-text-dim text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose-manaforge mt-6">
          <p>
            We believe in transparency. The stories, worlds, and characters are designed with intention and care — 
            AI is the tool, not the author. Each pen name has a distinct voice, style guide, and creative direction 
            that ensures every book feels authentic to its genre and audience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Pen Names', value: '3' },
            { label: 'Completed Books', value: '4' },
            { label: 'Total Scenes', value: '580+' },
            { label: 'Genres Covered', value: '5' },
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

      {/* Release schedule */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Release Schedule
        </h2>
        <div className="rounded-xl glass-panel border border-border-subtle p-6">
          <p className="text-text-muted mb-4">
            Monthly non-conflicting releases across all pen names. Sign up for the newsletter to get notified when each book launches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { author: 'R.K. Ashvane', genre: 'Grimdark', next: 'Iron Hymn' },
              { author: 'D.F.Bruno', genre: 'LitRPG/Sci-Fi', next: 'VoidWalker, The Awakening' },
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
    </div>
  );
}
