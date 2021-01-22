'use strict'

//este tipo de parametros se usan cuando hay un numero indefinido de parametros que llegna


function listadoRest(fruta1, fruta2, ...rest) {
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(rest);
    console.log("*******************************")
}

function listadoSpread(fruta1, fruta2, ...rest) {
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(rest);
    console.log("*******************************")
}



listadoRest("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

let spread = ["Naranja1", "Manzana2"];

listadoSpread(...spread, "Sandia", "Pera", "Melon", "Coco");