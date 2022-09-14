class Person {
    constructor(public name: string, private age: number) {
        this.name = name;
        this.age = age;
    }
}

const jane = new Person('Juan', 31);

console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`);