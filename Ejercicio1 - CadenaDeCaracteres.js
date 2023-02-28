/*Escriba un script que lea una secuencia de caracteres terminada en “punto” e
informe la cantidad de caracteres leídos. */


let caracter = 'Hola.';
i = 0;
cantidad = 0;

while(caracter[i] != '.'){
    cantidad++;
    i++;
}

console.log(`La cantidad de caracteres leídos es: ${cantidad}`); 