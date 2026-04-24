import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the 30-Day Home Workout Guide."
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <section className="policy-page__card">
        <p className="eyebrow">Privacy Policy</p>
        <h1>We keep data handling limited to what supports access and payments.</h1>
        <p>
          This site uses Stripe to process payments. Payment information is handled by Stripe and
          is not stored directly by this site.
        </p>
        <h2>What this site stores</h2>
        <p>
          The guide stores workout progress locally in your browser using localStorage so you can
          resume marked days on the same device.
        </p>
        <h2>Payment data</h2>
        <p>
          Purchase confirmation data may be checked through Stripe to verify completed payments and
          show guide access on the success page.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
        </p>
        <p className="policy-page__actions">
          <Link href="/">Back to sales page</Link>
        </p>
      </section>
    </main>
  );
}
