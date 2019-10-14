"use strict";

const USER_CREDITS = 23580;
const ITEM_DROID = 3000;

const USER_DROIDS_CHOICE = prompt("Сколько дроидов Вы хотите купить", "");
const TOTAL_PRICE = ITEM_DROID * USER_DROIDS_CHOICE;
let userDifference;
let userCash;

switch (USER_DROIDS_CHOICE) {
  case null:
    alert("Отменено пользователем!");
    break;

  case "":
    alert(
      'Вы не указали количество дроидов к покупке!\nВведите заказ снова или нажмите "Отмена" '
    );
    break;

  default:
    if (TOTAL_PRICE > USER_CREDITS) {
      userDifference = USER_CREDITS - TOTAL_PRICE;
      alert(
        `Недостаточно средств на счету!\nДля совершения указанной покупки, Вам не хватает ` +
          userDifference
      );
      break;
    } else userCash = USER_CREDITS - USER_DROIDS_CHOICE * ITEM_DROID;
    alert(
      `Поздравляем!\nВы купили ` +
        USER_DROIDS_CHOICE +
        ` шт. дроидов!\nНа Вашем счету осталось ` +
        userCash
    );
}
