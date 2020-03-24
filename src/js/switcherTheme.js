const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyPage = document.body.classList;
const switchTheme = document.querySelector('#theme-switch-control');
const theme = localStorage.getItem('theme');


if (theme) {
  bodyPage.add(theme);
}

if (bodyPage.value === Theme.DARK) {
  switchTheme.checked = true;
}

const checkedTheme =  event => {
    if (event.target.checked) {
      localStorage.setItem('theme', Theme.DARK);
      bodyPage.replace('light-theme', 'dark-theme');
    } else {
      localStorage.setItem('theme', Theme.LIGHT);
      bodyPage.replace('dark-theme', 'light-theme');
    }
  }

switchTheme.addEventListener('change',checkedTheme);
