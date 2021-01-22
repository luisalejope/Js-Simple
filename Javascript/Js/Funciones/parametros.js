'use strict'
//Funciones:
//Una funcion puede obtener parametros

function calculadora(numero1, numero2) {

    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicacion: "+ (numero1*numero2));
    console.log("Division: "+ (numero1/numero2));
    console.log("***********************************");
    
}



for (let i = 1; i <= 10; i++) {
    
    console.log(i);
    calculadora(i,5);

}