"use strict";
let multiply;
let capitalize;
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
