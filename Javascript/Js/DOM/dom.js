'use strict'

// DOM - Document objecto model

//Obtener  elemento dentro del Div
let caja = document.getElementById("caja").innerHTML;

// Obtener todo el div con query selector
let cajota = document.querySelector("#cajota");

//Obtener todo el Div
    caja = document.getElementById("caja");

//Cambiar algo del Dom
    caja.innerHTML="TEXTO EN LA CAJA DESDE JS";

//Cambiar el estilo
    caja.style.background = "red";
    caja.style.padding = "20px";
    caja.style.color = "white";

function cambiaColor(color) {
    cajota.style.background = color;
}

console.log(caja);