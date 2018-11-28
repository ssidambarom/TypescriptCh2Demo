
let allNames: { id: number, name: string }[] = [
    { id: 1, name: "Riri" },
    { id: 2, name: "Fifi" },
    { id: 3, name: "Loulou" }
]

export function chooseCharacter(name: string): { id: number, name: string };
export function chooseCharacter(position: number): string;
export function chooseCharacter(x: any): any {
    if (typeof x == "number") {
        return allNames[x % allNames.length].name;
    }

    if (typeof x == "string") {
        let foundNames = allNames.filter((elt) => elt.name === x);
        return foundNames !== undefined ? foundNames[0] : undefined;
    }
}