"use strict";
function greet(greeting = "Hola!") {
    return greeting.toUpperCase();
}
const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
