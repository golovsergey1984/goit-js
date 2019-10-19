'use strict';

function findLongestWord(string) {
  let strArray = string.split(' ');
  let longestWordNumber = 0;
  let longestWord;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longestWordNumber) {
      longestWordNumber = strArray[i].length;
      longestWord = strArray[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
