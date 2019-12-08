('use strict');
console.log(`Task 2`);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let list = document.getElementById('ingredients');
for (let item of ingredients) {
  let li = document.createElement('li');
  li.innerHTML = item;
  list.appendChild(li);
}

console.log(list);
