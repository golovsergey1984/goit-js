import imagesApi from '../api/images.api';

const refs = {
  searchForm: document.getElementById('search-form'),
  inputList: document.getElementById('images-list'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  console.dir(e.currentTarget);
  const searchQuery = e.currentTarget.elements.query.value;
  console.log(searchQuery);
  imagesApi.fetchImages(searchQuery);
}
