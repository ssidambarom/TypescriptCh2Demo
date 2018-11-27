// exemple d'utilisation d'une fonction 
// avec un seul paramètre qui est obligatoire
function greeting(name: string): string {
    return "Hi, " + name + "!";
}

console.log(greeting("Sylvain"));

// exemple d'utilisation d'une fonction avec que des paramètres obligatoire
function formalGreeting(firstName: string, lastName: string) {
    return "Good morning, " + firstName + " " + lastName;
}


// let badUse = formalGreeting("Sylvain");// Erreur, ne peut pas être utilisé comme ceci
let goodUse = formalGreeting("Sylvain", "Sidambarom");// OK
console.log(goodUse);



// exemple de typage déduit
let sum = function (a: number, b: number): number { return a + b; }

let sum2: (a: number, b: number) => number = function (a, b) {
    return a + a + b;
}


let strangeGreeting: (name: string, enthusiasm: number) => string = function (a, b) {
    let result: string = "Hi";
    for (var i: number = 0; i < b; i++) {
        result += "i"
    }
    result += ", " + a + "!";

    return result;
}

console.log(sum2(2, 3)); // 7
console.log(strangeGreeting("Sylvain", 5));// Hiiiiii, Sylvain!


// exemple de paramètre optionnelle

function informalGreeting(name?: string) {
    if (name === undefined) {
        return "Hi, body!";
    }
    return greeting(name);
}

console.log(informalGreeting()); // OK
console.log(informalGreeting("Sylvain")); // OK
// console.log(informalGreeting("Sylvain","Sidambarom")); // Erreur, il y a trop de paramètres



// exemple de paramètre par défaut
function informalGreetingV2(name: string = "body") {
    return greeting(name);
}

console.log(informalGreetingV2()); // OK
console.log(informalGreetingV2("Sylvain")); // OK
// console.log(informalGreetingV2("Sylvain","Sidambarom")); // Erreur, il y a trop de paramètres




//exemple de fonction à paramètre du reste

function groupGreeting(firstName: string, ...otherNames: string[]) {
    return "Hello " + firstName + otherNames.join(", ") + "."
}

console.log(groupGreeting("Riri","Fifi","Loulou"))


let param2 = 2;
let param3 = { firstName: "Sylvain", lastName: "Sidambarom" };
console.log("mon message", "param1", param2, param3)




