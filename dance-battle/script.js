/*
	Работа с API unsplash
*/

const body = document.querySelector('body');

function createRandomBackground(data) {
  const url = data.urls.full;
  body.style.backgroundImage = `url(${url})`;
}

function useDefaultBackground() {
  const link = 'images/background.png';
  body.style.backgroundImage = `url(${link})`;
}

const unsplashApi = new UnsplashApi();
unsplashApi.getRandomPhoto(createRandomBackground, useDefaultBackground);

/*
	логика игры
*/
const gameParameters = {
  MAX_LEVEL: 10,
  MAX_STAT: 99,
  MIN_STAT: 10,
};

const gameClasses = {
  Mage: 'Маг',
  Knight: 'Рыцарь',
  Hero: 'Класс',
};

const heroNameRegex = /^[a-zA-Zа-яА-Я]+$/;
let enemyHero = null;
let playerHero = null;
const sendToBattleButton = document.getElementById('sendToBattleButton');
const doSkillButton = document.getElementById('doSkillButton');
const getEnemyButton = document.getElementById('getEnemyButton');
const startBattleButton = document.getElementById('startBattleButton');

function displayPlayerHero(hero) {
  document.getElementById('playerHeroClass').innerHTML =
    gameClasses[hero.constructor.name];
  document.getElementById('playerHeroName').innerHTML = hero.name;
  document.getElementById('playerHeroLevel').innerHTML = hero.level;
  document.getElementById('playerHeroHp').innerHTML = hero.healthPoints;
  document.getElementById('playerHeroStrength').innerHTML = hero.stats.str;
  document.getElementById('playerHeroIntelligence').innerHTML = hero.stats.int;
  document.getElementById('playerHeroAgility').innerHTML = hero.stats.agi;

  hero.displayHero();
}

sendToBattleButton.onclick = () => {
  const heroName = document.getElementById('name').value;
  if (heroName !== '') {
    if (!heroNameRegex.test(heroName)) {
      alert('Имя персонажа может содержать только буквы, цифры и пробелы!');
      return;
    }
    const heroClass = document.querySelector(
      'input[name="class"]:checked'
    ).value;
    const heroLevel = document.getElementById('level').value;
    const heroStats = {};

    heroStats.str = Number(document.getElementById('strength').value);
    if (heroStats.str > gameParameters.MAX_STAT) {
      heroStats.str = gameParameters.MAX_STAT;
    }
    heroStats.int = Number(document.getElementById('intelligence').value);
    if (heroStats.int > gameParameters.MAX_STAT) {
      heroStats.int = gameParameters.MAX_STAT;
    }
    heroStats.agi = Number(document.getElementById('agility').value);
    if (heroStats.agi > gameParameters.MAX_STAT) {
      heroStats.agi = gameParameters.MAX_STAT;
    }

    const additionalAbility = document.querySelector(
      'input[name="additionalAbility"]:checked'
    ).value;
    const additionalStat = document.getElementById('additionalStat').value;

    if (heroClass === 'Mage') {
      playerHero = new Mage(
        heroName,
        heroLevel,
        100,
        heroStats,
        additionalAbility,
        additionalStat
      );
    } else if (heroClass === 'Knight') {
      playerHero = new Knight(
        heroName,
        heroLevel,
        100,
        heroStats,
        additionalAbility,
        additionalStat
      );
    } else {
      console.error('Упс! Произошла какая-то ошибка!');
      return;
    }

    displayPlayerHero(playerHero);

    getEnemyButton.removeAttribute('disabled');
    doSkillButton.removeAttribute('disabled');
  } else {
    alert('Добавьте герою имя!');
  }
};

getEnemyButton.onclick = () => {
  fetch(`https://api-code.practicum-team.ru/heroes`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let randomEnemy = data[Math.floor(Math.random() * data.length)];
      console.log(randomEnemy);
      enemyHero = new Hero(
        randomEnemy.title,
        Math.floor(Math.random() * 10) + 1,
        randomEnemy.hp,
        {
          str: randomEnemy.str,
          int: randomEnemy.int,
          agi: randomEnemy.agi,
        }
      );

      displayEnemyHero(enemyHero);
      if (playerHero) {
        startBattleButton.removeAttribute('disabled');
      }
    })
    .catch((error) => console.error('Ошибка:', error));
};
function displayEnemyHero(hero) {
  document.getElementById('enemyHeroClass').innerHTML =
    gameClasses[hero.constructor.name];
  document.getElementById('enemyHeroName').innerHTML = hero.name;
  document.getElementById('enemyHeroLevel').innerHTML = hero.level;
  document.getElementById('enemyHeroHp').innerHTML = hero.healthPoints;
  document.getElementById('enemyHeroStrength').innerHTML = hero.stats.str;
  document.getElementById('enemyHeroIntelligence').innerHTML = hero.stats.int;
  document.getElementById('enemyHeroAgility').innerHTML = hero.stats.agi;

  hero.displayHero();
}

function countStatsSum(hero) {
  let statsSum = 0;

  statsSum += hero.stats.str;
  statsSum += hero.stats.int;
  statsSum += hero.stats.agi;
  statsSum += hero.healthPoints;

  return statsSum;
}

function arena(firstHero, secondHero) {
  console.log(
    `Да начнётся танцевальный баттл между ${firstHero.name} и ${secondHero.name}!`
  );

  let winner = null;

  let fistHeroSum = countStatsSum(firstHero);
  let secondHeroSum = countStatsSum(secondHero);

  console.log('Сумма значений параметров первого героя: ', fistHeroSum);
  console.log('Сумма значений параметров второго героя: ', secondHeroSum);

  if (fistHeroSum > secondHeroSum) {
    winner = firstHero;
    document.getElementById('hero1').classList.add('winner-outline');
  } else if (fistHeroSum < secondHeroSum) {
    winner = secondHero;
    document.getElementById('hero2').classList.add('winner-outline');
  }

  if (winner) {
    console.log(`Ритмично чествуем победителя: ${winner.name}`);
    alert(`Ритмично чествуем победителя: ${winner.name}`);
  } else {
    console.log('В танцевальном баттле победила дружба!');
    alert('В танцевальном баттле победила дружба!');
  }
}

doSkillButton.onclick = () => {
  if (playerHero) {
    if (playerHero.constructor.name === 'Mage') {
      playerHero.healHero(playerHero);
    } else if (playerHero.constructor.name === 'Knight') {
      playerHero.gainAgility(playerHero);
    } else {
      console.log('Упс! Произошла какая-то ошибка!');
    }
  } else {
    alert('Сначала добавьте игрока!');
  }
  displayPlayerHero(playerHero);
};
startBattleButton.onclick = () => {
  document.getElementById('hero2').classList.remove('winner-outline');
  document.getElementById('hero1').classList.remove('winner-outline');
  arena(playerHero, enemyHero);
};

function random() {
  const max = gameParameters.MAX_STAT;
  return Math.round(Math.random() * max);
}

function getRandomImage() {
  const link =
    'https://images.unsplash.com/photo-1572880393162-0518ac760495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';
  return link;
}
