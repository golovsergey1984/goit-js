('use strict');
console.log(`Task 7`);
let rng = document.getElementById('font-size-control');
let someText = document.getElementById('text');

rng.oninput = function() {
  someText.style.fontSize = rng.value + 'px';
};
