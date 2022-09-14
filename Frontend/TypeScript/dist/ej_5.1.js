"use strict";
class MC {
    greet(event = 'party') {
        return `Bienvenido al ${event}`;
    }
}
const mc = new MC();
console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));
