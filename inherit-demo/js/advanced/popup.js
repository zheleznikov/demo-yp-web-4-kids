export class Popup {

  popupBg = document.querySelector('.popup__bg');
  
  #activeClassName = 'active';

  constructor(popup, button) {
    this.popup = popup;
    this.button = button;

    this.initHandle();
  }

  open() {
    [this.popup, this.popupBg].forEach(el => this.#add(el));
  }

  close() {
    [this.popup, this.popupBg].forEach(el => this.#remove(el))
  }

  closeByKey(event) {
    event.keyCode === 27 && this.close();
  }

  closeByClick(event) {
    event.target === this.popupBg && this.close();
  }

  initHandle() {
    
    this.button.addEventListener('click', this.open.bind(this));
    window.addEventListener('keydown', this.closeByKey.bind(this));
    document.addEventListener('click', this.closeByClick.bind(this));
    this.popup.querySelector('.close-popup')
      .addEventListener('click', this.close.bind(this));
  }

  #add(el) {
    el.classList.add(this.#activeClassName);
  }

  #remove(el) {
    el.classList.remove(this.#activeClassName);
  }


}
