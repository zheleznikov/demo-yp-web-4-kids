import { Api } from './api.js';
import { Cat } from './cat.js';

const url = 'https://heroes-server.onrender.com';
const heroApi = new Api(url);

heroApi.getHeroes(console.log);

const catCharlie = new Cat("Charlie", 5);
const catMoon = new Cat("Moon", 3);

catCharlie.displayInfoAboutCat();
catMoon.displayInfoAboutCat();
