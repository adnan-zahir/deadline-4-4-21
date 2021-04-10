const ChangePass = {
  async render() {
    return `
    <section id="overlayHeader">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>UBAH PASSWORD</h2>
      </div>
    </section>
    <section id="overlayBody">
      <form method="POST" action="" class="update-profile-form" onsubmit="return false">
        <label class="custom-input-container">
          <span>PASSWORD LAMA</span>
          <input type="password">
        </label>
        <label class="custom-input-container">
          <span>PASSWORD BARU</span>
          <input type="password">
        </label>
        <label class="custom-input-container">
          <span>KONFIRMASI PASSWORD BARU</span>
          <input type="password">
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

export default ChangePass;
