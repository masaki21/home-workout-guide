import Link from "next/link";
import { guideSections, guideSlug } from "./guide-content";
export { CheckList, DayCard, ResumePanel, WeekProgress } from "./ProgressComponents";

export const guideMetadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export function Coach({ name, alt }) {
  return (
    <div className="guide-coach">
      <img src={`/character/${name}.png`} alt={alt} />
    </div>
  );
}

export function GuideShell({ sectionId, children }) {
  const currentIndex = guideSections.findIndex((section) => section.id === sectionId);
  const previous = guideSections[currentIndex - 1];
  const next = guideSections[currentIndex + 1];

  return (
    <main className="guide">
      <nav className="guide-nav" aria-label="Guide sections">
        {guideSections.map((section) => (
          <Link
            className={section.id === sectionId ? "is-active" : ""}
            href={`/guide/${guideSlug}/${section.id}`}
            key={section.id}
          >
            {section.label}
          </Link>
        ))}
      </nav>
      {children}
      <div className="guide-next-prev">
        {previous ? (
          <Link href={`/guide/${guideSlug}/${previous.id}`}>Back: {previous.label}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/guide/${guideSlug}/${next.id}`}>Next: {next.label}</Link>
        ) : (
          <Link href="/">Back to Home</Link>
        )}
      </div>
    </main>
  );
}
