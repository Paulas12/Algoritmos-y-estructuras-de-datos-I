/*Pedir al usuario que ingrese el valor para la base y la altura de un triángulo, luego
calcular el área del mismo y mostrarlo en un mensaje. Tener en cuenta que los
valores solicitados son decimales y que la fórmula para calcular el área es:
(((base*altura))/2). Realizar esto por medio de una función.
*/ 

let base = parseFloat(prompt("Ingrese el valor de la base del triangulo: "));
let altura = parseFloat(prompt("Ingrese el valor de la altura del triangulo: "));

//declaracion
function area(base,altura){
    return ((base*altura)/2);
}

//llamado o invocacion
let resultado = area(base,altura);
console.log(resultado); 

/*otra manera de llamar seria
console.log(area(base,altura)); */