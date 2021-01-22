'use strict'
//programa que muestra la tabla de multiplicar de un numero ingresado
let numero1 = parseInt(prompt("Ingresa un numero", ""));
let resultado = 0;
let multiplicacion = 0;

document.write("<h2>La tabla del "+numero1+"</h2>");
for (let i = 1; i <= numero1; i++) {
    resultado = i*numero1;
    
    document.write(numero1+" X "+i+" = "+resultado+"</br>");
}

//programa que muesta las tablas de multiplicar del 1 al 10

for (let i = 1; i <= 10; i++) {
    document.write("<h2>La tabla del "+i+"</h2>");
    for (let z = 1; z < 10; z++) {
        multiplicacion = z*i;
        
        document.write(z+" X "+i+" = "+multiplicacion+"</br>");
        
    }
    
}