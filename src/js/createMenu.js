import menuItems from '../json/menu.json';
import menuItemTmpl from '../tmpl/item-tmpl.hbs';

const menuGallery = document.querySelector('.js-menu');
function menuCreator(items) {
    const markup = items.reduce((acc, item) => acc + menuItemTmpl(item), '');
    menuGallery.insertAdjacentHTML('beforeend', markup);
}
menuCreator(menuItems);
