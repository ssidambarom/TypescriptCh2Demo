

function myMethod(param1: number): void;
function myMethod(param1: string): void;
function myMethod(value: any): void {
    if (typeof value == "number") {
        console.log("myMethod was called with a number which has the value:" + value)
    }

    if (typeof value == "string") {
        console.log("myMethod was called with a string which has the value:" + value)
    }
}


myMethod(4);
myMethod("Sylvain");
// myMethod(true); // Erreur


let allNames: { id: number, name: string }[] = [
    { id: 1, name: "Riri" },
    { id: 2, name: "Fifi" },
    { id: 3, name: "Loulou" }
]

function chooseCharacter(name: string): { id: number, name: string };
function chooseCharacter(position: number): string;
function chooseCharacter(x: any): any {
    if (typeof x == "number") {
        return allNames[x];
    }

    if (typeof x == "string") {
        let foundNames = allNames.filter((elt) => elt.name === x);
        return foundNames !== undefined ? foundNames[0] : undefined;
    }
}

