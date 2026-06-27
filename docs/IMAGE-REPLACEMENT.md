# Image Replacement Tracker

Images to swap during the redesign. **Do not use AI-generated or stock placeholder photos in production.** Replace with real ROHP / UC Berkeley assets before launch.

## Priority 1 — Replace before launch

| Asset | Current path | Used on | Replacement needed |
|-------|--------------|---------|-------------------|
| **Hero background** | `/images/chatgpt-20image-20jan-204-2c-202026-2c-2004-52-19-20pm.png` | Homepage hero | Real campus photo (Campanile, Doe Library, or ROHP event). Target: `/images/campus-hero.webp`, ≤200KB, 16:9 |
| **Registration bear buttons** | `/bear.png` (referenced in `registration-trigger.tsx`) | Registration page | Replace with styled primary buttons OR official Cal bear mark (verify trademark use). No image-overlay buttons. |

## Priority 2 — Stock / placeholder photos (unused or legacy)

These `young-*-student*.jpg` files in `/public/` appear to be generic stock photos from the v0 scaffold. **Not currently wired to pages** but should be deleted once confirmed unused:

```
public/young-man-engineer-student.jpg
public/young-woman-engineer-student.jpg
public/young-asian-man-computer-science-student.jpg
public/young-woman-business-student-alt.jpg
public/young-man-conservation-student-alt.jpg
public/young-man-data-science-student-alt.jpg
public/young-woman-business-latina-student.jpg
public/young-man-conservation-student.jpg
public/young-woman-student-alt.jpg
public/young-person-political-student.jpg
public/young-man-data-science-student.jpg
public/young-person-political-student-alt.jpg
public/young-latino-man-urban-student-alt.jpg
public/young-woman-business-student.jpg
public/young-woman-environmental-student-alt.jpg
public/young-woman-student.png
public/young-woman-math-student-alt.jpg
public/young-woman-business-latina-student-alt.jpg
public/young-man-engineer-student-alt.jpg
public/young-latina-woman-design-student.jpg
public/young-man-media-student.jpg
public/young-asian-man-computer-science-student-alt.jpg
public/placeholder.jpg
public/placeholder-user.jpg
public/placeholder-logo.png
public/placeholder-logo.svg
```

## Priority 3 — Committee headshots (keep, optionally optimize)

Real committee photos live under:

```
public/ROHP CM Biographies (2025-2026) (File responses)/
```

**Action items:**
- [ ] Rename/move to clean paths (e.g. `/images/committee/william-li.jpg`) — long folder names are fragile in URLs
- [ ] Convert `.heic` / `.HEIC` files to `.webp` or `.jpg` (Connor Lu, Madison Palacios, Lauren Lee) — **HEIC may not render in all browsers**
- [ ] Standardize dimensions (1:1 crop, ~400×400) for grid consistency
- [ ] Add meaningful `alt` text (already using member names)

## Priority 4 — Brand assets (keep)

| Asset | Path | Notes |
|-------|------|-------|
| ROHP logo | `/rohp-logo.png` | Used in nav; verify resolution for retina |
| Favicons | `/icon.svg`, `/icon-light-32x32.png`, `/icon-dark-32x32.png`, `/apple-icon.png` | May need refresh to match new style |

## Priority 5 — Optional enhancements

| Location | Suggestion |
|----------|------------|
| Homepage About tile | Real ROHP group photo in 6+6 bento layout |
| Homepage hero tile | Campus landmark in `lg:col-span-4` image tile |
| Agenda pages | Optional small image tile in page header (4-col) |
| Housing page | YouTube stills as video tile posters |
| Marquee strip | Campus landmarks or partner logos (if approved) |

## Bento tile image guidelines (Campus Studio)

Images are placed inside **bento tiles** (`BentoTile variant="image"`), not full-bleed hero bands.

| Tile type | Aspect | Min height | Notes |
|-----------|--------|------------|-------|
| Hero image tile | 4:5 or 1:1 | 320px | Right column of 8+4 hero; `object-cover rounded-2xl` |
| About / feature | 4:3 or 16:9 | 280px | Paired with text tile in 6+6 layout |
| Committee headshot | 1:1 | 280px | Square crop, consistent across grid |
| Video embed | 16:9 | — | `aspect-video` inside tile |

## Homepage hero interim strategy

Until `/images/campus-hero.webp` is provided, the homepage hero uses a **solid `bg-primary` image tile** or muted placeholder — no ChatGPT image. When the real photo is ready:

1. Add file to `public/images/campus-hero.webp`
2. Wire into `BentoTile variant="image"` in `app/page.tsx` (8+4 hero layout)
3. Optional: `bg-primary/40` overlay on tile for text contrast if text sits on image
4. Delete `public/images/chatgpt-20image-*.png`

## Suggested photo sources

- ROHP committee event photos (with participant consent)
- UC Berkeley Marketing & Communications media library (check usage rights)
- Official campus photography (Campanile, Memorial Glade, Doe Library)
- Student-submitted ROHP overnight program photos

## Checklist before go-live

- [ ] No ChatGPT-generated images anywhere
- [ ] No generic stock student photos
- [ ] All committee headshots load in Chrome, Safari, Firefox
- [ ] HEIC files converted
- [ ] Hero image optimized (WebP, dimensions set, alt text)
- [ ] All images have descriptive `alt` attributes
