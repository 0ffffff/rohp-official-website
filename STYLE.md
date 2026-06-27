# ROHP Visual Style Guide

**Regents' Overnight Host Program** — official website design system.

This document defines the target visual language for the comprehensive redesign. Content (copy, links, forms, page structure) stays the same; the presentation layer is being rebuilt to feel **bold, modular, and design-studio crafted** — like a creative agency site ([WaxyWeb](https://waxyweb.com/)) adapted for a UC Berkeley student program. Not AI-generated, not generic institutional.

---

## 1. Design Philosophy

### Direction: Campus Studio

A **bento-grid, big-screen, design-studio** aesthetic. Oversized typography. Modular tiles of varied size. Photography and color blocks compose the layout — not uniform card rows. Berkeley Blue and California Gold anchor the palette; whitespace is dramatic, not merely generous.

| Principle | What it means |
|-----------|---------------|
| **Modular bento** | Content lives in asymmetric grid tiles — 2×2, 4+8, full-bleed spans — not identical cards in a row |
| **Big screen first** | Design for 1280–1536px; let the grid breathe on wide viewports |
| **Studio energy** | Confident display type, image-forward blocks, one marquee or scroll moment per page |
| **Berkeley rooted** | Brand colors stay; creative layout does not mean abandoning institutional trust |
| **Scannable density** | High information density without clutter — each tile one clear idea |

Research inputs (via ui-ux-pro-max):

| Domain | Recommendation | Our adaptation |
|--------|----------------|----------------|
| Landing pattern | Bento Grid Showcase | Hero + bento feature grid + detail tiles + CTA |
| Style | Exaggerated Minimalism + Vibrant Block-based | Oversized type, block gaps, single gold accent |
| Typography | Geometric Modern (Outfit + Work Sans) | **Outfit** display + **Source Sans 3** body |
| UX | Hover card scale, staggered reveal, scannable tiles | Max 2 motion types per view; `prefers-reduced-motion` |

### Reference: WaxyWeb (adapt, don't copy)

Take from [WaxyWeb](https://waxyweb.com/):

- Oversized headline with tight tracking
- Modular sections that feel like a portfolio/studio
- Image tiles with hover affordance
- Logo or content marquee (one per page)
- Bold CTA blocks embedded in the grid

Do **not** copy: their color palette, sticker clutter, agency copy voice, or decorative overload. ROHP stays a student program site — studio *craft*, not agency *hype*.

### What we're leaving behind

| Anti-pattern | Why it fails | Replacement |
|--------------|--------------|-------------|
| Acme font everywhere | Playful display on body copy | Outfit headings, Source Sans 3 body |
| SplitText / TextType | GSAP demo effects | Static or single stagger reveal |
| Uniform 3-column card rows | Generic SaaS template | Asymmetric bento grid |
| `max-w-6xl` cramped layout | Underuses wide screens | `max-w-screen-2xl` site-wide |
| Gold circle icon badges | Overused accent | Tile color blocks or inline icons |
| Full-bleed blue slab on every inner page | Template repetition | Bento page header tile |
| Inline hex colors | Token bypass | CSS variables / Tailwind semantic tokens |
| ChatGPT hero image | Obvious AI artifact | Real campus photography in image tiles |
| Magnetic buttons, pixel transitions | React Bits showcase | Standard buttons + tile hover scale |
| `uppercase tracking-widest` body copy | Marketing voice | Sentence case; tight tracking on display only |

---

## 2. Color System

### Brand palette

```css
/* Core brand — Berkeley colors */
--berkeley-blue:         #003262;   /* Primary brand, hero tiles, nav, CTAs */
--berkeley-blue-light:   #1A4D7D;   /* Hover states, secondary tiles */
--berkeley-blue-muted:   #E8EEF4;   /* Tinted tile backgrounds */
--california-gold:       #FDB515;   /* Accent — stats, one tile per section, CTA highlights */
--california-gold-muted: #FEF3D6;   /* Gold tint tiles */
--studio-surface:        #F5F5F7;   /* Bento tile default (Apple-style neutral) */
```

### Semantic tokens (map in `app/globals.css`)

| Token | Light mode | Dark mode | Usage |
|-------|------------|-----------|-------|
| `--background` | `#FFFFFF` | `#0F172A` | Page background |
| `--foreground` | `#0F172A` | `#F8FAFC` | Primary text |
| `--primary` | `#003262` | `#7FB5FF` | Blue tiles, buttons, links |
| `--primary-foreground` | `#FFFFFF` | `#0F172A` | Text on primary tiles |
| `--secondary` | `#F5F5F7` | `#1E293B` | Default bento tile surface |
| `--muted` | `#F5F5F7` | `#1E293B` | Alternate tiles, wells |
| `--muted-foreground` | `#475569` | `#94A3B8` | Captions, metadata |
| `--accent` | `#FDB515` | `#FDB515` | Highlight tile, stat, or CTA |
| `--accent-foreground` | `#003262` | `#003262` | Text on gold |
| `--border` | `#E2E8F0` | `#334155` | Tile borders (subtle) |
| `--ring` | `#003262` | `#7FB5FF` | Focus rings |

### Color rules

1. **Blue + white + studio gray** dominate. Gold appears on **one tile or element per section** — not sprinkled everywhere.
2. **Tile surfaces:** rotate `bg-background`, `bg-muted` (`#F5F5F7`), `bg-primary` (inverse text), `bg-accent` (sparingly), and image fills.
3. **No gradients** on backgrounds. Flat color or photography only.
4. **Contrast:** body text minimum 4.5:1 (`#475569` not `#94A3B8` for muted text in light mode).
5. **Dark mode:** supported but secondary. Light mode is the primary design target.

---

## 3. Typography

### Font pairing: Outfit + Source Sans 3

**Outfit** — geometric, studio-bold display headings. **Source Sans 3** — excellent body readability. Distinct from the previous serif institutional look and from Acme.

```tsx
// app/layout.tsx
import { Outfit, Source_Sans_3 } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})
```

### Type scale

| Element | Font | Size | Weight | Line height | Notes |
|---------|------|------|--------|-------------|-------|
| Display (hero) | Outfit | `clamp(2.5rem, 8vw, 5rem)` | 700 | 1.05 | Homepage hero only; `tracking-tight` |
| Page title (h1) | Outfit | `text-4xl md:text-5xl` | 700 | 1.1 | Inner pages, bento header tile |
| Section title (h2) | Outfit | `text-2xl md:text-3xl` | 600 | 1.15 | |
| Tile title (h3) | Outfit | `text-xl md:text-2xl` | 600 | 1.2 | Inside bento cells |
| Body | Source Sans 3 | `text-base` | 400 | 1.6 | 16px minimum |
| Body large | Source Sans 3 | `text-lg` | 400 | 1.6 | Intro paragraphs |
| Caption | Source Sans 3 | `text-sm` | 400 | 1.5 | `text-muted-foreground` |
| Label | Source Sans 3 | `text-sm` | 500 | 1.4 | Form labels, nav |
| Stat number | Outfit | `text-4xl md:text-5xl` | 700 | 1 | One stat may use `text-accent` |
| Button | Source Sans 3 | `text-sm` | 600 | 1 | |

### Typography rules

- **Sentence case** for body and most headings. Display hero may use intentional line breaks, not ALL CAPS.
- **`tracking-tight`** on Outfit display sizes (`-0.02em` to `-0.05em`).
- **`text-balance`** on h1–h2, **`text-pretty`** on paragraphs.
- **Max line width:** `max-w-prose` (~65ch) inside text tiles only — not on full grid.
- **No font weight below 400.**

---

## 4. Spacing & Layout

### Grid system: 12-column bento

The site is built on a **12-column CSS grid** with modular tile spans. Every page uses `BentoGrid` + `BentoTile`.

### Layout rules (required)

1. **Uniform width:** All content uses `max-w-screen-2xl` (1536px) via `siteContainerClass` — nav, sections, bento grids, footer, and wordmark align to the same column.
2. **Semantic sections:** Group related tiles inside `<Section label="…">` blocks. One bento grid per section; don't dump an entire page into a single grid.
3. **Symmetrical rows:** Every row must sum to **12 columns**. No orphaned tiles (e.g. a lone `col-span-4` on a row). Pair with `8+4`, `6+6`, `4+4+4`, `3+3+3+3`, etc.
4. **Varied tile sizes:** Mix spans (`3`, `4`, `5`, `6`, `7`, `8`) and `size` props (`sm`, `md`, `lg`, `xl`) so tiles have different visual weight — not all uniform boxes.
5. **Real tiles:** Hero copy, titles, and body content live inside bordered `BentoTile` cells — not ghost/unstyled divs.

```
Homepage hero (symmetrical 8+4 rows):
┌────────────────────────┬──────────┐
│  H1 title tile (8)     │ Image(4) │
├────────────────────────┼──────────┤
│  Subtitle tile (8)     │ CTA (4)  │
└────────────────────────┴──────────┘
```

**Grid definition:**

```tsx
<BentoGrid>
  <BentoTile span={8} size="lg">…</BentoTile>
  <BentoTile span={4} size="xl" variant="primary">…</BentoTile>
</BentoGrid>
```

### Tile spans

| Span | Columns | Typical use |
|------|---------|-------------|
| 3 | ¼ | Stats, committee members, compact links |
| 4 | ⅓ | Thirds row, footer columns |
| 5 | 5/12 | Asymmetric pair with 7 |
| 6 | ½ | Comparisons, timeline pairs, CTA splits |
| 7 | 7/12 | Asymmetric pair with 5 |
| 8 | ⅔ | Hero text, large video, main content |
| 12 | Full | Section headers, accordions, marquees |

### Tile sizes (`size` prop)

| Size | Min height | Use |
|------|------------|-----|
| `sm` | 120px | Section labels, compact meta |
| `md` | 168px | Standard content tiles |
| `lg` | 240px | Hero text, featured content |
| `xl` | 320px | Hero image, primary program cards |
| `auto` | — | Image/embed tiles (height from content) |

### Container & width

| Context | Class | Width |
|---------|-------|-------|
| **Site-wide (default)** | `container mx-auto max-w-screen-2xl px-4 md:px-6` | 1536px |
| Marquee only | Full-bleed `w-full` | Edge-to-edge strip; content still visually aligned |

Export: `siteContainerClass` from `components/bento-grid.tsx` — use everywhere.

- **Base unit:** 8px (Tailwind scale)
- **Bento gap:** `gap-3` mobile, `gap-4` desktop
- **Section padding:** `py-6 md:py-8` vertical
- **Page gap:** `gap-3 md:gap-4` between sections

### Border radius

- **Bento tiles:** `rounded-2xl` (16px) — studio-soft, not sharp institutional
- **Buttons, inputs:** `rounded-lg` (8px)
- **Pills/badges:** `rounded-full`
- **Inner images:** `rounded-xl` inside `rounded-2xl` tile (inset)

---

## 5. Components

### Bento tile (base primitive)

```html
<div class="group relative overflow-hidden rounded-2xl border border-border bg-muted p-6
            transition-all duration-300
            hover:scale-[1.02] hover:shadow-lg
            motion-reduce:transition-none motion-reduce:hover:scale-100
            [clickable: cursor-pointer]">
```

| Variant | Classes | When |
|---------|---------|------|
| Default | `bg-muted` | General content tile |
| Primary | `bg-primary text-primary-foreground border-primary` | Featured CTA, key stat |
| Accent | `bg-accent text-accent-foreground` | One highlight per section |
| Image | `p-0` + `next/image` fill | Photo tile, `object-cover` |

| Size | Prop | When |
|------|------|------|
| `sm` / `md` / `lg` / `xl` | `size="…"` | Vary visual weight within a section |

- **Hover:** `scale-[1.02]` + `shadow-lg` on interactive tiles only
- **No ghost tiles** for primary content — use real bordered tiles
- **Clickable tiles:** entire tile is the hit target; `cursor-pointer` required

### Navigation

```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo] ROHP     Home  Agenda  FAQ  ...          [Register]        │
└──────────────────────────────────────────────────────────────────┘
```

- White or `bg-background/80 backdrop-blur-sm` when scrolled
- Floating feel: `top-4 left-4 right-4` on `md+` with `rounded-2xl border border-border` (optional studio nav)
- Logo + "ROHP" in `font-heading font-bold text-primary`
- Nav links: `text-sm font-medium`, hover `text-primary`
- Active: `text-primary font-semibold`
- Register CTA: `bg-primary text-primary-foreground rounded-lg`
- Sticky; account for nav height in hero padding

### Buttons

| Variant | Classes | When |
|---------|---------|------|
| Primary | `bg-primary text-primary-foreground hover:bg-berkeley-blue-light` | Main CTAs |
| Secondary | `border border-primary text-primary hover:bg-berkeley-blue-muted` | Secondary actions |
| Ghost | `text-primary hover:bg-muted` | Tertiary |
| Accent | `bg-accent text-accent-foreground hover:opacity-90` | One per section max |
| On dark tile | `bg-white text-primary hover:bg-white/90` | CTAs inside `bg-primary` tiles |

- `transition-colors duration-200`
- `cursor-pointer` always
- Visible focus: `focus-visible:ring-2 focus-visible:ring-ring`

### Page header (inner pages)

```
┌─────────────────────────────────────┬─────────────┐
│  Breadcrumb + h1 + description (8)│  Visual (4) │
└─────────────────────────────────────┴─────────────┘
```

- Both tiles are real `BentoTile` cells (`size="lg"`), not unstyled wrappers
- Visual tile: `variant="primary"` accent block (default on)

### Footer

- `bg-primary` with **bento grid** link tiles (`5+4+3`, then `6+6`)
- Frosted tiles: `bg-white/10 border-white/15`
- **Clipped wordmark** at bottom (see below)

### Footer wordmark (clipped ROHP)

Oversized decorative "ROHP" aligned to the **top** of a fixed-height overflow container — only the **bottom** of the letterforms is clipped, not the top.

```tsx
<div className={siteContainerClass}>
  <div className="overflow-hidden" style={{ height: "clamp(4rem, 12vw, 9rem)" }}>
    <p className="text-center font-heading font-bold leading-none text-white/[0.14]"
       style={{ fontSize: "clamp(6rem, 28vw, 18rem)" }}>
      ROHP
    </p>
  </div>
</div>
```

- No `translateY` — text sits at natural top; `overflow-hidden` clips descenders
- `aria-hidden="true"` — decorative only
- Wordmark container uses same `siteContainerClass` width as page content

- Use for: partner logos, social proof, repeating campus imagery
- Implementation: CSS `animation` with `translateX`, pause on hover
- **Must** respect `prefers-reduced-motion: reduce` → static row, no animation
- Full-bleed width, contained content height (~48–64px logos)

### Cards (legacy / simple contexts)

When a full bento grid is overkill (FAQ accordion, forms):

```html
<div class="rounded-2xl border border-border bg-card p-6 shadow-sm">
```

### Forms

- shadcn `Input`, `Label`, `Textarea`, `Checkbox`
- Labels above inputs, `text-sm font-medium`
- Error: `text-destructive` + `border-destructive`
- Submit: primary variant

### Marquee (optional, max one per page)

- Large Outfit number: `text-4xl md:text-5xl font-bold`
- Label below: `text-sm text-muted-foreground`
- Lives inside a bento tile; one stat per tile

---

## 6. Page-Specific Guidance

### Homepage (`/`)

| Section | Layout | Notes |
|---------|--------|-------|
| Hero | `8+4` title, then `8+4` subtitle + CTAs | All real bento tiles; image tile `size="xl"` |
| Marquee | Full-bleed | Between hero and about |
| About | `12` header, `8+4` copy + accent, `6+6` details | Semantic `<Section>` |
| Highlights | `12` header, `3+6+3` varied pillars | Center tile `variant="primary"` `size="xl"` |
| Videos | `12` header, `8+4` embeds | Asymmetric but sums to 12 |
| Stats | `4+4+4` | Center stat `variant="accent"` `size="lg"` |
| CTA + Contact | `6+6` then `4+4+4` | Symmetrical pairs |

### Agenda hub + sub-pages

- Programs: `6+6` comparison tiles in own section
- Expectations: `12` header + `4+4+4`
- Timeline: event pairs `6+6` per row
- CTA rows: always `6+6`

### FAQ

- Search: own `<Section>` with `12` tile
- Categories: one `12` accordion tile per category
- Contact: `6+6`

### Registration

- Steps: `12` header + `4+4+4` (center step `variant="primary"` `size="lg"`)
- Waivers: `6+6`
- Forms: `3+3+3+3`
- Q&A: `8+4` form + info sidebar

### Housing

- Per residence: own `<Section>` with `8+4` or `4+8` video + info (alternate for rhythm)
- CTA: `6+6`

### Committee

- Photo grid: `3+3+3+3` (four per row)
- CTA: `6+6`

---

## 7. Imagery & Media

| Rule | Detail |
|------|--------|
| Photography | Real UC Berkeley / ROHP photos only |
| Bento image tiles | `object-cover`, `rounded-2xl`, min-height 280px |
| Hero | Campus landmark — high quality WebP |
| Aspect ratios | Flexible inside tiles; enforce `aspect-video` for video, `aspect-square` for committee |
| Alt text | Required on every image |
| No AI-generated images | Remove ChatGPT hero asset |
| Icons | Lucide only, `w-5 h-5` or `w-6 h-6` |
| No emoji icons | Ever |

---

## 8. Motion & Interaction

### Allowed (max 2 types per view)

| Effect | Duration | Where |
|--------|----------|-------|
| Tile hover scale | 300ms ease | Interactive bento tiles |
| Color/opacity transition | 150–200ms | Buttons, links |
| Staggered fade-in | 400ms, once | Bento grid on scroll (optional) |
| Marquee scroll | 30–60s linear | One per page |
| Lenis smooth scroll | — | Site-wide via `SmoothScroll`; disabled when `prefers-reduced-motion` |
| Accordion expand | 200ms | FAQ |
| Mobile menu slide | 200ms | Navigation |

### Forbidden

- SplitText, TextType, PixelTransition, MagneticButton
- Multiple infinite decorative animations
- Scroll-jacking / parallax that blocks natural scroll
- `scroll-behavior: smooth` on `html` (use Lenis instead)

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .marquee { animation: none; }
}
```

---

## 9. Dark Mode

Supported but not the primary design target.

- Background: `#0F172A`
- Primary text: `#F8FAFC`
- Primary brand: `#7FB5FF`
- Bento tiles: `#1E293B`
- Borders: `#334155`
- Gold accent: unchanged `#FDB515`

---

## 10. Tailwind / Token Implementation

### `app/globals.css` changes (summary)

1. Set `--primary` to Berkeley Blue (`#003262`)
2. Map `--accent` to California Gold (`#FDB515`)
3. Set `--secondary` / `--muted` to studio surface `#F5F5F7`
4. Update `--font-heading` → Outfit, `--font-sans` → Source Sans 3
5. Add bento utility if needed: `.bento-grid` → `grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12`
6. Remove legacy `.berkeley-blue`, `.text-berkeley`, etc. after migration
7. Add `prefers-reduced-motion` block

### Class migration map

| Old | New |
|-----|-----|
| `.berkeley-blue` (bg) | `bg-primary text-primary-foreground` |
| `.text-berkeley` | `text-primary` |
| `.california-gold` (bg) | `bg-accent text-accent-foreground` |
| `font-heading` (Source Serif 4) | `font-heading` (Outfit) |
| `max-w-6xl` / `max-w-7xl` | `max-w-screen-2xl` (`siteContainerClass`) |
| `rounded-lg` cards | `rounded-2xl` bento tiles |
| Uniform card grid | `grid lg:grid-cols-12` bento spans |
| `border-2` | `border` |
| `style={{ color: "#..." }}` | semantic tokens |

### New shared components (target)

| Component | Role |
|-----------|------|
| `components/bento-grid.tsx` | 12-col wrapper |
| `components/bento-tile.tsx` | Tile variants (default, primary, accent, image) |
| `components/marquee.tsx` | Optional scrolling strip |
| `components/page-header.tsx` | Bento-style inner page header |
| `components/section.tsx` | Section wrapper with `max-w-7xl` |
| `components/stat-block.tsx` | Stat inside a tile |

---

## 11. Pre-Delivery Checklist

### Visual
- [ ] Bento grid per semantic `<Section>`, not one giant page grid
- [ ] `max-w-screen-2xl` consistent on nav, content, footer, wordmark
- [ ] Rows sum to 12 — no orphaned tiles
- [ ] Varied tile spans and `size` props
- [ ] Hero title + subtitle in separate real bento tiles
- [ ] No emojis as icons; Lucide only
- [ ] Gold accent ≤1 element per section
- [ ] Footer bento grid + bottom-clipped ROHP wordmark

### Interaction
- [ ] `cursor-pointer` on all clickable tiles and buttons
- [ ] Hover scale only on interactive tiles
- [ ] Transitions 150–300ms
- [ ] Focus rings visible
- [ ] No SplitText, TextType, PixelTransition, MagneticButton
- [ ] Marquee pauses or stops with `prefers-reduced-motion`

### Layout
- [ ] Responsive bento stacks to single column at 375px
- [ ] No horizontal scroll on mobile
- [ ] No content hidden behind sticky nav
- [ ] Test at 375, 768, 1024, 1440, 1536px

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] `prefers-reduced-motion` respected
- [ ] Body text contrast ≥ 4.5:1

---

## 12. File Reference

| File | Role |
|------|------|
| `STYLE.md` | This document — visual source of truth |
| `docs/REDESIGN-PLAN.md` | Phased implementation plan |
| `.cursor/rules/rohp-design-system.mdc` | Agent quick-reference rule |
| `docs/IMAGE-REPLACEMENT.md` | Photography swap tracker |
| `app/globals.css` | CSS token definitions |
| `app/layout.tsx` | Font loading, root shell |
| `components/bento-grid.tsx` | 12-col wrapper + `siteContainerClass` |
| `components/bento-tile.tsx` | Tile spans, sizes, variants |
| `components/smooth-scroll.tsx` | Lenis buttery scroll |
| `components/section.tsx` | Semantic section wrapper |
| `components/page-header.tsx` | Bento inner page header |
| `components/stat-block.tsx` | Stat inside a tile |
| `components/marquee.tsx` | Optional scrolling strip |
| `components/navigation.tsx` | Site header |
| `components/footer.tsx` | Bento footer + clipped wordmark |
