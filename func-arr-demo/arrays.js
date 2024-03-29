
const source = [19, 8, 9, 4, 7, 12, 20, 10, 11, 15];

/*
    filter
    Задача: оставить только нечетные элементы массива
    
*/

const filtered = []
for (let i = 0; i < source.length; i++) {

    if (isNumberOdd(source[i])) {
        filtered.push(source[i]);
    }
}
// console.log(filtered);

function isNumberOdd(number) {
    return number % 2 !== 0;
    // if (number % 2 !== 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

const filtered2 = source.filter(isNumberOdd);
// console.log(filtered2);

const filtered3 = source.filter(function (number) {
    return number % 2 !== 0;
})
// console.log(filtered3);

const filtered4 = source.filter(number => number % 2 !== 0);
// console.log(filtered4);


/*
    map
    Задача: увеличить каждый элемент массива на 3
*/

const updated = []
for (let i = 0; i < filtered4.length; i++) {
    updated.push(filtered4[i] * 3);
}
// console.log(updated);

const updated2 = filtered4.map(function (item) {
    return item * 3;
})
// console.log(updated2);

const updated3 = filtered4.map(item => item * 3); //
console.log(updated3);



/*
    reduce
    Задача: посчитать сумму элементов
*/

let total = 0;
for (let i = 0; i < updated3.length; i++) {
    total = total + updated3[i];
}
// console.log(total);


const total2 = updated3.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
// console.log(total2);

const total3 = updated3.reduce((a, b) => a + b);
// console.log(total3);


// все и сразу
const finalTotal = source
    .filter(el => el % 2 !== 0) // <- передаваемые функции чистые, детерменированные
    .map(el => el * 3) // <- функции принимает другую функцию
    .reduce((a,b) => a + b);

// исходные данные без изменений, сохранена иммутабельность данных
console.log(finalTotal);
console.log(source);



/*
    Таким образом методы для работы с массивами - проявление функционального стиля программирования в JS:
    1. Функции, которые мы передаем в метод чистые, недерменированные
    2. Исходные данные не изменены
    3. Методы для работы с массивами - это функции высших порядков (способы принимать в себя другие функции)
*/


/* 
    Самостоятельно every, find, indexOf
*/


