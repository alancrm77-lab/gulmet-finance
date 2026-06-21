# Gulmet Kulmedov — Financial Advisor Website

A multi-language marketing site for **Gulmet Kulmedov**, a Seattle-based
financial professional who represents **New York Life**. Built from a Claude
Design prototype (see [`project/`](./project) and [`chats/`](./chats) for the
original handoff bundle).

## Features

- **Four languages** — English, Русский (Russian), Türkçe (Turkish), and
  Türkmençe (Turkmen) — switchable in the header, with **browser auto-detect**
  and choice persistence via `localStorage` (`gk_lang`).
- **Four pages** — Home, About, Services, Contact — with real routes.
- **Navy/gold institutional theme** on warm cream, Source Serif 4 +
  Source Sans 3, with Gulmet's portrait on the Home and About pages.
- Animated **service cards** (lift, gold top-bar sweep, icon scale, title shift,
  sliding arrow) and **"Why work with me"** rows (indent, gold accent, number
  scale) — all CSS-driven.
- A **contact form wired to [Web3Forms](https://web3forms.com)** plus the
  @gulmetfinance Instagram link.
- Responsive: multi-column layouts collapse to a single column on small screens,
  and `prefers-reduced-motion` is respected.

## Tech stack

React 18 · TypeScript · Vite · React Router.

## Getting started

```bash
npm install
cp .env.example .env      # then add your Web3Forms access key
npm run dev               # start the dev server
```

### Other scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build to `dist/`      |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Type-check only (`tsc --noEmit`)     |

## Configuration

### Contact form (Web3Forms)

The contact form posts to Web3Forms. Get a free access key at
[web3forms.com](https://web3forms.com) (you enter the email address where
submissions should land), then set it in `.env`:

```
VITE_WEB3FORMS_KEY=your-web3forms-access-key-here
```

Without a key the form shows a friendly error and logs a console warning.

### Contact details

The email, phone, and office address are **placeholders**. Swap in real values
in [`src/data/site.ts`](./src/data/site.ts). The Instagram link there is live.

## Project structure

```
src/
  main.tsx                 # entry: router + language provider
  App.tsx                  # layout, routes, scroll-to-top
  index.css                # full theme + component styles
  data/site.ts             # languages, contact info, Instagram URL
  hooks/useLanguage.tsx    # language context, auto-detect, persistence
  i18n/
    types.ts               # translation shape
    translations.ts        # en / ru / tr / tk copy
  components/
    Header.tsx  Footer.tsx  CtaBand.tsx  icons.tsx
    pages/  Home.tsx  About.tsx  Services.tsx  Contact.tsx
public/
  assets/gulmet.png        # portrait
  favicon.svg              # GK monogram
```

## Deployment

This is a static SPA. `npm run build` outputs to `dist/`. Deploy that folder to
any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages…). Because it
uses client-side routing, configure an **SPA fallback** so deep links resolve to
`index.html` (Vercel/Netlify do this automatically).

## Notes

- The Russian and Turkish copy was reviewed during the design phase; the
  **Turkmen** translations are the hardest to get perfectly idiomatic and are
  worth a final eye-check by Gulmet.
- "New York Life" appears as a text reference only — no logo or branding is
  reproduced.
