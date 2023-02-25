//Acceso a los elementos de una variable string 
let cadena = 'hola mundo!';
console.log(cadena[5]);             //devuelve lo que está en la posicion 5

//Recorriendo una cadena: se emplea una estructura de control for o while, dependiendo la situacion 
//Cómo saber cuántas posiciones tiene el texto almacenado en la variable string: se recorre hasta encotrar un caracter específico(while) o se obtiene la longitud de la cadena(for) con length (propiedad de js para el tipo de dato string)


//Quiero saber en qué posicion está cierto caracter
let idx = 0;          //index. Vamos a procesar posicion a posicion la cadena tomando de referencia esta variable para ir indicando en qué posicion estamos. Inicializa dicha variable en la posicion 0
let cantidad = 0;       //para contar las posiciones hasta llegar al signo que queremos (!). Inicia en la posicion 0

while(cadena[idx] != 'o'){  //condicion:voy a recorrer mientras que cadena en la posicion que me marque la variable i no sea igual al signo !
    cantidad++; 
    idx++; //ambas variables aumentan un + para que se muevan de posicion, sino entrarian en bucle infinito en la misma posicion
}
console.log(`La cantidad de caracteres de la cadena antes de llegar al signo ! es: ${cantidad}`)