"use client";

import * as React from "react";
import Link from "next/link";
import { guideSlug } from "./guide-content";

const STORAGE_PREFIX = "homeWorkoutGuide:v1";
const STATUSES = [
  { value: "done", label: "Done" },
  { value: "light", label: "Light" },
  { value: "skipped", label: "Skipped" }
];

function statusKey(dayNumber) {
  return `${STORAGE_PREFIX}:day:${dayNumber}`;
}

function lastInteractedKey() {
  return `${STORAGE_PREFIX}:lastInteractedDay`;
}

function checkpointKey(checkpointId, itemIndex) {
  return `${STORAGE_PREFIX}:checkpoint:${checkpointId}:${itemIndex}`;
}

function progressEvent() {
  return new Event("guide-progress-updated");
}

function routeForDay(dayNumber) {
  const anchor = `#day-${dayNumber}`;

  if (dayNumber <= 7) return `/guide/${guideSlug}/week-1${anchor}`;
  if (dayNumber <= 14) return `/guide/${guideSlug}/week-2${anchor}`;
  if (dayNumber <= 21) return `/guide/${guideSlug}/week-3${anchor}`;
  if (dayNumber <= 28) return `/guide/${guideSlug}/week-4${anchor}`;
  return `/guide/${guideSlug}/final-trial${anchor}`;
}

function getStatus(dayNumber) {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(statusKey(dayNumber)) || "";
}

function getMarkedCount(dayNumbers) {
  return dayNumbers.filter((dayNumber) => getStatus(dayNumber)).length;
}

function getAllStatuses() {
  return Array.from({ length: 30 }, (_, index) => {
    const dayNumber = index + 1;
    return { dayNumber, status: getStatus(dayNumber) };
  });
}

function notifyProgressChanged() {
  window.dispatchEvent(progressEvent());
}

export function DayCard({ day }) {
  const [status, setStatus] = useStoredStatus(day.number);
  const statusLabel = STATUSES.find((item) => item.value === status)?.label;

  function updateStatus(nextStatus) {
    const nextValue = status === nextStatus ? "" : nextStatus;

    if (nextValue) {
      window.localStorage.setItem(statusKey(day.number), nextValue);
      window.localStorage.setItem(lastInteractedKey(), String(day.number));
    } else {
      window.localStorage.removeItem(statusKey(day.number));
    }

    setStatus(nextValue);
    notifyProgressChanged();
  }

  return (
    <article
      id={`day-${day.number}`}
      className={[
        "guide-day-card",
        day.restDay ? "guide-day-card--rest" : "",
        status ? "guide-day-card--saved" : ""
      ].join(" ")}
    >
      <header>
        <span>Day {day.number} - {day.focus}</span>
        <strong>{day.time}</strong>
      </header>
      {statusLabel ? <div className="guide-saved-badge">Saved: {statusLabel}</div> : null}
      <ul>
        {day.exercises.map((exercise) => (
          <li key={exercise}>{exercise}</li>
        ))}
      </ul>
      <p><strong>Rest:</strong> {day.rest}</p>
      <p><strong>Point:</strong> {day.point}</p>
      <div className="guide-status-controls" aria-label={`Save status for day ${day.number}`}>
        {STATUSES.map((item) => (
          <button
            aria-pressed={status === item.value}
            className={status === item.value ? "is-active" : ""}
            key={item.value}
            onClick={() => updateStatus(item.value)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </article>
  );
}

export function WeekProgress({ label, dayNumbers }) {
  const [marked, setMarked] = useProgressCount(dayNumbers);
  const total = dayNumbers.length;
  const percent = total ? Math.round((marked / total) * 100) : 0;

  return (
    <div className="guide-progress-card" aria-live="polite">
      <div>
        <span>{label}</span>
        <strong>{marked} / {total} marked</strong>
      </div>
      <div className="guide-progress-bar" aria-hidden="true">
        <span style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function CheckList({ checkpointId, items }) {
  return (
    <div className="guide-checklist">
      {items.map((item, index) => (
        <CheckpointItem
          checkpointId={checkpointId}
          index={index}
          item={item}
          key={`${checkpointId}-${item}`}
        />
      ))}
    </div>
  );
}

export function ResumePanel() {
  const [resume, setResume] = useResumeTarget();

  function resetProgress() {
    const confirmed = window.confirm("Reset all saved workout progress on this device?");
    if (!confirmed) return;

    for (let dayNumber = 1; dayNumber <= 30; dayNumber += 1) {
      window.localStorage.removeItem(statusKey(dayNumber));
    }
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith(`${STORAGE_PREFIX}:checkpoint:`))
      .forEach((key) => window.localStorage.removeItem(key));
    window.localStorage.removeItem(lastInteractedKey());
    notifyProgressChanged();
    setResume(calculateResumeTarget());
  }

  return (
    <section className="guide-section guide-resume-panel">
      <p className="eyebrow">Resume Your Guide</p>
      <h2>{resume.complete ? "Mission complete." : "Continue where you left off."}</h2>
      <p>{resume.copy}</p>
      <div className="guide-resume-actions">
        <Link className="button" href={resume.href}>
          {resume.buttonLabel}
        </Link>
        {resume.hasProgress ? (
          <button className="button button--secondary" onClick={resetProgress} type="button">
            Reset Progress
          </button>
        ) : null}
      </div>
    </section>
  );
}

function CheckpointItem({ checkpointId, index, item }) {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    function syncChecked() {
      setChecked(window.localStorage.getItem(checkpointKey(checkpointId, index)) === "checked");
    }

    syncChecked();
    window.addEventListener("storage", syncChecked);
    window.addEventListener("guide-progress-updated", syncChecked);

    return () => {
      window.removeEventListener("storage", syncChecked);
      window.removeEventListener("guide-progress-updated", syncChecked);
    };
  }, [checkpointId, index]);

  function toggleChecked() {
    const nextChecked = !checked;

    if (nextChecked) {
      window.localStorage.setItem(checkpointKey(checkpointId, index), "checked");
    } else {
      window.localStorage.removeItem(checkpointKey(checkpointId, index));
    }

    setChecked(nextChecked);
    notifyProgressChanged();
  }

  return (
    <button
      aria-pressed={checked}
      className={checked ? "is-checked" : ""}
      onClick={toggleChecked}
      type="button"
    >
      <span aria-hidden="true">{checked ? "[✓]" : "[ ]"}</span>
      {item}
    </button>
  );
}

function useStoredStatus(dayNumber) {
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    function syncStatus() {
      setStatus(getStatus(dayNumber));
    }

    syncStatus();
    window.addEventListener("storage", syncStatus);
    window.addEventListener("guide-progress-updated", syncStatus);

    return () => {
      window.removeEventListener("storage", syncStatus);
      window.removeEventListener("guide-progress-updated", syncStatus);
    };
  }, [dayNumber]);

  return [status, setStatus];
}

function useProgressCount(dayNumbers) {
  const [marked, setMarked] = React.useState(0);

  React.useEffect(() => {
    function syncProgress() {
      setMarked(getMarkedCount(dayNumbers));
    }

    syncProgress();
    window.addEventListener("storage", syncProgress);
    window.addEventListener("guide-progress-updated", syncProgress);

    return () => {
      window.removeEventListener("storage", syncProgress);
      window.removeEventListener("guide-progress-updated", syncProgress);
    };
  }, [dayNumbers]);

  return [marked, setMarked];
}

function useResumeTarget() {
  const [resume, setResume] = React.useState({
    href: routeForDay(1),
    buttonLabel: "Start Week 1",
    copy: "No saved progress yet. Start with Week 1 and mark each day as you go.",
    hasProgress: false,
    complete: false
  });

  React.useEffect(() => {
    function syncResume() {
      setResume(calculateResumeTarget());
    }

    syncResume();
    window.addEventListener("storage", syncResume);
    window.addEventListener("guide-progress-updated", syncResume);

    return () => {
      window.removeEventListener("storage", syncResume);
      window.removeEventListener("guide-progress-updated", syncResume);
    };
  }, []);

  return [resume, setResume];
}

function calculateResumeTarget() {
  const statuses = getAllStatuses();
  const markedDays = statuses.filter((item) => item.status).map((item) => item.dayNumber);

  if (markedDays.length === 0) {
    return {
      href: routeForDay(1),
      buttonLabel: "Start Week 1",
      copy: "No saved progress yet. Start with Week 1 and mark each day as you go.",
      hasProgress: false,
      complete: false
    };
  }

  if (markedDays.length === 30) {
    return {
      href: `/guide/${guideSlug}/final-trial`,
      buttonLabel: "Review Completion",
      copy: "All 30 days are marked on this device. You can review the final trial or reset progress to start again.",
      hasProgress: true,
      complete: true
    };
  }

  const lastInteracted = Number(window.localStorage.getItem(lastInteractedKey()) || 0);
  const orderedDays = Array.from({ length: 30 }, (_, index) => {
    const dayNumber = ((lastInteracted + index) % 30) + 1;
    return dayNumber;
  });
  const nextDay = orderedDays.find((dayNumber) => !getStatus(dayNumber));

  return {
    href: routeForDay(nextDay || 1),
    buttonLabel: `Continue to Day ${nextDay || 1}`,
    copy: `${markedDays.length} of 30 days are marked on this device. Continue with the next unmarked day.`,
    hasProgress: true,
    complete: false
  };
}
