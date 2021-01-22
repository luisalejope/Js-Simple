'use strict'
//programa que diga si un numero es par e impar
// 1. Debe tener un prompt
// 2. Debe pedir el numero otra vez si es incorrecto

let numero1 = parseInt(prompt("Ingresa un numero", ""));

while (numero1 > 0 && isNaN(numero1)) {
    numero1 = parseInt(prompt("Ingresa un numero", ""));
}


    if (numero1%2 != 0) {
        console.log("El numero "+numero1+" es impar");
    }else{
        console.log("El numero "+numero1+" es par");
    }    
