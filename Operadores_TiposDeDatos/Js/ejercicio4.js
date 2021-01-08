'use strict'

//programa que imprime todos los numeros impares que esten en un intervalo

let numero1 = parseInt(prompt("Ingresa un numero", 0));
let numero2 = parseInt(prompt("Ingresa otro numero", 0));

document.write("<h2>De "+ numero1+" a "+numero2+" estan los siguientes numeros impares: </h2>"  )
for (let i = numero1; i <= numero2; i++) {
    
    if (i%2 != 0) {
        console.log(i);
        document.write(i+"<br/>");
    }
    
    

}