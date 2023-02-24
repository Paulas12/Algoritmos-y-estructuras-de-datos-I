var nuevo_numero = 5;

function tablaNumero(nuevo_numero) {
    for (var i = 1; i <= 10; i++) {
        resultado = nuevo_numero * i;
        //console.log(resultado);
        console.log(nuevo_numero * i);
    }
    return resultado;
}

nuevo_numero = tablaNumero(nuevo_numero); //para que retorne el ultimo valor calculado
tablaNumero(nuevo_numero);
console.log(nuevo_numero);
