'use strict';

const item = document.querySelector('.js-gallery');
item.addEventListener('click', choiceMade);
function choiceMade(event) {
  const div = document.querySelector('.lightbox');

  div.classList.replace('lightbox', 'lightbox.is-open');

  const img = document.querySelector('.lightbox__image');
  img.src = event.target.getAttribute('data-source');
  img.alt = event.target.getAttribute('alt');

  let btn = document.querySelector('.lightbox__button');
  btn.addEventListener('click', function(event) {
    if (event.target.dataset.action === 'close-lightbox') {
      div.classList.replace('lightbox.is-open', 'lightbox');
      img.src = '';
      img.alt = '';
    }
  });
}
