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

let age : number=20;
// age="df";
console.log(`my age ius no ${age}`);
// TypeScript bolta hai:
// “bhai number bola tha, string kyun de raha?”

// 3️⃣ TypeScript ka sabse basic cheez: Types
// 🔹 number
 
let cnt:number=10;
console.log(`cnt is ${cnt}`);

//tsc new.ts

//node new.js

//string
let uname:string="Pankaj";
console.log(`My name is ${uname} typescript`);

// 🔹 boolean
let isActive:boolean=true;
console.log(!!!isActive);

// 4️⃣ any (dangerous but samajhna zaroori)
let data:any=10;
data="hello";
data=true
console.log(data);

// 👉 any matlab:

// “jo mann kare wo daal de”

// ⚠️ Real projects me avoid karte hain

// 5️⃣ Arrays (bahut important)



let num:number[]=[1,2,3];
num.push(1);
console.log(num);

// strings ka array

let hii:string[]=["Pa","nk","aj"];
let f:boolean[]=[true,false,true];
console.log(f);

console.log(hii);

// 6️⃣ Functions (yahan TypeScript ka asli power dikhta hai)

//normal  fn

function add(a:number, b:number): number{
    return a+b;
}
console.log(add(3,4));

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

let user: {
  name: string;
  age: number;
} = {
  name: "Pankaj",age: 21
 
};
let ab:{
    name:string;
    age:number
}[] = [{
    name:"lfdlfld",
    age:190},
    {name:"pankaj", age:67}
]
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

let id:number|string;
id=10
id="abcde";
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
const plus=(a:number,b:number):number=>a+b;
const x=plus(9,4);
console.log(x);

const i=(name:string):string=>`Hello ${name}`;
console.log(i("Pankaj"));
const printMsg=(msg:string):void=>console.log(msg);
printMsg("Hello msg print ho gya");

//syntax
// const fnName = (param: type): returnType => { ... }
// 🚀 TypeScript Complete Roadmap (Easy → Advanced)
// 🟢 Beginner (ye tu almost cover kar chuka)

// types (number, string, boolean)

// arrays

// functions

// objects

// interface

// any, union (|)



// export {};

// 🟡 Intermediate (REAL POWER yahin se aati hai)
// 👉 TypeScript me interface kya hota hai?

// Interface ek blueprint / structure hota hai
// jo batata hai ki object ke andar kaun-kaun se properties aur unka type kya hoga.

// Matlab:

// “Is type ka object hoga to usme ye-ye cheezein hona hi chahiye.”



// 1️⃣ type vs interface

// type bhi ek blueprint hi hota hai, jo batata hai
// 👉 variable / object / function kis type ka data rakhega.
// Bas difference ye hai ki type zyada powerful & flexible hota hai.

// 👉 Rule:
// object shape → interface
// complex / union → type

type Age=number;
let nums:Age=23;
console.log(`My age is ${nums}`);

type Usor={
    name:string,
    Age:number
}
let u2:Usor={
    name:"Abhishek",
    Age:23
}
// console.log(u2);
 console.log("type is done and print the user u2", u2);
type ID=number | string;

interface mser{
    name:string,
    age:number
}
const h1: mser ={
  name: "Pankaj",
  age: 22
};
console.log("Interface is done and print the user h1", h1);

// 2️⃣ Optional Properties ?

interface k{
    name:string,
    Age?:number   //age ho bhi sakta hai aur nhi bhi ho sakta hai 
}
let hiii:k = {
    name:"kill",
   // Age:2
}
console.log(hiii);

// 3️⃣ Readonly (value lock 🔒)
// 🔒 readonly ka matlab kya?

// 👉 Readonly = value lock
// Ek baar value set ho gayi, baad me change nahi kar sakte.

// Jaise:

// Aadhaar number

// Roll number

// User ID

interface Student {
  readonly rollNo: number;
  name: string;
}

const s1: Student = {
  rollNo: 10,
  name: "Pankaj"
};
// s1.rollNo=45;
console.log(s1.rollNo); // 10
console.log(s1.name);   // Pankaj


// 4️⃣ Functions ke Optional & Default Params

const greet=(name:string, Age?:number)=>console.log(name, Age);
greet("Pankaj", 21);

// const greet1=(name: string, Age:number=10)=> console.log(name, Age);
// greet1("helloa");

const greet1=(name: string="Pankaj", Age:number=10)=> console.log(name, Age);
greet1();

//Enums

// \👉 real apps me roles, status, etc.
enum Role{
    Admin,
    User,
    Guest
}
// let r:Role=Role.Guest;
// console.log(r);
console.log(Role.Guest);


// 6️⃣ Tuples (fixed length array)

let hj:[number,string]=[1, "Pankaj"];
console.log(hj);

// 7️⃣ Type Assertion (jab tu zyada jaanta hai compiler se)

let value:any="hello";
let  len=(value as string).length;
console.log(len);


// 🔵 Advanced (industry level 🔥)

// 8️⃣ Generics (MOST IMPORTANT)

function identity<T>(value:T){
    return value;
}
console.log(identity<number>(10));
console.log(identity<string>("Pankaj"));
// 👉 React, APIs, libraries me har jagah



// 9️⃣ Utility Types (shortcut superpowers)

interface User{
    name:string,
    Age:number
}

// Partial

type UpdatedUser=Partial<User>;

// Pick
type UserName=Pick<User,"name">

// Omit
type UserWithoutAge=Omit<User,"Age">


// 🔟 unknown vs any

// 👉 unknown = safe version of any

let z:unknown;

z=10;
z="hii";

if(typeof z==="string"){
//   console.log( z.toUpperCase());
   z=z.toUpperCase();
}
console.log(z);


// 1️⃣1️⃣ Narrowing (smart checking)

function print(id:number|string):void{
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }
    else{
        console.log(id);
    }
}
print(10);

print("Pankaj");
print(10);


// 1️⃣2️⃣ Classes + Access Modifiers

class User{
    constructor(
    public name: string,
    private password: string
  ) {}
  getPassword(){
    // this.password=password;   wrong 
    return this.password;
  }
}
// Private properties are accessed outside the class using public getter methods.

//object
const u=new User("Pankaj", "1234");

console.log(u.name);console.log(u.getPassword());


//1️⃣3️⃣ Implements (interface + class)

interface Auth{
    login():void;
}
class UserAuth implements Auth{
    login(){
        console.log("loggedIn Sucessfully");
    }
}
//object
const auth=new UserAuth();
auth.login();


// 🔴 TypeScript EXPERT ZONE (Zero → God Mode)

// 1️⃣ keyof (object ke keys ka union)
 
// 🧠 Concept

// keyof kisi object type ki saari keys ko string union bana deta hai.

interface AppUser {
  name: string;
  Age: number;
  id: string;
}

type UserKey = keyof AppUser;

const keys: UserKey[] = ["name", "Age", "id"];
console.log(keys);

// Real use
function getVal(obj: AppUser, key: keyof AppUser) {
  return obj[key];
}
// ❌ galat key pass hi nahi kar sakta
// const user1: AppUser = {
//   name: "Pankaj",
//   Age: 32,
//   id: "12"
// };

// console.log(getVal(user1, "name"));
// console.log(getVal(user1,"Age"));
// console.log(getVal(user1,"id"));

// 2️⃣ Mapped Types (loop over types)

// 🧠 Concept

// Object ki keys pe loop chala ke naya type banana

type ReadonlyUser<T>={
    readonly [K in keyof T]:T[K];
}
type U=ReadonlyUser<AppUser>;

const user2: U = {
  name: "nkaj",
  Age: 32,
  id: "12"
};
// user2.name = "Rahul";   throws compile error dont reassign the values in the proerties
console.log(user2.name);
// 👉 saari properties readonly ho gayi 🔒

// 🔥 Built-in examples
// Partial<T>
// Required<T>
// Readonly<T>
// Ye sab mapped types se hi bane hain.

// 3️⃣ Conditional Types (if-else in types)

// 🧠 Concept

// Type ke andar condition

type IsString<T>=T extends string ? "YES" : "NO";
type A=IsString<string>
type B=IsString<number>

// const A:IsString<string>="YES";
// const B:IsString<number>="NO";

const AA:A="YES";
//  const ABC:B="No";
console.log(AA);
//  console.log(ABC);


// 🔥 Real Use

type NonNullable<T> = T extends null | undefined ? never : T;

type M=NonNullable<string|null>;  //string 
type N=NonNullable<number|undefined>  //number
type O=NonNullable<null>  ///null

const p:M="hello";
const q:N=12;

console.log(p);
console.log(q);


// 4️⃣ infer (type nikal lena 🤯)

// 🧠 Concept

// Type ke andar se koi type extract karna

type GetReturn<T>=T extends (...args:any[])=>infer R? R:never;
type X=GetReturn<()=>number>  //number
type Y=GetReturn<(a:string)=>boolean>
type Z=GetReturn<(x:number, y:number)=>string>


// ✅ Runtime values for demonstration
const numss: X = 42;
const bool: Y = true;
const str: Z = "hello";

console.log("X:", numss);
console.log("Y:", bool);
console.log("Z:", str);


//another real life example of infer 

const AD=(a:number, b:number)=> {return a+b;}

//extract return type of AD
// console.log(typeof AD);

type AddReturn=GetReturn<typeof AD>
let xx:AddReturn=AD(5,7);
console.log(xx);


// 🔥 Promise ke andar ka type

type UnwrapPromise<T> =
  T extends Promise<infer R> ? R : T;
  type SS= UnwrapPromise<Promise<string>>; // string
  const valu:SS="Hello Promise";
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

let xs: string;
// xs = null; // ❌


// noImplicitAny

// function add(a, b) { } // ❌

// strictFunctionTypes

// function safety improve karta hai


// 🔥 Strict ka fayda

// bugs compile time pe pakde jaate

// production crash kam

// interviews me +points

// 🧩 Final Real Example (sab mix)

// 🔥 keyof + mapped + conditional + infer ek saath
type APIResponse<T> = {
  data: T;
  error?: string;
};

type ExtractData<T> = T extends APIResponse<infer R> ? R : never;

// ✅ use SAME type
type Userrr = {
  name: string;
  age: number;
};

// 👇 YAHAN BHI Userrr
type UserData = ExtractData<APIResponse<Userrr>>;

// 👇 YAHAN BHI Userrr
const response: APIResponse<Userrr> = {
  data: {
    name: "Pankaj",
    age: 22
  }
};

const ddd: UserData = response.data; // ✅ NO ERROR
console.log(ddd);


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


// user.ts


// Compiler output:
// user.js        👉 actual runnable JS (Node/browser ke liye)
// user.d.ts      👉 sirf types (declaration file)
// user.js.map    👉 source map (debugging ke liye)
// user.d.ts.map  👉 types ke source map


// 👉 Isliye 4 files dikh rahi hain
// 👉 Ye 100% normal + correct behavior hai