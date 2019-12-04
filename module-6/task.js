'use strict';

import users from './users.js';

// Answer task # 1

const getUserNames = users => users.map(({ name }) => name);
/* 
Вариант 2
const getUserNames = users => {
  console.log('Answer task-1');
  const names = users.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 2

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color).map(({ name }) => name);

/* 
Вариант 2

const getUsersWithEyeColor = (users, color) => {
  console.log('Answer task-2');
  const base = users.filter(user => user.eyeColor === color);
  const names = base.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 3
const getUsersWithGender = (users, genderUser) =>
  users.filter(({ gender }) => gender === genderUser).map(({ name }) => name);
/* 
Вариант 2
const getUsersWithGender = (users, gender) => {
  console.log('Answer task-3');
  const base = users.filter(user => user.gender === gender);
  const names = base.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 4
const getInactiveUsers = users =>
  users.filter(({ isActive }) => !isActive).map(({ name }) => name);

/* Вариант #2
 const getInactiveUsers = users => {
  console.log('Answer task-4');
  const base = users.filter(user => !user.isActive);
  const names = base.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 5
const getUserWithEmail = (users, emailUser) =>
  users.filter(({ email }) => email === emailUser).map(({ name }) => name);
/* 
Вариант #2
const getUserWithEmail = (users, email) => {
  console.log('Answer task-5');
  const name = users.find(user => user.email === email);
  return name.name;
}; */

//
//
// Answer task # 6
const getUsersWithAge = (users, min, max) =>
  users.filter(({ age }) => age >= min && age <= max).map(({ name }) => name);
/* Вариант #2
const getUsersWithAge = (users, min, max) => {
  console.log('Answer task-6');
  const base = users.filter(user => user.age >= min && user.age <= max);
  const names = base.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 7

const calculateTotalBalance = users => {
  const sum = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0,
  );
  return sum;
};

//
//
// Answer task # 8

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);
/* 
Вариант 2
const getUsersWithFriend = (users, friendName) => {
  console.log('Answer task-8');
  const base = users.filter(user => user.friends.includes(friendName));
  const names = base.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 9

const getNamesSortedByFriendsCount = users =>
  users
    .sort(function(a, b) {
      return a.friends.length - b.friends.length;
    })
    .map(user => user.name);
/* 
Вариант 2
const getNamesSortedByFriendsCount = users => {
  console.log('Answer task-9');
  const base = users.sort(function(a, b) {
    return a.friends.length - b.friends.length;
  });
  const names = base.map(user => user.name);
  return names;
}; */

//
//
// Answer task # 10
const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((skills, user) => [...skills, ...user], [])
    .sort((b, a) => b.localeCompare(a, 'en'))
    .filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });

/* 
Вариант 2
const getSortedUniqueSkills = users => {
  console.log('Answer task-10');
  const skills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort((b, a) => b.localeCompare(a, 'en'));
  }, []);

  let uniqueArray = skills.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
  return uniqueArray;
}; */
//
//
// task # 1: Получить массив имен всех пользователей (поле name).
console.log('Answer task-1');
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//
//
// task # 2: Получить массив объектов пользователей по цвету глаз (поле eyeColor).
console.log('Answer task-2');
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//
//
// task # 3: Получить массив имен пользователей по полу (поле gender).
console.log('Answer task-3');
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//
//
// task # 4: Получить массив только неактивных пользователей (поле isActive).
console.log('Answer task-4');
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//
//
// task # 5: Получить пользоваля (не массив) по email (поле email, он уникальный).
console.log('Answer task-5');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//
//
// task # 6: Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
console.log('Answer task-6');
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//
//
// task # 7: Получить общую сумму баланса (поле balance) всех пользователей.
console.log('Answer task-7');
console.log(calculateTotalBalance(users)); // 20916

//
//
// task # 8: Массив имен всех пользователей у которых есть друг с указанным именем.
console.log('Answer task-8');
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//
//
// task # 9: Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
console.log('Answer task-9');
console.log(getNamesSortedByFriendsCount(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//
//
// task # 10: Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
console.log('Answer task-10');
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
