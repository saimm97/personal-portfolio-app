# Saim Malik — Personal Portfolio

A production-ready personal portfolio for **Saim Malik**, Senior Full Stack Engineer with 6+ years of experience building scalable SaaS platforms and AI-powered applications. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern responsive UI with **light & dark themes** (system-aware, persisted)
- Sections: Hero · Achievements · About · Experience · Industries · Projects · Skills · Education · Testimonials · Contact
- **Working contact form** powered by a Next.js Server Action and Resend (with a graceful fallback when not configured)
- **Dynamically generated favicon, Apple touch icon, OpenGraph, and Twitter images** via the `next/og` runtime
- **SEO**: rich metadata, `sitemap.xml`, `robots.txt`, and JSON-LD `Person` schema
- **Vercel Analytics** out of the box
- **Accessibility**: skip-to-content link, visible focus rings, `prefers-reduced-motion` handling
- Custom 404 page matching the design system
- Centralized content in `lib/data.ts` — editing copy is trivial

## Tech Stack

- **Framework:** Next.js 15 (App Router) · React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes
- **Email:** Resend (via Server Actions)
- **Analytics:** @vercel/analytics

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in values you need
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See [`.env.example`](./.env.example) for the full list. Brief summary:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public URL used in metadata, sitemap, and robots |
| `RESEND_API_KEY` | Optional | Enables the contact form to send emails via Resend |
| `RESEND_FROM_EMAIL` | Optional | The `From:` address used by the contact form |

If `RESEND_API_KEY` is not set, the contact form still works in dev — submissions are logged to the server console, and the success message gently asks visitors to email directly as a fallback.

## Customizing Your Portfolio

All copy lives in [`lib/data.ts`](./lib/data.ts). Update these exports:

| Export | Controls |
| --- | --- |
| `profile` | Name, title, tagline, bio, email, phone, social URLs, avatar |
| `stats` | The "At a glance" panel in the hero |
| `achievements` | The headline metrics band |
| `industries` | The Industries grid |
| `experiences` | The Experience timeline |
| `projects` | The Selected Work case studies |
| `skillGroups` | The Skills toolbox |
| `education` | The Education section |
| `testimonials` | The Testimonials section |
| `principles` | The About cards |
| `socialLinks` | The Contact + Footer social links |

### Adding a profile photo

Drop your photo at `public/avatar.jpg` (or any path you prefer), then set:

```ts
// lib/data.ts
export const profile = {
  // ...
  avatarUrl: "/avatar.jpg",
};
```

The hero automatically uses the image and falls back to a stylish monogram if anything goes wrong.

### Adding your resume

Drop `resume.pdf` into `/public`. The "Download CV" button in the hero will just work.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

The simplest path is [Vercel](https://vercel.com):

1. Push to GitHub
2. Import the repo in Vercel — Next.js is detected automatically
3. Set the environment variables from `.env.example` in the Vercel dashboard
4. Deploy

The included [GitHub Actions workflow](./.github/workflows/ci.yml) runs `lint` and `build` on every push and PR.

## Project Structure

```
app/
  layout.tsx              Root layout, fonts, metadata, JSON-LD, analytics
  page.tsx                Home page composition
  not-found.tsx           Custom 404 page
  globals.css             Theme tokens (light + dark), base styles
  icon.tsx                Dynamic favicon (next/og)
  apple-icon.tsx          Apple touch icon
  opengraph-image.tsx     OG share image (1200x630)
  twitter-image.tsx       Twitter share image
  sitemap.ts              Generated sitemap.xml
  robots.ts               Generated robots.txt
  actions/
    contact.ts            Server Action for the contact form
components/
  navigation.tsx          Sticky responsive nav + theme toggle
  theme-provider.tsx      next-themes wrapper
  theme-toggle.tsx        Light / dark switcher
  hero.tsx                Hero with avatar, status, stats
  achievements.tsx        Headline metrics band
  about.tsx               Engineering principles
  experience.tsx          Timeline of roles
  industries.tsx          Industries grid
  projects.tsx            Selected work
  skills.tsx              Skills toolbox
  education.tsx           Education section
  testimonials.tsx        Testimonials section
  contact.tsx             Contact section + form + social links
  contact-form.tsx        The Server Action-powered form
  avatar.tsx              Image-or-monogram avatar
  footer.tsx              Footer with social links
  section.tsx             Shared animated section primitive
lib/
  data.ts                 All site content
  utils.ts                cn() helper
```

## License

MIT — feel free to adapt for your own portfolio.
