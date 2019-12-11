'use strict';
import images from './gallery-items.js';
const refs = {
  item: document.querySelector('.js-gallery'),
  href: document.querySelector('a'),
  div: document.querySelector('.lightbox'),
  img: document.querySelector('.lightbox__image'),
  lightBoxOverlay: document.querySelector('.lightbox__overlay'),
  list: document.querySelector('li'),
};

refs.item.addEventListener('click', choiceMade);

function choiceMade(event) {
  refs.div.classList.replace('lightbox', 'lightbox.is-open');
  event.preventDefault(refs.href);
  refs.img.src = event.target.getAttribute('data-source');

  refs.img.alt = event.target.getAttribute('alt');

  let index = event.target.getAttribute('data-index');
  refs.img.setAttribute('data-index', index);

  refs.div.addEventListener('click', function(event) {
    if (event.target.dataset.action === 'close-lightbox') Handler();
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) Handler();
  });

  refs.lightBoxOverlay.addEventListener('click', function(event) {
    Handler();
  });
}
function Handler() {
  refs.div.classList.replace('lightbox.is-open', 'lightbox');
  refs.img.src = '';
  refs.img.alt = '';
}
const replaceIMG = i => {
  refs.img.alt = images[i].description;
  refs.img.src = images[i].original;
  refs.img.setAttribute('data-index', i);
};

function setNextIMG(event) {
  if (!refs.img.dataset.index) return;
  let index = +refs.img.dataset.index;
  if (event.key === 'ArrowRight') {
    if (index === images.length - 1) return;
    index += 1;

    replaceIMG(index);
    return;
  }
  if (event.key === 'ArrowLeft') {
    if (index === 0) return;
    index -= 1;
    replaceIMG(index);
    return;
  }
}

window.addEventListener('keydown', setNextIMG);
