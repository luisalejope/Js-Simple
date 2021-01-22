'use strict'

let numero1=8;
let numero2=7;

//condicional if

//Si pasa esto
if (numero1 > numero2) {
    //haga esto
    console.log("El numero "+ numero1 +" es mas grande que el numero "+ numero2);
}else{
    //si no, haga esto
    console.log("El numero "+ numero1 +" es mas pequeño que el numero "+ numero2);
}


//Operadoes logicos

let year =2018;

//negacion
if (year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

if(year>= 2000 && year <=2020 && year != 2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era posmoderna");
}

//OR
if(year == 2008 || (year >= 2018 && year==2028)){
    console.log("el año acaba en 8");
}else{
    console.log("Año no registrado");
}
