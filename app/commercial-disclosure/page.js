import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://home-workout-guide.vercel.app").replace(/\/$/, "");

export const metadata = {
  title: "Commercial Disclosure",
  description: "Commercial disclosure for the 30-Day Home Workout Guide."
};

const rows = [
  ["Seller", "Home Workout Guide"],
  ["Person Responsible", "Masaki Omae"],
  ["Address", "Available upon request. Please contact us by email if disclosure is required."],
  ["Phone Number", "Available upon request. Customer support is provided by email."],
  ["Email Address", supportEmail],
  ["Website", baseUrl],
  ["Sales Price", "Prices are shown on the product page and checkout page. The 30-Day Home Workout Guide is $5 USD."],
  ["Additional Fees", "Customers are responsible for their own internet connection, mobile data, or communication fees."],
  ["Payment Method", "Credit card payment through Stripe."],
  ["Payment Timing", "Payment is charged at the time of purchase."],
  ["Delivery Time", "After successful payment, customers receive instant online access to the HTML guide from the success page."],
  ["Returns, Cancellations, and Refunds", "Because this is a digital product, cancellations and returns after purchase are generally not accepted for customer convenience. If access fails after completed payment, please contact support. Refund requests are reviewed case by case."],
  ["System Requirements", "An internet connection and a modern browser on a smartphone or computer are required."]
];

export default function CommercialDisclosurePage() {
  return (
    <main className="policy-page">
      <section className="policy-page__card">
        <p className="eyebrow">Commercial Disclosure</p>
        <h1>Commercial Disclosure</h1>
        <p>
          This page provides business and transaction information for online sales,
          including disclosure information associated with Japan&apos;s Act on
          Specified Commercial Transactions.
        </p>
        <div className="disclosure-table">
          {rows.map(([label, value]) => (
            <div className="disclosure-row" key={label}>
              <strong>{label}</strong>
              {label === "Email Address" ? (
                <a href={`mailto:${value}`}>{value}</a>
              ) : label === "Website" ? (
                <a href={value}>{value}</a>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>
        <p className="policy-page__actions">
          <Link href="/">Back to sales page</Link>
        </p>
      </section>
    </main>
  );
}
