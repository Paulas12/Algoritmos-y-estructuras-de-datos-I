/*Crear una función que reciba una colección de registros de tres notebooks (generados a partir de la función antes creada). 
*Retornar el registro de la notebook que incluya lectograbadora CD/DVD y cuyo precio no supere los $10.000. */

function notebooks(p_sku, p_marca, p_procesador, p_memoriaRAM, p_capacidadDisco, p_tipoDisco, p_resolucion, p_lectograbadoraCdDvd, p_precio){
    return{
        sku :  p_sku,
        marca : p_marca,
        procesador :  p_procesador,
        memoriaRAM :  p_memoriaRAM,
        capacidadDisco :  p_capacidadDisco,
        tipoDisco : p_tipoDisco,
        resolucion :  p_resolucion,
        lectograbadoraCdDvd : p_lectograbadoraCdDvd,
        precio :  p_precio
    }
}

let notebook1 = notebooks('TCMG9P', 'ASUS Zenbook', 'Intel Core hasta i9 13ra Gen', 8, 'hasta 1 TB PCIe', 'SSD', 2.8, false, 9000);
let notebook2 = notebooks('PLMS2R', 'ASUS Laptop', 'Intel Core hasta i9 13ra Gen', 32, 'hasta 1 TB PCIe', 'SSD', 2,8, false, 9000);
let notebook3 = notebooks('HWZB5Y', 'ASUS x515', 'Intel Core hasta i9 13ra Gen', 12, 'hasta 1 TB PCIe', 'SSD', 2.8, true, 8000);



let listaNotebooks = [];
listaNotebooks.push(notebook1); 
listaNotebooks.push(notebook2);
listaNotebooks.push(notebook3);
//console.log(listaNotebooks);

function buscarNotebook(listaNotebooks) {
    for (let i = 0; i < listaNotebooks.length; i++) {
        if ((listaNotebooks[i]['lectograbadoraCdDvd'] == true) && (listaNotebooks[i]['precio'] < 10000)) {
            return listaNotebooks[i];
        }
    }     
}

console.log(buscarNotebook(listaNotebooks));