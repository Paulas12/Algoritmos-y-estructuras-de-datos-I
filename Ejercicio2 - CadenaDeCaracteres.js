/*Escriba un script que lea una secuencia de caracteres terminada en “punto” e
informe la cantidad de letras 'f' leídas */


let secuencia = "Informe de forense de fabrica.";
let i= 0;
let contador = 0;

while (secuencia[i] != '.') {
    if (secuencia[i] == 'f') {
        contador++;
    }
    i++;
}

console.log(`La cantidad de letras 'f' es: ${contador}`);