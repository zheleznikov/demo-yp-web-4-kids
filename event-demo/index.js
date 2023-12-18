const myButton = document.querySelector('.my-button');
const body = document.querySelector('body');
const blockToHover = document.querySelector('#hover-me');

myButton.onclick = function () {
  myButton.style.backgroundColor = getRandomColor();
};

// myButton.addEventListener('click', function () {
//     myButton.style.backgroundColor = getRandomColor();
//   })

body.onkeydown = function (event) {
  document.querySelector('#last-key').textContent = 'Вы нажали: ' + event.key;
};

blockToHover.onmouseover = function () {
  blockToHover.style.backgroundColor = getRandomColor();
};

body.oncopy = function () {
  document.querySelector('#copy').textContent = 'Вы что-то скопировали!';
};

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
