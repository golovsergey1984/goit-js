('use strict');
console.log(`Task 6`);
let expression = document.getElementById('validation-input');

let nesesseryLength = expression.getAttribute('data-length');
let intNesesseryLength = parseInt(nesesseryLength, 10);

expression.oninput = function() {
  if (expression.value.length === intNesesseryLength) {
    expression.classList.remove('invalid');
    expression.classList.add('valid');
  }
  if (expression.value.length === 0) {
    expression.classList.remove('valid');
    expression.classList.remove('invalid');
  }
  if (
    expression.value.length !== intNesesseryLength &&
    expression.value.length !== 0
  ) {
    expression.classList.add('invalid');
  }
};
