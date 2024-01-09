import { Animal } from "./animal.js";

export class Cat extends Animal {

  /** 
   * поля класса: например, имя и возраст
  */
  constructor(catName, catAge, legs, sounds, hasTail) {
      super(catName, catAge, legs, sounds, hasTail);
  }



}


