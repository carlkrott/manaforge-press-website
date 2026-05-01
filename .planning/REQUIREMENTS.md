# Requirements: Manaforge Press Website

**Defined:** 2026-04-28
**Core Value:** A fantasy reader discovers R.K. Ashvane's grimdark series, reads a free preview chapter, sees the world map, and signs up to be notified when Iron Hymn launches. Discovery-to-anticipation for every pen name.

## v1 Requirements

### Brand & Identity

- [ ] **BRND-01**: Imprint homepage with Manaforge Press branding — logo, tagline, hero section, featured books/authors carousel, newsletter signup CTA
- [ ] **BRND-02**: About page with "Our Process" section explaining how books are created (AI transparency as trust builder — secondary page, not homepage spotlight)
- [ ] **BRND-03**: Consistent visual identity across all pages — color palette, typography, spacing, component styles defined in Tailwind config
- [ ] **BRND-04**: Mobile-first responsive design — all pages render correctly on mobile, tablet, desktop

### Authors

- [ ] **AUTH-01**: Authors overview page — grid of all pen names with headshot placeholder, bio excerpt, genre tags, link to detail page
- [ ] **AUTH-02**: Author detail page template — full bio (from author_brand.md), brand voice showcase, list of series and standalone books, free content links
- [ ] **AUTH-03**: R.K. Ashvane author page populated with Grimdark Fantasy branding, Songs of the Fallen series, Iron Hymn book listing
- [ ] **AUTH-04**: D.F.Bruno author page populated with LitRPG/Progression Fantasy branding, Echoes of Caelus series + Standalone section, VoidWalker + The Awakening listings
- [ ] **AUTH-05**: V.K. Hollow author page populated with LitRPG/Dungeon Crawler branding, The Sunless Depths universe, Baildurs Pass listing
- [ ] **AUTH-06**: 2 placeholder author cards with "Coming Soon" styling and empty genre — visible on authors overview but not linked to detail pages

### Books & Series

- [ ] **BOOK-01**: Book catalog page — filterable by genre (Grimdark Fantasy, LitRPG, Progression Fantasy, Dungeon Crawler), author, and series
- [ ] **BOOK-02**: Book detail page template — cover art placeholder, blurb/synopsis (from marketing briefs), series position, Amazon/KU "Coming Soon" link, free content links
- [ ] **BOOK-03**: Series page template — series overview, reading order, book list with covers and blurbs (for series with multiple books)
- [ ] **BOOK-04**: Iron Hymn book page populated with synopsis from book_4_iron_hymn_marketing.md, Songs of the Fallen series context, "Coming Soon" purchase link
- [ ] **BOOK-05**: VoidWalker book page populated with synopsis from book_1_voidwalker_marketing.md, Echoes of Caelus series context, world guide excerpt, "Coming Soon" purchase link
- [ ] **BOOK-06**: The Awakening book page populated with synopsis from book_3_the_awakening_marketing.md, standalone context, "Coming Soon" purchase link
- [ ] **BOOK-07**: Baildurs Pass book page populated with synopsis from book_5_baildurs_pass_marketing.md, The Sunless Depths universe context, "Coming Soon" purchase link

### Content & Engagement

- [ ] **CONT-01**: Blog/news section — monthly imprint updates, new release announcements, author spotlights, free content drops. Centralised on imprint site, not per-pen-name
- [ ] **CONT-02**: Email capture with lead magnet — free preview chapters accessible after email signup. Store submissions in Supabase `subscribers` table
- [ ] **CONT-03**: Free content section — bonus chapters, character art placeholders, world map placeholders, interview placeholders. Accessible from author pages and book pages
- [ ] **CONT-04**: Release calendar section showing upcoming publications with month/year — populated with planned schedule for 5 pen names

### Merchandise & Links

- [ ] **MERC-01**: Merchandise link section on book/series pages — outbound links to print-on-demand stores (Redbubble, Merch by Amazon) with placeholder URLs ("Merch coming soon")

### SEO & Infrastructure

- [ ] **SEOO-01**: SEO foundation — Schema.org/Book and Person JSON-LD structured data, sitemap.xml, robots.txt, meta tags, OG images per book/author
- [ ] **SEOO-02**: Vercel deployment on manaforge-press.vercel.app (or similar .vercel.app subdomain)
- [ ] **SEOO-03**: GitHub repository (carlkrott/manaforge-press or carlkrott/manaforge-press-website) with Vercel auto-deploy
- [ ] **SEOO-04**: Site passes Lighthouse audit (target: 90+ Performance, Accessibility, Best Practices, SEO)

## v2 Requirements

Deferred to post-launch.

### Content Hub Expansion

- **CONT-05**: AI-generated art gallery — world illustrations, character portraits from image_prompts.json files
- **CONT-06**: Interactive world map viewer for fantasy worlds (Caelus, The Sunless Depths, The Ashmark)
- **CONT-07**: "Behind the Forge" content series — blog/video showing the AI generation pipeline (outline → prose → edit → audit)
- **CONT-08**: Full free chapter reader on-site (not just excerpts)

### Growth

- **GROW-01**: Reading tracker / book progress feature for subscribers
- **GROW-02**: Book recommendation engine ("If you liked R.K. Ashvane, try D.F.Bruno's Echoes of Caelus")
- **GROW-03**: Amazon affiliate links integration (earn commission on referred purchases)
- **GROW-04**: Pen name-specific newsletter segmentation (readers choose which genres/authors to follow)

### Advanced

- **ADVN-01**: Audiobook integration when available
- **ADVN-02**: Community features (reader reviews, discussion threads per book)
- **ADVN-03**: Multi-language support

## Out of Scope

| Feature | Reason |
|---------|--------|
| On-site e-commerce / book purchases | Amazon/KU links only — let Amazon handle payments and delivery |
| Individual pen name websites | Centralised imprint model — no separate pen name domains or social accounts |
| Reader community / forum | v2+ — avoid dead forum syndrome until reader base exists |
| On-site book reading experience | Previews only; full books on Amazon/KU |
| Multi-language | English only |
| Audiobook integration | No audiobooks yet — defer until pipeline produces them |
| Author dashboard | That's the zeroclaw-pi pipeline, not the website |
| Crosslinks with Amp Spot Audio | Completely separate projects |
| Direct merchandise sales | Outbound links only — POD platforms handle fulfillment |
| WordPress or headless CMS | Overkill for current content volume; MDX + Supabase sufficient |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| BRND-01 | Phase 3 | Pending |
| BRND-02 | Phase 3 | Pending |
| BRND-03 | Phase 1 | Pending |
| BRND-04 | Phase 4 | Pending |
| AUTH-01 | Phase 2 | Pending |
| AUTH-02 | Phase 2 | Pending |
| AUTH-03 | Phase 2 | Pending |
| AUTH-04 | Phase 2 | Pending |
| AUTH-05 | Phase 2 | Pending |
| AUTH-06 | Phase 2 | Pending |
| BOOK-01 | Phase 2 | Pending |
| BOOK-02 | Phase 2 | Pending |
| BOOK-03 | Phase 2 | Pending |
| BOOK-04 | Phase 2 | Pending |
| BOOK-05 | Phase 2 | Pending |
| BOOK-06 | Phase 2 | Pending |
| BOOK-07 | Phase 2 | Pending |
| CONT-01 | Phase 3 | Pending |
| CONT-02 | Phase 3 | Pending |
| CONT-03 | Phase 3 | Pending |
| CONT-04 | Phase 3 | Pending |
| MERC-01 | Phase 4 | Pending |
| SEOO-01 | Phase 4 | Pending |
| SEOO-02 | Phase 1 | Pending |
| SEOO-03 | Phase 1 | Pending |
| SEOO-04 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-28*
