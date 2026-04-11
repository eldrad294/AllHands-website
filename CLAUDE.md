# CLAUDE.md

Context for Claude Code working in this repository.

## What This Repo Is

Static GitHub Pages website for the AllHands service booking marketplace.

- **Live site:** https://eldrad294.github.io/AllHands-website/
- **App project:** https://github.com/eldrad294/AllHands

## Tech Approach

Pure HTML + CSS + vanilla JS. No npm, no build tools, no frameworks. Files are served directly by GitHub Pages from the root of the `main` branch.

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Landing page (hero, intro, mission, scope, how-it-works, tech stack, footer) |
| `privacy.html` | Privacy policy |
| `assets/css/style.css` | All styles — design tokens live in `:root` at the top of this file |
| `assets/js/main.js` | Mobile nav toggle, sticky nav shadow, scroll-in animations only |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll — **do not remove** |

## Design System

Material Design 3-inspired. All colour roles, spacing, elevation, shape, and typography tokens are defined as CSS custom properties in the `:root` block at the top of `assets/css/style.css`.

**Never hardcode hex values in HTML.** Always use CSS variables: `var(--color-primary)`, `var(--space-4)`, `var(--radius-md)`, etc.

Key tokens:
- Primary teal: `--color-primary: #006874`
- Primary container (light): `--color-primary-container: #97f0ff`
- Tertiary blue: `--color-tertiary: #525e7d`
- Surface: `--color-surface: #fafdfd`
- Surface variant: `--color-surface-variant: #dbe4e6`
- Nav height (used for scroll-margin-top): `--nav-height: 64px`

## Do's

- Edit HTML structure directly in the `.html` files
- Change colours only in the `:root` block of `style.css`
- Use semantic HTML5 elements: `<section>`, `<nav>`, `<main>`, `<footer>`, `<header>`
- Keep all asset paths **relative** — `assets/css/style.css`, never `/assets/css/style.css`
- Test locally by opening `index.html` via `file://` in a browser — no server needed
- Add `.fade-in` class to any element you want to animate in on scroll

## Don'ts

- Do not introduce npm, webpack, or any build step
- Do not add CSS frameworks (Tailwind, Bootstrap, etc.)
- Do not add external JS libraries or CDN scripts (Google Fonts in `<head>` is the only external resource)
- Do not use absolute paths starting with `/` — GitHub Pages serves under a subpath (`/AllHands-website/`)
- Do not inline styles in HTML — use CSS classes instead
- Do not remove `.nojekyll` — without it GitHub Pages silently skips serving files

## Nav and Footer Duplication

Both HTML pages share identical `<header>` and `<footer>` markup. This is intentional — GitHub Pages has no server-side includes. When editing nav or footer content, update both files.

Set `class="nav-link active"` on the correct nav link for each page.

## Adding a New Page

1. Copy `privacy.html` as a starting point
2. Update `<title>`, `<meta name="description">`, and the `<h1>` in the page hero
3. Set `class="nav-link active"` on the correct nav link in both `<nav>` elements
4. Add the page to the footer link lists in **all** `.html` files

## Deployment

Push to `main` → GitHub Pages auto-deploys in ~60 seconds.

Confirm setup: Repository > Settings > Pages > Source: Deploy from branch > `main` / `(root)`

## AllHands Project Context

AllHands is a dual-sided service booking marketplace:
- **Frontend:** React Native (Expo 54), TypeScript, Material Design 3, Expo Router v6
- **Backend:** Python 3.11, AWS SAM, Lambda, DynamoDB, API Gateway, S3, SES
- **Payments:** Stripe (PCI-compliant; card tokenisation is client-side only)
- **Auth:** Email + 6-digit verification code → JWT HS256 (60-minute expiry)
- **Region:** AWS ap-southeast-2 (Sydney, Australia)
- **Author:** Gabriel Sammut
