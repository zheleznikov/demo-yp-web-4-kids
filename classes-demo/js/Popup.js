export class Popup {

  constructor(popup, popupBg) {
    this.popup = popup;
    this.popupBg = popupBg;

  }

  open() {
    this.popup.classList.add('active');
    this.popupBg.classList.add('active');
  }

  close() {
    this.popup.classList.remove('active');
    this.popupBg.classList.remove('active');
  }

  closeByKey(event) {
    event.keyCode === 27 && this.close();
  }

  closeByClick(event) {
    event.target === this.popupBg && this.close();
  }

  initHandle() {
    window.addEventListener('keydown', this.closeByKey.bind(this));
    document.addEventListener('click', this.closeByClick.bind(this));
    this.popup
      .querySelector('.close-popup')
      .addEventListener('click', this.close.bind(this));
  }



}
