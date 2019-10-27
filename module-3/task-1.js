'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = 'false';

const entries = Object.entries(user); // Создаем массив записей где 1я запись -ключ; 2я - значение

for (const entry of entries) {
  const key = entry[0]; // присваеваем значение ключа соответствующей записи
  const value = entry[1]; // присваеваем значение свойства соответствующей записи

  console.log(`${key}: ${value}`);
}
