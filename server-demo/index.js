const SERVER_URL = 'http://127.0.0.1:8080';

const heroName = document.getElementById('heroName');
const heroClass = document.getElementById('heroClass');
const heroImage = document.getElementById('heroImage');
const addHeroButton = document.getElementById('addButton');

const heroesContainer = document.getElementById('heroesContainer');

getHeroesFromServer();

addHeroButton.addEventListener('click', () => {
  validateData(heroName.value, heroClass.value);

  addHeroToServer({
    name: heroName.value,
    clazz: heroClass.value,
    image: heroImage.value,
  });

  clearInput(heroClass);
  clearInput(heroName);
  clearInput(heroImage);
});

/*
    Функции для работы со страницей
*/
function displayHeroes(heroes, heroesContainer) {
  heroesContainer.innerHTML = '';

  const cards = heroes.map(hero => createCard(hero));
  cards.forEach(card =>  heroesContainer.appendChild(card));
}


/**
 * Создать карточку
 */
function createCard(hero) {
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('heroes__card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('card__image');
  cardImage.id = hero.id;
  cardImage.style.background = `no-repeat center/cover url('${hero.image}')`;

  heroDiv.appendChild(cardImage);

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('delete__button');
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72" fill="currentColor"><path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path></svg>`;

  deleteButton.onclick = () => deleteHeroFromServer(hero.id);

  cardImage.appendChild(deleteButton);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card__info');
  cardInfo.innerHTML = `<div class="card__info_content"><p>${hero.name}</p><span>${hero.clazz}</span></div>`;

  cardImage.appendChild(cardInfo);
  return heroDiv;
}


function validateData(heroName, heroClass) {
  heroName === '' && alert('hero name error');
  heroClass === '' && alert('hero class error');
}

function clearInput(input) {
  input.value = '';
}

/*
    Функции для работы c API 
*/

function getHeroesFromServer() {
  fetch(`${SERVER_URL}/hero`)
    .then((rs) => rs.json())
    .then((data) => displayHeroes(data, heroesContainer))
    .catch((err) => console.log(err));
}

function addHeroToServer(data) {
  fetch(`${SERVER_URL}/hero`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;',
    },
    body: JSON.stringify(data),
  })
    .then((rs) => rs.json())
    .then((data) => displayHeroes(data, heroesContainer))
    .catch((err) => console.log(err));
}

function deleteHeroFromServer(id) {
  fetch(`${SERVER_URL}/hero/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;',
    },
  })
    .then((rs) => rs.json())
    .then((data) => displayHeroes(data, heroesContainer))
    .catch((err) => console.log(err));
}
