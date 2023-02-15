/*Solicitar al usuario que indique su edad, el programa deberá decir si es mayor de 18
años, e indicar indica que puede conducir, de lo contrario, informará que es menor
de edad. */

let edad = parseInt(prompt("Ingrese su edad actual: "));

if (edad>= 18) {
    console.log("Es mayor de 18 años y puede conducir")
} else {
    console.log("Es menor de edad");
}