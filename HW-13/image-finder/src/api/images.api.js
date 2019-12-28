/* 'https://pixabay.com/api/?key=14759738-915ddabe7286f1d5b09b52b7a&q=yellow+flowers&image_type=photo' */

const baseUrl = 'https://pixabay.com/api/';
export default {
  page: 1,
  fetchImages(query) {
    const options = {
      headers: {
        Authorization: '14759738-915ddabe7286f1d5b09b52b7a&q',
      },
    };
    const requestParams = '?=${query}&page=${this.page}';
    fetch(baseUrl + requestParams, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  },
};
