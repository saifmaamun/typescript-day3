"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('Brown Dog', 'Dog', 'Ghew Ghew');
const cat = new Animal('Sada Bilai', 'Cat', 'Mew Mew');
dog.makeSound();
cat.makeSound();
class Human {
    // parmeter properties
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    tellDetails() {
        console.log(`${this.name} is a ${this.age} years old ${this.gender}`);
    }
}
const saif = new Human('Saif', 'Male', 28);
const asif = new Human('Asif', 'Male', 24);
saif.tellDetails();
asif.tellDetails();
