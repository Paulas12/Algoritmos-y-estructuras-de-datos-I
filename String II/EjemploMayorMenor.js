//Busqueda de mayor de una cadena 

let texto = 'el tiempo otra vez avanza';
let i2 = 0;  
let max = 0; //si estoy buscando el valor maximo debo inicializar con un valor muy bajo y si quiero buscar el valor minimo debo inicializar con un valor alto 
let palabraMax = ' '; //inicia una variable vacia en donde ser va a guardar la palabra de mayor longitud, en este caso

while (i2 < texto.length) { //recorrido general de nuestra cadena 
    while (texto[i2] == ' ') { //saltea los espacios en blanco 
        i2++;
    }

    let temp = '';  //se declara y se vacia antes de empezar a procesar cada palabra de nuestra frase o texto
    
    //va a procesar palabra por palabra 
    while ((texto[i2] != ' ') && (i2 < texto.length)) { //mientras el caracter en el que estoy sea diferente de espacio y menor al final de la frase, entonces
        temp += texto[i2]; //voy concatenando dentro de mi variable temporar cada caracter que voy pasando de mi frase original
        i2++;
    }

    if (temp.length > max) { //tengo la palabra dentro de la variable temp, pregunto si se cumple que la cantidad de caracteres de la palabra es mayor procesada al maximo de caracteres que tengo almacenado(compara las longitudes de las palabras), entonces: 
        palabraMax = temp; //la palabra maxima será la que está cargada en temp
    }
}

console.log(`En la frase: ${texto}`);

console.log(`La palabra más larga es: ${palabraMax}`);
console.log(`La palabra contiene ${palabraMax.length} caracteres`);