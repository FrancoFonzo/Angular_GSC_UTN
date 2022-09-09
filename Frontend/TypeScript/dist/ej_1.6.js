"use strict";
//tenienedo en cuenta que un elemento del inventario siempre sera [nombre:string, cantidad:number]
const elementoInventario = ['tuerca', 11];
// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);
console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario(nombre, cantidad) {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}
