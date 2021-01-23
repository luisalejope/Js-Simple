'use strict'


let numero = 444;
let texto1 = "Bienvenido al curso de javascript curso"
let texto2 = "Muy buen dia"

//Buscar y reemplazar
let busqueda = texto1.replace("javascript", "Js");
    //corta el string y empieza del numero del caracter que desee
    busqueda = texto1.slice(14, 22);
    //Separar las palabras y meterlas en un array a partir de un separador
    busqueda = texto1.split(" ");
    //Quitar los espacios sobrantes que estan por delante y por detras
    busqueda = texto1.trim();

    
console.log(busqueda);