/* Escriba un script que lea una secuencia de caracteres terminada en “punto” e
informe la cantidad de letras 'v' leídas seguidas por una 'a'.

Me dice en qué termina la frase : uso la estructura while*/

let frase  = 'va va Va varios vA vacaciones.'; 
let i = 0;
let contador = 0;

while (frase[i] != '.') {
    if(frase[i] == 'v' || frase[i] == 'V'){               //Me pregunto si el caracter que estoy mirando es una v o una V
        if (frase[i+1] == 'a' || frase[i+1] == 'A') {            //i+1 es la posicion siguiente a v
            contador++;      //Va a contar la cantidad de 'va' que hay  
        }
    }
    i++;                    //el indice siempre se incrementa a lo ultimo      
}

console.log(`La cantidad de caracteres 'v' seguidas de 'a', es: ${contador} `); 