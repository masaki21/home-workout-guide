import Link from "next/link";
import { Coach, GuideShell, ResumePanel, guideMetadata } from "../../GuideShell";
import { guideSections, guideSlug } from "../../guide-content";

export const metadata = {
  title: "Start Here - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function StartPage() {
  return (
    <GuideShell sectionId="start">
      <section className="guide-hero">
        <div>
          <p className="eyebrow">Instant Access Guide</p>
          <h1>30-Day Home Workout Guide</h1>
          <p>
            Follow this guide on your phone, one day at a time. The workouts,
            reps, rest, and weekly flow are already decided.
          </p>
        </div>
        <Coach name="natural" alt="Anime companion coach standing ready" />
      </section>

      <ResumePanel />

      <section className="guide-section">
        <p className="eyebrow">How This Works</p>
        <div className="guide-split">
          <div>
            <h2>Open the next section. Do the day. Check it off.</h2>
            <p>
              Every training day uses four exercises. Rest 60 seconds between
              sets unless the page says otherwise. If a day feels too hard, do
              the light version and continue.
            </p>
          </div>
          <Coach name="guide" alt="Anime companion coach giving instructions" />
        </div>
      </section>

      <section className="guide-section">
        <p className="eyebrow">Jump In</p>
        <div className="guide-card-grid">
          {guideSections.slice(1).map((section) => (
            <Link className="guide-link-card" href={`/guide/${guideSlug}/${section.id}`} key={section.id}>
              <span>{section.label}</span>
              <strong>{section.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </GuideShell>
  );
}
