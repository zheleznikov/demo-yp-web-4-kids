/*
    01. Детерминированные чистые функции
    Детерминированные - есть четкая взаимосвязь между входными и выходными параметрами
    Чистые - нет побочных эффектов
*/

// детерминированная
function calcValue(a, b) {
  return a + b;
}

// не детерминированная
function calcRandmomValue(a) {
  const b = Math.floor(Math.random() * 10);
  return a + b;
}

// не детерменированная
function calcValue(a, b) {
  if (!a) {
    a = Math.floor(Math.random() * 10);
  }

  if (!b) {
    b = Math.floor(Math.random() * 10);
  }

  return a + b;
}

// не чистая
function calcValueDirty(a, b) {
  const c = a + b;
  console.log(c);
  return c;
}


/* 
    02. Неизменяемые данные
*/

// Изменяем исходные данные
const mutabled = [1, 2, 3];

for (let i = 0; i < mutabled.length; i++) {
  mutabled[i] = mutabled[i] * 2;
}

// console.log(mutabled);


// Не изменяем исходные данные
const immutabe = [1, 2, 3];
const updatedArr = [];

for (let i = 0; i < immutabe.length; i++) {
  updatedArr[i] = immutabe[i] * 2;
}

// console.log(immutabe);
// console.log(updatedArr);


/*
    3. Функции высших порядков. Функция может принимать другую функцию
*/


function foo(value, bar) { // функция принимает значение и другую функцию
    bar(value); // внутри вызывает функцию со значением
}

function baz(a) {
    console.log(a);
}

// foo("what does the fox say", baz);

