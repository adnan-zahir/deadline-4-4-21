/* eslint-disable no-underscore-dangle */
const Notif = {
  async render() {
    return `
      <div id="overlayHead">
        <button class="overlay-back-button">
          <span class="material-icons">arrow_back</span>
        </button>
        <div class="overlay-title">
          <h2>NOMINAL PENGISIAN SALDO</h2>
        </div>
      </div>
      <div id="overlayBody">
        <div class="your-saldo-container">
          <span>Saldo Anda Sebesar :</span>
          <span class="your-saldo"></span>
        </div>
        <form method="POST" action="" class="isi-saldo-form">
          <span>Silahkan pilih nominal pengisian saldo yang telah disediakan :</span>
          <label class="custom-radio-container">
            <input type="radio" name="saldo-radio" checked="checked">
            <span class="custom-radio">Rp. 50.000</span>
          </label>
          <label class="custom-radio-container">
            <input type="radio" name="saldo-radio">
            <span class="custom-radio">Rp. 100.000</span>
          </label>
          <label class="custom-radio-container">
            <input type="radio" name="saldo-radio">
            <span class="custom-radio">Rp. 250.000</span>
          </label>
          <label class="custom-radio-container">
            <input type="radio" name="saldo-radio">
            <span class="custom-radio">Rp. 500.000</span>
          </label>
          <label class="custom-radio-container">
            <input type="radio" name="saldo-radio">
            <span class="custom-radio">Rp. 750.000</span>
          </label>
          <label class="custom-radio-container">
            <input type="radio" name="saldo-radio">
            <span class="custom-radio">Rp. 1.000.000</span>
          </label>
          <span>Anda juga dapat memasukkan nominal pengisian sesuai dengan yang Anda inginkan.</span>
          <label class="custom-input-container">
            <span>NOMINAL PENGISIAN SALDO</span>
            <input type="number" min="50000" step="1000">
          </label>
        </form>
      </div>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line global-require
    const DATA = require('../../globals/DATA.json');

    const formatter = Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    });

    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    document.querySelector('.your-saldo')
      .innerHTML = formatter.format(DATA.profile.saldo);
  },
};

export default Notif;
