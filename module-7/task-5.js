('use strict');
console.log(`Task 5`);
let expression = document.getElementById('name-input');
let inputText = document.getElementById('name-output');

expression.oninput = function() {
  if (expression.value === '') {
    inputText.innerHTML = 'незнакомец';
  } else {
    inputText.innerHTML = expression.value;
  }
};
