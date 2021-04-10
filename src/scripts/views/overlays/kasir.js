/* eslint-disable no-underscore-dangle */
const Kasir = {
  async render() {
    return `
      <div id="overlayHead">
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
        <div class="kasir-header">
          <button class="produk-baru-button">
            <span class="material-icons">add</span>
            <span>PRODUK BARU</span>
          </button>
          <button class="pesan-manual-button">
            <span class="material-icons">timer</span>
            <span>PESAN MANUAL</span>
          </button>
          <button class="scan-barcode-button">
            <span class="material-icons">qr_code_scanner</span>
          </button>
        </div>
        <div class="kasir-body">
        </div>
      </div>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line global-require
    // const DATA = require('../../globals/DATA.json');

    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    const openSeachBtn = document.querySelector('button.open-search');
    const kasirSearchContainer = document.querySelector('div.kasir-search-container');
    openSeachBtn.addEventListener('click', () => kasirSearchContainer.classList.toggle('open'));
    document.querySelector('#overlayBody')
      .addEventListener('click', () => kasirSearchContainer.classList.remove('open'));
  },
};

export default Kasir;
