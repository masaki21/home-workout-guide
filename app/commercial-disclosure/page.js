import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://home-workout-guide.vercel.app").replace(/\/$/, "");

export const metadata = {
  title: "Commercial Disclosure",
  description: "Commercial disclosure for the 30-Day Home Workout Guide."
};

const rows = [
  ["Legal Name", "Masaki Omae"],
  ["Business Name", "Home Workout Guide"],
  ["Address", "We will disclose without delay if requested. Please contact us by email if disclosure is required."],
  ["Phone Number", "We will disclose without delay if requested. Customer support is provided by email."],
  ["Email Address", supportEmail],
  ["Head of Operations", "Masaki Omae"],
  ["Website", baseUrl],
  ["Price", "The 30-Day Home Workout Guide is $5 USD. The final price is shown on the product page and Stripe Checkout page."],
  ["Additional Fees", "There are no shipping fees for this digital product. Customers are responsible for their own internet connection, mobile data, or communication fees."],
  ["Accepted Payment Methods", "Credit card payment through Stripe Checkout."],
  ["Payment Period", "Payment is processed immediately at the time of purchase."],
  ["Delivery Times", "After successful payment, customers receive instant online access to the HTML guide from the success page."],
  [
    "Exchanges & Returns Policy",
    "Customer convenience or non-defective digital product: because this is a digital product delivered by online access immediately after payment, cancellations, exchanges, and refunds after purchase are generally not accepted for customer convenience. Defective service or access issue: if payment is completed but guide access fails, please contact support. We will review the order, help restore access, or consider a refund where appropriate."
  ],
  ["Operating Environment", "An internet connection and a modern browser on a smartphone or computer are required."]
];

export default function CommercialDisclosurePage() {
  return (
    <main className="policy-page">
      <section className="policy-page__card">
        <p className="eyebrow">Commercial Disclosure</p>
        <h1>Commercial Disclosure</h1>
        <p>
          This page provides business and transaction information for online sales,
          including commercial disclosure information for this digital product.
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
