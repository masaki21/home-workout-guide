import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");
  const hasPlaceholderValues =
    stripeSecretKey === "sk_test_your_key_here" ||
    priceId === "price_your_5_dollar_product";

  if (!stripeSecretKey || !priceId || !baseUrl) {
    return NextResponse.json(
      {
        error:
          "Stripe checkout is not configured. Set STRIPE_SECRET_KEY, STRIPE_PRICE_ID, and NEXT_PUBLIC_BASE_URL."
      },
      { status: 500 }
    );
  }

  if (hasPlaceholderValues) {
    return NextResponse.json(
      {
        error:
          "Stripe checkout is using placeholder values. Replace STRIPE_SECRET_KEY and STRIPE_PRICE_ID in .env.local with real Stripe test or live values."
      },
      { status: 500 }
    );
  }

  try {
    const stripe = new Stripe(stripeSecretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      allow_promotion_codes: true
    });

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);

    return NextResponse.json(
      {
        error:
          "Could not start checkout. Check your Stripe keys, price ID, and base URL."
      },
      { status: 500 }
    );
  }
}
