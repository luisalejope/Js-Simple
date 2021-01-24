'use strict'

window.addEventListener('load', ()=>{
    //Timers

    //set interval: se ejecuta cada cierto tiempo
    function intervalo(params) {
        let tiempo1 = setInterval(()=>{
            console.log("Set interval ejecutado");
        }, 3000);

        return tiempo1;
    }
    
    let tiempo1 = intervalo();
    
    //Set timeout: solo se ejecuta una vez despues de cierto tiempo
    let tiempo2 = setTimeout(()=>{
        console.log("Set Timeout ejecutado");
    }, 4000);

    let stop = document.querySelector('#stop');

    stop.addEventListener('click', ()=>{
        alert("Has parado el setInterval");
        clearInterval(tiempo1);
    })

    let start = document.querySelector('#start');
    start.addEventListener('click', ()=>{
        alert("Has iniciado el set interval");
        intervalo();
    })

})