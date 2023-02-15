/*Pedir al usuario que ingrese dos valores enteros, y evalúe si son iguales o si son
diferentes, mostrar el resultado en un mensaje dependiendo del caso. Realizar esto
por medio de una función.*/

let valor1 = prompt("Ingrese un valor entero: ");
let valor2 = prompt("Ingrese un segundo valor entero: ");

//declaracion
function comparacion(valor1, valor2){
    if (valor1 == valor2) {
        return "Los valores ingresados son iguales"
    } else {
        return "Los valores ingresados son diferentes"
    } 
}

//llamado
alert(comparacion());