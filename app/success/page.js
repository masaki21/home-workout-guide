import Stripe from "stripe";
import Link from "next/link";
import CopyLinkButton from "./CopyLinkButton";
import { guideEntryPath } from "../guide/guide-content";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const guideUrl = `${baseUrl}${guideEntryPath}`;

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Access Your Guide",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

async function verifyCheckoutSession(sessionId) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const hasPlaceholderValue = stripeSecretKey === "sk_test_your_key_here";

  if (!sessionId) {
    return {
      ok: false,
      message: "No checkout session was found. Please return from Stripe Checkout after completing your purchase."
    };
  }

  if (!stripeSecretKey || hasPlaceholderValue) {
    return {
      ok: false,
      message:
        "Checkout verification is not configured yet. Set a real STRIPE_SECRET_KEY before using this page in production."
    };
  }

  try {
    const stripe = new Stripe(stripeSecretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.mode !== "payment" || session.payment_status !== "paid") {
      return {
        ok: false,
        message: "We could not confirm a completed payment for this checkout session."
      };
    }

    return {
      ok: true,
      email: session.customer_details?.email || session.customer_email || null
    };
  } catch (error) {
    console.error("Stripe checkout verification failed:", error);

    return {
      ok: false,
      message:
        "We could not verify this purchase. Please contact support if your payment was completed."
    };
  }
}

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;
  const sessionIdParam = params?.session_id;
  const sessionId = Array.isArray(sessionIdParam) ? sessionIdParam[0] : sessionIdParam;
  const verification = await verifyCheckoutSession(sessionId);

  if (!verification.ok) {
    return (
      <main className="status-page">
        <section className="status-card status-card--access">
          <p className="eyebrow">Access Check</p>
          <h1>Purchase verification is required.</h1>
          <p>{verification.message}</p>
          <p className="support">
            If you completed payment and still cannot access the guide, contact{" "}
            {supportEmail}.
          </p>
          <Link className="button" href="/">
            Back to sales page
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="status-page">
      <section className="status-card status-card--access">
        <p className="eyebrow">Payment Complete</p>
        <h1>Your 30-day guide is ready.</h1>
        {verification.email ? (
          <p className="support">Purchase confirmed for {verification.email}.</p>
        ) : null}
        <p>
          Open the guide below and save the link. There is no login in this v1
          access flow, so bookmarking the guide is the easiest way to come back later.
        </p>
        <a className="button" href={guideEntryPath}>
          Open Your Guide
        </a>
        <div className="access-link-box">
          <span>Your guide link</span>
          <code>{guideUrl}</code>
        </div>
        <CopyLinkButton value={guideUrl} />
        <p className="support">
          Save this link or bookmark this page so you can come back to the guide later.
          If you lose access, contact {supportEmail}.
        </p>
        <Link className="secondary-link" href="/">
          Back to sales page
        </Link>
      </section>
    </main>
  );
}
