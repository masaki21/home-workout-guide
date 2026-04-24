module.exports = [
"[project]/app/guide/guide-content.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exercises",
    ()=>exercises,
    "finalTrialDays",
    ()=>finalTrialDays,
    "guideEntryPath",
    ()=>guideEntryPath,
    "guideSections",
    ()=>guideSections,
    "guideSlug",
    ()=>guideSlug,
    "weeks",
    ()=>weeks
]);
const guideSlug = "30-day-home-workout-mission-8k4n2";
const guideEntryPath = `/guide/${guideSlug}/start`;
const guideSections = [
    {
        id: "start",
        label: "Start",
        title: "Start Here"
    },
    {
        id: "exercise-guide",
        label: "GIF Guide",
        title: "GIF Exercise Guide"
    },
    {
        id: "week-1",
        label: "Week 1",
        title: "Week 1 Mission"
    },
    {
        id: "week-2",
        label: "Week 2",
        title: "Week 2 Mission"
    },
    {
        id: "week-3",
        label: "Week 3",
        title: "Week 3 Mission"
    },
    {
        id: "week-4",
        label: "Week 4",
        title: "Week 4 Mission"
    },
    {
        id: "final-trial",
        label: "Final Trial",
        title: "Final Trial"
    }
];
const exercises = [
    {
        category: "Upper Body",
        name: "Push-Up",
        gif: "PushUp.gif",
        cue: "Keep your body in one line. Do not let the hips drop."
    },
    {
        category: "Upper Body",
        name: "Knee Push-Up",
        gif: "KneePushUp.gif",
        cue: "Use this when regular push-ups are too hard."
    },
    {
        category: "Upper Body",
        name: "Pike Push-Up",
        gif: "PikePushUp.gif",
        cue: "Keep the hips high and move with control."
    },
    {
        category: "Upper Body",
        name: "Diamond Push-Up",
        gif: "DiamondPushUp.gif",
        cue: "Keep the hands narrow and avoid flaring the elbows too much."
    },
    {
        category: "Lower Body",
        name: "Squat",
        gif: "Squat.gif",
        cue: "Sit the hips down and keep the chest steady."
    },
    {
        category: "Lower Body",
        name: "Wide Squat",
        gif: "WideSquat.gif",
        cue: "Use a wider stance and stay controlled through the legs."
    },
    {
        category: "Lower Body",
        name: "Split Squat",
        gif: "SplitSquat.gif",
        cue: "Move slowly and keep balance on both sides."
    },
    {
        category: "Back",
        name: "Superman",
        gif: "Superman.gif",
        cue: "Lift gently. Do not throw the body upward."
    },
    {
        category: "Back",
        name: "Back Extension",
        gif: "BackExtension.gif",
        cue: "Use the upper back and avoid over-arching."
    },
    {
        category: "Back",
        name: "Front-Arm Push-Up",
        gif: "FrontArmPushUp.gif",
        cue: "Keep wrists comfortable and control the press."
    },
    {
        category: "Core",
        name: "Crunch",
        gif: "Crunch.gif",
        cue: "Lift with the abs. Do not pull the neck."
    },
    {
        category: "Core",
        name: "Leg Raise",
        gif: "LegRaise.gif",
        cue: "Move slowly and keep the lower back controlled."
    },
    {
        category: "Core",
        name: "Cycling Crunch",
        gif: "Cycling.gif",
        cue: "Rotate with control. Do not rush the reps."
    }
];
const weeks = {
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
            day(1, "Upper Body", "About 15 min", [
                "Knee Push-Up - 8 reps x 2",
                "Pike Push-Up - 5 reps x 2",
                "Diamond Push-Up - 4 reps x 2",
                "Crunch - 12 reps x 2"
            ], "Learn the upper body day without rushing."),
            day(2, "Lower Body", "About 15 min", [
                "Squat - 12 reps x 2",
                "Wide Squat - 10 reps x 2",
                "Split Squat - 6 each side x 2",
                "Leg Raise - 10 reps x 2"
            ], "Stay stable before going deeper."),
            day(3, "Back", "About 15 min", [
                "Superman - 12 reps x 2",
                "Back Extension - 10 reps x 2",
                "Front-Arm Push-Up - 5 reps x 2",
                "Cycling Crunch - 10 each side x 2"
            ], "Move with control. Do not swing."),
            day(4, "Upper Body", "About 15 min", [
                "Knee Push-Up - 8-10 reps x 2",
                "Pike Push-Up - 5 reps x 2",
                "Diamond Push-Up - 5 reps x 2",
                "Crunch - 15 reps x 2"
            ], "Feel steadier than Day 1."),
            day(5, "Lower Body", "About 15 min", [
                "Squat - 12 reps x 2",
                "Wide Squat - 10 reps x 2",
                "Split Squat - 8 each side x 2",
                "Leg Raise - 10 reps x 2"
            ], "Notice if one side feels less stable."),
            day(6, "Back", "About 15 min", [
                "Superman - 12 reps x 2",
                "Back Extension - 10 reps x 2",
                "Front-Arm Push-Up - 6 reps x 2",
                "Cycling Crunch - 12 each side x 2"
            ], "Keep your wrists comfortable."),
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
            day(8, "Upper Body", "About 18 min", [
                "Push-Up - 8 reps x 3",
                "Pike Push-Up - 6 reps x 2",
                "Diamond Push-Up - 5 reps x 2",
                "Crunch - 15 reps x 3"
            ], "Move into regular push-ups with control."),
            day(9, "Lower Body", "About 18 min", [
                "Squat - 15 reps x 3",
                "Wide Squat - 12 reps x 2",
                "Split Squat - 8 each side x 2",
                "Leg Raise - 12 reps x 2"
            ], "Keep reps smooth and steady."),
            day(10, "Back", "About 18 min", [
                "Superman - 15 reps x 2",
                "Back Extension - 12 reps x 2",
                "Front-Arm Push-Up - 6 reps x 2",
                "Cycling Crunch - 12 each side x 2"
            ], "Do not over-arch your back."),
            day(11, "Upper Body", "About 18 min", [
                "Push-Up - 8-10 reps x 3",
                "Pike Push-Up - 6 reps x 2",
                "Diamond Push-Up - 5 reps x 2",
                "Crunch - 15 reps x 3"
            ], "Keep each push-up variation clean."),
            day(12, "Lower Body", "About 18 min", [
                "Squat - 15 reps x 2",
                "Wide Squat - 15 reps x 3",
                "Split Squat - 8 each side x 2",
                "Leg Raise - 12 reps x 2"
            ], "Stay controlled through legs and core."),
            day(13, "Back", "About 18 min", [
                "Superman - 15 reps x 2",
                "Back Extension - 12 reps x 2",
                "Front-Arm Push-Up - 8 reps x 2",
                "Cycling Crunch - 15 each side x 2"
            ], "Keep the wrist position comfortable."),
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
            day(15, "Upper Body", "18-20 min", [
                "Push-Up - 10 reps x 3",
                "Pike Push-Up - 8 reps x 2",
                "Diamond Push-Up - 6 reps x 2",
                "Crunch - 18 reps x 3"
            ], "Control instead of rushing.", "60-75 sec"),
            day(16, "Lower Body", "18-20 min", [
                "Squat - 18 reps x 3",
                "Wide Squat - 12 reps x 2",
                "Split Squat - 10 each side x 2",
                "Leg Raise - 12 reps x 3"
            ], "Keep both sides stable.", "60-75 sec"),
            day(17, "Back", "18-20 min", [
                "Superman - 15 reps x 3",
                "Back Extension - 12 reps x 3",
                "Front-Arm Push-Up - 8 reps x 2",
                "Cycling Crunch - 15 each side x 2"
            ], "Build a clear back-day rhythm.", "60-75 sec"),
            day(18, "Upper Body", "18-20 min", [
                "Push-Up - 10 reps x 3",
                "Pike Push-Up - 8 reps x 2",
                "Diamond Push-Up - 6 reps x 2",
                "Crunch - 20 reps x 2"
            ], "Use control, not momentum.", "60-75 sec"),
            day(19, "Lower Body", "18-20 min", [
                "Squat - 18 reps x 2",
                "Wide Squat - 18 reps x 3",
                "Split Squat - 10 each side x 3",
                "Leg Raise - 15 reps x 2"
            ], "Form matters more than extra reps.", "60-75 sec"),
            day(20, "Back", "18-20 min", [
                "Superman - 15 reps x 2",
                "Back Extension - 15 reps x 3",
                "Front-Arm Push-Up - 8 reps x 2",
                "Cycling Crunch - 18 each side x 2"
            ], "Feel back and arms working together.", "60-75 sec"),
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
            day(22, "Upper Body", "18-20 min", [
                "Push-Up - 12 reps x 3",
                "Pike Push-Up - 8 reps x 2",
                "Diamond Push-Up - 8 reps x 2",
                "Crunch - 20 reps x 3"
            ], "Stay clean from first rep to last.", "60-75 sec"),
            day(23, "Lower Body", "18-20 min", [
                "Squat - 20 reps x 3",
                "Wide Squat - 15 reps x 2",
                "Split Squat - 10 each side x 2",
                "Leg Raise - 15 reps x 2"
            ], "Stability first. Intensity second.", "60-75 sec"),
            day(24, "Back", "18-20 min", [
                "Superman - 18 reps x 2",
                "Back Extension - 15 reps x 2",
                "Front-Arm Push-Up - 10 reps x 2",
                "Cycling Crunch - 20 each side x 2"
            ], "Keep every rep controlled.", "60-75 sec"),
            day(25, "Upper Body", "18-20 min", [
                "Push-Up - 10-12 reps x 3",
                "Pike Push-Up - 8 reps x 2",
                "Diamond Push-Up - 8 reps x 2",
                "Crunch - 20 reps x 3"
            ], "Keep narrow-hand work clean.", "60-75 sec"),
            day(26, "Lower Body", "18-20 min", [
                "Squat - 20 reps x 2",
                "Wide Squat - 18 reps x 3",
                "Split Squat - 12 each side x 2",
                "Leg Raise - 15 reps x 3"
            ], "Finish lower body with control.", "60-75 sec"),
            day(27, "Back", "18-20 min", [
                "Superman - 18 reps x 2",
                "Back Extension - 15 reps x 3",
                "Front-Arm Push-Up - 10 reps x 2",
                "Cycling Crunch - 20 each side x 2"
            ], "Keep wrists and back comfortable.", "60-75 sec"),
            restDay(28, "Freshen up before the final trial.")
        ]
    }
};
const finalTrialDays = [
    day(29, "Upper Body Check", "About 15 min", [
        "Knee Push-Up - 8 reps x 2",
        "Pike Push-Up - 5 reps x 2",
        "Diamond Push-Up - 4 reps x 2",
        "Crunch - 12 reps x 2"
    ], "Compare with Day 1: lighter, steadier, or less confusing?"),
    day(30, "Lower Body Check", "About 15 min", [
        "Squat - 12 reps x 2",
        "Wide Squat - 10 reps x 2",
        "Split Squat - 6 each side x 2",
        "Leg Raise - 10 reps x 2"
    ], "Compare with Day 2: balance, control, and confidence.")
];
function day(number, focus, time, exercises, point, rest = "60 sec") {
    return {
        number,
        focus,
        time,
        exercises,
        point,
        rest,
        restDay: false
    };
}
function restDay(number, point) {
    return {
        number,
        focus: "Rest",
        time: "5-10 min",
        exercises: [
            "Walk for 5-10 minutes",
            "Light stretching"
        ],
        point,
        rest: "No sets today",
        restDay: true
    };
}
}),
"[project]/app/guide/ProgressComponents.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckList",
    ()=>CheckList,
    "DayCard",
    ()=>DayCard,
    "ResumePanel",
    ()=>ResumePanel,
    "WeekProgress",
    ()=>WeekProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/guide/guide-content.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const STORAGE_PREFIX = "homeWorkoutGuide:v1";
const STATUSES = [
    {
        value: "done",
        label: "Done"
    },
    {
        value: "light",
        label: "Light"
    },
    {
        value: "skipped",
        label: "Skipped"
    }
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
    if (dayNumber <= 7) return `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guideSlug"]}/week-1${anchor}`;
    if (dayNumber <= 14) return `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guideSlug"]}/week-2${anchor}`;
    if (dayNumber <= 21) return `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guideSlug"]}/week-3${anchor}`;
    if (dayNumber <= 28) return `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guideSlug"]}/week-4${anchor}`;
    return `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guideSlug"]}/final-trial${anchor}`;
}
function getStatus(dayNumber) {
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
}
function getMarkedCount(dayNumbers) {
    return dayNumbers.filter((dayNumber)=>getStatus(dayNumber)).length;
}
function getAllStatuses() {
    return Array.from({
        length: 30
    }, (_, index)=>{
        const dayNumber = index + 1;
        return {
            dayNumber,
            status: getStatus(dayNumber)
        };
    });
}
function notifyProgressChanged() {
    window.dispatchEvent(progressEvent());
}
function DayCard({ day }) {
    const [status, setStatus] = useStoredStatus(day.number);
    const statusLabel = STATUSES.find((item)=>item.value === status)?.label;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `day-${day.number}`,
        className: [
            "guide-day-card",
            day.restDay ? "guide-day-card--rest" : "",
            status ? "guide-day-card--saved" : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Day ",
                            day.number,
                            " - ",
                            day.focus
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: day.time
                    }, void 0, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            statusLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-saved-badge",
                children: [
                    "Saved: ",
                    statusLabel
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 91,
                columnNumber: 22
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: day.exercises.map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: exercise
                    }, exercise, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Rest:"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 97,
                        columnNumber: 10
                    }, this),
                    " ",
                    day.rest
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Point:"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 98,
                        columnNumber: 10
                    }, this),
                    " ",
                    day.point
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-status-controls",
                "aria-label": `Save status for day ${day.number}`,
                children: STATUSES.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": status === item.value,
                        className: status === item.value ? "is-active" : "",
                        onClick: ()=>updateStatus(item.value),
                        type: "button",
                        children: item.label
                    }, item.value, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/ProgressComponents.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
function WeekProgress({ label, dayNumbers }) {
    const [marked, setMarked] = useProgressCount(dayNumbers);
    const total = dayNumbers.length;
    const percent = total ? Math.round(marked / total * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "guide-progress-card",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            marked,
                            " / ",
                            total,
                            " marked"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-progress-bar",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: `${percent}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/guide/ProgressComponents.js",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/ProgressComponents.js",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
function CheckList({ checkpointId, items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "guide-checklist",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckpointItem, {
                checkpointId: checkpointId,
                index: index,
                item: item
            }, `${checkpointId}-${item}`, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 138,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/guide/ProgressComponents.js",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function ResumePanel() {
    const [resume, setResume] = useResumeTarget();
    function resetProgress() {
        const confirmed = window.confirm("Reset all saved workout progress on this device?");
        if (!confirmed) return;
        for(let dayNumber = 1; dayNumber <= 30; dayNumber += 1){
            window.localStorage.removeItem(statusKey(dayNumber));
        }
        Object.keys(window.localStorage).filter((key)=>key.startsWith(`${STORAGE_PREFIX}:checkpoint:`)).forEach((key)=>window.localStorage.removeItem(key));
        window.localStorage.removeItem(lastInteractedKey());
        notifyProgressChanged();
        setResume(calculateResumeTarget());
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "guide-section guide-resume-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "Resume Your Guide"
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: resume.complete ? "Mission complete." : "Continue where you left off."
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: resume.copy
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-resume-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "button",
                        href: resume.href,
                        children: resume.buttonLabel
                    }, void 0, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    resume.hasProgress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button--secondary",
                        onClick: resetProgress,
                        type: "button",
                        children: "Reset Progress"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/ProgressComponents.js",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/ProgressComponents.js",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
function CheckpointItem({ checkpointId, index, item }) {
    const [checked, setChecked] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        function syncChecked() {
            setChecked(window.localStorage.getItem(checkpointKey(checkpointId, index)) === "checked");
        }
        syncChecked();
        window.addEventListener("storage", syncChecked);
        window.addEventListener("guide-progress-updated", syncChecked);
        return ()=>{
            window.removeEventListener("storage", syncChecked);
            window.removeEventListener("guide-progress-updated", syncChecked);
        };
    }, [
        checkpointId,
        index
    ]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-pressed": checked,
        className: checked ? "is-checked" : "",
        onClick: toggleChecked,
        type: "button",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: checked ? "[✓]" : "[ ]"
            }, void 0, false, {
                fileName: "[project]/app/guide/ProgressComponents.js",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            item
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/ProgressComponents.js",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
function useStoredStatus(dayNumber) {
    const [status, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        function syncStatus() {
            setStatus(getStatus(dayNumber));
        }
        syncStatus();
        window.addEventListener("storage", syncStatus);
        window.addEventListener("guide-progress-updated", syncStatus);
        return ()=>{
            window.removeEventListener("storage", syncStatus);
            window.removeEventListener("guide-progress-updated", syncStatus);
        };
    }, [
        dayNumber
    ]);
    return [
        status,
        setStatus
    ];
}
function useProgressCount(dayNumbers) {
    const [marked, setMarked] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        function syncProgress() {
            setMarked(getMarkedCount(dayNumbers));
        }
        syncProgress();
        window.addEventListener("storage", syncProgress);
        window.addEventListener("guide-progress-updated", syncProgress);
        return ()=>{
            window.removeEventListener("storage", syncProgress);
            window.removeEventListener("guide-progress-updated", syncProgress);
        };
    }, [
        dayNumbers
    ]);
    return [
        marked,
        setMarked
    ];
}
function useResumeTarget() {
    const [resume, setResume] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        href: routeForDay(1),
        buttonLabel: "Start Week 1",
        copy: "No saved progress yet. Start with Week 1 and mark each day as you go.",
        hasProgress: false,
        complete: false
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        function syncResume() {
            setResume(calculateResumeTarget());
        }
        syncResume();
        window.addEventListener("storage", syncResume);
        window.addEventListener("guide-progress-updated", syncResume);
        return ()=>{
            window.removeEventListener("storage", syncResume);
            window.removeEventListener("guide-progress-updated", syncResume);
        };
    }, []);
    return [
        resume,
        setResume
    ];
}
function calculateResumeTarget() {
    const statuses = getAllStatuses();
    const markedDays = statuses.filter((item)=>item.status).map((item)=>item.dayNumber);
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
            href: `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guideSlug"]}/final-trial`,
            buttonLabel: "Review Completion",
            copy: "All 30 days are marked on this device. You can review the final trial or reset progress to start again.",
            hasProgress: true,
            complete: true
        };
    }
    const lastInteracted = Number(window.localStorage.getItem(lastInteractedKey()) || 0);
    const orderedDays = Array.from({
        length: 30
    }, (_, index)=>{
        const dayNumber = (lastInteracted + index) % 30 + 1;
        return dayNumber;
    });
    const nextDay = orderedDays.find((dayNumber)=>!getStatus(dayNumber));
    return {
        href: routeForDay(nextDay || 1),
        buttonLabel: `Continue to Day ${nextDay || 1}`,
        copy: `${markedDays.length} of 30 days are marked on this device. Continue with the next unmarked day.`,
        hasProgress: true,
        complete: false
    };
}
}),
];

//# sourceMappingURL=app_guide_f9735086._.js.map