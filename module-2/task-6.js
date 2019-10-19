'use strict';

const ENTER_NUMBER = 'Введите любое число';
const SUM_RESULT = 'Сумма введеных Вами чисел равна = ';
const MESSAGE_IS_EMPTY =
  'Было введено не число, пожалуйста нажмите "Отмена" для выхода или введите число';
let message;
let userNumberEnter;
const numbers = [];
let total = 0;
let numberToSum;

do {
  userNumberEnter = prompt(ENTER_NUMBER, '');

  if (userNumberEnter === '' || isNaN(userNumberEnter)) {
    message = MESSAGE_IS_EMPTY;
    alert(message);
  } else numbers.push(userNumberEnter);
} while (userNumberEnter !== null);

for (let i = 0; i < numbers.length; i++) {
  numberToSum = parseFloat(numbers[i]);
  if (isNaN(numberToSum)) {
    numberToSum = 0;
  }
  total = total + numberToSum;
}

alert(SUM_RESULT + total);
