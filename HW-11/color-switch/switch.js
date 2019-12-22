'use strict';

import { colors } from './colors.js';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const counter = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    const min = 0;
    const max = colors.length - 1;
    this.isActive = true;
    this.switchColor = setInterval(() => {
      let index = randomIntegerFromInterval(min, max);
      refs.body.style.backgroundColor = colors[index];
    }, 1000);
  },
  stop() {
    console.log('Нажали стоп');
    clearInterval(this.switchColor);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', counter.start.bind(counter));
refs.stopBtn.addEventListener('click', counter.stop.bind(counter));
