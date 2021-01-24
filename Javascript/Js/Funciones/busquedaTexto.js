'use strict'


let numero = 444;
let texto1 = "Bienvenido al curso de javascript curso"
let texto2 = "Muy buen dia"

let busqueda = texto1.indexOf("curso");
    //la ultima palabra
    busqueda = texto1.lastIndexOf("curso");
    //sinonimo de indexOf
    busqueda = texto1.search("curso");
    //devuelve un array
    busqueda = texto1.match("curso");
    //devuelve un array con todas las coincidencias
    busqueda = texto1.match(/curso/g);
    //devuelve el texto que esta en el caracter colocado y la cantidad de caracteres despues
    busqueda = texto1.substr(14, 5);
    //Sacar una letra esta en concreto
    busqueda = texto1.charAt(25);
    //Buscar el inicio de un string (True / false)
    busqueda = texto1.startsWith("Bienvenido");
    //Buscar el final de un string (True / false)
    busqueda = texto1.endsWith("curso");
    //Buscar una palabra dentro del string (True / false)
    busqueda = texto1.includes("al");

console.log(busqueda);