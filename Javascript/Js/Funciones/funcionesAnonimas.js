'use strict'

//funcion anonima
// Es una funcion que no tiene nombre

//callbakc:
// Es una funcion que se ejecuta dentro de otra

//funcion flecha: se sustituye la palabra fucntion por =>

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    let sumar = numero1+numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;

}

sumame(5, 7,  dato => {
    console.log("La suma es:", dato);
}, dato => {
    console.log("La suma por dos es:", (dato*2));
})