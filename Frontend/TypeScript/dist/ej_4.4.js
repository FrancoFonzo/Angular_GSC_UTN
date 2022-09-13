"use strict";
class Bird {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de aves.');
    }
    fly(height) {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}
;
class Fish {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth) {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal() {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}
function interrogateAnimal(animal = getRandomAnimal()) {
    if (animal instanceof Fish) { // se llama solo si es un pez
        animal.swim(10);
    }
    else if (animal instanceof Bird) { // se llama solo si es un pajaro
        animal.fly(10);
    }
    return animal.species;
}
console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
