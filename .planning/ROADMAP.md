# Roadmap: Manaforge Press Website

## Overview

Build a greenfield publishing imprint website for Manaforge Press using Next.js 16 + Tailwind 4 + Supabase + Vercel. Start with project scaffolding and brand identity, build the book catalog and author pages (populated with existing content from ~/Documents/Manaforge Press), add content infrastructure (blog, email capture, free content, release calendar), then polish with SEO and deploy. Five phases, each delivering a coherent user-facing capability, culminating in a live marketing site ready for promotion.

## Phases

- [ ] **Phase 1: Scaffolding & Brand Identity** — Next.js project init, Tailwind config, design system (colors, typography, components), Vercel project + GitHub repo setup
- [ ] **Phase 2: Book Catalog & Author Pages** — Reusable page templates (book, author, series), populated with all 3 pen names and 4 books, 2 placeholder author slots, book filtering
- [ ] **Phase 3: Content Infrastructure** — Blog/news section (MDX), email capture with Supabase, free content section, release calendar, about/process page
- [ ] **Phase 4: SEO, Merch & Polish** — Structured data (Schema.org/Book), merch link placeholders, mobile pass, Lighthouse audit, final visual polish
- [ ] **Phase 5: Deployment & Launch** — Vercel deployment, domain configuration, production smoke test, launch-ready

## Phase Details

### Phase 1: Scaffolding & Brand Identity
**Goal**: Next.js project with Tailwind design system, deployed to Vercel, connected to GitHub — ready for page building
**Depends on**: Nothing (first phase)
**Requirements**: BRND-03, BRND-04 (foundation), SEOO-02, SEOO-03
**Success Criteria**:
  1. Next.js 16 project running locally with `npm run dev` — Tailwind 4 configured with custom color palette and typography
  2. Design tokens defined in Tailwind config: Manaforge Press colors (dark/rich palette for fantasy publishing), fonts, spacing, component styles
  3. Shared layout components created: Header (with nav links), Footer (with legal links and social), base page wrapper
  4. GitHub repo created (carlkrott/manaforge-press-website) and connected to Vercel — auto-deploys on push to main
  5. Vercel deployment succeeds with a "Coming Soon" landing page at manaforge-press.vercel.app
**Plans**: TBD

### Phase 2: Book Catalog & Author Pages
**Goal**: All 3 pen names have author pages, all 4 books have detail pages, book catalog is filterable, 2 placeholder author slots visible
**Depends on**: Phase 1 (design system, layout components)
**Requirements**: AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05, AUTH-06, BOOK-01, BOOK-02, BOOK-03, BOOK-04, BOOK-05, BOOK-06, BOOK-07
**Success Criteria**:
  1. /authors page shows 5 cards: R.K. Ashvane (Grimdark Fantasy), D.F.Bruno (LitRPG/Progression), V.K. Hollow (LitRPG/Dungeon Crawler), and 2 "Coming Soon" placeholder cards
  2. Each populated author page displays: full bio from author_brand.md, genre tags, series and standalone sections, book covers/titles linking to book pages
  3. /books page has filter controls: genre dropdown (Grimdark, LitRPG, Progression, Dungeon Crawler), author filter, series filter — filtering works client-side
  4. Each book detail page shows: cover placeholder, blurb from marketing brief, series position, "Coming Soon on Amazon" CTA, author link
  5. Series page for Songs of the Fallen and Echoes of Caelus shows reading order with book entries
**Plans**: TBD

### Phase 3: Content Infrastructure
**Goal**: Blog/news section live, email capture storing to Supabase, free content section with placeholders, about page with AI transparency, release calendar
**Depends on**: Phase 2 (pages exist to add content sections to)
**Requirements**: BRND-01, BRND-02, CONT-01, CONT-02, CONT-03, CONT-04
**Success Criteria**:
  1. Homepage displays: hero section with imprint branding, featured books carousel, newsletter signup CTA, links to latest blog posts
  2. /about page includes "Our Process" section explaining how books are created (AI-assisted pipeline overview — builds trust through transparency)
  3. /blog page renders MDX blog posts with frontmatter (title, date, author, category, excerpt) — at least 1 sample post visible
  4. Email signup form submits to Supabase `subscribers` table and shows confirmation — test submission appears in database
  5. Free content section on book/author pages shows placeholders for: bonus chapters, character art, world maps, interviews — labeled "Coming with launch"
  6. Release calendar section shows planned monthly schedule across 5 pen names (year view with "TBD" entries for unreleased months)
**Plans**: TBD

### Phase 4: SEO, Merch & Polish
**Goal**: Structured data on all pages, merch link placeholders, fully mobile responsive, Lighthouse 90+
**Depends on**: Phase 3 (all pages exist)
**Requirements**: BRND-04 (full pass), MERC-01, SEOO-01, SEOO-04
**Success Criteria**:
  1. Every book page has Schema.org/Book JSON-LD (title, author, genre, datePublished placeholder, offers placeholder)
  2. Every author page has Schema.org/Person JSON-LD (name, description, genre specialties)
  3. Book and series pages include "Merch coming soon" section with placeholder links to Redbubble/Merch by Amazon
  4. All pages render correctly on mobile (320px, 768px, 1024px) with no horizontal scroll or overlapping
  5. Lighthouse scores 90+ on Performance, Accessibility, Best Practices, and SEO for homepage and at least one book page
**Plans**: TBD

### Phase 5: Deployment & Launch
**Goal**: Site live on Vercel, production-ready, no console errors, ready for social media promotion
**Depends on**: Phase 4 (all content and polish complete)
**Requirements**: (deployment verification — no new functional requirements)
**Success Criteria**:
  1. manaforge-press.vercel.app loads in under 3 seconds on a cold visit
  2. All pages accessible from navigation — no 404s, no broken links between pages
  3. All 4 book pages, 3 author pages, blog, about, and homepage render correctly in production
  4. No console errors on any page in production build
  5. Email capture form works in production (submits to Supabase, shows confirmation)
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5
(Strictly sequential — each phase builds on the previous)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Scaffolding | 0/TBD | Not started | - |
| 2. Catalog & Authors | 0/TBD | Not started | - |
| 3. Content Infrastructure | 0/TBD | Not started | - |
| 4. SEO & Polish | 0/TBD | Not started | - |
| 5. Deployment | 0/TBD | Not started | - |

---
*Roadmap created: 2026-04-28*
