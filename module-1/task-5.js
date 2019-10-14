"use strict";

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
        ` - возможна\nСтоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Чили":
    cost = 250;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна\nСтоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Австралия":
    cost = 170;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна\nСтоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Индия":
    cost = 80;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна\nСтоимость составляет ` +
        cost +
        ` кредитов`
    );
    break;

  case "Ямайка":
    cost = 120;
    alert(
      `Досавка в ` +
        userCountryDelivery +
        ` - возможна\nСтоимость составляет ` +
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
