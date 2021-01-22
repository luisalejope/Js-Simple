'use Strict'


function consola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicacion: " + (numero1 * numero2));
        console.log("Division: " + (numero1 / numero2));
        console.log("***********************************");
}

function pantalla(numero1, numero2) {
        document.write("Suma: " + (numero1 + numero2)+"<br/>");
        document.write("Resta: " + (numero1 - numero2)+"<br/>");
        document.write("Multiplicacion: " + (numero1 * numero2)+"<br/>");
        document.write("Division: " + (numero1 / numero2)+"<br/>");
        document.write("***********************************"+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        consola(numero1, numero2);
    }else{
        pantalla(numero1, numero2);
    }
    

}



calculadora(5,2, true);
calculadora(5,5, true);
calculadora(5,8);