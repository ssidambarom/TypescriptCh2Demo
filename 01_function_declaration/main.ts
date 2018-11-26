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