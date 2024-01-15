
const source = [19, 8, 9, 4, 7, 12, 20, 10, 11, 15];

console.log(source.some(el => el % 2 !==0))

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
// console.log(source)


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
console.log(total);

// [ 57, 27, 21, 33, 45 ]
const total2 = updated3.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
// console.log(total2);

const total3 = updated3.reduce((a, b) => a + b);
console.log(total3);


const finalTotal = source
    .filter(el => el % 2 !== 0)
    .map(el => el * 3)
    .reduce((a,b) => a + b);

console.log(finalTotal);


/* 
    Самостоятельно every, find, indexOf
*/


