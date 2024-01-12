import { Cat } from './base/cat.js';
import {Fish} from './base/fish.js';
import {Animal} from './base/animal.js';
import { Popup } from "./advanced/popup.js";
import { FormPopup } from "./advanced/formPopup.js";


/**
 * Животные
 */

const cat = new Cat("Charlie", 5);
cat.howISound();

const fish = new Fish("Vampire");

fish.howISound();

const animal = new Cat("name", 10); 

const who = animal.guesWhoIAm();
console.log(who);



/**
 * Модальные окна
 */

const popup = document.querySelector('.popup');
const openEmptyPopupButton = document.querySelector('.open-popup');
const emptyPopup = new Popup(popup, openEmptyPopupButton);

const popupForm = document.querySelector('.popup_form');
const openFormPopupButton = document.querySelector('.open-popup_form');


const popupWithForm = new FormPopup(popupForm, openFormPopupButton);
