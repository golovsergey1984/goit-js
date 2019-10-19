'use strict';

function calculateEngravingPrice(message, pricePerWord) {
  let messageArray = message.split(' ');
  let messageLength = messageArray.length;
  console.log('Количестов слов - ' + messageLength);
  console.log('Стоимость слова - ' + pricePerWord);

  let valuePriceEngraving = messageLength * pricePerWord;
  return 'Стоимость гравировки - ' + valuePriceEngraving;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
