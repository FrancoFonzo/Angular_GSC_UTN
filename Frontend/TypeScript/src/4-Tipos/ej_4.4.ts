interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

// agregar alias de tipo(s) aqui
type BirdLike = EggLayer & Flyer;
type FishLike = EggLayer & Swimmer;
type Animal = Bird | Fish;

class Bird implements BirdLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: string) { }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Animal {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if(animal instanceof Fish){ // se llama solo si es un pez
        animal.swim(10);
    }
    else if(animal instanceof Bird){ // se llama solo si es un pajaro
        animal.fly(10);
    }

    return animal.species;
}

console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);