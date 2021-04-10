/* eslint-disable no-underscore-dangle */
const Notif = {
  async render() {
    return `
    <div id="overlayHead">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>RIWAYAT</h2>
      </div>
    </div>
    <div id="overlayBody">
      <div class="riwayat-kosong">
        <h2>Riwayat Kosong</h2>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());
  },
};

export default Notif;
