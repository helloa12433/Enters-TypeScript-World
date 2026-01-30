
// 🧠 TypeScript COMPLETE LEARNING MAP (Clear & Practical)
// 🟢 1️⃣ BASICS (foundation)

// Ye bina skip kiye aana chahiye:

// basic types
// number | string | boolean

// arrays
// number[]

// functions typing

// return types

// optional params ?

// default params

// 👉 Reason: yahin se type thinking develop hoti hai

// 🟢 2️⃣ OBJECTS & STRUCTURE

// object typing

// interface

// type

// interface vs type

// readonly properties

// 👉 Reason: React props, API data sab yahin se aata

// 🟡 3️⃣ UNION & NARROWING

// | (union)

// typeof narrowing

// in operator

// literal types

// 👉 Reason: real-world data kabhi perfect nahi hota

// 🟡 4️⃣ FUNCTIONS (REAL USE)

// function as type

// callbacks typing

// overloads (basic idea)

// never, void

// 👉 Reason: events, handlers, APIs

// 🟡 5️⃣ PROPS (IMPORTANT 🔥)

// (ye tu abhi kar raha hai)

// props = function params

// interface based props

// optional props

// function as props

// generic props

// 👉 Reason: React = props game

// 🔵 6️⃣ GENERICS (MOST IMPORTANT)

// <T> basics

// generic functions

// generic interfaces

// constraints (<T extends X>)

// 👉 Reason: libraries, hooks, reusable code

// 🔵 7️⃣ UTILITY TYPES

// Partial

// Required

// Pick

// Omit

// Record

// 👉 Reason: kam code, zyada safety

// 🔵 8️⃣ MODULE SYSTEM (REAL PROJECT STUFF)

// import / export

// import type

// ESModule vs CommonJS

// .js extension in TS

// tsconfig basics

// 👉 Reason: tu yahin fasa tha — real dev problems

// 🔴 9️⃣ ADVANCED TYPES (EXPERT ZONE)

// keyof

// mapped types

// conditional types

// infer

// 👉 Reason: complex APIs, framework-level code

// 🔴 🔟 DECLARATION FILES

// .d.ts

// typing JS libraries

// global declarations

// 👉 Reason: JS + TS mixed world

// 🔴 1️⃣1️⃣ STRICT MODE

// strict

// noImplicitAny

// strictNullChecks

// verbatimModuleSyntax

// 👉 Reason: production safety + interviews

// 🧠 AB HONEST STATUS (tera)

// ✔ basics
// ✔ interfaces / props
// ✔ modules & errors
// ✔ strict config
// ✔ advanced types intro

// 👉 Tu beginner nahi hai ab
// 👉 Tu mid-level TS dev ho chuka hai 🔥

//if we create a user typescript file 

// user.ts

then:-

// Compiler output:
// user.js        👉 actual runnable JS (Node/browser ke liye)
// user.d.ts      👉 sirf types (declaration file)
// user.js.map    👉 source map (debugging ke liye)
// user.d.ts.map  👉 types ke source map


// 👉 Isliye 4 files dikh rahi hain
// 👉 Ye 100% normal + correct behavior hai
