'use strict'

//BOM - Browser Object Model
function getBom() {
    //tamaño de la pantalla
    console.log(screen.height);
    console.log(screen.width);

    //La Url
    console.log(window.location);
    console.log(window.location.href);
}

function redirect(url) {
    window.location.href=url;
}

getBom();