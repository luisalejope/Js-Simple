'use strict'

//Arrays, Arreglos, Matrices
//Coleccion de datos que puede tener una variable

let nombres = ["Victor", "Juan", "Luis", "Pedro", "Jorge"];

let lenguajes = new Array("PHP", "JAVA", "JS", "SQL", "C++");

/*
//cantidad que hay en un array
console.log(nombres.length);


var elemento = parseInt( prompt("Que elemento del array quieres?", 0));

if (elemento>=nombres.length) {
    
    alert("No hay datos en esa posicion");
} else {
    alert(nombres[elemento]);
}
*/

document.write("<h2>Lenguajes de programacion del 2018</h2>");


document.write("<ul>");
/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
    
}
*/

//mas limpia
lenguajes.forEach((element, index) => {
    document.write("<li>"+index+" - "+element+"</li>");
});


document.write("</ul>");


