const PersonalData = {
  async render() {
    return `
    <section id="overlayHeader">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>UPDATE PROFIL</h2>
      </div>
    </section>
    <section id="overlayBody">
      <form method="POST" action="" class="update-profile-form" onsubmit="return false">
        <label class="custom-input-container">
          <span>NAMA</span>
          <input type="text">
        </label>
        <label class="custom-input-container">
          <span>EMAIL</span>
          <input type="email" disabled="true">
        </label>
        <label class="custom-input-container">
          <span>NO. TELEPON</span>
          <input type="number" disabled="true">
        </label>
        <label class="custom-input-container">
          <span>NAMA TOKO</span>
          <input type="text">
        </label>
        <label class="custom-input-container">
          <span>ALAMAT TOKO</span>
          <input type="text">
        </label>
        <input type="submit" class="submit-button" value="Simpan">
      </form>
    </section>`;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    // eslint-disable-next-line global-require
    const { profile } = require('../../globals/DATA.json');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < document.querySelectorAll('.custom-input-container input').length; i++) {
      const element = document.querySelectorAll('.custom-input-container input')[i];
      element.value = Object.values(profile)[i];
    }
  },
};

export default PersonalData;
