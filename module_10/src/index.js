import menuItems from '../src/json/menu.json';
import menuItemTmpl from '../src/tmpl/item-tmpl.hbs';
import './styles.css';

const menuGallery = document.querySelector('.js-menu');

function menuCreator(menuItems) {
  const markup = menuItems.reduce((acc, item) => {
    acc = menuItemTmpl(item);
    return acc;
  }, '');
  menuGallery.insertAdjacentHTML('beforeend', markup);
}
