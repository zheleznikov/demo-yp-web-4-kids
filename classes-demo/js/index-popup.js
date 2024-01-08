import { Popup } from "./popup.js";

// page els
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.open-popup');

const popupClass = new Popup(popup, popupBg);


openPopupButton.addEventListener('click', () => popupClass.open());

