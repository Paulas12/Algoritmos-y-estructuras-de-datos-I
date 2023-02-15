/*Pedir al usuario que ingrese dos valores enteros, y evalúe si son iguales o si son
diferentes, mostrar el resultado en un mensaje dependiendo del caso*/

var valor1 = prompt("Ingrese un numero entero: ");
var valor2 = prompt("Ingrese otro numero entero: ");

if(valor1 == valor2){
    console.log("Los valores ingresados son iguales");
}else{
    console.log("los valores ingresados son diferentes"); 
}