/*Realiza un script que reciba una cadena de caracteres y mediante dos funciones realice lo siguiente: 
*En una funcion devuelva la cantidad de oraciones (se identifican porque finalizan en un punto, la cadena puede tener mas de una) que tengan mas de cinco palabras.*/


function contarOraciones(cadena) {
    let i = 0;
    let cantidadPalabras = 0;
    let cantidadOraciones = 0; 

    while(i < cadena.length){    //recorrido hasta el final de la cadena incluyendo los puntos 
        while (cadena[i] != '.') {   //recorrido de cada oracion    
            while(cadena[i] == ' '){  //va a contar las palabras
                i++;
            }
            while (cadena[i] != ' ' && cadena[i]!= '.') {
                i++; 
            }
            cantidadPalabras++;
        } 
        if (cantidadPalabras > 5) {
            cantidadOraciones++;
        }
        cantidadPalabras = 0; //tengo que reinicializar la variable cuando voy a procesar una nueva oracion 
        i++; //hace que salga del bucle infinto despues del ultimo punto y procese qué pasa ahí 
    }
    return cantidadOraciones; 
}

let cadena = 'Cuando es la graduacion de mi hijo. Y para cuando va a llover?.'
console.log(`La cantidad de oraciones con mas de cinco palabras es :${contarOraciones(cadena)}`); 



/*En una segunda funcion se debe devolver una nueva cadena con todas las palabras que tengan tres letras, separando cada palabra con un espacio en blanco. */
function nuevaOracion(cadena0) {
    let i = 0;
    palabrasConTresCaracteres = '';

    while (i < cadena0.length) {
        while (cadena0[i] == ' ') {
            i++;
        }

        let palabra = '';
        while (cadena0[i] != ' ' && i < cadena0.length && cadena0[i] != '.') { 
            palabra += cadena0[i];
            i++;
        }

        if (palabra.length == 3) { //la palabra que recorrí tiene tres caracteres, cómo hago para que se devuelva? la tengo que ir concatenando en otra variable por fuera de los  while actual
            palabrasConTresCaracteres += palabra + ' ';  //el contenido que ya tenia + la palabra que recien procesé + el espacio
        }
        i++;
    }
    return palabrasConTresCaracteres;
}

let cadena0 = 'Cuando será la graduaciosn de mis hijos che. Y cómo está el clima hoy.'
console.log(`Las palabras con tres letras son: ${nuevaOracion(cadena0)}`);