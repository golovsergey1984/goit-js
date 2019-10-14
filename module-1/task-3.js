"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
const USER_PASSWORD = prompt("Форма запроса пароля", "");

let messagePassword;

switch (USER_PASSWORD) {
  case null:
    messagePassword = "Отменено пользователем!";
    alert(messagePassword);
    break;

  case ADMIN_PASSWORD:
    prompt("Форма запроса пароля", "Добро пожаловать!");
    break;

  default:
    prompt("Форма запроса пароля", "Доступ запрещен, неверный пароль");
    break;
}

alert(USER_PASSWORD);
