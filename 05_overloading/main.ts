/// <reference path="./overloadByParam.ts" />
/// <reference path="./overloadByReturnsType.ts" />

import { myMethod } from "./overloadByParam";
import { chooseCharacter } from "./overloadByReturnsType";


myMethod(4);
myMethod("Sylvain");
// myMethod(true); // Erreur


var character1 = chooseCharacter(1);
console.log(character1);


var character2 = chooseCharacter("Fifi");
console.log(character2);
