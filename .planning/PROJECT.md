# Manaforge Press — Publishing Imprint Website

## What This Is

A publishing imprint website for Manaforge Press — a fantasy and LitRPG publishing house unifying multiple AI-generated pen names under one brand. The site showcases authors, their book series, provides free supplementary content (art, maps, chapters, previews), runs a monthly news blog, and links out to merchandise stores. Books are generated end-to-end by a zeroclaw agent pipeline on zeroclaw-pi (100.64.0.8) running the outline → prose → editing → checks → audit workflow. Currently 3 active pen names with 4 completed books, 2 more pen names planned. No books published yet — site needs to establish the brand and build anticipation.

## Core Value

A fantasy reader lands on manaforge-press.vercel.app, discovers R.K. Ashvane's grimdark "Songs of the Fallen" series, reads a free preview chapter, sees the world map, and signs up to be notified when Iron Hymn launches on Amazon. That discovery-to-anticipation path — for each pen name, each series — is the entire point.

## Requirements

### Validated

(None yet — greenfield project)

### Active

- [ ] Competitor design review: analyze successful indie publishing imprints (Aethon Books, Portal Books, Shadow Alley Press, Mount Everest Books, etc.) for what's overdone, underdone, top priority to replicate, and unique differentiators
- [ ] Stitch design generation based on competitor findings — produce a bespoke design system for the imprint brand
- [ ] Homepage with imprint branding, hero section, featured books/authors carousel, newsletter signup
- [ ] Authors page — grid/list of all pen names with headshot placeholder, bio excerpt, genre tags, link to their author detail page
- [ ] Author detail pages — full bio, brand voice showcase, list of series and standalone books, free content links, "coming soon" badges for unreleased works
- [ ] Books catalog page — filterable by genre (Grimdark Fantasy, LitRPG, Progression Fantasy, Dungeon Crawler), author, series
- [ ] Book detail pages — cover art placeholder, blurb/synopsis, series position, free preview content (chapters, art, maps), Amazon/KU purchase link (when published), merch links
- [ ] Blog/news section — monthly imprint updates, new release announcements, author spotlights, free content drops. NOT individual pen name blogs — centralised on imprint site
- [ ] Free content section — bonus chapters, character art, world maps, interviews, previews. Accessible from author pages and book pages, possibly gated behind email signup
- [ ] Merchandise links — outbound links to print-on-demand stores (Redbubble, Merch by Amazon, etc.) for book-themed merch. Not e-commerce on-site
- [ ] Newsletter/email capture — site-wide email list for release notifications, free content alerts, monthly digest
- [ ] 2 placeholder pen name slots — empty author cards for the 2 TBD pen names with "Coming Soon" styling
- [ ] Vercel deployment on new .vercel.app subdomain
- [ ] SEO foundation — structured data for books (Schema.org Book), sitemap, meta tags, OG images
- [ ] Mobile-first responsive design
- [ ] Brand consistency — Manaforge Press identity (logo, color palette, typography) distinct from Amp Spot Audio

### Out of Scope

- On-site e-commerce / book purchases — Amazon/KU links only
- Individual pen name websites or social accounts — imprint handles everything
- Reader community / forum — v2+ feature
- Book reading experience on-site — previews only, full books on Amazon/KU
- Multi-language — English only
- Audiobook integration — v2+ feature
- Author dashboard / manuscript management — that's the Pi pipeline, not the website
- Crosslinks with Amp Spot Audio — completely separate

## Context

**Content inventory (~/Documents/Manaforge Press/):**

3 active pen names with full brand materials:
- **R.K. Ashvane** (Grimdark Fantasy) — "Classic Prose Meets the Dark Fantasy Edge." Comparable to John Gwynne, Anthony Ryan. Series: Songs of the Fallen. Book: Iron Hymn (84 scenes, COMPLETE). Has series_brand.md, author_brand.md, marketing brief, image prompts.
- **D.F.Bruno** (LitRPG / Progression Fantasy / Science Fantasy) — "Where progression meets prose." Comparable to Will Wight, Django Wexler. Series: Echoes of Caelus (book: VoidWalker, 165 scenes, COMPLETE). Standalone: The Awakening (142 scenes, COMPLETE). Has world_guide.md, author_brand.md, marketing briefs, image prompts.
- **V.K. Hollow** (LitRPG / Progression Fantasy / Dungeon Crawler) — "Descend. Adapt. Survive." Comparable to Jeff Sproul, J.R. Castle. Universe: The Sunless Depths. Standalone: Baildurs Pass (189 scenes, EDITING_COMPLETE). Has author_brand.md, marketing brief, image prompts.

2 TBD pen names — genres TBD, books in pipeline, will be added later.

**Directory structure:**
```
Manaforge Press/
├── Grimdark Fantasy/
│   └── R.K. Ashvane/
│       ├── author_brand.md
│       └── Songs of the Fallen/
│           ├── series_brand.md
│           └── 01_Iron Hymn/
│               ├── Iron_Hymn.docx
│               ├── book_4_iron_hymn_marketing.md
│               └── book_4_iron_hymn_image_prompts.json
└── LitRPG/
    ├── D.F.Bruno/
    │   ├── author_brand.md
    │   ├── Echoes of Caelus/
    │   │   ├── world_guide.md
    │   │   └── 01_VoidWalker/
    │   │       ├── VoidWalker.docx
    │   │       ├── book_1_voidwalker_marketing.md
    │   │       └── book_1_voidwalker_image_prompts.json
    │   └── Standalone/
    │       └── 01_The Awakening/...
    └── V.K. Hollow/
        ├── author_brand.md
        └── Standalone/
            └── 01_Baildurs Pass/...
```

**Book pipeline (zeroclaw-pi 100.64.0.8):**
- Rust agent (~72k LOC) running multi-step generation: outline → prose → editing → checks → audit
- Produces complete manuscripts (.docx) with marketing briefs and image generation prompts
- Monthly non-conflicting release schedule planned across 5 pen names
- Books NOT yet published on Amazon/KU — trademarks pending until pipelines are finalised

**Tech stack (matching Amp Spot):**
- Next.js 16 + React 19 + Tailwind 4 + TypeScript
- Supabase for any backend needs (email collection, blog CMS, analytics)
- Vercel for deployment
- Stripe NOT needed (no on-site purchases)

## Constraints

- **Greenfield:** New project from scratch. Use Stitch to generate designs informed by competitor research.
- **Same stack as Amp Spot:** Next.js 16 + Tailwind 4 + Supabase + Vercel for consistency and shared knowledge. Different repo, different deployment.
- **No crosslinks:** Completely separate from Amp Spot Audio. No shared branding, no shared repo, no shared domain.
- **Content from existing files:** Author brands, marketing briefs, and book metadata from ~/Documents/Manaforge Press/. Book manuscripts (.docx) stay offline — only excerpts/previews on website.
- **Monthly release cadence:** Site must support new books/authors being added easily as the pipeline produces them.
- **Merchandise is outbound links only:** No on-site e-commerce. Link to Redbubble/Merch by Amazon/etc.
- **No published books yet:** All purchase links are "Coming Soon" until Amazon/KU listings go live.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Competitor review before design | Learn from Aethon, Portal, Shadow Alley before committing to a design language | — Pending |
| Stitch for design generation | Proven on Amp Spot — produces bespoke results faster than manual design | — Confirmed |
| Centralised imprint blog, no pen name blogs | Avoids fragmenting audience; pen names don't need individual social/web presence | — Confirmed |
| Free content as lead magnet | Bonus chapters, art, maps drive email signups and anticipation before launch | — Pending |
| Same stack as Amp Spot | Shared knowledge, shared tooling, faster development across both projects | — Confirmed |
| 5 pen names, monthly non-conflicting schedule | Diversified genre coverage; staggered releases keep the imprint visible year-round | — Confirmed, 2 TBD |

---
*Last updated: 2026-04-28 after initialization*
