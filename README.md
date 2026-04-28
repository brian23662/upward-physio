# Upward Physio LLC

A modern, sleek Next.js website for Upward Physio LLC — physical therapy with DJ Keim, DPT.

## Tech Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** with a custom brand palette pulled from the logo
- **shadcn/ui** primitives (Button, Input, Select, Toast, etc.)
- **Resend** for the contact form (via Server Actions)
- **Framer Motion** available but the site uses lightweight CSS animations to stay fast
- Built for **Vercel** deployment

## Design system

- **Display font:** Fraunces — an editorial serif that gives the site its premium personality
- **Body font:** Inter
- **Mono accent:** JetBrains Mono — for eyebrows and section numbering
- **Brand palette** (from the logo) is exposed as Tailwind utilities, e.g. `bg-brand-teal`, `text-brand-orange`:
  - `brand-teal` `#05ad9e` — primary
  - `brand-orange` `#db8c41` — accent
  - `brand-ink` `#292828` — body text
  - plus `brand-tan`, `brand-earth`, `brand-teal-dark`, `brand-teal-soft`

## Getting started

```bash
# 1. install
npm install

# 2. set up env
cp .env.example .env.local
# then add your Resend API key + sender + destination email

# 3. dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Resend setup

1. Sign up at [resend.com](https://resend.com)
2. Verify the `upwardphysio.com` domain (DNS records)
3. Create an API key and put it in `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@upwardphysio.com
CONTACT_TO_EMAIL=dj@upwardphysio.com
```

## Project structure

```
app/
  layout.tsx              # root layout — fonts, metadata, navbar, footer, toaster
  page.tsx                # home page
  globals.css             # global styles + brand tokens
  actions/contact.ts      # server action that ships form submissions through Resend
  (services)/             # route group — does not affect URLs
    occupational-health/page.tsx
    strength-conditioning/page.tsx
    orthopedics/page.tsx
    injury-prevention/page.tsx
    workplace-wellness/page.tsx
components/
  navbar.tsx              # sticky navbar with mobile menu
  footer.tsx
  video-player.tsx        # <IntersectionObserver> driven, plays once
  contact-form.tsx        # client form, calls submitContact server action
  service-page.tsx        # shared template for all 5 dedicated service pages
  sections/
    hero.tsx              # home hero
    service-section.tsx   # one alternating row on the home page
    contact-section.tsx   # contact funnel — used at the bottom of every page
  ui/                     # shadcn primitives (button, input, select, toast, …)
lib/
  services.ts             # single source of truth for all service copy
  use-toast.ts            # shadcn toast hook
  utils.ts                # cn() helper
public/
  logo.jpg
  videos/                 # the five 5-second clips
```

## Editing site copy

All service descriptions, benefits, and key services live in `lib/services.ts`. Both the home page sections and the dedicated pages read from the same array, so editing once updates everywhere.

## Adding a new service

1. Add an entry to `SERVICES` in `lib/services.ts` (with a unique `slug`).
2. Add the corresponding video to `public/videos/`.
3. Create a new route file in `app/(services)/your-slug/page.tsx`, mirroring the existing ones — three lines change: the `SLUG` constant.
4. The navbar, footer, home page and contact form picker pick it up automatically.

## Deployment

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Set the three env vars in the Vercel project settings.

No `vercel.json` is required — Next.js apps deploy on Vercel with zero configuration.

## Notes for the developer

- The IntersectionObserver in `VideoPlayer` makes each home-page video play **exactly once** when it scrolls into view. On dedicated service pages, the hero video plays immediately.
- The contact form uses a **Server Action** (`app/actions/contact.ts`) rather than a separate API route — Next 14's recommended pattern. If you'd prefer an API route handler, that pattern still works and the action body would move to `app/api/contact/route.ts` largely unchanged.
- The form pre-selects a specialty when rendered on a service page — `defaultSpecialty` is passed down through `ContactSection`.
- Smooth scroll is enabled site-wide via `html { scroll-behavior: smooth }`. The "Explore Services" CTA jumps to `#occupational-health` and "Contact Us" to `#contact`.
- All decorative offsets, gradients, and grain textures are pure CSS — no extra image assets to load.
