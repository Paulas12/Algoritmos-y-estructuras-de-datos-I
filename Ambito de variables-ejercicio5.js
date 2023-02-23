var nuevo_numero = 5;

function tablaNumero(nuevo_numero) {
    for (var i = 1; i <= 10; i++) {
        resultado = nuevo_numero * i;
        console.log(resultado);
    }
    return nuevo_numero*10;
}

tablaNumero(nuevo_numero);
console.log(nuevo_numero);