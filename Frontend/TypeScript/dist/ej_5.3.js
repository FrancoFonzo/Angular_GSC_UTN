"use strict";
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Ingeniero', 100000);
console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee.salary}.`);
