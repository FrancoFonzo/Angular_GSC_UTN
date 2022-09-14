/* 
El codigo del ejercicio en el apunte es incorrecto y corresponde al Ej. 4.4.
El codigo correcto es el mismo que en Ej. 4.0. 
Se puede confirmar en el console.log() de cada ejercicio.
*/

// Restringir value a 'string o number'

function doStuff(value: (string | number)): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
        console.log(value.toPrecision(5));
    }

    value;
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
/* Al restringir value, ya no se puede enviar parametros de otros tipos
doStuff(true);
doStuff({}); 
*/

console.log('[Ejercicio 4.1]');