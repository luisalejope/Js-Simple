'use strict'
//programa que suma y obtiene la media de los numeros ingresados hasta que ingrese un numero  negativo
let suma = 0;
let contador = 0;

do{
    var numero = parseInt(prompt("Ingresa un numero", 0));
    
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero>=0) {
        suma = suma + numero;
        contador++;   
    }
        
    console.log(suma);
    console.log(contador)

}while (numero >= 0) 

alert("suma de los numeros es " + suma);
alert("la media de los numeros es " + (suma/contador));
