'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    const timer = document.querySelector(selector);

    console.log(timer);
    this.selector = setInterval(() => {
      const date = new Date();
      const time = targetDate - date;
      updateClockFace(time, timer);
    }, 1000);
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace(time, timer) {
  const refs = {
    updateDay: timer.querySelector('[data-value="days"]'),
    updateHours: timer.querySelector('[data-value="hours"]'),
    updateMins: timer.querySelector('[data-value="mins"]'),
    updateSecs: timer.querySelector('[data-value="secs"]'),
  };

  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
    4,
    '0',
  );
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.updateDay.textContent = days;
  refs.updateHours.textContent = hours;
  refs.updateMins.textContent = mins;
  refs.updateSecs.textContent = secs;
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 22, 2019'),
});

new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Mar 23, 2021'),
});
