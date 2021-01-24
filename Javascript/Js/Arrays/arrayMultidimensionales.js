'use strict'

//Arrays multidimensionales
//arrays que tienen arrays dentro

let categorias = new Array("accion", "terror", "romance", "comedia", "familiares");
let peliculas = new Array("la verdad duele", "la vida es bella", "gran torino");
let actores = new Array("robert de niro", "zac efron", "lindsey lojan", "neymar")
let peliactor = new Array(peliculas, actores)
let catepeli = new Array(categorias, peliculas)
let cineP = new Array (categorias , peliculas);
let cineT = new Array (catepeli , peliactor);



//Escoger partes de un array multidemensional
// El primero muestra el array y el segundo muestra la posicion del array escogido. asi sucesivamente hasta el final de las dimensiones

console.log(cineP[0][1]);

console.log(cineT[1][0][2]);
