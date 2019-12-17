import items from './menu.json';
import itemsTemplate from './templates/munu-item.hbs';

const refs = {
  postItem: document.querySelector('.js-menu'),
};

buildPostMenu(items);
function buildPostMenu(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postItem.insertAdjacentHTML('beforeend', markup);
}
