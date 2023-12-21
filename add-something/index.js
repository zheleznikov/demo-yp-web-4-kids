const englishWordInput = document.getElementById('englishWordInput');
const russianWordInput = document.getElementById('russianWordInput');
const addCardButton = document.getElementById('addButton');

const wordsContainer = document.getElementById('wordsContainer');


/*
    Функция создает элемент карточки и возвращает его
*/
function createCard(englishWord, russianWord) {
    const card = document.createElement('div');
    const cardBody = `<h3>${englishWord}</h3><p>${russianWord}</p>`;
    // const cardBody2 = "<h3>" + englishWord + "</h3><p>" +  russianWord + "</p>";

    card.innerHTML = cardBody;
    card.onclick = () => card.remove();

    return card;
}



/*
    Функция добавляет карточку в контейнер
*/
function addCard() {
    const englishWord = englishWordInput.value;
    const russianWord = russianWordInput.value;

    const card = createCard(englishWord, russianWord);

    wordsContainer.appendChild(card);

}


/*
    Функция обрабатывает нажатие на кнопку добавить карточку
*/
function handleAddCardButtonClick() {
    console.log("handle button click");

    if (validateInput()) {
        addCard();
        clearForm();

    } else {
       // обрабатываем ситуацию, если валидаця не прошла 
    }
}


function validateInput() {
    const englishRegex = /^[a-zA-Z]+$/;
    const russianRegex = /^[а-яА-Я]+$/;

    const isEnglishInputValid = englishRegex.test(englishWordInput.value);
    const isRussianInputValid = russianRegex.test(russianWordInput.value);

    return isEnglishInputValid && isRussianInputValid;
}

function clearForm() {
    englishWordInput.value = '';
    russianWordInput.value = '';
}

addCardButton.onclick = handleAddCardButtonClick;


// Если все получится быстро
//TODO: реализовать функционал, при котором изначально русское слово будет скрыто, появляться оно будет при наведении/кликом


