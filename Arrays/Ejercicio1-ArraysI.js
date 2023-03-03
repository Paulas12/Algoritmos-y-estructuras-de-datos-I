/*1. Considerando que se tiene un array de números (Por ej: [5,9,0,-5,9,7,63,...]).Nota: cada función recibe un vector cargado con 15 números (además de los parámetros que se indican en cada caso).
Usted debe:*/

//● Realizar una función que imprima la posición de aquellos números que son iguales a 0. Solucion esperada: 3,4,12,14 la cantidad de posiciones iguales a cero es 4
function ceros(numero1) {
    let contador = 0;
    for (let i = 0; i < 15; i++) {
        if (numero1[i] == '0') { 
            console.log(`Posicion: ${[i]}`)
            contador++;
        }
    }
    return contador;
}
let numero1 = [5, 20, 9, 0, 0, -1, 3, 8, 43, 2, 96, 7, 0, 12, 0];
console.log(`Las posiciones que contienen ceros son: ${ceros(numero1)} `);



//● Realizar una función que imprima los números almacenados en las componentes de índice impar. Resultado esperado: 20,0,-1,8,2,7,12 la cantidad total de numero impares es 7

function impares(numeros) {
    let contador = 0;
    for (let index = 0; index < 15; index++) {
        if (index % 2 == 1 ) {
            console.log(`Numero en la posicion ${[index]} : ${numeros[index]}`);
            contador++;
        }
    }
    return contador;
}

let numeros = [5, 20, 9, 0, 0, -1, 3, 8, 43, 2, 96, 7, 0, 12, 0]; 
console.log(`La cantidad de numeros almacenados en posiciones impares es: ${impares(numeros)}`);



//● Realizar una función que retorne la posición en que se encuentra el primer elemento negativo. Si no hay ningún componente negativo deberá devolver 0.
function negativo(numero) {
    let contador = 0;  //numero de ocurrencias del numero negativo
    let posicion = numero.indexOf(-9);

    if (index < 0) {
        return posicion; 
    }else{
        return 0; 
    }
}

let numero = [5, 20, -9, 0, 0, -1, 3, 8, 43, 2, 96, 7, 0, 12, 0];
console.log(numero.indexOf(-9)) ;
//console.log(`${negativo(numero)}`);



//● Realizar una función que reciba un valor N como parámetro y retorne la cantidad de veces que aparece ese valor en el vector. Solucion para el valor 0: se repite 4 veces. 
function repeticion(valorN) {
    let contador = 0;
    for (let i =0; i < numeroN.length; i++) {
        if (numeroN[i] == valorN) {
            contador++;
        }
    }
    return contador;
}

let valorN = 0;
let numeroN = [5, 20, -9, 0, 0, -1, 3, 8, 43, 2, 96, 7, 0, 12, 0];
console.log(`El valor ${valorN} se repite ${repeticion(valorN)} veces.`)