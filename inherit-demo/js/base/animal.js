export class Animal {

  constructor(name, age, legs, sound, hasTail) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.sound = sound;
    this.hasTail = hasTail;
  }

  /**
   * методы
   */
  displayInfoAboutMe() {
    console.log(`This is animal. It has ${this.legs} and it sounds like ${this.sound} and ${this.hasTail ? `has tail` : `does not have tail`}`);
  }

  howISound() {
    console.log(this.sound);
  }

  guesWhoAmI() {
    return this.constructor.name;
  }
}
