export const guideSlug = "30-day-home-workout-mission-8k4n2";
export const guideEntryPath = `/guide/${guideSlug}/start`;

export const guideSections = [
  { id: "start", label: "Start", title: "Start Here" },
  { id: "exercise-guide", label: "GIF Guide", title: "GIF Exercise Guide" },
  { id: "week-1", label: "Week 1", title: "Week 1 Mission" },
  { id: "week-2", label: "Week 2", title: "Week 2 Mission" },
  { id: "week-3", label: "Week 3", title: "Week 3 Mission" },
  { id: "week-4", label: "Week 4", title: "Week 4 Mission" },
  { id: "final-trial", label: "Final Trial", title: "Final Trial" }
];

export const exercises = [
  { category: "Upper Body", name: "Push-Up", gif: "PushUp.gif", cue: "Keep your body in one line. Do not let the hips drop." },
  { category: "Upper Body", name: "Knee Push-Up", gif: "KneePushUp.gif", cue: "Use this when regular push-ups are too hard." },
  { category: "Upper Body", name: "Pike Push-Up", gif: "PikePushUp.gif", cue: "Keep the hips high and move with control." },
  { category: "Upper Body", name: "Diamond Push-Up", gif: "DiamondPushUp.gif", cue: "Keep the hands narrow and avoid flaring the elbows too much." },
  { category: "Lower Body", name: "Squat", gif: "Squat.gif", cue: "Sit the hips down and keep the chest steady." },
  { category: "Lower Body", name: "Wide Squat", gif: "WideSquat.gif", cue: "Use a wider stance and stay controlled through the legs." },
  { category: "Lower Body", name: "Split Squat", gif: "SplitSquat.gif", cue: "Move slowly and keep balance on both sides." },
  { category: "Back", name: "Superman", gif: "Superman.gif", cue: "Lift gently. Do not throw the body upward." },
  { category: "Back", name: "Back Extension", gif: "BackExtension.gif", cue: "Use the upper back and avoid over-arching." },
  { category: "Back", name: "Front-Arm Push-Up", gif: "FrontArmPushUp.gif", cue: "Keep wrists comfortable and control the press." },
  { category: "Core", name: "Crunch", gif: "Crunch.gif", cue: "Lift with the abs. Do not pull the neck." },
  { category: "Core", name: "Leg Raise", gif: "LegRaise.gif", cue: "Move slowly and keep the lower back controlled." },
  { category: "Core", name: "Cycling Crunch", gif: "Cycling.gif", cue: "Rotate with control. Do not rush the reps." }
];

export const weeks = {
  "week-1": {
    eyebrow: "Week 1 Mission",
    title: "Learn the flow.",
    coach: "mission",
    intro: "Do not chase perfect workouts. Learn the upper, lower, back, repeat, rest rhythm.",
    checkpoint: [
      "I understand the weekly flow.",
      "I know where to continue if I miss a day.",
      "I kept the sessions simple."
    ],
    days: [
      day(1, "Upper Body", "About 15 min", ["Knee Push-Up - 8 reps x 2", "Pike Push-Up - 5 reps x 2", "Diamond Push-Up - 4 reps x 2", "Crunch - 12 reps x 2"], "Learn the upper body day without rushing."),
      day(2, "Lower Body", "About 15 min", ["Squat - 12 reps x 2", "Wide Squat - 10 reps x 2", "Split Squat - 6 each side x 2", "Leg Raise - 10 reps x 2"], "Stay stable before going deeper."),
      day(3, "Back", "About 15 min", ["Superman - 12 reps x 2", "Back Extension - 10 reps x 2", "Front-Arm Push-Up - 5 reps x 2", "Cycling Crunch - 10 each side x 2"], "Move with control. Do not swing."),
      day(4, "Upper Body", "About 15 min", ["Knee Push-Up - 8-10 reps x 2", "Pike Push-Up - 5 reps x 2", "Diamond Push-Up - 5 reps x 2", "Crunch - 15 reps x 2"], "Feel steadier than Day 1."),
      day(5, "Lower Body", "About 15 min", ["Squat - 12 reps x 2", "Wide Squat - 10 reps x 2", "Split Squat - 8 each side x 2", "Leg Raise - 10 reps x 2"], "Notice if one side feels less stable."),
      day(6, "Back", "About 15 min", ["Superman - 12 reps x 2", "Back Extension - 10 reps x 2", "Front-Arm Push-Up - 6 reps x 2", "Cycling Crunch - 12 each side x 2"], "Keep your wrists comfortable."),
      restDay(7, "Rest is part of the plan.")
    ]
  },
  "week-2": {
    eyebrow: "Week 2 Mission",
    title: "Build rhythm.",
    coach: "mission",
    intro: "The plan now becomes more repeatable. Keep sessions short, clear, and consistent.",
    checkpoint: [
      "I know the next workout without searching.",
      "I understand the rest rhythm.",
      "I can scale down without quitting."
    ],
    days: [
      day(8, "Upper Body", "About 18 min", ["Push-Up - 8 reps x 3", "Pike Push-Up - 6 reps x 2", "Diamond Push-Up - 5 reps x 2", "Crunch - 15 reps x 3"], "Move into regular push-ups with control."),
      day(9, "Lower Body", "About 18 min", ["Squat - 15 reps x 3", "Wide Squat - 12 reps x 2", "Split Squat - 8 each side x 2", "Leg Raise - 12 reps x 2"], "Keep reps smooth and steady."),
      day(10, "Back", "About 18 min", ["Superman - 15 reps x 2", "Back Extension - 12 reps x 2", "Front-Arm Push-Up - 6 reps x 2", "Cycling Crunch - 12 each side x 2"], "Do not over-arch your back."),
      day(11, "Upper Body", "About 18 min", ["Push-Up - 8-10 reps x 3", "Pike Push-Up - 6 reps x 2", "Diamond Push-Up - 5 reps x 2", "Crunch - 15 reps x 3"], "Keep each push-up variation clean."),
      day(12, "Lower Body", "About 18 min", ["Squat - 15 reps x 2", "Wide Squat - 15 reps x 3", "Split Squat - 8 each side x 2", "Leg Raise - 12 reps x 2"], "Stay controlled through legs and core."),
      day(13, "Back", "About 18 min", ["Superman - 15 reps x 2", "Back Extension - 12 reps x 2", "Front-Arm Push-Up - 8 reps x 2", "Cycling Crunch - 15 each side x 2"], "Keep the wrist position comfortable."),
      restDay(14, "Recover before the harder weeks.")
    ]
  },
  "week-3": {
    eyebrow: "Week 3 Mission",
    title: "Add control.",
    coach: "action",
    intro: "This week is about staying clean as the work increases. Do not rush reps.",
    checkpoint: [
      "My reps feel cleaner than Week 1.",
      "I know how to reduce the work when needed.",
      "The plan feels less confusing."
    ],
    days: [
      day(15, "Upper Body", "18-20 min", ["Push-Up - 10 reps x 3", "Pike Push-Up - 8 reps x 2", "Diamond Push-Up - 6 reps x 2", "Crunch - 18 reps x 3"], "Control instead of rushing.", "60-75 sec"),
      day(16, "Lower Body", "18-20 min", ["Squat - 18 reps x 3", "Wide Squat - 12 reps x 2", "Split Squat - 10 each side x 2", "Leg Raise - 12 reps x 3"], "Keep both sides stable.", "60-75 sec"),
      day(17, "Back", "18-20 min", ["Superman - 15 reps x 3", "Back Extension - 12 reps x 3", "Front-Arm Push-Up - 8 reps x 2", "Cycling Crunch - 15 each side x 2"], "Build a clear back-day rhythm.", "60-75 sec"),
      day(18, "Upper Body", "18-20 min", ["Push-Up - 10 reps x 3", "Pike Push-Up - 8 reps x 2", "Diamond Push-Up - 6 reps x 2", "Crunch - 20 reps x 2"], "Use control, not momentum.", "60-75 sec"),
      day(19, "Lower Body", "18-20 min", ["Squat - 18 reps x 2", "Wide Squat - 18 reps x 3", "Split Squat - 10 each side x 3", "Leg Raise - 15 reps x 2"], "Form matters more than extra reps.", "60-75 sec"),
      day(20, "Back", "18-20 min", ["Superman - 15 reps x 2", "Back Extension - 15 reps x 3", "Front-Arm Push-Up - 8 reps x 2", "Cycling Crunch - 18 each side x 2"], "Feel back and arms working together.", "60-75 sec"),
      restDay(21, "Recover before the final stretch.")
    ]
  },
  "week-4": {
    eyebrow: "Week 4 Mission",
    title: "Finish steady.",
    coach: "mission",
    intro: "The goal is to complete the structure. Do not add random workouts at the end.",
    checkpoint: [
      "I stayed with the structure.",
      "I avoided adding random extra workouts.",
      "I am ready for the final trial."
    ],
    days: [
      day(22, "Upper Body", "18-20 min", ["Push-Up - 12 reps x 3", "Pike Push-Up - 8 reps x 2", "Diamond Push-Up - 8 reps x 2", "Crunch - 20 reps x 3"], "Stay clean from first rep to last.", "60-75 sec"),
      day(23, "Lower Body", "18-20 min", ["Squat - 20 reps x 3", "Wide Squat - 15 reps x 2", "Split Squat - 10 each side x 2", "Leg Raise - 15 reps x 2"], "Stability first. Intensity second.", "60-75 sec"),
      day(24, "Back", "18-20 min", ["Superman - 18 reps x 2", "Back Extension - 15 reps x 2", "Front-Arm Push-Up - 10 reps x 2", "Cycling Crunch - 20 each side x 2"], "Keep every rep controlled.", "60-75 sec"),
      day(25, "Upper Body", "18-20 min", ["Push-Up - 10-12 reps x 3", "Pike Push-Up - 8 reps x 2", "Diamond Push-Up - 8 reps x 2", "Crunch - 20 reps x 3"], "Keep narrow-hand work clean.", "60-75 sec"),
      day(26, "Lower Body", "18-20 min", ["Squat - 20 reps x 2", "Wide Squat - 18 reps x 3", "Split Squat - 12 each side x 2", "Leg Raise - 15 reps x 3"], "Finish lower body with control.", "60-75 sec"),
      day(27, "Back", "18-20 min", ["Superman - 18 reps x 2", "Back Extension - 15 reps x 3", "Front-Arm Push-Up - 10 reps x 2", "Cycling Crunch - 20 each side x 2"], "Keep wrists and back comfortable.", "60-75 sec"),
      restDay(28, "Freshen up before the final trial.")
    ]
  }
};

export const finalTrialDays = [
  day(29, "Upper Body Check", "About 15 min", ["Knee Push-Up - 8 reps x 2", "Pike Push-Up - 5 reps x 2", "Diamond Push-Up - 4 reps x 2", "Crunch - 12 reps x 2"], "Compare with Day 1: lighter, steadier, or less confusing?"),
  day(30, "Lower Body Check", "About 15 min", ["Squat - 12 reps x 2", "Wide Squat - 10 reps x 2", "Split Squat - 6 each side x 2", "Leg Raise - 10 reps x 2"], "Compare with Day 2: balance, control, and confidence.")
];

function day(number, focus, time, exercises, point, rest = "60 sec") {
  return { number, focus, time, exercises, point, rest, restDay: false };
}

function restDay(number, point) {
  return {
    number,
    focus: "Rest",
    time: "5-10 min",
    exercises: ["Walk for 5-10 minutes", "Light stretching"],
    point,
    rest: "No sets today",
    restDay: true
  };
}
