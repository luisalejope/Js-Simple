'use strict'

//Eventos 

//Evento load:
/*Sirve para usar las funcionalidades despues de que se carguen
 los elementos del DOM y evitar poner el srcipt al final del html y
 colocarlo en el head*/

window.addEventListener('load', () => {

    let boton = document.querySelector("#boton")

    function cambiarColor() {

        if (boton.style.background == "green") {
            boton.style.background = "red"
        } else {
            boton.style.background = "green"
        }

        return true;

    }
    //Evento click
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    //Mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = '#ccc'
    })

    //mouse out
    boton.addEventListener('mouseout', function () {
        boton.style.background = 'yellow'
    })

    //Focus
    let input = document.querySelector('#campoNombre')
    input.addEventListener('focus', function () {
        console.log("(focus) estas dentro del input")
    })

    //Blur
    input.addEventListener('blur', function () {
        console.log("(blur) estas afuera del input")
    })

    //Keydown
    input.addEventListener('keydown', function (event) {
        console.log("(Keydown) estas pulsando una tecla " + String.fromCharCode(event.keyCode))

    })
    //Keyup
    input.addEventListener('keyup', function (event) {
        console.log("(Keyup) Tecla soltada " + String.fromCharCode(event.keyCode))

    })

    //Keypress
    input.addEventListener('keypress', function (event) {
        console.log("(Keypress) estas pulsando una tecla " + String.fromCharCode(event.keyCode))

    })
});