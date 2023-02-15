/*Escribe un programa que pida al usuario dos números enteros y que los muestre por
pantalla sumados, únicamente si ambos son positivos.*/ 

let numero1 = parseInt(prompt("Ingrese un numero entero: "));
let numero2 = parseInt(prompt("Ingrese otro numero entero: "));

let suma = numero1 + numero2;

if (numero1>=0 && numero2>=0) {
    suma;
    console.log("La suma de ambos numeros es: " + suma);
}else{
    console.log("Error, vuelva a intentarlo.")
}