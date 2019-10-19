'use strict';

function formatString(string) {
  let strArray = string.split('');
  let limitQuantityValue = 40;

  if (strArray.length > limitQuantityValue) {
    while (strArray.length > limitQuantityValue) {
      strArray.pop();
    }

    return strArray.join(``) + `...`;
  } else {
    return string;
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
