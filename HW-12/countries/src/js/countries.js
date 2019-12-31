'use strict';
import countryService from './services/country-service';
import restResultTemplate from '../templates/rest-result.hbs';
import restResultCardTemplate from '../templates/country-result.hbs';

import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import PNotify from 'pnotify/dist/es/PNotify';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';
var debounce = require('../../node_modules/lodash');

const refs = {
  countryChoice: document.getElementById('country-input'),
  inputResult: document.getElementById('country-list'),
  item: document.querySelectorAll('li'),
  countryCard: document.getElementById('country-item'),
};

let debounced = _.debounce(searchCountry, 500);

refs.countryChoice.addEventListener('input', debounced);

function searchCountry(e) {
  clearCountryCard();
  clearSearchList();
  e.preventDefault();

  let searchQuery = e.target.value;

  countryService.fetchCountry(searchQuery).then(data => {
    console.log(data);
    if (data.length > 10) {
      PNotify.error({
        text: 'Too many matches found. Please, enter a more specfic query!',
      });
    }
    if (data.length === 1) {
      const markup = buildItemCard(data);
      insertSearchCard(markup);
    }
    if (data.length >= 1 && data.length <= 10) {
      const markup = buildSearchList(data);
      insertSearchList(markup);
    }
  });
  /*    .catch(err => {
      let data = [];
      return data;
    }); */
}

function empty(data) {
  data[0] = 1;
  return data;
  console.log('Error');
}

function clearCountryCard() {
  refs.countryCard.innerHTML = '';
}

function clearSearchList() {
  refs.inputResult.innerHTML = '';
}

function insertSearchList(markup) {
  refs.inputResult.insertAdjacentHTML('beforeend', markup);
}

function insertSearchCard(markup) {
  refs.countryCard.insertAdjacentHTML('beforeend', markup);
}

function buildSearchList(items) {
  return restResultTemplate(items);
}

function buildItemCard(items) {
  return restResultCardTemplate(items);
}

/* 1й Вариант
const refs = {
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
