# 30-Day Home Workout Guide Sales Page

Next.js sales page and paid HTML access guide for `30-Day Home Workout Plan for Beginners`.

## Pages

- `/`: English sales page
- `/api/checkout`: Creates a Stripe Checkout Session
- `/success`: Payment success page with guide access handoff
- `/cancel`: Checkout canceled page
- `/guide/30-day-home-workout-mission-8k4n2/start`: Paid guide entry route

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The default `dev` script uses Turbopack because it avoids a known local Next.js devtools/webpack cache issue seen in this project. If you need the old webpack dev server, use:

```bash
npm run dev:webpack
```

## Environment Variables

```bash
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_PRICE_ID=price_your_5_dollar_product
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SUPPORT_EMAIL=support@example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

For production, set `NEXT_PUBLIC_BASE_URL` to the Vercel URL or custom domain.

The Stripe Price connected to `STRIPE_PRICE_ID` should be a one-time `$5` payment.

The placeholder values in `.env.example` will not work for checkout. Replace them with real Stripe test values before testing payment.

`NEXT_PUBLIC_GA_ID` is optional. Set it to a Google Analytics 4 Measurement ID, such as
`G-XXXXXXXXXX`, to track page views, checkout clicks, purchase completion, and landing page
section depth.

## HTML Guide Access

The main product is the online mobile-friendly guide, not a PDF download.

Guide entry path:

```text
/guide/30-day-home-workout-mission-8k4n2/start
```

The `/success` page displays the guide URL, an `Open Your Guide` button, and a `Copy Link` button. Buyers should save or bookmark the link because v1 does not include login, accounts, buyer database, signed URLs, or per-customer tokens.

The guide routes are intentionally hidden from search:

- `/guide/` is disallowed in `robots.txt`
- guide pages use `noindex,nofollow`
- `sitemap.xml` excludes `/guide/` and `/success`

Stripe receipt emails should be enabled in the Stripe dashboard for payment confirmation. Custom app email delivery is not implemented in v1.

## Verification

```bash
npm run build
```

Stripe test flow:

1. Create a `$5` one-time Stripe Price.
2. Set `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, and `NEXT_PUBLIC_BASE_URL`.
3. Click `Get Instant Access`.
4. Complete payment with a Stripe test card.
5. Confirm redirect to `/success`.
6. Confirm `Open Your Guide` opens the guide.
7. Confirm `Copy Link` copies the displayed guide URL.
