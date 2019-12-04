('use strict');
console.log(`Task 3`);

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
let list = document.getElementById('gallery');
list.setAttribute('style', 'list-style-type:none; display: flex;');
createGallery(images);

function createGallery([{ url, alt }]) {
  for (let item of images) {
    const li = document.createElement('li');
    const image = document.createElement('img');
    image.setAttribute('style', 'width: 200px; margin-right: 20px');
    list.appendChild(li).insertAdjacentElement('beforeEnd', image);
    image.src = item.url;
    image.alt = item.alt;
  }
}
