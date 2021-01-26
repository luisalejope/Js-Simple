'use strict'
//LocalStorage
//obligatoriamente se deben guardar Strings

window.addEventListener('load', ()=>{



//Comprobar que existe Localstorage
if (typeof(Storage) !== 'undefined') {
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

//guardar datos
localStorage.setItem("titulo","curso de Js" );

//Recuperar elemento 
let local = localStorage.getItem("titulo");
document.querySelector('#peliculas').innerHTML = local;
console.log(local);


//Guardar objetos solamente usando los metodos JSON - JSON.stringify
let pelicula = {
    titulo: 'batman vs superman',
    year: 2017,
    pais: 'estados unidos'
};

localStorage.setItem("pelicula1",JSON.stringify(pelicula));

//Recuperar objetos solamente con los metodos JSON - JSON.parse

let peli = JSON.parse(localStorage.getItem("pelicula1"));

console.log(peli);


})



