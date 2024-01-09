import { Cat } from './base/cat.js';
import { Popup } from "./advanced/popup.js";
import { FormPopup } from "./advanced/formPopup.js";


const catCharlie = new Cat("Charlie", 5, 4, "meow", true);
// const catMoon = new Cat("Moon", 3);

catCharlie.displayInfoAboutMe();


// Объявляем элементы страницы
const popup = document.querySelector('.popup');
const openEmptyPopupButton = document.querySelector('.open-popup');

const popupForm = document.querySelector('.popup_form');
const openFormPopupButton = document.querySelector('.open-popup_form');

const emptyPopup = new Popup(popup, openEmptyPopupButton);
const popupWithForm = new FormPopup(popupForm, openFormPopupButton);
