/*Escribir una función que permita cargar un vector de 10 elementos y los imprima en orden inverso al de la carga.
longitud del vector = 10*/

function inversa() {
    var vector = []; 
    for (let index = 0; index < 10; index++) {
        vector.push(prompt('Ingrese el valor')); //con push se ingresa un valor de uno en uno dentro de un vector, si quiero ingresar n numeros lo ponemos dentro de un for
    }
    for (let index = 9; index >= 0; index--) {//como hago para mostrar las posiciones en la posicion inversa? va comenzar en 9, va a decrementar -- hasta llegar a 0
        console.log(vector[index]); 
    }
}
inversa(); //como la funcion no tiene parámetros la podemos llamar de esta manera