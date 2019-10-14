"use strict";

const PRINT_COUNTRY =
  "Напишите название страны в которую нужно доставить товар";
const CANCEL_BY_USER = "Отменено пользователем!";
const NOT_DELIVERY = "В вашей стране доставка не доступна";
const MESSAGE_IS_EMPTY = "Вы не указали ни одной страны";

const CNINA = "Китай";
const Chili = "Чили";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
const AUSTRALIA = "Австралия";

let message = prompt(PRINT_COUNTRY);
let priсe = 0;
let countryName;

if (message === null) {
  message = CANCEL_BY_USER;
} else if (message === "") {
  message = MESSAGE_IS_EMPTY;
} else {
  countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

  switch (countryName) {
    case CNINA:
      priсe = 100;
      break;

    case Chili:
      priсe = 250;
      break;

    case AUSTRALIA:
      priсe = 170;
      break;

    case INDIA:
      priсe = 80;
      break;
    case JAMAICA:
      priсe = 120;
      break;
    default:
      message = NOT_DELIVERY;
  }
}

if (priсe > 0) {
  let PRICE_DELIVERY = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
  message = PRICE_DELIVERY;
}
alert(message);




/*
Старая версия

let cost;
let userCountryDelivery;
const USER_CHOICE = prompt(
  "Укажите в какую страну необходимо оформить доставку?",
  ""
);
switch (USER_CHOICE) {
  case "":
    alert(
      'Вы не указали страну к доставке!\nУкажите страну заново или нажмите "Отмена" '
    );
    break;
    throw "stop";

  case null:
    alert("Отменено пользователем!");
    break;
    throw "stop";
}

userCountryDelivery = USER_CHOICE.toLowerCase();
userCountryDelivery =
  userCountryDelivery[0].toUpperCase() + userCountryDelivery.substring(1);
switch (userCountryDelivery) {
  case "Китай":
    cost = 100;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна
        Стоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Чили":
    cost = 250;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна
        Стоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Австралия":
    cost = 170;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна
        Стоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Индия":
    cost = 80;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна
        Стоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Ямайка":
    cost = 120;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна
        Стоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  default:
    alert(
      `К сожалению, в указанную Вами страну: ` +
        userCountryDelivery +
        ` Мы доставки не совершаем :(`
    );
    break;
}
 */
