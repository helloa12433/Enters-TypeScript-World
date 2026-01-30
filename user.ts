// user.ts (functions / logic)

import type{ UserProps, ButtonProps } from "./types.js";

export function User(props:UserProps){
    console.log(props.name,props.age);
}
export function Button(props:ButtonProps){
    props.onClick();
}

//isme hmne type.ts ka props kiya 
//abb isi ko  index.ts me props karenge 

