/*Hacer una función 
*que reciba una cadena de caracteres y un valor numérico.
*Como resultado de su ejecución se deberá obtener una nueva cadena 
*que contenga las palabras cuya longitud sea menor a ese valor 
*(separadas unas de otras por un espacio en blanco al menos). */



function extraerN(cadena, valorN) {
    let i = 0;
    let resultado = '';

    while (i < cadena.length) {  //1°. Una instruccion de recorrido general 
        while (cadena[i] == ' ') { //2°. salteo los espacios
            i++;
        }

        let temp = '';  //3°. variable para cargar las palabras que necesito

        while ((cadena[i] != ' ') && (i < cadena.length)) {  //4°. Poceso de cada palabra 
            temp = temp + cadena[i]; 
            i++;
        }

        
        if (temp.length < valorN) {     //4°. Ya tenemos en temp la palabra que se ha procesado para la solucion 
            resultado += temp + ' ';        // es la nueva cadena con las palabras de valor x
        }
    }
    return resultado;
}

let texto = 'ya nada nos asusta';
let valorLimiteN = 4;
console.log(extraerN(texto,valorLimiteN));