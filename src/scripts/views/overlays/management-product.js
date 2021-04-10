/* eslint-disable camelcase */
import ModuleProductInitiator from '../../utils/module-product-initiator';

/* eslint-disable no-underscore-dangle */
const ManagementProduct = {
  async render() {
    return `
      <div id="overlayHeader">
        <button class="overlay-back-button">
          <span class="material-icons">arrow_back</span>
        </button>
        <div class="overlay-title">
          <h2>PRODUK BARANG</h2>
        </div>
        <button class="open-search">
          <span class="material-icons">search</span>
        </button>
        <div class="kasir-search-container">
          <input type="search" id="kasirSearch" placeholder="Cari barang"/>
        </div>
      </div>
      <div id="overlayBody">
        <div class="module-product-list"></div>
      </div>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line global-require
    const { product_list } = require('../../globals/DATA.json');

    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    const openSearchBtn = document.querySelector('button.open-search');
    const kasirSearchContainer = document.querySelector('div.kasir-search-container');
    openSearchBtn.addEventListener('click', () => kasirSearchContainer.classList.toggle('open'));
    document.querySelector('#overlayBody')
      .addEventListener('click', () => kasirSearchContainer.classList.remove('open'));

    ModuleProductInitiator.init({
      container: document.querySelector('.module-product-list'),
      products: product_list,
    });
  },
};

export default ManagementProduct;
