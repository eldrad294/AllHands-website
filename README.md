# AllHands Website

Official website for [AllHands](https://github.com/eldrad294/AllHands) — a dual-sided service booking marketplace for iOS, Android, and web.

**Live site:** https://eldrad294.github.io/AllHands-website/

## About

This repo contains the static GitHub Pages site for the AllHands project. Pages:

- **Landing page** (`index.html`) — Project introduction, mission, features, how it works, and tech stack
- **Privacy Policy** (`privacy.html`) — Data collection, usage, retention, and user rights

## Editing

No build tools required. Edit HTML/CSS/JS files directly and push to `main`. GitHub Pages serves from the root of the `main` branch.

To preview locally, open `index.html` directly in a browser — no server required.

## File Structure

```
AllHands-website/
├── index.html          # Landing page
├── privacy.html        # Privacy policy
├── assets/
│   ├── css/style.css   # All styles (design tokens at top of file)
│   └── js/main.js      # Nav toggle, sticky nav, scroll animations
├── .nojekyll           # Disables Jekyll on GitHub Pages
├── CLAUDE.md           # Context for Claude Code
└── README.md           # This file
```

## Deployment

Push to `main` — GitHub Pages auto-deploys within ~60 seconds.

**First-time setup:** Repository > Settings > Pages > Source: Deploy from branch > `main` / `(root)`

## Main Project

App source code: https://github.com/eldrad294/AllHands
