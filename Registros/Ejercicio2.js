/*Crear un registro asignado a una variable que contenga la información de una notebook, especificando: sku, marca, procesador, memoria ram, capacidad de disco, tipo de disco, resolución, si tiene lectograbadora CD/DVD y precio. */

let notebook = {
    sku : 'TCMG9P',                     //numero unico de identificacion
    marca : 'ASUS Zenbook', 
    procesador : 'Intel Core i9 13ra Gen', 
    memoriaRAM : '32 GB' ,          //Se puede expresa como nro en el caso de q luego necesite operar con dicho valor
    capacidadDisco : 'hasta 1 TB PCIe', 
    tipoDisco : 'SSD',
    resolucion : '2,8K', 
    lectograbadoraCdDvd : 'si',
    precio : 7180, 
}

console.log(notebook);
console.log(`El sku de la notebook es: ${notebook['sku']} y su precio actual es: ${notebook['precio']}`);