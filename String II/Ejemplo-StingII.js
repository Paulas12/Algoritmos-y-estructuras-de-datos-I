/*Hacer una funcion que reciba una cadena de caracteres y cuente la cantidad de palabra que contiene. La cadena no tiene un simbolo de finalizacion en particular */ 

function contador(cadena) {
    let i = 0;
    let contador = 0;

    while(i < cadena.length){
        while(cadena[i] == ' '){
            i++;
        }//cuando finaliza este while estoy posicionado en un caracter diferente al espacio en blanco 
        //como solo queremos contar la palabras (cadena[i]!=' ') sin procesar su contenido podemos saltearlo de nuevo
    
        while ((cadena[i] != ' ') && (i < cadena.length)) {
            i++; 
        }
        contador++;
    }
    return contador; 
}

//let cadena = 'El viernes que viene hay parcial';
//console.log(`La cantidad de palabras de la cadena es: ${contador(cadena)}`); 
let cadena0 = 'El viernes que viene hay parcial';
console.log(`La cantidad de palabras de la cadena es: ${contador(cadena0)}`); 

//Ambas maneras de llamar a la funcion no deberia variar el resultado