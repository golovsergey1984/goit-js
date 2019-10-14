"use strict";

const GOODS_NAME = "Генератор защитного поля";
let patternStringMessage
let goodsPrice;
goodsPrice = 1000;

/* Вариант №1 конкатенции или сложение строк */
const stringСoncatenationMessage =
  "Выбран «" + GOODS_NAME + "», цена за штуку " + goodsPrice + " кредитов";
console.log(stringСoncatenationMessage);

/* Вариант №2 шаблонная строка */
patternStringMessage = `Выбран «${GOODS_NAME}», цена за штуку ${goodsPrice} кредитов`;
console.log(patternStringMessage);

goodsPrice = 2000;
patternStringMessage = `Выбран «${GOODS_NAME}», цена за штуку ${goodsPrice} кредитов`;
console.log(patternStringMessage);
