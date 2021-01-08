'use strict'
//programa que imprime todos los numeros de un intervalo

let numero1 = parseInt(prompt("Ingresa un numero", 0));
let numero2 = parseInt(prompt("Ingresa otro numero", 0));

document.write("<h2>De "+ numero1+" a "+numero2+" estan los siguientes numeros: </h2>"  )
for (let i = numero1; i <= numero2; i++) {
    console.log(i);
    document.write(i+"<br/>");

}