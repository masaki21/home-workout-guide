import { CheckList, Coach, DayCard, GuideShell, WeekProgress, guideMetadata } from "../../GuideShell";
import { finalTrialDays } from "../../guide-content";

export const metadata = {
  title: "Final Trial - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function FinalTrialPage() {
  return (
    <GuideShell sectionId="final-trial">
      <section className="guide-hero">
        <div>
          <p className="eyebrow">Final Trial</p>
          <h1>Day 29 and Day 30 are confirmation days.</h1>
          <p>
            You are not testing dramatic change. You are checking whether the
            same basic movements feel lighter, more stable, and easier to repeat.
          </p>
        </div>
        <Coach name="finalTrial" alt="Anime companion coach ready for final trial" />
      </section>
      <WeekProgress label="Final Trial Progress" dayNumbers={finalTrialDays.map((day) => day.number)} />
      <section className="guide-day-list">
        {finalTrialDays.map((day) => <DayCard day={day} key={day.number} />)}
      </section>
      <section className="guide-section guide-completion">
        <div>
          <p className="eyebrow">Completion</p>
          <h2>You finished the 30-day mission.</h2>
          <p>
            That matters. Even if some days were messy, you now have a structure
            you can repeat. You are not starting from zero anymore.
          </p>
          <CheckList checkpointId="final-completion-checklist" items={[
            "I completed the 30 days of pages.",
            "I know the basic weekly flow.",
            "I can continue without searching for random workouts.",
            "I know how to scale down when needed."
          ]} />
        </div>
        <Coach name="victory" alt="Anime companion coach celebrating completion" />
      </section>
      <section className="guide-section guide-completion">
        <div>
          <p className="eyebrow">Cool Down</p>
          <h2>Keep the structure before chasing complexity.</h2>
          <p>Next step: repeat the same flow, add a little more control, or slowly increase reps.</p>
        </div>
        <Coach name="coolDown" alt="Anime companion coach stretching for cool down" />
      </section>
    </GuideShell>
  );
}
