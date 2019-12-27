'use strict';
import countryService from './services/country-service';
import restResultTemplate from '../templates/rest-result.hbs';
import restResultCardTemplate from '../templates/country-result.hbs';

import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import PNotify from 'pnotify/dist/es/PNotify';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const refs = {
  countryChoice: document.getElementById('country-input'),
  inputResult: document.getElementById('country-list'),
  item: document.querySelectorAll('li'),
  countryCard: document.getElementById('country-item'),
};

refs.countryChoice.addEventListener('input', searchCountry);

function searchCountry(e) {
  clearSearchList();
  e.preventDefault();

  const searchQuery = e.currentTarget.value;

  countryService.fetchCountry(searchQuery).then(data => {
    console.log(data);
    if (data.length > 10) {
      PNotify.error({
        text: 'Too many matches found. Please, enter a more specfic query!',
      });
    }
    if (data.length === 1) {
      const markup = buildItemCard(data);
      insertSearchList(markup);
      countryChoice = '';
    }
    if (data.length >= 1 && data.length <= 10) {
      const markup = buildSearchList(data);
      insertSearchList(markup);
    }
  });
}

function clearSearchList() {
  refs.inputResult.innerHTML = '';
}

function insertSearchList(markup) {
  refs.inputResult.insertAdjacentHTML('beforeend', markup);
}

function buildSearchList(items) {
  return restResultTemplate(items);
}

function buildItemCard(items) {
  return restResultCardTemplate(items);
}

/* const refs = {
  countryChoice: document.getElementById('country-input'),
  baseUrl: 'https://restcountries.eu/rest/v2',
  resource: '/name/',
  inputResult: document.querySelector('#country-list'),
  item: document.querySelectorAll('li'),
};

refs.countryChoice.oninput = function() {
  let country = refs.countryChoice.value;

  fetch(refs.baseUrl + refs.resource + country)
    .then(response => {
      console.log(response);

      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountryList(data);
    });

  function renderCountryList(countries) {
    if (countries.length < 10) {
      const markup = countries
        .map(country => restResultTemplate(country))
        .join('');
      refs.inputResult.insertAdjacentHTML('afterend', markup);
      console.log(markup);
    } else {
      refs.inputResult.insertAdjacentHTML(
        'afterend',
        '<p>Найдено слишком много совпадений</p>',
      );
    }
  }
};
 */
