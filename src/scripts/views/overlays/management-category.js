import ModuleCategoryInitiator from '../../utils/module-category-initiator';

/* eslint-disable no-underscore-dangle */
const ManagementCategory = {
  async render() {
    return `
      <div id="overlayHeader">
        <button class="overlay-back-button">
          <span class="material-icons">arrow_back</span>
        </button>
        <div class="overlay-title">
          <h2>KATEGORI</h2>
        </div>
        <button class="open-search">
          <span class="material-icons">search</span>
        </button>
        <div class="kasir-search-container">
          <input type="search" id="kasirSearch" placeholder="Cari kategori"/>
        </div>
      </div>
      <div id="overlayBody">
        <div class="module-category-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    const openSearchBtn = document.querySelector('button.open-search');
    const kasirSearchContainer = document.querySelector('div.kasir-search-container');
    openSearchBtn.addEventListener('click', () => kasirSearchContainer.classList.toggle('open'));
    document.querySelector('#overlayBody')
      .addEventListener('click', () => kasirSearchContainer.classList.remove('open'));

    // eslint-disable-next-line global-require
    const categoryList = require('../../globals/DATA.json').category_list;

    ModuleCategoryInitiator.init({
      container: document.querySelector('.module-category-list'),
      categoryList,
      searchBar: document.querySelector('#kasirSearch'),
    });
  },
};

export default ManagementCategory;
