// 1️⃣ TypeScript hota kya hai?
// TypeScript = JavaScript + types
// 👉 JavaScript me:
// variable kuch bhi ban sakta hai
// galti runtime pe pata chalti hai👉 JavaScript me:
// variable kuch bhi ban sakta hai
// galti runtime pe pata chalti hai
// 👉 TypeScript me:
// pehle hi bata dete ho variable ka type
// galti code likhte time hi pakad me aa jaati hai
// Simple bolun:
// TypeScript JavaScript ko “discipline” sikhata hai 😎
// 2️⃣ JavaScript vs TypeScript (simple example)
// JavaScript ❌
// let age = 20;
// age = "twenty";   // koi error nahi  js me but tsa me error
// TypeScript is a compile-time type-checking tool.
// At runtime, only JavaScript exists, so type errors do not affect execution unless compilation is stopped.
let age = 20;
// age="df";
console.log(`my age ius no ${age}`);
// TypeScript bolta hai:
// “bhai number bola tha, string kyun de raha?”
// 3️⃣ TypeScript ka sabse basic cheez: Types
// 🔹 number
let cnt = 10;
console.log(`cnt is ${cnt}`);
//tsc new.ts
//node new.js
//string
let uname = "Pankaj";
console.log(`My name is ${uname} typescript`);
// 🔹 boolean
let isActive = true;
console.log(!!!isActive);
// 4️⃣ any (dangerous but samajhna zaroori)
let data = 10;
data = "hello";
data = true;
console.log(data);
// 👉 any matlab:
// “jo mann kare wo daal de”
// ⚠️ Real projects me avoid karte hain
// 5️⃣ Arrays (bahut important)
let num = [1, 2, 3];
num.push(1);
console.log(num);
// strings ka array
let hii = ["Pa", "nk", "aj"];
let f = [true, false, true];
console.log(f);
console.log(hii);
// 6️⃣ Functions (yahan TypeScript ka asli power dikhta hai)
//normal  fn
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
// }
// 👉 iska matlab:
// a number
// b number
// return bhi number
// ❌ galat call:
// ts
// Copy code
// add(2, "3");   // error
// 7️⃣ Objects (real-life jaisa)
let user = {
    name: "Pankaj", age: 21
};
let ab = [{
        name: "lfdlfld",
        age: 190
    },
    { name: "pankaj", age: 67 }
];
// ❌ extra ya missing property pe error aayega
console.log(user);
console.log(ab);
// 8️⃣ Interface (clean & reusable)
// Interface = object ka blueprint
// interface User{
//     name:string;
//     age:number
// }
// let u1:User[]=[{
//    name:"Rahul",
//    age:23
// },{name:"Pankaj", age:1}]
// console.log(u1)
// 👉 Real projects me interface bahut use hota hai
// 9️⃣ Union Types (multiple allowed)
let id;
id = 10;
id = "abcde";
console.log(id);
// 👉 bol raha:
// “ya to number ya string, dono allowed”
// 🔟 TypeScript ka code run kaise hota hai?
// ⚠️ Important:
// Browser TypeScript samajhta hi nahi
///flow
// TypeScript (.ts)
//       ↓
// Compile
//       ↓
// JavaScript (.js)
// Compile command:
// tsc file.ts     for ES 5
//tsc        for ES6
// const plus=(a:number, b:number):number=>{
//     return a+b;
// }
const plus = (a, b) => a + b;
const x = plus(9, 4);
console.log(x);
const i = (name) => `Hello ${name}`;
console.log(i("Pankaj"));
const printMsg = (msg) => console.log(msg);
printMsg("Hello msg print ho gya");
let nums = 23;
console.log(`My age is ${nums}`);
let u2 = {
    name: "Abhishek",
    Age: 23
};
// console.log(u2);
console.log("type is done and print the user u2", u2);
const h1 = {
    name: "Pankaj",
    age: 22
};
console.log("Interface is done and print the user h1", h1);
let hiii = {
    name: "kill",
    // Age:2
};
console.log(hiii);
const s1 = {
    rollNo: 10,
    name: "Pankaj"
};
// s1.rollNo=45;
console.log(s1.rollNo); // 10
console.log(s1.name); // Pankaj
// 4️⃣ Functions ke Optional & Default Params
const greet = (name, Age) => console.log(name, Age);
greet("Pankaj", 21);
// const greet1=(name: string, Age:number=10)=> console.log(name, Age);
// greet1("helloa");
const greet1 = (name = "Pankaj", Age = 10) => console.log(name, Age);
greet1();
//Enums
// \👉 real apps me roles, status, etc.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
// let r:Role=Role.Guest;
// console.log(r);
console.log(Role.Guest);
// 6️⃣ Tuples (fixed length array)
let hj = [1, "Pankaj"];
console.log(hj);
// 7️⃣ Type Assertion (jab tu zyada jaanta hai compiler se)
let value = "hello";
let len = value.length;
console.log(len);
// 🔵 Advanced (industry level 🔥)
// 8️⃣ Generics (MOST IMPORTANT)
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("Pankaj"));
// 🔟 unknown vs any
// 👉 unknown = safe version of any
let z;
z = 10;
z = "hii";
if (typeof z === "string") {
    //   console.log( z.toUpperCase());
    z = z.toUpperCase();
}
console.log(z);
// 1️⃣1️⃣ Narrowing (smart checking)
function print(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
print(10);
print("Pankaj");
print(10);
// 1️⃣2️⃣ Classes + Access Modifiers
class User {
    name;
    password;
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    getPassword() {
        // this.password=password;   wrong 
        return this.password;
    }
}
// Private properties are accessed outside the class using public getter methods.
//object
const u = new User("Pankaj", "1234");
console.log(u.name);
console.log(u.getPassword());
class UserAuth {
    login() {
        console.log("loggedIn Sucessfully");
    }
}
//object
const auth = new UserAuth();
auth.login();
const keys = ["name", "Age", "id"];
console.log(keys);
// Real use
function getVal(obj, key) {
    return obj[key];
}
const user2 = {
    name: "nkaj",
    Age: 32,
    id: "12"
};
// user2.name = "Rahul";   throws compile error dont reassign the values in the proerties
console.log(user2.name);
// const A:IsString<string>="YES";
// const B:IsString<number>="NO";
const AA = "YES";
//  const ABC:B="No";
console.log(AA);
const p = "hello";
const q = 12;
console.log(p);
console.log(q);
// ✅ Runtime values for demonstration
const numss = 42;
const bool = true;
const str = "hello";
console.log("X:", numss);
console.log("Y:", bool);
console.log("Z:", str);
//another real life example of infer 
const AD = (a, b) => { return a + b; };
let xx = AD(5, 7);
console.log(xx);
const valu = "Hello Promise";
console.log(valu);
// 5️⃣ Declaration Files (.d.ts)
// 🧠 Concept
// Jab library JS me likhi ho
// aur tu TS me type safety chahta ho  
// 🔹 Example
// math.js
// export function add(a, b) {
//   return a + b;
// }
// math.d.ts
// export function add(a: number, b: number): number;
// 👉 TypeScript bolta:
// “theek hai bhai, mujhe pata chal gaya”
// 🔥 Kab use hota hai?
// JS library
// custom global variables
// third-party code
// 6️⃣ strict Mode (painful but PRO)
// 🧠 tsconfig.json
// {
//   "strict": true
// }
// 🔹 Important flags inside strict
// strictNullChecks
let xs;
// 👇 YAHAN BHI Userrr
const response = {
    data: {
        name: "Pankaj",
        age: 22
    }
};
const ddd = response.data; // ✅ NO ERROR
console.log(ddd);
export {};
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
//# sourceMappingURL=new.js.map