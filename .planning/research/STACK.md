# Technology Stack

**Project:** Manaforge Press — Fantasy/LitRPG Publishing Imprint Website
**Researched:** April 28, 2026
**Stack alignment:** Matches Amp Spot (Next.js 16 + React 19 + Tailwind 4 + Supabase + Vercel)

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Next.js** | 16.2.x | Full-stack React framework | Amp Spot alignment. App Router with RSC, Turbopack (stable since 16.0), Cache Components, built-in image/font optimization. File-based routing maps naturally to `/authors/[slug]`, `/books/[slug]`, `/blog/[slug]`. |
| **React** | 19.2.x | UI library | Ships with Next.js 16. Server Components by default. View Transitions, `<Activity/>`, `useEffectEvent` available. |
| **TypeScript** | 5.x | Type safety | Non-negotiable for a content-heavy site. Catches typos in book metadata, author slugs, route params. |
| **Tailwind CSS** | v4.1.x | Styling | Amp Spot alignment. v4 uses CSS-first config (`@import "tailwindcss"`), no `tailwind.config.js`. Faster builds. Theme customization via CSS custom properties. |
| **@tailwindcss/vite** | v4.1.x | Tailwind Vite plugin | Required for Tailwind v4. Integrates as Vite plugin — no PostCSS needed. |

> **Confidence: HIGH** — All versions confirmed from official blogs/changelogs as of April 2026.
> - Next.js 16.2 released March 18, 2026 ([nextjs.org/blog](https://nextjs.org/blog))
> - React 19.2 released October 1, 2025 ([react.dev/blog](https://react.dev/blog))
> - Tailwind CSS v4.1 released April 3, 2025 ([tailwindcss.com/blog](https://tailwindcss.com/blog))

### Database & Backend

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Supabase** | Latest (hosted) | Database, auth, storage, edge functions | Amp Spot alignment. Postgres for book/author metadata, email signups, blog content indexing. Row Level Security for admin vs public access. Storage for book covers, art, maps. |
| **@supabase/supabase-js** | v2.102.x | Supabase client library | Auto-retry on transient errors (added v2.102.0). Works in both Server Components and client components. |
| **@supabase/ssr** | Latest | SSR-safe Supabase client | Required for App Router — handles cookie-based auth in Server Components and middleware. Replaces deprecated `@supabase/auth-helpers-nextjs`. |

> **Confidence: HIGH** — Supabase actively maintained, major security/default improvements shipped April 2026 ([supabase.com/changelog](https://supabase.com/changelog)).
> **Important:** As of May 30, 2026, new Supabase projects require explicit `GRANT` statements for Data API access. Include grants in all migrations.

### Content & Blog

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **@next/mdx** | matches Next.js | MDX compilation in Next.js | Blog posts, book chapters, author bios as MDX files. First-class App Router support. Supports metadata exports for frontmatter-like data. |
| **@mdx-js/loader** | 3.x | MDX webpack/turbopack loader | Required peer dependency for `@next/mdx`. |
| **@mdx-js/react** | 3.x | MDX React runtime | Required for custom MDX components. |
| **gray-matter** | 4.x | Frontmatter parsing | Parse YAML frontmatter from MDX/MD files for blog metadata (title, date, author, excerpt, coverImage). `@next/mdx` doesn't support frontmatter natively — this fills the gap. |
| **@tailwindcss/typography** | v0.5.x | Prose styling for MDX content | Adds `prose` classes for beautifully styled long-form content (blog posts, book chapters). Dark mode support. Essential for publishing site. |
| **remark-gfm** | 4.x | GitHub Flavored Markdown | Tables, strikethrough, autolinks, task lists in MDX content. |
| **rehype-slug** | 6.x | Heading IDs | Auto-generates `id` attributes on headings for anchor links. Critical for long-form chapter content with TOC. |
| **rehype-pretty-code** | 0.14.x | Code syntax highlighting | Shiki-based syntax highlighting for any code snippets (LitRPG system windows, stat blocks). |

> **Confidence: HIGH** — MDX is the established standard for Next.js content sites. `@next/mdx` is officially documented and maintained by Vercel.
> **Why NOT Contentlayer/Contentlayer2:** Contentlayer was abandoned by its maintainer in 2024. Contentlayer2 is a community fork with uncertain maintenance. For 4-6 blog posts per month, a custom solution with `gray-matter` + `glob` + `generateStaticParams` is simpler, more reliable, and has zero supply-chain risk.

### Email & Newsletter

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Resend** | Latest SDK | Transactional email (welcome, confirmations) | Developer-first email API. First-class Next.js support. Free tier: 100 emails/day. Perfect for welcome emails and double-opt-in confirmation. |
| **Supabase table** | — | Email subscriber storage | Store all subscriber data in a `subscribers` table. Source of truth. RLS-protected. This keeps you platform-independent for newsletter tools. |
| **ConvertKit** (deferred) | — | Newsletter campaigns | Defer to post-MVP. When ready, sync subscribers via API or Zapier. ConvertKit is the standard for indie authors — free up to 1,000 subscribers. |

> **Confidence: HIGH** for Resend + Supabase. **MEDIUM** for ConvertKit recommendation (deferring means this can change).
> **Why NOT Mailchimp:** Heavier, more expensive at scale, worse developer experience. ConvertKit is purpose-built for creators/authors.
> **Why NOT email-only via Resend:** Resend is for transactional email, not bulk newsletter campaigns. You need a proper newsletter tool for that. But MVP doesn't need it — just capture emails first.

### SEO & Metadata

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Next.js Metadata API** | Built-in | Page titles, descriptions, OG images | File-based metadata in App Router. `generateMetadata()` for dynamic book/author pages. |
| **Schema.org/Book** | — | Structured data for books | Rich results in Google. Properties: `isbn`, `author`, `name`, `description`, `bookFormat`, `numberOfPages`, `genre`, `datePublished`, `image`, `offers` (Amazon links). |
| **Schema.org/Person** | — | Structured data for authors | Rich results for pen name pages. `name`, `url`, `sameAs` (Amazon author page), `image`, `description`. |
| **JSON-LD** | Via `next/script` or `script` tags | Embedding structured data | Standard way to embed Schema.org in Next.js pages. |

> **Confidence: HIGH** — Schema.org/Book is well-established. Next.js Metadata API is mature.
> Schema.org/Book confirmed from [schema.org/Book](https://schema.org/Book) with properties: isbn, bookEdition, bookFormat, illustrator, numberOfPages, author, genre, datePublished, image, offers.

### Image & Media Handling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **next/image** | Built-in | Image optimization | Automatic WebP/AVIF, responsive srcset, lazy loading. Essential for book covers and art. |
| **Supabase Storage** | Built-in | Media file storage | Book covers, character art, maps stored in Supabase buckets. CDN-backed. Signed URLs for premium content. |
| **Sharp** | Latest | Server-side image processing | If needed for dynamic OG image generation. Also used internally by Next.js for image optimization. |

> **Confidence: HIGH** — Standard Next.js approach.

### Deployment & Infrastructure

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Vercel** | Latest | Hosting & deployment | Amp Spot alignment. Git-push deploys. Preview URLs for each PR. Edge functions. Generous free tier (Hobby). |
| **Vercel Analytics** | Built-in | Web Vitals monitoring | Real User Monitoring for Core Web Vitals. Free on all plans. |
| **Vercel Speed Insights** | Built-in | Performance tracking | Complements Analytics. |

> **Confidence: HIGH** — Vercel is the canonical deployment target for Next.js.

### Developer Experience

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **ESLint** | 9.x | Linting | Next.js 16 supports ESLint 9. `next lint` is deprecated — use `eslint` directly. |
| **Prettier** | 3.x | Code formatting | Consistent style. |
| **prettier-plugin-tailwindcss** | Latest | Tailwind class sorting | Auto-sorts Tailwind classes. Removes whitespace, deduplicates. |
| **husky** | 9.x | Git hooks | Pre-commit linting. |
| **lint-staged** | 15.x | Staged file linting | Only lint changed files. |

> **Confidence: HIGH** — Standard DX tooling.

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 16 | Astro | Amp Spot alignment requires Next.js. Astro is better for pure content sites but can't share components/code with Amp Spot. |
| Framework | Next.js 16 | Remix/React Router v7 | Different paradigm, no ecosystem alignment. React Router v7 merged with Remix but adds complexity we don't need. |
| CMS | Local MDX files | Sanity | Overkill for 3 pen names, 4-6 books, monthly blog posts. Adds $15-99/mo. MDX is simpler and lets AI pipeline write directly to files. |
| CMS | Local MDX files | Contentful | Same as Sanity — enterprise CMS for what's fundamentally a 20-page site with a blog. |
| CMS | Local MDX files | WordPress | Technical mismatch with React stack. Security surface area. Slow. |
| Email | Resend | SendGrid | Resend has better DX, simpler API, equally generous free tier. |
| Email | Resend (defer ConvertKit) | Substack | No custom domain control, no website integration, platform lock-in. |
| Newsletter | ConvertKit (deferred) | Mailchimp | CK is free to 1K subscribers, purpose-built for creators/authors, better automation sequences. |
| Styling | Tailwind v4 | CSS Modules | Amp Spot alignment. Tailwind is faster for building consistent UIs. |
| Styling | Tailwind v4 | Chakra UI / MUI | Heavy runtime overhead. Amp Spot uses Tailwind. Don't introduce another component library. |
| Database | Supabase | PlanetScale | PlanetScale killed free tier and pivot to paid-only. Supabase has free tier, auth, storage, and Amp Spot alignment. |
| Content | gray-matter + glob | Contentlayer | Abandoned by maintainer in 2024. Fork (contentlayer2) has uncertain future. Our needs are too simple to justify the dependency risk. |

## Tailwind v4 Migration Notes

Tailwind v4 is a **significant** change from v3. Key differences:

| Aspect | Tailwind v3 | Tailwind v4 |
|--------|-------------|-------------|
| Configuration | `tailwind.config.js` | CSS-first: `@import "tailwindcss"` + `@theme {}` blocks |
| Plugin system | JS plugins | CSS-native `@plugin` directives |
| Custom colors | `theme.extend.colors` | `@theme { --color-*: ... }` |
| Content paths | `content: [...]` | Auto-detection via `@source` (or auto-detected) |
| PostCSS | Required | Not needed (use `@tailwindcss/vite`) |
| Typography plugin | `@tailwindcss/typography` | `@plugin "@tailwindcss/typography"` in CSS |

The v4 approach is simpler for new projects — no config file, everything in CSS.

## Installation

```bash
# Create project (Next.js 16)
npx create-next-app@latest manaforge-press --typescript --tailwind --app --src-dir

# Content & Blog
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install gray-matter remark-gfm rehype-slug rehype-pretty-code
npm install @tailwindcss/typography

# Database & Auth
npm install @supabase/supabase-js @supabase/ssr

# Email
npm install resend

# Dev dependencies
npm install -D prettier prettier-plugin-tailwindcss husky lint-staged
npm install -D @types/node
```

## Supabase Schema Direction

Minimal tables for MVP:

```sql
-- Pen names / authors
create table authors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  pen_name text not null,
  genre text not null,
  tagline text,
  bio_md text,
  avatar_url text,
  amazon_author_url text,
  social_links jsonb default '{}',
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Books
create table books (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  author_id uuid references authors(id) on delete cascade,
  title text not null,
  subtitle text,
  series_name text,
  series_number int,
  description_md text,
  cover_url text,
  isbn text,
  page_count int,
  genre text[],
  tags text[],
  amazon_url text,
  kindle_unlimited_url text,
  status text default 'upcoming' check (status in ('upcoming', 'available', 'published')),
  published_date date,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Email subscribers
create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  pen_name_interest text[],
  source text default 'website',
  confirmed boolean default false,
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  created_at timestamptz default now()
);

-- Blog posts metadata (content lives in /content/blog/*.mdx)
create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  author_id uuid references authors(id),
  cover_image_url text,
  tags text[],
  published_at timestamptz,
  is_published boolean default false,
  created_at timestamptz default now()
);
```

> **Note:** Blog post content itself lives in MDX files on disk (managed by AI pipeline). The `blog_posts` table is for indexing/filtering only. This avoids a CMS dependency while keeping content queryable.

> **Important:** With Supabase's new default grants policy (May 2026), every `CREATE TABLE` must be followed by explicit `GRANT` statements:
> ```sql
> GRANT SELECT ON public.authors TO anon;
> GRANT SELECT ON public.authors TO authenticated;
> ```

## Sources

- Next.js blog: https://nextjs.org/blog — confirmed 16.2 latest (March 2026)
- React blog: https://react.dev/blog — confirmed 19.2 latest (October 2025)
- Tailwind CSS blog: https://tailwindcss.com/blog — confirmed v4.1 latest (April 2025)
- Supabase changelog: https://supabase.com/changelog — confirmed v2.102.0+ (April 2026)
- Next.js MDX docs: https://nextjs.org/docs/app/guides/mdx — confirmed `@next/mdx` support in App Router
- Schema.org/Book: https://schema.org/Book — confirmed book metadata properties
- Resend docs: https://resend.com/docs — confirmed Next.js SDK support
