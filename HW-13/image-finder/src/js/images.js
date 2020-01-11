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
    return;
  } else {
    imagesApi.resetPage();

    imagesApi.searchQuery = inputValue;

    imagesApi.fetchImages().then(insertGridList);
  }
}

function insertGridList(items) {
  const yCoordinateToScroll = document.body.offsetHeight;
  const markup = restResultTemplate(items);
  if (markup === '') {
    PNotify.notice({
      text: 'Tere is no matches with your request. Please, enter another topic',
    });

    return;
  }

  refs.inputResult.insertAdjacentHTML('beforeend', markup);
  windowScroll(yCoordinateToScroll);
  refs.loadMoreBtn.hidden = false;
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

function windowScroll(yCoordinateToScroll) {
  /* window.scrollTo(0, yCoordinateToScroll); */

  window.scrollTo({
    top: yCoordinateToScroll,
    behavior: 'smooth',
  });
}
