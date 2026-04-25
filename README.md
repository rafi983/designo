# Designo Next

A component-based Next.js implementation of the Designo multi-page agency website.

This project uses:
- Next.js App Router (`app/`)
- TypeScript
- `styled-components` (including global styles via `createGlobalStyle`)
- Responsive image assets from `public/assets`

## Overview

The site has been converted from static templates into reusable React components and route pages.

Current route pages:
- `/`
- `/about`
- `/locations`
- `/contact`
- `/web-design`
- `/app-design`
- `/graphic-design`

Global styling is provided through `styled-components` in `styles/global-styles.tsx`, and SSR support for styled-components is wired through `lib/registry.tsx` and `next.config.ts`.

## Tech Stack

- `next@16.2.4`
- `react@19.2.4`
- `react-dom@19.2.4`
- `styled-components@6.4.1`
- TypeScript + ESLint

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  about/page.tsx
  locations/page.tsx
  contact/page.tsx
  web-design/page.tsx
  app-design/page.tsx
  graphic-design/page.tsx

components/
  page-shell.tsx
  site-header.tsx
  site-footer.tsx
  cta-section.tsx
  locations-links-section.tsx
  design-links-grid.tsx

lib/
  registry.tsx

styles/
  global-styles.tsx

public/
  assets/
```

## Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` – start local dev server
- `npm run build` – create production build
- `npm run start` – start production server
- `npm run lint` – run ESLint checks

## Styling Notes

- `next.config.ts` has `compiler.styledComponents: true` enabled.
- `app/layout.tsx` wraps the app with `StyledComponentsRegistry` and injects `GlobalStyles`.
- The current implementation keeps many original class names and selectors to preserve the existing visual design.

## Asset Notes

- All runtime assets are served from `public/assets`.
- Paths in components use absolute references like `/assets/home/desktop/image-hero-phone.png`.

## Lint / Image Optimization

You may see `@next/next/no-img-element` warnings from ESLint because the project currently uses native `<img>` tags for high-fidelity parity with the original design.

If you want to optimize further:
1. Replace `<img>` with `next/image` where practical.
2. Add explicit `width` / `height` (or `fill`) and `sizes` values.

## Development Guidelines

- Keep shared layout concerns in `components/page-shell.tsx` and common UI components.
- Add new pages under `app/<route>/page.tsx`.
- Keep styles centralized in `styles/global-styles.tsx` unless intentionally moving toward component-scoped styled components.

## Build Status

The project is expected to pass:
- `npm run lint` (warnings possible for `<img>`)
- `npm run build`

## Future Improvements (Optional)

- Migrate large global class-based styles into component-scoped styled-components blocks.
- Introduce content/data constants for repeated sections.
- Improve semantic structure in some sections inherited from the original static markup.
