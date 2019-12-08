('use strict');
console.log('task-1');
const categories = document.querySelector('#categories');

const res = categories.children.length;

const str = [...categories.children]
  .map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
  .join('\n');
console.log(str);

console.log(categories);
/* // Создаем переменную categories по id и сохраняем в ней соответствующий html
let categories = document.getElementById('categories');

let ulCategories = categories.children.length;
console.log('В списке ' + ulCategories + ' категории');

// Вариант последовательный расчет
console.log(
  '..................Вариант последовательный расчет......................',
);
let titles = document.querySelectorAll('ul>li>H2');
for (let title of titles) {
  console.log('Категория: ' + title.innerHTML);
}

let elements = document.querySelectorAll('ul>li>ul');
for (let elem of elements) {
  console.log('Количество элементов: ' + elem.children.length);
}
// Вариант расчет в цикле без перехода к соседу
console.log(
  '..................Вариант расчет в цикле без перехода к соседу......................',
);
for (let i = 0; i < ulCategories; i++) {
  let liItem = categories.querySelector('ul>li>H2').innerText;
  let value = categories.querySelector('ul').children.length;

  console.log('Категория: ' + liItem);
  console.log('Количество элементов: ' + value);
}
 */
