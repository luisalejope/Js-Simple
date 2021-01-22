'use strict'

// Programa que pida dos numeros y que diga cual es el mayor, menor y si son iguales

let numero1 = parseInt(prompt("Ingresa un numero", ""));


let numero2 = parseInt(prompt("Ingresa otro numero", ""));



while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa un numero", ""));
    numero2 = parseInt(prompt("Ingresa otro numero", ""));
}

if (numero1 > numero2) {
    console.log("El numero " + numero1 + " es mayor que el numero " + numero2);

} else if (numero1 < numero2) {
    console.log("El numero " + numero1 + " es menor que el numero " + numero2);
} else if (numero1 == numero2){
    console.log("El numero " + numero1 + " es igual que el numero " + numero2);
}else{
    console.log("Escribe un numero");
}