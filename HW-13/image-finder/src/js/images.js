import imagesApi from '../api/images.api';
import restResultTemplate from '../template/result-images.hbs';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const refs = {
  searchForm: document.getElementById('search-form'),
  inputResult: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreImagesHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  clearSearchList();
  const inputValue = e.currentTarget.elements.query.value;
  if (inputValue === '') {
    PNotify.error({
      text: 'You did not match any topic!',
    });
  } else {
    imagesApi.resetPage();

    imagesApi.searchQuery = inputValue;

    imagesApi.fetchImages().then(insertGridList);
  }
}

function insertGridList(items) {
  const markup = restResultTemplate(items);
  refs.inputResult.insertAdjacentHTML('beforeend', markup);
}

function loadMoreImagesHandler() {
  imagesApi.fetchImages().then(insertGridList);
  PNotify.success({
    text: 'new pictures uploaded successfully',
  });
}

function clearSearchList() {
  refs.inputResult.innerHTML = '';
}
