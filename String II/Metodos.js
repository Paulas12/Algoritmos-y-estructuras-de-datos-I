//Métodos toUpperCase(): transforma a mayúscula
let cadena0 = 'no estoy GRITANDO!'; 
console.log(cadena0.toUpperCase());

//Métodos toLowerCase(): transforma a minúscula
console.log(cadena0.toLowerCase());

console.log(cadena0);

//Método trim(): limpieza de espacios en blanco
let cadena1 = '           Esto tiene espacios en blanco          ';
console.log(`${cadena1.trim()}`); 

//Método includes(valorBuscado, [posicion-inicio-busqueda]): si una cadena contiene a otra
let cadena2 = 'I just want to live while im alive'; 
console.log(`Contiene live? ${cadena2.includes('live')}`);
console.log(`Contiene hola? ${cadena2.includes('hola')}`);
console.log(`Contiene want? ${cadena2.includes('want', 20)}`);  //Empieza a contar a partir de la posicion 20
console.log(`Contiene while? ${cadena2.includes('while', 20)}`);
console.log(`Contiene While? ${cadena2.includes('While', 20)}`);
console.log(`${cadena2.length}`);
console.log(`${cadena2[20]}`);

//Método indexOf(valorBuscado, posicion-inicio-busqueda): valor numérico de la primera posicion en la que está el valor buscado 
let cadena3 = 'No dark sarcasm in the classroom';
console.log(`En la posicion ${cadena3.indexOf('in',16)} se encuenta por primera vez'in'`);
console.log(`En la posicion ${cadena3.indexOf('in')} se encuenta por primera vez 'in'`);
console.log(`En la posicion ${cadena3.indexOf('k')} se encuenta por primera vez 'k'`);
console.log(`En la posicion ${cadena3.indexOf('K')} se encuenta por primera vez 'K'`);

//Método lastIndexOf(valorBuscado, [posicion-inicio-busqueda]): valor numérico de la ultima ocurrencia del valor buscado.
let cadena4 = 'All in all you are just another brick in the wall'; 
console.log(`En la posicion ${cadena4.lastIndexOf('all')} se encuenta por ultima vez 'all'`);

//Método replace(valorBuscado, valorReemplazar): reemplaza la primera ocurrencia del primer parámetro(valorBuscado) por el contenido del segundo(valorReemplazar)
let cadena5 = 'Hey you, out there in the cold'; 
console.log(`Resultado cambio: ${cadena5.replace('you', 'U')}`);
console.log(`Resultado cambio: ${cadena5}`); //se mantiene sin cambios


//Método slice(valorDesde, [valorHasta]): recorta el contenido de la cadena. El segundo indice no se incluye 
let cadena6 = 'But it was only fantasy'; 
console.log(`Recorte: ${cadena6.slice(0,3)}`);
console.log(`Recorte: ${cadena6.slice(7)}`);  //a partir de la posicion 7 hasta el final
console.log(`Recorte: ${cadena6.slice(0,-7)}`);

//Método startsWith(valorBusqueda, valor desde): controla si inicia con el valor ingresado, opcionalmente controla desde el indice del segundo valor, sino desde el inicio
let cadena7 = 'I play my part and you play your game';
console.log(`${cadena7.startsWith('Me')}`);
console.log(`${cadena7.startsWith('play',2)}`);

//Método endsWith(valorBusqueda, valor desde): controla si finaliza con el valor ingresado, opcionalmente controla hasta el indice del segundo valor, sino hasta el final
console.log(`${cadena7.endsWith('game')}`);
console.log(`${cadena7.endsWith('part',10)}`);
console.log(`${cadena7.endsWith('part',14)}`);