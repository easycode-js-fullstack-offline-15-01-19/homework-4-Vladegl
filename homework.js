// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------

// 1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
//     multiply(1,2,3) = 6 (1*2*3)

function multiply() {
    if (!arguments.length) return console.log(0);
    let mul = 1;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) return console.log('Error, enter a number');
        mul *= arguments[i];
    }
    return mul;
}

console.log(multiply(1, 2, 3));


//2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(notReversedString) {
    if (typeof notReversedString !== 'string') return console.log('Error, enter a string');
    let reversedString = '';
    for (i = notReversedString.length - 1; i >= 0; i--) {
        reversedString += notReversedString[i];
    }

    return reversedString;
}

console.log(reverseString('test'));

//3. Создать функцию, которая в качестве аргумента принимает строку из букв
// и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

function getCodeStringFromText(someCharString) {

    if (typeof someCharString !== 'string') return console.log('Error, enter a string');

    let unicodeString = '';
    for (let i = 0; i < someCharString.length; i++) {
        if (i === someCharString.length - 1) {
            unicodeString += someCharString.charCodeAt(i);
        } else {
            unicodeString += someCharString.charCodeAt(i) + ' ';
        }
    }

    return unicodeString;
}

console.log(getCodeStringFromText('hello'));

//4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает
// “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.
// Числа в строке указаны как пример вы подставляете реальные числа.


function lottery(usersNumber) {

    if (typeof usersNumber !== 'number' || isNaN(usersNumber)) return console.log('Error, enter a number');
    if (usersNumber < 1 || usersNumber > 10) return console.log('Error, your number must be from 1 to 10');

    let luckyNumber;
    luckyNumber = Math.ceil(Math.random() * 10);
    if (usersNumber === luckyNumber) {
        return console.log('Вы выиграли');
    } else {
        return console.log(`Вы не угадали ваше число ${usersNumber} а выпало число ${luckyNumber}`)
    }
}

lottery(7);

//5. Создать функцию, которая принимает число n и возвращает массив,
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]


function getArray(usersArrayNumber) {
    if (typeof usersArrayNumber !== 'number' || isNaN(usersArrayNumber)) return console.log('Error, enter a number');
    let usersArray = [];

    for (i = 1; i <= usersArrayNumber; i++) {
        usersArray.push(i)
    }

    return usersArray;
}

console.log(getArray(10));

//6. Создать функцию, которая принимает массив, а возвращает новый массив с 
// дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]


function doubleArray(someArray) {
    someArray = someArray.concat(someArray);
    return someArray;
}

console.log(doubleArray([2, 6, 1]));


//7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
// массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.


function changeCollection() {

    let finalArray = [];

    for (let i = 0; i < arguments.length; i++) {

        if (!Array.isArray(arguments[i])) return console.log('Error, enter only arrays');

        finalArray.push(arguments[i].splice(1));
    }

    return finalArray;
}

console.log(changeCollection([2, 3, 5, 2, 3], [4, 5, 6], ['ata', 'tura', 'tutus']));


//8. Создать функцию которая принимает массив пользователей,
// поле на которое хочу проверить и значение на которое хочу проверять.
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями
// соответсвующие указанным параметрам.

//funcGetUsers(users, “gender”, “male”);
// [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

let arrayOfUsers = [
    {
        name: 'Denis',
        age: '29',
        gender: 'male'
    },
    {
        name: 'Ihor',
        age: '20',
        gender: 'male'
    },
    {
        name: 'Anastasiya',
        age: '13',
        gender: 'female'
    },
    {
        name: 'Vladimir',
        age: '47',
        gender: 'male'
    },
    {
        name: 'Katerina',
        age: '35',
        gender: 'female'
    },
    {
        name: 'Valeria',
        age: '18',
        gender: 'female'
    },
    {
        name: 'Vlad',
        age: '20',
        gender: 'male'
    }
]


function getUsers(someUsersArray, field, value) {

    if (!someUsersArray || !field || !value) return console.log('Enter all atributes');
    if (!Array.isArray(someUsersArray)) return console.log('Error, enter an array to the first argument');
    if (typeof field !== 'string') return console.log('Error, enter correct field type(second argument)');
    if (typeof value !== 'string') return console.log('Error, enter correct value type(third argument)');

    let newArrayOfUsers = [];

    for (let i = 0; i < someUsersArray.length; i++) {
        for (let key in someUsersArray[i]) {
            if (key === field && someUsersArray[i][key] === value) {
                newArrayOfUsers = newArrayOfUsers.concat(someUsersArray[i]);
            }
        }
    }

    if (!newArrayOfUsers.length) return console.log('No matches, try different fields names/their values');

    return newArrayOfUsers;
}

console.log(getUsers(arrayOfUsers, 'gender', 'male'));


//-------------------------------Функции высшего порядка. Задачи.----------------------------------------


// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
//
// Первая функция возвращает строку “New value: ” и результат обработки:
//
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function handler1(anyArray) {

    if (!Array.isArray(anyArray)) return console.log('Error, enter an array');

    let summaryArr = [];

    for (let i = 0; i < anyArray.length; i++) {
        summaryArr.push(anyArray[i][0].toUpperCase() + anyArray[i].substr(1));
    }

    return summaryArr.join('');
}

function handler2(anyArray) {

    if (!Array.isArray(anyArray)) return console.log('Error, enter an array');

    let summaryArr = [];

    for (let i = 0; i < anyArray.length; i++) {

        if (typeof !anyArray[i] === 'number' || isNaN(anyArray[i])) return console.log('Error, all atributes must be some numbers');

        summaryArr.push(anyArray[i] * 10);
    }
    return summaryArr.join(', ');

}


function handler3(anyObjArr) {

    if (!Array.isArray(anyObjArr)) return console.log('Error, enter an array');

    let summaryArr = [];

    for (let i of anyObjArr) {
        summaryArr.push(`${i.name} is ${i.age}`);
    }

    return summaryArr.join(', ');
}


function handler4(anyArray) {

    if (!Array.isArray(anyArray)) return console.log('Error, enter an array');


    let summaryArr = [];

    for (let i = 0; i < anyArray.length; i++) {
        summaryArr.push(reverseString(anyArray[i]));
    }
    return summaryArr.join(', ');
}


function parentHandler(anyArray, someFunc) {

    if (!Array.isArray(anyArray)) return console.log('Error, enter an array');

    return 'New value: ' + someFunc(anyArray);
}


console.log(parentHandler(['my', 'name', 'is', 'Trinity'], handler1));
console.log(parentHandler([10, 20, 30], handler2));
console.log(parentHandler([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));
console.log(parentHandler(['abc', '123'], handler4));