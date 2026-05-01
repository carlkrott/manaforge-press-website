# Research Summary: Manaforge Press Website

**Synthesized:** April 28, 2026
**Files analyzed:** STACK.md, FEATURES.md
**Missing:** ARCHITECTURE.md, PITFALLS.md (not generated — only 2 of 4 research streams ran)

---

## Executive Summary

Manaforge Press is a fantasy/LitRPG indie publishing imprint website built around AI-generated content. The competitive landscape (Aethon Books, Shadow Alley Press, Black Library) runs almost entirely on WordPress with generic publisher templates, creating a clear opportunity for a modern, custom-built Next.js site that differentiates on both design and transparency.

The recommended approach is a **Next.js 16 + Tailwind v4 + Supabase + Vercel stack** aligned with the existing Amp Spot project, enabling code sharing and developer familiarity. Content should live in **local MDX files** (no CMS dependency) with Supabase handling subscriber data and dynamic metadata indexing. The site is fundamentally a **20-page marketing site with a blog** — not a web app — so architectural complexity should be kept minimal.

The key risk is **trust**: as an AI-generated imprint, Manaforge faces reader skepticism that traditional publishers don't. The research strongly recommends leading with an AI transparency/process page rather than hiding the AI angle. Combined with free supplementary content (art, maps, chapters) that AI production uniquely enables at scale, this transparency-first approach is Manaforge's clearest path to building a loyal reader base.

---

## Key Findings

### From STACK.md

| Technology | Rationale |
|-----------|-----------|
| **Next.js 16.2** | Amp Spot alignment. App Router + RSC. File-based routing maps to `/authors/[slug]`, `/books/[slug]`, `/blog/[slug]`. Turbopack stable. |
| **React 19.2** | Ships with Next.js 16. Server Components by default. |
| **Tailwind CSS v4.1** | Amp Spot alignment. CSS-first config (no `tailwind.config.js`). Faster builds. |
| **Supabase (hosted)** | Postgres for book/author metadata, subscribers, blog indexing. RLS for access control. Storage for covers/art. |
| **MDX + gray-matter** | Blog posts and long-form content as files. No CMS dependency. AI pipeline writes directly to files. |
| **Resend** | Transactional email (welcome, confirmation). Free tier: 100/day. Newsletter tool (ConvertKit) deferred to post-MVP. |
| **Vercel** | Canonical deployment target for Next.js. Git-push deploys, preview URLs. |
| **@tailwindcss/typography** | Essential for long-form MDX content (blog posts, chapters). |

**Critical version note:** Tailwind v4 is a **significant** change from v3 — CSS-first config, no PostCSS needed, `@plugin` directives replace JS plugins.

**Supabase grant requirement:** As of May 2026, new projects require explicit `GRANT` statements for Data API access. All migrations must include grants.

**Why no CMS:** Contentlayer is abandoned. Sanity/Contentful are overkill for 3 pen names, 4-6 books, monthly blog posts. MDX files are simpler, more reliable, and let the AI pipeline write directly.

### From FEATURES.md

**Table stakes (10 must-haves):**
1. Book catalogue with cover art, blurbs, series info, buy links
2. Newsletter signup with lead magnet (free chapters/art)
3. Series/reading order pages (critical for LitRPG)
4. New releases / coming soon section
5. Genre navigation (LitRPG, Progression Fantasy, Epic Fantasy)
6. About / imprint identity page
7. Social media links (Discord, Instagram, Facebook minimum)
8. Mobile-responsive design
9. Buy links to Amazon/KU
10. Contact information

**Top differentiators:**
- **AI Transparency Dashboard** — No competitor does this. "Our Process" page showing AI + human editorial pipeline.
- **Free Supplementary Content Hub** — Art, maps, chapters as gated/ungated content. AI production enables this at scale.
- **Release Calendar** — Monthly cadence, publicly visible per-pen-name schedule. Nobody else shows a forward-looking calendar.

**Explicit anti-features (do NOT build):**
- No e-commerce storefront (link to Amazon)
- No user accounts/login
- No forums (use Discord)
- No submissions system (Manaforge doesn't accept submissions)
- No on-site reviews (link to Amazon/Goodreads)
- No separate pen name websites
- No aggressive pop-ups

**Unique AI-enabled opportunities:**
- Rapid catalogue growth as showcase
- AI art pipeline as marketing content
- Transparency as trust builder
- Cross-pen-name universe building (like SAP's "Universes" but with single creative intelligence)

---

## Implications for Roadmap

### Suggested Phase Structure

**Phase 1 — Foundation & Core Pages (MVP)**
- **Rationale:** Revenue and trust are the critical path. Book catalogue → buy links enables revenue. Newsletter → lead magnet enables growth. About page with AI transparency builds trust. Everything else depends on these existing.
- **Delivers:** A launchable marketing site with all table-stakes features
- **Features:** TS-1 (catalogue), TS-2 (newsletter), TS-3 (series/reading order), TS-4 (new releases), TS-5 (genre nav), TS-6 (about + DIFF-1 transparency), TS-7 (social links), TS-8 (responsive), TS-9 (buy links), TS-10 (contact)
- **Stack setup:** Next.js 16 + Tailwind v4 + Supabase + Vercel + MDX pipeline
- **Pitfalls to avoid:** Don't over-architect. This is a 20-page site, not a web app. Don't reach for a CMS. Don't build auth.

**Phase 2 — Content & Differentiation**
- **Rationale:** With core pages live, add the features that set Manaforge apart. Content hub and release calendar leverage the AI production advantage. Blog enables ongoing content marketing. Pen name sections build brand distinction.
- **Delivers:** Differentiated content experience that competitors can't replicate
- **Features:** DIFF-2 (free content hub), DIFF-3 (release calendar), DIFF-4 (pen name sections), Blog
- **Pitfalls to avoid:** Don't gate too much content — the goal is to attract, not restrict. Don't build a CMS; keep using MDX files.

**Phase 3 — Growth & Community**
- **Rationale:** Post-MVP features that deepen engagement. Behind the Forge content series, art gallery, and (eventually) interactive features.
- **Delivers:** Community engagement and ongoing traffic drivers
- **Features:** DIFF-5 (Behind the Forge), DIFF-7 (AI art gallery), merch outbound links, DIFF-6 (reading tracker — highest complexity, consider carefully)
- **Pitfalls to avoid:** DIFF-6 (reading tracker) requires auth and is high complexity — only build if Phase 1-2 prove there's demand.

### Research Flags

**Phases that need `/gsd-research-phase` during planning:**
- **Phase 1:** Tailwind v4 CSS-first configuration patterns (significant change from v3). Supabase SSR client setup with Next.js 16 App Router. MDX content pipeline with gray-matter + generateStaticParams.
- **Phase 3:** Interactive features (reading tracker) need UX and auth research if pursued.

**Phases with well-documented patterns (skip deep research):**
- **Phase 1:** Next.js App Router routing, Vercel deployment, Resend transactional email, `@tailwindcss/typography` — all extensively documented.
- **Phase 2:** Blog with MDX is a standard Next.js pattern. Release calendar is straightforward UI.
- **Phase 3:** Art gallery is a standard image grid. Merch links are just outbound URLs.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | **HIGH** | All versions confirmed from official sources. Amp Spot alignment reduces risk. Tailwind v4 is the main learning curve. |
| Features | **HIGH** | Primary source analysis of 6 competitor sites. Clear table-stakes and differentiators. Anti-features well-defined. |
| Architecture | **MEDIUM** | No dedicated architecture research file. Inferred from stack: file-based MDX content + Supabase for dynamic data. Simple enough that this is low-risk, but data flow patterns should be validated during Phase 1 planning. |
| Pitfalls | **MEDIUM** | No dedicated pitfalls research file. Key risks identified from features: AI trust gap, Tailwind v4 learning curve, over-engineering tendency. More systematic pitfall analysis would improve confidence. |

### Gaps to Address

1. **No architecture research:** Component boundaries, data flow diagrams, and rendering strategy (static vs dynamic pages) should be sketched during Phase 1 planning.
2. **No pitfalls research:** Systematic risk analysis missing. Key known risks: AI reader trust, Tailwind v4 migration complexity, scope creep on a "simple" site.
3. **Schema.org structured data:** Implementation details for Book/Person schemas deferred to Phase 1 planning.
4. **SEO strategy:** Beyond basic Metadata API, no deep SEO research done. Important for a content site.
5. **Email double-opt-in flow:** Resend + Supabase subscriber confirmation flow needs design during Phase 1.

---

## MVP Critical Path

```
Phase 1 MVP is a 20-page marketing site:

/                          → Homepage (featured release, newsletter CTA, genre highlights)
/authors/[slug]            → Pen name pages (bio, books, series)
/books/[slug]              → Book pages (cover, blurb, buy links, series info)
/series/[slug]             → Series pages (reading order, all books)
/genres/[slug]             → Genre landing pages
/blog                      → Blog index
/blog/[slug]               → Blog posts (MDX)
/about                     → About + AI transparency
/contact                   → Contact form
/subscribe                 → Newsletter signup + lead magnet
```

**Data strategy:** Static content (pages, blog posts) in MDX files. Dynamic content (book metadata, subscribers) in Supabase. The AI pipeline writes MDX files; Supabase indexes metadata for filtering.

**Revenue model:** Not direct sales. The site funnels readers to Amazon/KU via buy links and builds email list for long-term reader relationships.

---

## Sources

### STACK.md Sources
- Next.js blog (nextjs.org/blog) — confirmed 16.2 latest (March 2026)
- React blog (react.dev/blog) — confirmed 19.2 latest (October 2025)
- Tailwind CSS blog (tailwindcss.com/blog) — confirmed v4.1 latest (April 2025)
- Supabase changelog (supabase.com/changelog) — confirmed v2.102.0+ (April 2026)
- Next.js MDX docs (nextjs.org/docs/app/guides/mdx) — confirmed App Router support
- Schema.org/Book (schema.org/Book) — confirmed book metadata properties
- Resend docs (resend.com/docs) — confirmed Next.js SDK support

### FEATURES.md Sources
- **Aethon Books** (aethonbooks.com) — Largest LitRPG indie publisher, 800+ books, WordPress
- **Shadow Alley Press** (shadowalleypress.com) — "Universes" concept, Street Team, Starter Library
- **Black Library** (blacklibrary.com) — Games Workshop enterprise site, franchise-organized
- **Wraithmarked** (wraithmarked.com) — Shopify, premium editions, Kickstarter integration
- **OwlCrate** (owlcrate.com) — Subscription box model, community app
- **Grimdark Magazine** (grimdarkmagazine.com) — Content-first model, WooCommerce, Patreon
