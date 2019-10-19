'use strict';
const INVALIWORD1 = 'sale';
const INVALIWORD2 = 'spam';

function checkForSpam(str) {
  let string = str.replace(/[&.?*+^$[\]\\(){}|-]/g, '');

  let strLowerCase = string.toLowerCase();
  console.log(strLowerCase);
  let strArray = strLowerCase.split(' ');

  return strArray.includes(INVALIWORD1) || strArray.includes(INVALIWORD2);
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How& to earn fast money?')); // true
