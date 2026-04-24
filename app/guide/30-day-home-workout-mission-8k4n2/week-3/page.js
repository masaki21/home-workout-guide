import { CheckList, Coach, DayCard, GuideShell, WeekProgress, guideMetadata } from "../../GuideShell";
import { weeks } from "../../guide-content";

export const metadata = {
  title: "Week 3 - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function WeekThreePage() {
  const week = weeks["week-3"];
  return (
    <GuideShell sectionId="week-3">
      <section className="guide-hero">
        <div><p className="eyebrow">{week.eyebrow}</p><h1>{week.title}</h1><p>{week.intro}</p></div>
        <Coach name={week.coach} alt="Anime companion coach in action pose" />
      </section>
      <WeekProgress label="Week 3 Progress" dayNumbers={week.days.map((day) => day.number)} />
      <section className="guide-day-list">{week.days.map((day) => <DayCard day={day} key={day.number} />)}</section>
      <section className="guide-section"><p className="eyebrow">Checkpoint 3</p><h2>Check control, not perfection.</h2><CheckList checkpointId="week-3-checkpoint" items={week.checkpoint} /></section>
    </GuideShell>
  );
}
