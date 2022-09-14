const entero: number = 6;
const decimal: number = 6.66;
const hexadecimal: number = 0xf00d;
const binario: number = 0b1010011010;
const octal: number = 0o744;
const ceroNegativo: number = -0;
const enRealiadadNumero: number = NaN;
const mayorNumero: number = Number.MAX_VALUE;
const elNumeroMasGrande: number = Infinity;

 const miembros: number[] = [
 entero,
 decimal,
 hexadecimal,
 binario,
 octal,
 ceroNegativo,
 enRealiadadNumero,
 mayorNumero,
 elNumeroMasGrande
 ];

 miembros[0] = 12345;

 console.log('[Ejercicio 1.4]', miembros);