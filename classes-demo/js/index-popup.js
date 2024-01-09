import { Popup } from "./popup.js";

// Объявляем элементы страницы
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.open-popup');

// создаем экземпляр класса
const popupClass = new Popup(popup, popupBg);

openPopupButton.addEventListener('click', () => popupClass.open());

