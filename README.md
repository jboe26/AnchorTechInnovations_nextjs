# AnchorTechInnovations_nextjs

The source code for [anchortech.org](https://anchortech.org), the website for AnchorTech Innovations LLC, a freelance web development and tech services company in Pineville, NC.

## What's in here

- `anchortech-nextjs/` — the Next.js site itself (App Router, TypeScript, Tailwind CSS). This is the whole product.
- `package.json` — repo-level metadata only. All real dependencies live in `anchortech-nextjs/`.

## Quick start

```bash
cd anchortech-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Scripts

Run these from `anchortech-nextjs/`:

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |

## Deployment

The site deploys to Netlify from the `main` branch. Merging a pull request into `main` triggers a new deploy automatically. Preview deploys are built for every pull request.

## Docs

- `anchortech-nextjs/README.md` — full app docs: the digital products storefront, Stripe checkout and webhooks, Supabase setup, and every environment variable you need in `.env.local` and Netlify.
- `anchortech-nextjs/netlify.toml` — build and deploy configuration.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · Supabase (products, purchases, storage) · Stripe (checkout) · Resend (delivery email) · Netlify (hosting)
