module.exports = [
"[project]/.next-internal/server/app/guide/30-day-home-workout-mission-8k4n2/start/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/guide/guide-content.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/guide/ProgressComponents.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CheckList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckList() from the server but CheckList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js <module evaluation>", "CheckList");
const DayCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DayCard() from the server but DayCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js <module evaluation>", "DayCard");
const ResumePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResumePanel() from the server but ResumePanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js <module evaluation>", "ResumePanel");
const WeekProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WeekProgress() from the server but WeekProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js <module evaluation>", "WeekProgress");
}),
"[project]/app/guide/ProgressComponents.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CheckList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckList() from the server but CheckList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js", "CheckList");
const DayCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DayCard() from the server but DayCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js", "DayCard");
const ResumePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResumePanel() from the server but ResumePanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js", "ResumePanel");
const WeekProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WeekProgress() from the server but WeekProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/guide/ProgressComponents.js", "WeekProgress");
}),
"[project]/app/guide/ProgressComponents.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$ProgressComponents$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/guide/ProgressComponents.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$ProgressComponents$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/guide/ProgressComponents.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$ProgressComponents$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/guide/GuideShell.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Coach",
    ()=>Coach,
    "GuideShell",
    ()=>GuideShell,
    "guideMetadata",
    ()=>guideMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/guide/guide-content.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$ProgressComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/guide/ProgressComponents.js [app-rsc] (ecmascript)");
;
;
;
;
const guideMetadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false
        }
    }
};
function Coach({ name, alt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "guide-coach",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: `/character/${name}.png`,
            alt: alt
        }, void 0, false, {
            fileName: "[project]/app/guide/GuideShell.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/guide/GuideShell.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function GuideShell({ sectionId, children }) {
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSections"].findIndex((section)=>section.id === sectionId);
    const previous = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSections"][currentIndex - 1];
    const next = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSections"][currentIndex + 1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "guide",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "guide-nav",
                "aria-label": "Guide sections",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSections"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: section.id === sectionId ? "is-active" : "",
                        href: `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSlug"]}/${section.id}`,
                        children: section.label
                    }, section.id, false, {
                        fileName: "[project]/app/guide/GuideShell.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/guide/GuideShell.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "guide-next-prev",
                children: [
                    previous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSlug"]}/${previous.id}`,
                        children: [
                            "Back: ",
                            previous.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/guide/GuideShell.js",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/app/guide/GuideShell.js",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSlug"]}/${next.id}`,
                        children: [
                            "Next: ",
                            next.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/guide/GuideShell.js",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/GuideShell.js",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/GuideShell.js",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/GuideShell.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$GuideShell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/guide/GuideShell.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$ProgressComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/guide/ProgressComponents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/guide/guide-content.js [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Start Here - 30-Day Home Workout Guide",
    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$GuideShell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["guideMetadata"]
};
function StartPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$GuideShell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GuideShell"], {
        sectionId: "start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "guide-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Instant Access Guide"
                            }, void 0, false, {
                                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "30-Day Home Workout Guide"
                            }, void 0, false, {
                                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Follow this guide on your phone, one day at a time. The workouts, reps, rest, and weekly flow are already decided."
                            }, void 0, false, {
                                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$GuideShell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Coach"], {
                        name: "natural",
                        alt: "Anime companion coach standing ready"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$ProgressComponents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResumePanel"], {}, void 0, false, {
                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "guide-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "How This Works"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "guide-split",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Open the next section. Do the day. Check it off."
                                    }, void 0, false, {
                                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Every training day uses four exercises. Rest 60 seconds between sets unless the page says otherwise. If a day feels too hard, do the light version and continue."
                                    }, void 0, false, {
                                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$GuideShell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Coach"], {
                                name: "guide",
                                alt: "Anime companion coach giving instructions"
                            }, void 0, false, {
                                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "guide-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Jump In"
                    }, void 0, false, {
                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "guide-card-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSections"].slice(1).map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "guide-link-card",
                                href: `/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$guide$2f$guide$2d$content$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guideSlug"]}/${section.id}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: section.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/guide/30-day-home-workout-mission-8k4n2/start/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__22c8792f._.js.map