('use strict');
console.log(`Task 4`);

let btn = document.getElementById('counter');
let counterValue = document.getElementById('value').textContent;

btn.addEventListener('click', function(event) {
  if (event.target.dataset.action === 'decrement') counterValue--;
  if (event.target.dataset.action === 'increment') counterValue++;
  document.getElementById('value').innerHTML = counterValue;
});
