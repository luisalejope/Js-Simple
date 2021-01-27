'use strict'

//fetch(ajax) y peticiones a servicios / api rest


window.addEventListener('load',()=>{
    let divUsuarios = document.querySelector('#usuarios');
    let usuarios = new Array();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json()) //capturar datos
    .then(users => { //guardar en variable
        usuarios=users;
        console.log(usuarios);
        usuarios.map((user, i) => {//mapeo de usuarios a partir de su i
            let nombre = document.createElement('h2');
            console.log(i)
            nombre.innerHTML = i +". "+ user.name + " " + user.username;
            divUsuarios.appendChild(nombre);

            document.querySelector('.cargando').style.display = 'none'
        })
        
    })
})

