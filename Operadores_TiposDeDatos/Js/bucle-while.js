'use strict'

//bucle while

let year = 2018;

//incremento
/*while (year <= 2051) {
    console.log("estamos en el año: "+ year);

    year=year+1;
}*/

//decremento
while (year != 1992) {
    console.log("estamos en el año: " + year);
    if (year == 2000) {
        break;
    }
    year = year - 1;
}

let years = 30;

/*do{
    alert("Solo cuando sea diferente a 20");
    years = years - 1;
}while(years > 20)*/