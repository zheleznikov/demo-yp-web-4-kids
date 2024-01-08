import { Popup } from "./Popup.js";

document.querySelector(".wrapper").style.display = 'flex';

const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.open-popup');

const popupClass = new Popup(popup, popupBg);
popupClass.initHandle();

openPopupButton.addEventListener('click', () => popupClass.open());

