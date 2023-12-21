const body = document.querySelector('body');
const blockToHover = document.querySelector('#hover-me');
const blockToClick = document.querySelector('#click-me');
const myButton = document.querySelector('.my-button');

// function changeButtonColor() {
//   myButton.style.backgroundColor = getRandomColor();
// }


myButton.onclick = function (event) {
  console.log(event);
  // myButton.style.backgroundColor = 'black';
};

// myButton.onclick = () => myButton.style.backgroundColor = getRandomColor();

// myButton.onclick = function () {
//   myButton.style.backgroundColor = 'black';
// };


// myButton.addEventListener('click', function () {
//     myButton.style.backgroundColor = getRandomColor();
//   })


body.onkeydown = function (event) {

  if (event.key === 'Escape') {
    alert('Escape')
  };

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

// myButton.onclick = function () {
//   myButton.style.transform = 'rotate(180deg)';
// };

// myButton.onclick = function () {
//   body.style.transform = 'rotate(180deg)';
//   body.style.transition = '1s all';
// };

// blockToClick.onclick = function () {
//   // document.querySelectorAll('p').forEach(el => el.textContent = 'Kek');
//   document.querySelectorAll('p').forEach(p => p.textContent = 'Kek');
// };

// blockToClick.onclick = () =>  document.querySelectorAll('p').forEach(el => el.textContent = 'Kek');
