import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID || "G-GFXKFC8V83";

export const metadata = {
  title: "30-Day Home Workout Plan for Beginners",
  description:
    "A beginner-friendly 30-day home workout guide with instant online access, clear reps, and clear rest."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics measurementId={gaMeasurementId} />
      </body>
    </html>
  );
}
