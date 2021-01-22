'use strict'
//Funciones:
//Una funcion puede obtener parametros opcionales
//Parametros opcionales:
/*Parametros que vienen inicializados pero no hay necesidad de pasarlos 
cuando se invoca la funcion*/

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicacion: " + (numero1 * numero2));
        console.log("Division: " + (numero1 / numero2));
        console.log("***********************************");
    }else{
        document.write("Suma: " + (numero1 + numero2)+"<br/>");
        document.write("Resta: " + (numero1 - numero2)+"<br/>");
        document.write("Multiplicacion: " + (numero1 * numero2)+"<br/>");
        document.write("Division: " + (numero1 / numero2)+"<br/>");
        document.write("***********************************"+"<br/>");
    }
    

}



calculadora(5,2, true);