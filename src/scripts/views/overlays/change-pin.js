const ChangePin = {
  async render() {
    return `
    <section id="overlayHeader">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>UBAH PIN</h2>
      </div>
    </section>
    <section id="overlayBody">
      <form method="POST" action="" class="update-profile-form" onsubmit="return false">
        <label class="custom-input-container">
          <span>PIN LAMA</span>
          <input type="number" patterns="[0-9]{4}" title="Four digits PIN number">
        </label>
        <label class="custom-input-container">
          <span>PIN BARU</span>
          <input type="number" patterns="[0-9]{4}" title="Four digits PIN number">
        </label>
        <label class="custom-input-container">
          <span>KONFIRMASI PIN BARU</span>
          <input type="number" patterns="[0-9]{4}" title="Four digits PIN number">
        </label>
        <input type="submit" class="submit-button" value="Simpan">
      </form>
    </section>`;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());
  },
};

export default ChangePin;
