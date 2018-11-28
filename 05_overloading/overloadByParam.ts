
export function myMethod(param1: number): void;
export function myMethod(param1: string): void;
export function myMethod(value: any): void {
    if (typeof value == "number") {
        console.log("myMethod was called with a number which has the value:" + value)
    }

    if (typeof value == "string") {
        console.log("myMethod was called with a string which has the value:" + value)
    }
}
