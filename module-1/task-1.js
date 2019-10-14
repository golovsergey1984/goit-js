"use strict";

const GOODS_NAME = "Генератор защитного поля";
const GOODS_PRICE = 1000;

/* Вариант №1 конкатенции или сложение строк */
const stringСoncatenationMessage =
  "Выбран «" + GOODS_NAME + "», цена за штуку " + GOODS_PRICE + " кредитов";
console.log(stringСoncatenationMessage);

/* Вариант №2 шаблонная строка */
const patternStringMessage = `Выбран «${GOODS_NAME}», цена за штуку ${GOODS_PRICE} кредитов`;
console.log(patternStringMessage);
