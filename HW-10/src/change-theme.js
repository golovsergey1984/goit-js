const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  item: document.querySelector('.js-gallery'),
  body: document.querySelector('body'),
  switch: document.getElementById('theme-switch-control'),
};
refs.switch.addEventListener('click', choiceMade);

function choiceMade(event) {
  if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.setAttribute('checked', 'true');
    localStorage.setItem(refs.switch, 'true');
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    refs.switch.setAttribute('checked', 'false');
    localStorage.setItem(refs.switch, 'false');
  }
  if (localStorage.getItem(refs.switch) == 'true') {
    refs.switch.setAttribute('checked', 'false');
  }
}
