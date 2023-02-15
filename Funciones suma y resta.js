function suma(a, b){
    console.log(`Operadores de la funcion suma. A = ${a} y B = ${b}`); //muestra los valores que va tomando a y b  
    return a + b;
}

function resta(a, b) {
    console.log(`Operadores de la funcion resta. A = ${a} y B = ${b}`);
    return a - b;
}

let numA = 5;
let numB = 10;

let resultado = suma(numA, numB);
console.log(`El resultado de la suma es: ${resultado}`);
//let resultado2 = resta(numA, numB);
//intercambio los valores de los argumentos para la resta
numB = numA;
numA = resultado;

let resultado2 = resta(numA, numB);
console.log(`El resultado de la resta es: ${resultado2}`);