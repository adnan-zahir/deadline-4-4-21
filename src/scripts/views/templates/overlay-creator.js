/* eslint-disable no-underscore-dangle */
const notifOverlay = () => `
  <div id="overlayHead">
    <button class="overlay-back-button">
      <span class="material-icons">back</span>
    </button>
    <div class="overlay-title">
      <h2>RIWAYAT</h2>
    </div>
  </div>
  <div id="overlayBody">
    <div class="riwayat-kosong">
      <picture>
        <source srcset="./images/empty-notif.webp">
        <img src="./images/empty-notif.png">
      </picture>
    </div>
  </div>
`;

class topupOverlay {
  constructor(saldo) {
    this._saldo = saldo;

    this._render();
  }

  _render() {
    return `
    <div id="overlayHead">
      <button class="overlay-back-button">
        <span class="material-icons">back</span>
      </button>
      <div class="overlay-title">
        <h2>NOMINAL PENGISIAN SALDO</h2>
      </div>
    </div>
    <div id="overlayBody">
      <div class="your-saldo">
        <span>Saldo Anda Sebesar :</span>
        <span>${saldo}</span>
      </div>
      <div class="saldo-list">
        <span>Silahkan pilih nominal pengisian saldo yang telah disediakan :</span>
        <div class="saldo-list__item">Rp. 50.000</div>
        <div class="saldo-list__item">Rp. 100.000</div>
        <div class="saldo-list__item">Rp. 250.000</div>
        <div class="saldo-list__item">Rp. 500.000</div>
        <div class="saldo-list__item">Rp. 750.000</div>
        <div class="saldo-list__item">Rp. 1.000.000</div>
      </div>
    </div>
  `;
  }
}

export {
  notifOverlay,
  topupOverlay,
};
