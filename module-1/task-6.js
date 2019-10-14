"use strict";

let c;
let input;
let total = 0;

const USER_NUMBER = prompt("Введите желаемое число", "");

if (USER_NUMBER === null) {
  alert("Вы решили не экспериментировать...");
}

input = parseInt(USER_NUMBER);
total = parseInt(total);

if (isNaN(input)) {
  alert("Это не число");
}

do {
  input = Number(input);
  total = Number(total);
  total = total + input;
  input = prompt('Введите число ещё раз или нажмите "Отмена"', "");
  if (isNaN(input)) {
    alert(input + ` - является не числом`);
    break;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ` + total);
