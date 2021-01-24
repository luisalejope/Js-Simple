'use strict'

//Arrays multidimensionales
//arrays que tienen arrays dentro

let categorias = new Array("accion", "terror", "romance", "comedia", "familiares");
let peliculas = new Array("la verdad duele", "la vida es bella", "gran torino");
let cadena = "texto1, texto2, texto3, texto4, texto5";
let pelicula = "";

//agregar un elemento a un array
peliculas.push(pelicula);


//eliminar el ultimo elemento
peliculas.pop();


//reemplazar un elemento por otro
peliculas[0]="Harry Potter";

//buscar y reemplazar
let indice = peliculas.indexOf("gran torino");
peliculas[indice] = "Rapido y furioso"

//borrar los elementos a partir de la cantidad mencionada
//si se pone 2 se borraran 2 hacia atras. contando la del indice

if(indice > -1){
    peliculas.splice(indice,1);
}

//convertir array a un string
let array_string = peliculas.join();

console.log(array_string);

//convertir un string en un array
let string_array = cadena.split(", ");
console.log(string_array);

//ordenar alfabeticamente
peliculas.sort();

//ordenar al reves
peliculas.reverse();

console.log(peliculas);

