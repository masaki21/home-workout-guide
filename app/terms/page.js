import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for the 30-Day Home Workout Guide."
};

export default function TermsPage() {
  return (
    <main className="policy-page">
      <section className="policy-page__card">
        <p className="eyebrow">Terms of Use</p>
        <h1>Digital access is provided for personal use.</h1>
        <p>
          The 30-Day Home Workout Guide is sold as a one-time purchase digital guide for personal,
          non-commercial use.
        </p>
        <h2>Access</h2>
        <p>
          After payment, access is provided through the success page and guide link. Customers are
          responsible for saving or bookmarking the link in this v1 access flow.
        </p>
        <h2>Use restrictions</h2>
        <p>
          You may not resell, redistribute, or publicly republish the guide contents, assets, or
          access link.
        </p>
        <h2>Health notice</h2>
        <p>
          This guide is educational fitness content, not medical advice. Customers are responsible
          for judging whether the workouts are appropriate for their own condition.
        </p>
        <p className="policy-page__actions">
          <Link href="/">Back to sales page</Link>
        </p>
      </section>
    </main>
  );
}
