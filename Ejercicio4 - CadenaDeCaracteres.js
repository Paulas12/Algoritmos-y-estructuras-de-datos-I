/*Hacer un script que permita leer una secuencia de caracteres terminada en “punto” e informe la cantidad de palabras que tiene. */ 

let secuencia = "Un día vi una vaca vestida de uniforme."; //Si lleva , se cuenta como parte de la palabra anterior
i = 0;
contador = 0;

while (secuencia[i] != '.') {   //Se lee "mientras no llegue al fin de la cadena" ya que el . es el final  
    while (secuencia[i] == ' ') {   //Pasa por alto los espacios: mientras secuencia en un caracter i sea igual a un espacio en blanco, voy a pasar al siguiente espacio.
        i++;
    }
    while (secuencia[i] != ' ' && secuencia[i] != '.' ) { //Pasa por alto los caracteres. Para evitar el ciclo infito va secuencia[i] != '.' ya que si esa condicion el bucle while va a buscar el final de la cadena y no lo va a encontrar nunca
        i++;
    }
    contador++;  //Cuenta palabra por palabra
}

console.log(`La cantidad de palabras es: ${contador}`); 

/*sé que las palabras estan separas por espacios en blancos, pero no tengo certeza de si es uno o mas espacios while anidado pasará por alto los espacios en blanco que puede que existan  

El primer while anidado se va seguir cumpliendo siempre que sea verdadera su condicion (espacios), una vez que no se cumpla pasará al siguiente while anidado(caracteres)*/