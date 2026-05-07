# SafeStepEdu — Project Map

## Architecture
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first via `@theme`)
- **Animation:** `motion/react`
- **Fonts:** `Noto Kufi Arabic` (Google Fonts)

## Routes (Single Page)
```
/                    → Single-page app with all sections
/_not-found          → 404 fallback
```

## Page Sections (in `/src/app/page.tsx`)
| Section   | Nav Link     | Content                                  |
|-----------|--------------|------------------------------------------|
| Hero      | `#home`      | Animated rotating titles, CTA, badges    |
| Services  | `#services`  | 6 service cards (GlowCard grid)          |
| Steps     | `#steps`     | 4-step process                           |
| FAQ       | `#faq`       | Accordion with 6 common questions        |
| Contact   | `#contact`   | Contact form + info + WhatsApp CTA       |
| Guarantee | —            | Trust/security message                   |

## Components
### Layout (`/src/components/layout/`)
- `Header.tsx` — Fixed header, scroll-aware, mobile menu, nav links to #sections
- `Footer.tsx` — Footer with link sections, social placeholders, copyright

### UI (`/src/components/ui/`)
- `index.tsx` — Barrel: `SectionHeading`, `Button`, `Card`, `GlowCard`
- `animated-hero.tsx` — Hero with rotating Arabic words, background, badges
- `button.tsx` — CVA-based button (Slot, variants)
- `badge.tsx` — CVA badge component
- `glow.tsx` — Glow effect component
- `hero-section.tsx`, `hero-section-2.tsx`, `hero-section-9.tsx` — Legacy heros
- `icons.tsx` — SVG icon collection
- `interactive-image-accordion.tsx` — Legacy accordion hero
- `mockup.tsx` — Mockup/MockupFrame components

### Animations (`/src/components/animations/`)
- `FadeIn.tsx` — `FadeIn`, `StaggerContainer`, `StaggerItem`, `ScaleIn`, `TextReveal`, `Counter`, `ParallaxSection`

## Data
- Services, steps, FAQs are hardcoded in `page.tsx`
- Sanity CMS schemas exist in `/sanity/schemas/` (not yet connected to frontend)
- Sanity client + GROQ queries in `/src/lib/sanity/`

## Dependencies
- `next`, `react`, `react-dom`
- `motion` — animations
- `lucide-react` — icons
- `class-variance-authority`, `@radix-ui/react-slot` — UI primitives
- `next-sanity` — CMS (not live)

## Build & Run
```bash
export PATH="/usr/local/bin:$PATH"
npx next dev -p 3001
npx next build
```
