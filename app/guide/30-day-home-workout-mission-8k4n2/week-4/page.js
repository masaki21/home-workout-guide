import { CheckList, Coach, DayCard, GuideShell, WeekProgress, guideMetadata } from "../../GuideShell";
import { weeks } from "../../guide-content";

export const metadata = {
  title: "Week 4 - 30-Day Home Workout Guide",
  ...guideMetadata
};

export default function WeekFourPage() {
  const week = weeks["week-4"];
  return (
    <GuideShell sectionId="week-4">
      <section className="guide-hero">
        <div><p className="eyebrow">{week.eyebrow}</p><h1>{week.title}</h1><p>{week.intro}</p></div>
        <Coach name={week.coach} alt="Anime companion coach presenting the final week mission" />
      </section>
      <WeekProgress label="Week 4 Progress" dayNumbers={week.days.map((day) => day.number)} />
      <section className="guide-day-list">{week.days.map((day) => <DayCard day={day} key={day.number} />)}</section>
      <section className="guide-section"><p className="eyebrow">Final Trial Prep</p><h2>Prepare for Day 29 and Day 30.</h2><CheckList checkpointId="week-4-checkpoint" items={week.checkpoint} /></section>
    </GuideShell>
  );
}
