const baseUrl = 'https://restcountries.eu/rest/v2';
const resource = '/name/';

export default {
  fetchCountry(searchQuery) {
    return fetch(baseUrl + resource + searchQuery)
      .then(response => {
        console.log(response);

        return response.json();
      })
      .catch(error => {
        console.warn(error);
      });
  },
};
