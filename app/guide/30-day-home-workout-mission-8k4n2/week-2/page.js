import { CheckList, Coach, DayCard, GuideShell, WeekProgress, guideMetadata } from "../../GuideShell";
import { weeks } from "../../guide-content";

export const metadata = {
  title: "Week 2 - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function WeekTwoPage() {
  const week = weeks["week-2"];
  return (
    <GuideShell sectionId="week-2">
      <section className="guide-hero">
        <div><p className="eyebrow">{week.eyebrow}</p><h1>{week.title}</h1><p>{week.intro}</p></div>
        <Coach name={week.coach} alt="Anime companion coach presenting the weekly mission" />
      </section>
      <WeekProgress label="Week 2 Progress" dayNumbers={week.days.map((day) => day.number)} />
      <section className="guide-day-list">{week.days.map((day) => <DayCard day={day} key={day.number} />)}</section>
      <section className="guide-section"><p className="eyebrow">Checkpoint 2</p><h2>Review before you continue.</h2><CheckList checkpointId="week-2-checkpoint" items={week.checkpoint} /></section>
    </GuideShell>
  );
}
