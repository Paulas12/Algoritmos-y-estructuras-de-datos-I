//declaracion
function suma(a,b){
    console.log("Mensaje dentro de la funcion");
    console.log(`El resultado será: ${a+b}`);
    return a+b;
    console.log("este mensaje será ignordo");
}

let numA = 5;
let numB = 10;

//invocacion o llamado 
let resultado = suma(numA,numB);
console.log("Mensaje fuera de la funcion");
console.log(`El valor que devolvió la funcion será: ${resultado}`);
console.log(`El valor que devolvió la funcion es: ${suma(numA,numB)}`); 