This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Digital Products Storefront

`/products` sells self-contained downloadable products (the first is the Schema Markup Toolkit). This section covers how to manage it. There's no separate admin app -- everything lives in this repo, gated behind a single password.

### Adding or editing a product

1. Go to `/admin/login` and sign in with `ADMIN_PASSWORD`.
2. Click **Add product** (or **edit** on an existing one from `/admin/products`).
3. Fill in the fields, choose the file, and click **Upload to bucket** -- this pushes the file into the private `product-files` Supabase Storage bucket and fills in the storage path automatically. Do this before saving; the form won't let you save without a file.
4. Check **Active** to make it visible in the catalog, then **Create product** / **Save changes**.

Pricing is never hardcoded anywhere in the code -- it lives entirely in the `storefront_products.price_cents` column, set through this form.

### How a purchase actually works

1. **Checkout** (`/api/checkout`) creates a Stripe Checkout Session and inserts a `storefront_purchases` row with `status: "pending"`.
2. **Webhook** (`/api/stripe/webhook`) listens for `checkout.session.completed`, verifies the Stripe signature, and flips that row to `status: "paid"` with a generated `download_token`. It's idempotent -- a retried Stripe event can't reprocess an already-paid purchase or send a second email.
3. **Email** (`lib/email.ts`) sends the download link via Resend, from the webhook, right after the row is marked paid.
4. **Success page** (`/products/success`) verifies the session with Stripe directly and shows the same download link, in case the buyer doesn't check email right away.
5. **Download** (`/api/download/[token]`) never expires by design (buyers may return months later), but is rate-limited to one download per 60 seconds and capped at 20 total. Past either limit, or with an invalid/unpaid token, it redirects to a plain-language explanation page instead of a raw error.

### Switching Stripe from test to live

Everything above works identically in test and live mode -- only the value of `STRIPE_SECRET_KEY` and the webhook endpoint's signing secret change. To go live:

1. In the Stripe Dashboard, switch off **Test mode**.
2. Create a live-mode restricted API key (Checkout Sessions -> Write is all it needs) and update `STRIPE_SECRET_KEY` in Netlify.
3. Create a new webhook endpoint under live mode pointing at `https://anchortech.org/api/stripe/webhook` for the `checkout.session.completed` event, and update `STRIPE_WEBHOOK_SECRET` in Netlify with its signing secret (this is a different secret from the test-mode one).

### Environment variables

| Variable | Purpose |
|---|---|
| `SUPABASE_URL` | API URL for the shared Supabase project (also used by the Portal -- this site only touches its own `storefront_*` tables and the `product-files` bucket) |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used for all product/purchase/storage access. Never exposed to the client. |
| `ADMIN_PASSWORD` | The single password for `/admin` |
| `ADMIN_SESSION_SECRET` | Random string used to sign the admin login cookie. Any long random value works; changing it logs everyone out. |
| `STRIPE_SECRET_KEY` | Creates Checkout Sessions. A restricted key scoped to Checkout Sessions is enough. |
| `STRIPE_WEBHOOK_SECRET` | Verifies that webhook requests actually came from Stripe. Comes from the webhook endpoint's settings in the Stripe Dashboard, not the API keys page. |
| `RESEND_API_KEY` | Sends the delivery email. Requires a verified sending domain in Resend (already set up for anchortech.org). |
| `NEXT_PUBLIC_SITE_URL` | Used to build absolute URLs (Stripe success/cancel redirects, the download link in the email). Must be the real production URL, not localhost, once deployed. |

All of these need to be set in both `.env.local` (for local development) and Netlify's environment variables (for production) -- they're two separate places and neither one syncs to the other automatically.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
