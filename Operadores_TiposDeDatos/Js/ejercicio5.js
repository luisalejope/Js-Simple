'use strict'
//ejercicio que muestra todos los divisores de un numero introducidos en un prompt

let numero1 = parseInt(prompt("Ingresa un numero", 1));

for (let i = 1; i <= numero1; i++) {
    
    if (numero1%i == 0) {
        console.log("Divisor: "+i);
    }
    
    
    
}