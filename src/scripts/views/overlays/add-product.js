const AddProduct = {
  async render() {
    return `
    <section id="overlayHeader">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>TAMBAH PRODUK</h2>
      </div>
    </section>
    <section id="overlayBody">
      <form method="POST" action="" class="update-profile-form" onsubmit="return false">
        <label class="custom-input-container" style="grid-column: 1">
          <span>Nomor Barcode</span>
          <input type="text">
        </label>
        <button class="scan-barcode-button" style="grid-column: auto">
          <span class="material-icons">qr_code_scanner</span>
        </button>
        <label class="custom-input-container">
          <span>Nama Produk</span>
          <input type="text">
        </label>
        <div class="custom-select-container">
          <label for="custom-select" style="grid-column: span 2">Piih Kategori</label>
          <select class="custom-select">
          </select>
        </div>
        <input type="submit" class="submit-button" value="Simpan">
      </form>
    </section>`;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    // eslint-disable-next-line global-require
    const categoryList = require('../../globals/DATA.json').category_list;

    categoryList.forEach((category) => {
      document.querySelector('.custom-select')
        .innerHTML += `<option value="${category}">${category}</option>`;
    });
  },
};

export default AddProduct;
