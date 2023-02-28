/*En este caso se busca extraer de la cadena original las palabras que comienzan con la letra “t” */
//NO FUNCIONA
let frase = 'llueve tranquilo, llueve parejo';
let i1 = 0; 
let fragmentos = ''; //variable vacia es != a espacio

while (i1 < frase.length) {
    while (frase[i1] == ' ') {
        i1++;
    }

    if (frase[i1] == 't') {  //Empieza con t? 
        while ((frase[i1] != ' ') && (i1 < frase.length)) {
            fragmentos += frase[i1];
            i1++;
        }
    }else{
        while ((frase[i1] != ' ') && (i1 < frase.length)) {
            i1++;
        }
    }
} 

console.log(`Frase original: ${frase}`); 
console.log(`Palabra que inicia con 't': ${fragmentos}`)