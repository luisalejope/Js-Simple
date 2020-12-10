'use strict'

let edad = 25;
let imprime = "";

switch (edad) {
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "eres un adulto";
        break;
    case 40:
        imprime = "crisis de los 40";
        break;
    case 70:
        imprime = "eres ya un anciano";
        break;
    default:
        imprime = "Tu edad es neutra";
        break;
}

console.log(imprime);
