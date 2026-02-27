# SparkleClean — Professional Cleaning Services Website

A modern, high-conversion cleaning services website built with **Next.js 14**, **TypeScript**, and **TailwindCSS**.

---

## 📁 Project Structure

```
sparkle-clean/
├── public/                          # Static assets (images, icons, fonts)
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout (fonts, header, footer)
│   │   ├── page.tsx                 # Homepage
│   │   ├── globals.css              # Global styles & Tailwind layers
│   │   ├── sitemap.ts               # Dynamic XML sitemap
│   │   ├── robots.ts                # robots.txt generation
│   │   ├── manifest.ts              # PWA manifest
│   │   ├── not-found.tsx            # Custom 404 page
│   │   ├── about/page.tsx           # About us
│   │   ├── booking/page.tsx         # Booking page
│   │   ├── contact/page.tsx         # Contact page
│   │   ├── pricing/page.tsx         # Pricing page
│   │   └── services/page.tsx        # Services listing
│   ├── components/
│   │   ├── ui/                      # Reusable design system components
│   │   │   ├── Button.tsx           # Polymorphic button (link/button)
│   │   │   ├── Card.tsx             # Flexible card component
│   │   │   ├── Badge.tsx            # Badge/tag component
│   │   │   ├── FormElements.tsx     # Input, Textarea, Select
│   │   │   ├── SectionHeading.tsx   # Section header with badge
│   │   │   └── index.ts            # Barrel exports
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.tsx           # Responsive sticky header
│   │   │   └── Footer.tsx           # Footer with CTA band
│   │   ├── sections/                # Homepage sections
│   │   │   ├── HeroSection.tsx      # Hero with stats & floating cards
│   │   │   ├── ServicesSection.tsx   # 6 services grid
│   │   │   ├── WhyChooseUsSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx   # 3-tier pricing cards
│   │   │   ├── FAQSection.tsx       # Expandable FAQ
│   │   │   ├── CTASection.tsx       # Final call-to-action
│   │   │   └── index.ts
│   │   └── booking/
│   │       └── BookingForm.tsx      # Multi-step booking wizard
│   └── lib/                         # Utilities (future)
├── tailwind.config.ts               # Design system tokens
├── next.config.js                   # Performance config
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🗺️ Sitemap & Navigation

### Pages
| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Hero + services + testimonials + pricing + FAQ + CTA |
| Services | `/services` | Detailed service listings with images |
| About | `/about` | Story, values, team |
| Pricing | `/pricing` | Pricing cards + FAQ |
| Booking | `/booking` | Multi-step booking wizard (conversion page) |
| Contact | `/contact` | Contact form + methods |
| Gallery | `/gallery` | Before/after photos (future) |
| Blog | `/blog` | SEO content (future) |

### Navigation Structure
```
[Logo] — Services — About — Pricing — Gallery — Contact — [Phone] — [Book Now CTA]
```

---

## 🎨 Design System

### Color Palette
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Deep Ocean Blue | `#2d78ff` → `#112057` | Trust, navigation, headings |
| Secondary | Fresh Mint Green | `#14d45c` → `#013217` | Success, checkmarks, freshness |
| Accent | Warm Amber | `#f99b07` → `#461902` | CTAs, urgency, highlights |
| Neutral | Slate | `#f8fafc` → `#020617` | Text, backgrounds, borders |

### Typography
| Style | Font | Size | Weight |
|-------|------|------|--------|
| Display XL | Plus Jakarta Sans | 4.5rem | 800 |
| Display | Plus Jakarta Sans | 3.75rem | 800 |
| H1 | Plus Jakarta Sans | 3rem | 700 |
| H2 | Plus Jakarta Sans | 2.25rem | 700 |
| H3 | Plus Jakarta Sans | 1.875rem | 600 |
| Body Large | Inter | 1.125rem | 400 |
| Body | Inter | 1rem | 400 |
| Body Small | Inter | 0.875rem | 400 |

### Spacing System (rem)
`0.25 → 0.5 → 1 → 1.5 → 2 → 3 → 4 → 4.5 → 5.5 → 6 → 7.5 → 8 → 8.5`

### Component Variants
- **Buttons:** primary, secondary, accent, outline, ghost, white — sizes: sm, md, lg, xl
- **Cards:** default, bordered, elevated, glass — padding: none, sm, md, lg
- **Form Elements:** Input, Textarea, Select — with labels, errors, hints, ARIA
- **Badges:** primary, secondary, accent, neutral — sizes: sm, md
- **Shadows:** soft, medium, strong, glow-primary, glow-accent

---

## 📐 Homepage Wireframe

```
┌────────────────────────────────────────────────────────┐
│  [Logo]  Services  About  Pricing  Contact  [📞] [CTA]│  ← Sticky header
├────────────────────────────────────────────────────────┤
│                                                        │
│           ✨ Trusted by 5,000+ Customers               │
│                                                        │
│              A Cleaner Home,                           │
│              A Happier Life                            │
│                                                        │
│     [Get Free Quote]  [Our Services]                   │
│                                                        │
│     👤👤👤👤👤  4.9/5 from 2,300+ reviews              │
│                                                        │
│   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐        │
│   │5,000+│    │ 4.9★ │    │ 10+  │    │ 100% │        │
│   │Happy │    │Rating│    │Years │    │Satis.│        │
│   └──────┘    └──────┘    └──────┘    └──────┘        │
├────────────────────────────────────────────────────────┤
│                  OUR SERVICES                          │
│           Cleaning Solutions for Every Need             │
│                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ 🏠       │  │ 🏢       │  │ ✨       │            │
│  │Residential│  │Commercial│  │Deep Clean│            │
│  │ ✓ ✓ ✓   │  │ ✓ ✓ ✓   │  │ ✓ ✓ ✓   │            │
│  │Learn more→│  │Learn more→│  │Learn more→│           │
│  └──────────┘  └──────────┘  └──────────┘            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ 📦       │  │ 🧹       │  │ 🌿       │            │
│  │Move-In   │  │Post-Const│  │Green     │            │
│  │ ✓ ✓ ✓   │  │ ✓ ✓ ✓   │  │ ✓ ✓ ✓   │            │
│  │Learn more→│  │Learn more→│  │Learn more→│           │
│  └──────────┘  └──────────┘  └──────────┘            │
├────────────────────────────────────────────────────────┤
│                WHY CHOOSE US                           │
│            The SparkleClean Difference                 │
│                                                        │
│  🛡️ Insured & Bonded    ⏰ Flexible Scheduling       │
│  👥 Vetted Professionals ❤️ Satisfaction Guaranteed   │
│  🌍 Eco-Friendly         💰 Transparent Pricing       │
├────────────────────────────────────────────────────────┤
│                HOW IT WORKS                            │
│            Spotless in 3 Simple Steps                  │
│                                                        │
│     ┌──①──┐────────┌──②──┐────────┌──③──┐            │
│     │Book │        │ We  │        │ You │            │
│     │Online│        │Clean │        │Relax│            │
│     └──────┘        └──────┘        └──────┘           │
├────────────────────────────────────────────────────────┤
│                TESTIMONIALS                            │
│              Loved by Thousands                        │
│                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ ★★★★★   │  │ ★★★★★   │  │ ★★★★★   │            │
│  │"Amazing!"│  │"The best"│  │"Spotless"│            │
│  │—Sarah M. │  │—James R. │  │—Emily C. │            │
│  └──────────┘  └──────────┘  └──────────┘            │
├────────────────────────────────────────────────────────┤
│                   PRICING                              │
│          Simple, Transparent Pricing                   │
│                                                        │
│  ┌──────────┐  ┌══════════╗  ┌──────────┐            │
│  │ Standard │  ║Deep Clean║  │Move-In   │            │
│  │          │  ║⭐POPULAR ║  │          │            │
│  │  $120    │  ║  $220    ║  │  $350    │            │
│  │[Book Now]│  ║[Book Now]║  │[Book Now]│            │
│  │ ✓ ✓ ✓ ✓│  ║ ✓ ✓ ✓ ✓║  │ ✓ ✓ ✓ ✓│            │
│  └──────────┘  ╚══════════╝  └──────────┘            │
├────────────────────────────────────────────────────────┤
│                    FAQ                                 │
│           Questions? We've Got Answers                 │
│                                                        │
│  ┌─ What products do you use? ──────────── ▼ ─┐       │
│  ┌─ How long does cleaning take? ──────── ▼ ─┐       │
│  ┌─ Do I need to be home? ────────────── ▼ ─┐       │
│  ┌─ What if I'm not satisfied? ─────── ▼ ─┐         │
├────────────────────────────────────────────────────────┤
│              ████████████████████████                   │
│              ██ BOOK YOUR CLEAN ██                     │
│              ██  20% OFF TODAY  ██                     │
│              ████████████████████████                   │
├────────────────────────────────────────────────────────┤
│  [Logo]  Services │ Company │ Support                  │
│  About   Links    │ Links   │ Links                    │
│  Social            │          │                        │
│  ─────────────────────────────────────                 │
│  © 2026  │  Privacy  │  Terms  │  Sitemap              │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 UX & Conversion Strategy

### Conversion Optimization
1. **Persistent CTA** — "Book Now" button always visible in header
2. **Phone number in header** — for users who prefer calling
3. **Multi-step booking form** — reduces cognitive load vs. one long form
4. **Price anchoring** — "Most Popular" badge on mid-tier plan
5. **Social proof everywhere** — stats bar, testimonials, review counts
6. **Urgency trigger** — 20% off promo code in CTA section
7. **Minimal friction** — no account required, instant quote
8. **Sticky order summary** — real-time price updates during booking

### Trust-Building Elements
- ✅ 4.9★ rating with review count
- ✅ "5,000+ Happy Customers" badge
- ✅ Satisfaction guarantee messaging
- ✅ "Insured & Bonded" prominently displayed
- ✅ Real testimonials with names and roles
- ✅ Background-checked team messaging
- ✅ Transparent pricing (no hidden fees)
- ✅ Professional, premium design language

### CTA Placement Strategy
| Location | CTA Type | Purpose |
|----------|----------|---------|
| Header | "Book Now" button | Always accessible |
| Hero | "Get Free Quote" (accent) | Primary conversion |
| After services | "View All Services" | Exploration |
| After pricing | Inline "Book" per plan | Direct conversion |
| Pre-footer band | "Get Free Quote" + "Call Us" | Last chance |
| Mobile bottom (future) | Sticky "Book Now" bar | Mobile conversion |

---

## 🛠️ Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js 14** (App Router) | SSR/SSG, SEO, performance |
| Language | **TypeScript** | Type safety, DX |
| Styling | **TailwindCSS 3.4** | Utility-first, design tokens |
| Animations | **Framer Motion** | Smooth, accessible animations |
| Icons | **Lucide React** | Consistent, tree-shakeable |
| Utils | **clsx** | Conditional classnames |
| Fonts | **Google Fonts** (Inter, Plus Jakarta Sans) | Free, fast via `next/font` |
| Images | **next/image** | Auto optimization, AVIF/WebP |

### Performance Optimizations
- `next/font` — self-hosted, no layout shift
- `next/image` — automatic AVIF/WebP, lazy loading, responsive sizes
- App Router — React Server Components by default (zero client JS for static sections)
- Client components only where needed (`'use client'` for Header, BookingForm)
- CSS — Tailwind purges unused styles → tiny CSS bundle
- Compression enabled in `next.config.js`
- Sitemap & robots.txt generated at build time

### SEO Implementation
- Metadata API for per-page `<title>` and `<meta>` tags
- Open Graph and Twitter Card meta tags
- Dynamic sitemap at `/sitemap.xml`
- `robots.txt` at `/robots.ts`
- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`)
- Heading hierarchy (H1 → H2 → H3)
- Skip-to-content link for accessibility
- JSON-LD structured data (future: LocalBusiness schema)

---

## 🏃 Getting Started

```bash
cd sparkle-clean
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

---

## 📋 Future Enhancements

- [ ] Gallery page with before/after slider
- [ ] Blog with MDX support for SEO content
- [ ] Stripe/payment integration in booking
- [ ] Customer portal (login, manage bookings)
- [ ] Email notifications (booking confirmations)
- [ ] Live chat widget
- [ ] Google Reviews API integration
- [ ] A/B testing framework
- [ ] JSON-LD structured data for LocalBusiness
- [ ] Google Analytics / GTM integration
- [ ] Sticky mobile CTA bar
