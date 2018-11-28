(param1: string, param2: number): void => { /*implémentation de la fonction*/ }

let greeting = (name: string): string => {
    return "Hi, " + name;
}

let newGreeting = (name: string) => {
    return "Hi " + name + ", my friend";
};





var numbers = [1,2,3,4,5,6];

var evens = numbers.filter((value) => value % 2 === 0);

var odds = numbers.filter(function (value) {
    value % 2 !== 0
});