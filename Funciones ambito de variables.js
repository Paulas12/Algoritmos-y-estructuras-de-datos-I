function decisiones(hora) {
    var limite = 2; 
    var seguir = true;
    if(hora > limite){
        let diferencia = hora - limite;
        console.log(`Son mas de las 2AM, pasó ${diferencia} hora`);
        seguir = false; 
    }
    return seguir;
}

var horaActual = 3;
if (decisiones(horaActual)) {
    console.log('Se puede seguir un rato mas');
} else {
    console.log('Hora de volver a casa');
}

//let y const tienen ambito de bloque y var tiene ambito de funcion
//la variable diferencia solo se puede usar dentro del bloque if donde fue definida
//las variables limites y seguir pueden ser usadas dentro del bloque de la definicion de la funcion 
//la variable horaActual puede usarse dentro de todo el archivo js