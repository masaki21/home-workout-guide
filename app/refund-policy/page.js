import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";

export const metadata = {
  title: "Refund Policy",
  description: "Refund and support policy for the 30-Day Home Workout Guide."
};

export default function RefundPolicyPage() {
  return (
    <main className="policy-page">
      <section className="policy-page__card">
        <p className="eyebrow">Refund Policy</p>
        <h1>Refunds are reviewed with access and delivery in mind.</h1>
        <p>
          The 30-Day Home Workout Guide is a digital product delivered through online access.
          Customers receive access immediately after successful payment.
        </p>
        <h2>Before requesting a refund</h2>
        <p>
          If your payment completed but access failed, contact support first. We will review the
          order, confirm payment status, and help restore access where possible.
        </p>
        <h2>Refund review</h2>
        <p>
          Refund requests are reviewed case by case. We may deny refund requests after digital
          access has been successfully delivered and used, except where required by law.
        </p>
        <h2>Support contact</h2>
        <p>
          Contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a> and include the purchase
          email address and order details if available.
        </p>
        <p className="policy-page__actions">
          <Link href="/">Back to sales page</Link>
        </p>
      </section>
    </main>
  );
}
