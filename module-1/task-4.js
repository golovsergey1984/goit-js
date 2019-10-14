"use strict";

const USER_CREDITS = 23580;
const PRICE_PER_DROID = 3000;

const USER_QUANTITY_SELECTION = prompt("Сколько дроидов Вы хотите купить", "");
const TOTAL_PRICE = PRICE_PER_DROID * USER_QUANTITY_SELECTION;
let userDifference;
let userCash;

if (USER_QUANTITY_SELECTION === null) {
  alert("Отменено пользователем!");
} else if (USER_QUANTITY_SELECTION === "") {
  alert("Вы не указали количество дроидов к покупке!");
} else if (USER_QUANTITY_SELECTION === "0") {
  alert("Вы укали 0 шт, заказ отклонен!! ");
} else if (TOTAL_PRICE > USER_CREDITS) {
  userDifference = USER_CREDITS - TOTAL_PRICE;
  alert(
    `Недостаточно средств на счету!\nДля совершения указанной покупки, Вам не хватает ` +
      userDifference
  );
} else if (TOTAL_PRICE <= USER_CREDITS) {
  userCash = USER_CREDITS - USER_QUANTITY_SELECTION * PRICE_PER_DROID;
  alert(
    `Поздравляем!\nВы купили ` +
      USER_QUANTITY_SELECTION +
      ` шт. дроидов!\nНа Вашем счету осталось ` +
      userCash
  );
}

/* switch (USER_QUANTITY_SELECTION) {
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
    } else userCash = USER_CREDITS -  USER_QUANTITY_SELECTION * PRICE_PER_DROID ;
    alert(
      `Поздравляем!\nВы купили ` +
        USER_DROIDS_CHOICE +
        ` шт. дроидов!\nНа Вашем счету осталось ` +
        userCash
    );
} */
