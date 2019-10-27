'use strict';

function countProps(obj) {
  const properties = Object.values(obj); // получаем массив свойств обекта
  return properties.length;
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
