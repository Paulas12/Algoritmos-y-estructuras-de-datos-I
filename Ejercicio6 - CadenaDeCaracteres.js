/*Hacer un programa que permita contar la cantidad de palabras que
comienzan con “P” de una cadena de caracteres. */

let cadena = 'Para Paula, Puede responder P P P'; 
let contador = 0; 

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == 'P') {
        contador++;
        i++;                //va dentro de if sino me cuenta uno menos 
    }
    
}

console.log(`La cantidad de palabras que comienzan con 'P' son: ${contador}`); 