'use strict'

//formulario que permita añadir peliculas

window.addEventListener('load', ()=>{
    console.log("funciono");
    

    let formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', ()=>{
        console.log('evento capturado');

        let peli = document.querySelector('#pelicula').value;
        console.log(peli+" variable")

        
        if(peli.trim() == null || peli.trim().length==0){
            alert("La pelicula no es valida");
            return false;
        }else{
            let pelicula = {
                titulo: peli
            }
            localStorage.setItem(peli,JSON.stringify(pelicula));
            
        }
let ul = document.querySelector('#peliculasList');
for (let i in localStorage) {
    if (typeof localStorage[i]=='string') {
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append();
        console.log(localStorage[i]);
        
        
    }
}
        
    })
    
            
        
    


    

})