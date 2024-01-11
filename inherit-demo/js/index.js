import { Cat } from './base/cat.js';
import {Fish} from './base/fish.js';
import { Popup } from "./advanced/popup.js";
import { FormPopup } from "./advanced/formPopup.js";


/**
 * Животные
 */


/**
 * Модальные окна
 */
// Объявляем элементы страницы


const popup = document.querySelector('.popup');
const openEmptyPopupButton = document.querySelector('.open-popup');

const popupForm = document.querySelector('.popup_form');
const openFormPopupButton = document.querySelector('.open-popup_form');


const emptyPopup = new Popup(popup, openEmptyPopupButton);
const popupWithForm = new FormPopup(popupForm, openFormPopupButton);
