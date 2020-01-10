import infiniteScroll from 'infinite-scroll';
import imageTemplate from '../template/result-images.hbs';

import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const API_KEY = '14759738-915ddabe7286f1d5b09b52b7a';
const feedContainer = document.querySelector('#feed');
let inputValue = '';

const refs = {
  searchForm: document.getElementById('search-form'),
  inputResult: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load more"]'),
};

refs.searchForm.addEventListener('submit', listener);

function listener(e) {
  clearSearchList();

  infScrollInstance.pageIndex = 1;
  refs.searchForm.value = '';
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;
  inputValue = input.value;
  console.log(inputValue);
  infScrollInstance.loadNextPage();
}

const infScrollInstance = new infiniteScroll(feedContainer, {
  responseType: 'text',
  history: false,

  path: function() {
    return (
      'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=' +
      API_KEY +
      '&q=' +
      inputValue +
      '&page=' +
      this.pageIndex
    );
  },
});

infScrollInstance.on('load', response => {
  const images = JSON.parse(response);
  const items = images.hits;

  const markup = items.map(item => imageTemplate(item)).join('');

  const proxyEL = document.createElement('div');
  proxyEL.innerHTML = markup;

  const parsedItems = proxyEL.querySelectorAll('.photo-card');

  infScrollInstance.appendItems(parsedItems);
  PNotify.success({
    text: 'new pictures uploaded successfully',
  });
});

infScroll.on('error', function(error, path) {
  PNotify.error({
    text: 'Try later. The server is busy now',
  });
});

function clearSearchList() {
  refs.inputResult.innerHTML = '';
}
