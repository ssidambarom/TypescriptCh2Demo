import myApi from "./api"
import { myGlobalFunction } from "./globals"

console.log(greeting("Sylvain"));
console.log(newGreeting("Sylvain"));// Erreur newGreeting n'est pas encore affectée



function greeting(name: string) {
    return "Hi, " + name;
}

let newGreeting = function (name: string) {
    return "Hi " + name + ", my friend";
}





myApi.method1();






myGlobalFunction();
alert("toto")

function fullyTypedGreenting(name: string): string {
    return "Hello, " + name + ", my friend.";
}

let anyGreeting: (name: string) => string;

anyGreeting = function (name: string) {
    return "Hi " + name + ". This is my unnamed function Greeting.";
}


anyGreeting = function (name: string) {
    return "Yo " + name + ". Another greeting function.";
}

anyGreeting = function (name: string) {
    // cette fonction ne peut pas être affectée à anyGreeting 
    // cas elle retourne une valeur de type number.
    return 0;
}