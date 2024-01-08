export class Cat {

  /** 
   * поля класса: hнапример, имя и возраст
  */
  constructor(catName, catAge) {
      this.catName = catName;
      this.catAge = catAge;
  }

  /** 
   * методы
  */
  displayInfoAboutCat() {
      console.log(`This is cat. Name: ${this.catName}. Age: ${this.catAge}`);
  }

}


