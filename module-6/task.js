'use strict';

import users from './users.js';
// Функция, выбирающая из итогового массива имя юзера
function result(arr) {
  const names = arr.map(user => user.name);
  console.log(names);
}

// Answer task # 1
const getUserNames = users => {
  console.log('Answer task-1');
  result(users);
};

//
//
// Answer task # 2
const getUsersWithEyeColor = (users, color) => {
  console.log('Answer task-2');
  const base = users.filter(user => user.eyeColor === color);
  result(base);
};

//
//
// Answer task # 3
const getUsersWithGender = (users, gender) => {
  console.log('Answer task-3');
  const base = users.filter(user => user.gender === gender);
  result(base);
};

//
//
// Answer task # 4
const getInactiveUsers = users => {
  console.log('Answer task-4');
  const base = users.filter(user => !user.isActive);
  result(base);
};

//
//
// Answer task # 5
const getUserWithEmail = (users, email) => {
  console.log('Answer task-5');
  const name = users.find(user => user.email === email);
  return name.name;
};

//
//
// Answer task # 6
const getUsersWithAge = (users, min, max) => {
  console.log('Answer task-6');
  const base = users.filter(user => user.age >= min && user.age <= max);
  result(base);
};

//
//
// Answer task # 7
const calculateTotalBalance = users => {
  console.log('Answer task-7');
  const sum = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0,
  );
  return sum;
};

//
//
// Answer task # 8
const getUsersWithFriend = (users, friendName) => {
  console.log('Answer task-8');
  const base = users.filter(user => user.friends.includes(friendName));
  result(base);
};

//
//
// Answer task # 9
const getNamesSortedByFriendsCount = users => {
  console.log('Answer task-9');
  const base = users.sort(function(a, b) {
    return a.friends.length - b.friends.length;
  });
  result(base);
};

//
//
// Answer task # 10
const getSortedUniqueSkills = users => {
  console.log('Answer task-10');
  const skills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort();
  }, []);

  let uniqueArray = skills.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
  return uniqueArray;
};
//
//
// task # 1: Получить массив имен всех пользователей (поле name).
getUserNames(users);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//
//
// task # 2: Получить массив объектов пользователей по цвету глаз (поле eyeColor).
getUsersWithEyeColor(users, 'blue'); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//
//
// task # 3: Получить массив имен пользователей по полу (поле gender).
getUsersWithGender(users, 'male'); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//
//
// task # 4: Получить массив только неактивных пользователей (поле isActive).
getInactiveUsers(users); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//
//
// task # 5: Получить пользоваля (не массив) по email (поле email, он уникальный).
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//
//
// task # 6: Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
getUsersWithAge(users, 20, 30); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

getUsersWithAge(users, 30, 40); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//
//
// task # 7: Получить общую сумму баланса (поле balance) всех пользователей.
console.log(calculateTotalBalance(users)); // 20916

//
//
// task # 8: Массив имен всех пользователей у которых есть друг с указанным именем.
getUsersWithFriend(users, 'Briana Decker'); // [ 'Sharlene Bush', 'Sheree Anthony' ]
getUsersWithFriend(users, 'Goldie Gentry'); // [ 'Elma Head', 'Sheree Anthony' ]

//
//
// task # 9: Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
getNamesSortedByFriendsCount(users);
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//
//
// task # 10: Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
