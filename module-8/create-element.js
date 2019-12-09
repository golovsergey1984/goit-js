'use strict';

import images from './gallery-items.js';

let list = document.querySelector('ul');

createGallery(images);

function createGallery([{ preview, original, description }]) {
  for (let item of images) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.setAttribute('href', item.original);
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    list
      .appendChild(li)
      .appendChild(a)
      .insertAdjacentElement('beforeEnd', image);
    image.src = item.preview;
    image.setAttribute('data-source', item.original);
    image.alt = item.description;
  }
}
