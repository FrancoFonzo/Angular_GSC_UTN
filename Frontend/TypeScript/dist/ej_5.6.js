"use strict";
class Student {
    constructor(name) {
        this.name = name;
    }
    ;
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
    }
}
Student.school = 'Harry Herpson High School'; // atributo de clase
const student = new Student('Morty');
console.log(Student.school);
student.introduction();
