import { CheckList, Coach, DayCard, GuideShell, WeekProgress, guideMetadata } from "../../GuideShell";
import { weeks } from "../../guide-content";

export const metadata = {
  title: "Week 1 - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function WeekOnePage() {
  const week = weeks["week-1"];
  return (
    <GuideShell sectionId="week-1">
      <WeekContent week={week} checkpointLabel="Checkpoint 1" />
    </GuideShell>
  );
}

function WeekContent({ week, checkpointLabel }) {
  return (
    <>
      <section className="guide-hero">
        <div>
          <p className="eyebrow">{week.eyebrow}</p>
          <h1>{week.title}</h1>
          <p>{week.intro}</p>
        </div>
        <Coach name={week.coach} alt="Anime companion coach presenting the weekly mission" />
      </section>
      <WeekProgress label="Week 1 Progress" dayNumbers={week.days.map((day) => day.number)} />
      <section className="guide-day-list">
        {week.days.map((day) => <DayCard day={day} key={day.number} />)}
      </section>
      <section className="guide-section">
        <p className="eyebrow">{checkpointLabel}</p>
        <h2>Review before you continue.</h2>
        <CheckList checkpointId="week-1-checkpoint" items={week.checkpoint} />
      </section>
    </>
  );
}
