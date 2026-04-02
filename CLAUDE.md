# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (also catches TypeScript errors)
npm run lint     # ESLint
```

## Architecture

This is a **Next.js 15 (App Router) + Tailwind CSS v4** static site template for local service businesses.

### Single config file pattern

**`config/site.ts`** is the only file a client needs to edit. It exports `siteConfig` containing:
- Business name, tagline, description, phone, email, address
- `colors` object (`primary`, `primaryDark`, `accent`) — these are injected as CSS custom properties in `app/layout.tsx` via an inline `<style>` tag, making them available site-wide
- `hero` content (headline, subheadline, CTA text/links)
- `services` array — drives both the home page cards and the full Services page
- `about` highlights — drives both the home page trust bar and the About page stats
- `nav` array — drives both Header and Footer links

### Key data flow

`config/site.ts` → `app/layout.tsx` (injects CSS vars + renders `<Header>` / `<Footer>`) → individual page files pull from `siteConfig` directly.

Brand colors are applied with inline `style` props (`style={{ backgroundColor: siteConfig.colors.primary }}`), not Tailwind color classes, so swapping colors in the config takes effect immediately without touching CSS.

### Contact form

`app/contact/page.tsx` is a Server Component; the form itself lives in `app/contact/ContactForm.tsx` (a Client Component). The form currently simulates submission with a `setTimeout`. Replace that block with a real email service (Resend, Formspree, EmailJS, or a `app/api/contact/route.ts` handler).

### Deployment

The project is Vercel-ready out of the box — all four routes prerender as static pages. Just connect the repo in Vercel; no extra configuration needed.
