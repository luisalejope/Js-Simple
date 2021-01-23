'use strict'

//plantillas de texto

let nombre = prompt("METE TU NOMBRE");
let apellidos = prompt("METE TUS APELLIDOS");

//let texto = "Mi nombre es: "+nombre+"<br/> Mis Apellidos son: "+apellidos;

let texto = `
    <h2>Hola que tal</h2>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);