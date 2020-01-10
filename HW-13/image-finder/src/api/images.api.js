/* 'https://pixabay.com/api/?key=14759738-915ddabe7286f1d5b09b52b7a&q=yellow+flowers&image_type=photo' */

const baseUrl = 'https://pixabay.com/api/?key=';
export default {
  page: 1,
  query: '',
  fetchImages() {
    const API_KEY = '14759738-915ddabe7286f1d5b09b52b7a';
    const requestParams = '&q=' + this.query + '&page=' + this.page;

    return fetch(baseUrl + API_KEY + requestParams).then(response =>
      response.json().then(parsedResponse => {
        this.icrementPage();

        return parsedResponse.hits;
      }),
    );
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },

  icrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
