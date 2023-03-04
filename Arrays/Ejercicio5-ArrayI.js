/*Realizar una función que permita cargar un array de 20 posiciones con números enteros. 
*Se debe retornar aquellas posiciones en las que el valor contenido sea múltiplo de 3 */

function vector() {
    let vector = [];
    let multiplos = '';

    for (let i = 0; i < 20; i++) {
        vector.push(prompt('Ingrese el valor'));
        
        if (vector[i] % 3 == 0) {
            multiplos += vector[i];
        }
    }
    return multiplos;
}

vector(); 

//let vector = [3,6,9,12,15];

/*function multiplosDeTres(vector) {
    
}*/