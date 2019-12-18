const bgColor = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  item: document.querySelector('.js-gallery'),
  body: document.querySelector('body'),
  switch: document.getElementById('theme-switch-control'),
};

const saveDataInput = localStorage.getItem('check');
const saveDataTheme = localStorage.getItem('theme');

if (saveDataInput == 'true') {
  refs.body.setAttribute('class', saveDataTheme);
  refs.switch.setAttribute('checked', saveDataInput);
}

refs.switch.addEventListener('click', choiceMade => {
  if (refs.switch.checked) {
    refs.body.classList.add(bgColor.DARK);
    refs.switch.setAttribute('checked', 'true');
  } else {
    refs.body.classList.replace(bgColor.DARK, bgColor.LIGHT);
    refs.switch.setAttribute('checked', 'false');
  }
  const theme = refs.body.getAttribute('class');
  localStorage.setItem('theme', theme);

  const input = choiceMade.currentTarget.attributes.checked;
  localStorage.setItem('check', input.value);
});

/* 
1st var
function choiceMade(event) { 
 if (refs.switch.checked) {
    refs.body.classList.add(bgColor.DARK);
    refs.switch.setAttribute('checked', 'true');

    localStorage.setItem('refs.switch', 'true'); 
  } else {
    refs.body.classList.replace(bgColor.DARK, bgColor.LIGHT);
    refs.switch.setAttribute('checked', 'false');
    localStorage.setItem(refs.switch, 'false'); 
  }
}
 if (localStorage.getItem(refs.switch) == 'true') {
  refs.body.classList.add(Theme.DARK);
  refs.switch.setAttribute('checked', 'true');
}  */
