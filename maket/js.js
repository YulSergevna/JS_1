// Задание 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function numToObject(num) {
    if (isNaN(num) || num > 999) {
        console.log("Введено некорректное значение. Необходимо передать число меньше 1000")
        return {};
    }
    let numArray = String(num).split('');
    let object = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
    };
    if (numArray.length == 3) {
        object['единицы'] = +numArray[2];
        object['десятки'] = +numArray[1];
        object['сотни'] = +numArray[0];
    } else if (numArray.length == 2) {
        object['единицы'] = +numArray[1];
        object['десятки'] = +numArray[0];
    } else {
        object['единицы'] = +numArray[0];
    }

    return object;
}

console.log(numToObject(254));
console.log(numToObject(5));
console.log(numToObject(24));
console.log(numToObject(2554));
console.log(numToObject('adasdasdas'));


