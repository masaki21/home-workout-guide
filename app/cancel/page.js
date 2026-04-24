import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="status-page">
      <section className="status-card">
        <p className="eyebrow">Checkout Canceled</p>
        <h1>No payment was made.</h1>
        <p>
          You can return to the sales page whenever you are ready to get the
          30-day plan.
        </p>
        <Link className="button" href="/">
          Return to the sales page
        </Link>
      </section>
    </main>
  );
}
