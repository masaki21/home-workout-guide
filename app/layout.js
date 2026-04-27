import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
        <Analytics />
      </body>
    </html>
  );
}
