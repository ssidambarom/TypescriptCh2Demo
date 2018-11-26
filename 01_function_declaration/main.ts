import myApi from "./api"
import * as toto from "./globals"

function greeting(name: string){
    return "Hi, "+ name;
}

let newGreeting = function(name: string){
    return "Hi "+name +", my friend";
}

console.log(greeting("Sylvain"));
console.log(newGreeting("Sylvain"));

myApi.method1();

toto.default();
alert("toto")



let unamedGreeting :(name:string)=>string;

unamedGreeting = function(name:string){
    return "Hi "+name+". This is my unnamed function Greeting.";
}


unamedGreeting = function(name:string){
    return 0;
}