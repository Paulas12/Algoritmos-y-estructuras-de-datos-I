/*1.Tomar un array con el consumo de energia de una vivienda (kwh) para el ultimo año (12 meses).
2.Se quiere obtener el promedio de gastos registrados. promedio = suma de los elementos % el nro de elementos
3.Considerar un precio promedio de kwh y determinar los costos mensuales estimados y el promedio anual.  */


//1.
let consumo = [350, 320, 286, 203, 190, 165, 160, 240, 280, 250, 320, 330];

//2.
let promedio = 0; 

for(let i=0; i<consumo.length; i++){              //i = consumos.length va a iterar de 0 hasta la longitud del vector
    promedio += consumo[i];             //guardo en la nueva variable vaya acumulando el valor que está contenido dentro del vector 
}
consumoAnual = promedio / 12;

//console.log(`El promedio de consumo registrado en esta vivienda en el ultimo año es de: ${consumoAnual} kwh`);

//3.
let precioKwh = 16.47;

for (let i= 0; i < consumo.length; i++) {
    console.log(`En el mes ${i+1} kwh, y su costo a pagar es de: $ ${consumo[i] * precioKwh}`);
}

console.log(`El precio promedio anual a pagar es de: $ ${consumoAnual * precioKwh}`);

//Usar un array facilita la carga de valores para los doce meses, ya que si no lo usaramos deberiamos cargar una variable para enero, una para febrero, y asi sucesivamente, lo que complica la realizacion del codigo y se pierde mucho tiempo.