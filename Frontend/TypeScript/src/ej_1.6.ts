//tenienedo en cuenta que un elemento del inventario siempre sera [nombre:string, cantidad:number]
const elementoInventario: [string, number] = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;
 
const mensaje: string = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}