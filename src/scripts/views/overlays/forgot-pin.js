const ForgotPin = {
  async render() {
    return `
    <section id="overlayHeader">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>UBAH NO. HP</h2>
      </div>
    </section>
    <section id="overlayBody">
      <form method="POST" action="" class="update-profile-form" onsubmit="return false">
        <label class="custom-input-container">
          <span>NO. HP</span>
          <input type="text" disabled="true">
        </label>
        <span>Kirim kode OTP ke nomor HP.</span>
        <input type="submit" class="submit-button" value="Lanjut">
      </form>
    </section>`;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    // eslint-disable-next-line global-require
    const { profile } = require('../../globals/DATA.json');

    document.querySelector('.custom-input-container input[type="text"]')
      .value = profile.phone;
  },
};

export default ForgotPin;
