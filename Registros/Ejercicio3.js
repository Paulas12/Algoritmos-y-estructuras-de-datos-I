/*Declarar una función que permita crear el registro de una notebook, con la estructura
especificada en el ejercicio 2. */

function notebook(p_sku, p_marca, p_procesador, p_memoriaRAM, p_capacidadDisco, p_tipoDisco, p_resolucion, p_lectograbadoraCdDvd, p_precio) {
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

let registro = notebook('TCMG9P', 'ASUS Zenbook', 'Intel Core i9 13ra Gen', 32, 'hasta 1 TB PCIe', 'SSD', 2.8, true, 7180); 
console.log(registro); 