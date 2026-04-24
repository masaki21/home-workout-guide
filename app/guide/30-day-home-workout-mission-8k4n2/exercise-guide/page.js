import { Coach, GuideShell, guideMetadata } from "../../GuideShell";
import { exercises } from "../../guide-content";

export const metadata = {
  title: "GIF Exercise Guide - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function ExerciseGuidePage() {
  return (
    <GuideShell sectionId="exercise-guide">
      <section className="guide-hero">
        <div>
          <p className="eyebrow">GIF Exercise Guide</p>
          <h1>See the movement before you train.</h1>
          <p>
            Use these GIFs as simple visual cues. You do not need perfect form
            knowledge before starting. Move slowly and stay controlled.
          </p>
        </div>
        <Coach name="formCheck" alt="Anime companion coach checking form" />
      </section>

      <section className="guide-exercise-grid">
        {exercises.map((exercise) => (
          <article className="guide-exercise-card" key={exercise.name}>
            <img src={`/gif/${exercise.gif}`} alt={`${exercise.name} GIF`} loading="lazy" />
            <span>{exercise.category}</span>
            <h2>{exercise.name}</h2>
            <p>{exercise.cue}</p>
          </article>
        ))}
      </section>
    </GuideShell>
  );
}
