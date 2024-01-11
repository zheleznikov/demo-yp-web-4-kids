import { Animal } from "./animal.js";

/**
 * Класс наследник Animal
 * 
 */
export class Cat extends Animal {

  /** 
   * поля класса: например, имя и возраст
  */
  constructor(catName, catAge) {
      // c помощью слова super вызываем конструктор родительского класса и передаем туда необходимые параметры
      super(catName, catAge, 4, "meow", true);
  }


  // пример расширения функции родительского класса
  howISound() {
    console.log("Please don't forget that I'm a cat");
    // c помощью ключевого слова super вызываем функцию родительского класса. 
    super.howISound();
  }



}


