import { Animal } from "./animal.js";

export class Fish extends Animal {

    constructor(fishName, fishAge) {
        super(fishName, fishName, 0, undefined, false);
    }

    // пример полного переопределения метода родительского класса
    howISound() {
        console.log("I'm a fish. Nobody knows how I sound;")
    }
    

}