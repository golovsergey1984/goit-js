'use strict';

import images from './gallery-items.js';

const refs = {
  body: document.querySelector('body'),
  list: document.querySelector('ul'),
  div: document.querySelector('.lightbox__content'),
  rimg: document.querySelector('.lightbox__image'),
};

images.forEach(function(item, i, images) {
  refs.body.setAttribute('style', 'overflow-x: hidden ');
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  refs.rimg.setAttribute('data-index', '');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.setAttribute('href', item.original);
  const image = document.createElement('img');
  image.classList.add('gallery__image');

  refs.list
    .appendChild(li)
    .appendChild(a)
    .insertAdjacentElement('beforeEnd', image);
  image.src = item.preview;
  image.setAttribute('data-source', item.original);
  image.setAttribute('data-index', i);
  image.alt = item.description;
});

// 1й Вариант, без навигации
/* createGallery(images); */
/* function createGallery([{ preview, original, description }]) {
  for (let item of images) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    refs.rimg.setAttribute('data-index', '11');
    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.setAttribute('href', item.original);
    const image = document.createElement('img');
    image.classList.add('gallery__image');

    refs.list
      .appendChild(li)
      .appendChild(a)
      .insertAdjacentElement('beforeEnd', image);
    image.src = item.preview;
    image.setAttribute('data-source', item.original);
    image.setAttribute('data-index', '11');
    image.alt = item.description;
  }
} */
