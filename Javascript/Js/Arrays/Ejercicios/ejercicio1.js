'use strict'

//1. programa que pida 6 numeros en pantalla y los meta en array
//2. mostrar el array entero en el cuerpo de la pagina y en la consola
//3. mostra el array ordenado
//4. Invertir su orden y mostrarlo
//5. cuantos elementos tiene el array
//6. busqueda de un valor introducido por el usuario y que diga si lo encuentra y su indice

let numeros = new Array();
let numero = "";
let cantidad;


//1
for (let i = 0; i < 6; i++) {
    numero = prompt("Introduce un numero")
    numeros.push(numero);
}



//2
console.log(numeros);
document.write("<ul>");
numeros.forEach(element => {
    document.write("<li>"+element+"</li>");
});
document.write("</ul>");

//3
numeros.sort();
document.write("<ul>");
numeros.forEach(element => {
    document.write("<li>"+element+"</li>");
});
document.write("</ul>");
console.log(numeros);


//4
numeros.reverse();
document.write("<ul>");
numeros.forEach(element => {
    document.write("<li>"+element+"</li>");
});
document.write("</ul>");
console.log(numeros);

//5
cantidad=numeros.length;
let texto = `
    <h3> La cantidad del array es: ${cantidad}</h3>
`;
document.write(texto);
console.log(cantidad);

//6
let numSearch = prompt("Que numero quieres buscar?",0)
let busqueda = numeros.find(num => num == numSearch);
let index = numeros.findIndex(index => index == numSearch);



if (busqueda == undefined) {
    
        console.log("No encontrado");
    
    
}else{
    console.log(busqueda);
    console.log(index)
}