'use strict'

//Transformacion de texto
let numero = 444;
let texto1 = "Bienvenido"
let texto2 = "Muy buen dia"

let dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();
    
console.log(dato);


//Contar longitud

let longitud = "";
console.log(longitud.length);


//concatenar - Unir textos
//opcion 1
let textoTotal = texto1+" "+texto2
//opcion 2
let textoTot = texto1.concat(" "+texto2);
console.log(textoTotal)
console.log(textoTot)