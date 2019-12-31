const baseUrl = 'https://restcountries.eu/rest/v2';
const resource = '/name/';

export default {
  fetchCountry(searchQuery) {
    return fetch(baseUrl + resource + searchQuery)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        let data = [];
        return data;
      });
  },
};
