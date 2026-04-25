import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://home-workout-guide.vercel.app").replace(/\/$/, "");

export const metadata = {
  title: "特定商取引法に基づく表記",
  description: "Commercial disclosure for the 30-Day Home Workout Guide."
};

const rows = [
  ["販売事業者", "Home Workout Guide"],
  ["運営責任者", "Masaki Omae"],
  ["所在地", "請求があった場合、遅滞なく開示します。開示をご希望の場合はメールにてご連絡ください。"],
  ["電話番号", "請求があった場合、遅滞なく開示します。お問い合わせはメールにて受け付けています。"],
  ["メールアドレス", supportEmail],
  ["サイトURL", baseUrl],
  ["販売価格", "商品ページおよび決済画面に表示します。30-Day Home Workout Guide は5米ドルです。"],
  ["商品代金以外の必要料金", "インターネット接続料金、通信料金等はお客様のご負担となります。"],
  ["支払方法", "クレジットカード決済（Stripe）"],
  ["支払時期", "ご注文時に決済されます。"],
  ["商品の引渡時期", "決済完了後、成功ページからオンラインHTMLガイドへ即時アクセスできます。"],
  ["返品・キャンセル・返金", "デジタル商品の性質上、購入後のお客様都合による返品・キャンセルは原則としてお受けしていません。アクセス不具合等がある場合はサポートまでご連絡ください。返金は個別に確認のうえ判断します。"],
  ["動作環境", "インターネット接続と、最新の主要ブラウザを備えたスマートフォンまたはPCが必要です。"]
];

export default function CommercialDisclosurePage() {
  return (
    <main className="policy-page">
      <section className="policy-page__card">
        <p className="eyebrow">Commercial Disclosure</p>
        <h1>特定商取引法に基づく表記</h1>
        <div className="disclosure-table">
          {rows.map(([label, value]) => (
            <div className="disclosure-row" key={label}>
              <strong>{label}</strong>
              {label === "メールアドレス" ? (
                <a href={`mailto:${value}`}>{value}</a>
              ) : label === "サイトURL" ? (
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
