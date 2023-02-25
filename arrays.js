/* Definicion de arrays en js: */

/*Declaracion: */
let cliente1 = [200.50, 4535.97, 940.0023];
let cliente2 = ['Leo', 'Lana', 'Milo'];
let cliente3 = [15, '20', false, 3.01, 'datos...'];
console.log(`${cliente1.length}`);                                  //para saber cuantos elementos tiene el array

/*Acceso a los datos: */ 

//1.El indice puede ser un valor directo: ${precios[1]}. En este caso quedaria hardcodeado porque siempre se va a acceder a la misma posicion sin posibilidad de poder cambiarlo 
let pos = 0;
let precios = [76.50, 104.42, 152.99];
console.log(`Valor de la posicion 1: ${precios[1]}`); 


//2.Se puede usar un numero entero : variable de tipo entero
console.log(`Valor de la posicion ${pos} = ${precios[pos]}`); 


//3.Tambien puede ser una expresión.
console.log(`Valor de la posicion (4 - 2) = ${precios[4-2]}`) //posicion 2


/*Diferencia entre const y let en la declaracion: */
let coleccion1 = ['a', 'b', 'c'];
const coleccion2 = ['x', 'y', 'z'];
//ambos permiten modificar (son mutables)
coleccion1[0] = coleccion1[0].toUpperCase();    
coleccion2[0] = coleccion2[0].toUpperCase();    

coleccion1 = 'Ahora es solo texto';                              //no es mas un array, ahora es un texto
coleccion2 = 747;                                               //genera un TypeError. Los definidos via const no pueden mutar a nivel variable


/* Para agregar o sacar un elemento: */
//Método --> push() agrega al final
let original = ['A', 'B', 'C'];
original.push('D');
console.log(`Contenido: ${original}`);

//Método --> pop() extrae del final
let extraido = original.pop();
console.log(`Contenido: ${original}`);
console.log(`Eliminado: ${extraido}`)

/*Recorrido de un array: */
let notas = [7, 6, 4, 9, 6, 3, 8, 7];                            //uso un for ya que, en este caso, sé la cantidad de elementos que tiene el array
for (let i = 0; i < notas.length; i++) {
    console.log(`En la posicion ${i} está el valor: ${notas[i]}`);
}
//Qué pasa al acceder a una posición fuera del límite?
console.log(`En la posicion 10? ${notas[10]}`);                 //undefined
