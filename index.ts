import  {User,Button} from "./user.js";

//data yaha pe paas kar do 
User({ name: "Pankaj", age: 21 });

Button({
    text:"Click",
    onClick:()=>{
        console.log("Clicked");
    }
})