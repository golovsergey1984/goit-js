"use strict";

const GOODS_TOTAL = 20;
const GOODS_ORDERED = 19;

if (GOODS_ORDERED > GOODS_TOTAL) {
  console.log("На складе недостаточно товаров!");
} else 
console.log("Заказ оформлен, с Вами свяжется менеджер");
