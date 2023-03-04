/*Realizar un script que incluya dos funciones:
● Función "ingresarDatos": permite cargar en un array las notas de los 15 exámenes finales de los alumnos que cursaron la cátedra “Introducción a la Informática” durante el 1er cuatrimestre de 2020.
● Función “procesarNotas": recibe el array y deberá procesar las notas para informar: el promedio, la nota más baja, la nota más alta y las cantidades de aprobados y desaprobados (considerar que se aprueba con 6).*/

/*let calificaciones = []; //se inicia vacío

function ingresarDatos(){
    let i = 0;

    for(i=0; i < 15; i++){
        calificaciones.push(prompt(`Ingrese una nota del alumno ${(i+1)}:`)); //lo que es ingresado por consola debo almacenarlo dentro de mi vector, añado cada elemento con la funcion push
    }
}

ingresarDatos();*/

//se debe procesar las notas ingresadas
function procesarNotas(calificaciones) {
    let notaMinima = 0; 
    let notaMaxima = 10;
    let cant_aprobados = 0;
    let cant_desaprobados = 0; 
    let i; 
    //total = total + calificaciones[i]; 
    

    for (let i = 0; i < 15; i++) {

        if (calificaciones[i] < notaMinima) {
            notaMinima = calificaciones[i];
        }

        if (calificaciones[i] > notaMinima) {
            notaMaxima = calificaciones[i];
        }
        
        if (calificaciones[i] >= 6 && calificaciones[i] <=10 ) {
            cant_aprobados = calificaciones[i]; 
        }else{
            cant_desaprobados = calificaciones[i]; 
        }
    }
    console.log(`La nota mas baja es ${notaMinima}`); 

    console.log(`La nota mas alta es ${notaMaxima}`);

    console.log(`La cantidad de aprobados es: ${cant_aprobados}`);

    console.log(`La cantidad de desaprobados es: ${cant_desaprobados}`);

}
let calificaciones = [1,2,3,4,5,6,7,8,9,10];
console.log(procesarNotas(calificaciones));