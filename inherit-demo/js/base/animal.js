export class Animal {
  constructor(name, age, legs, sound) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.sound = sound;
  }

  /**
   * методы
   */
  displayInfoAboutMe() {
    console.log(`This is animal. It has ${this.legs} and it sounds like ${this.sound}`);
  }

  guesWhoAmI() {
    console.log(this.constructor.name);
  }
}
