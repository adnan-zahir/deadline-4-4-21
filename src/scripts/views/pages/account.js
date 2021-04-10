const Account = {
  async render() {
    return `
    <section id="contentHeader">
      <div class="inner-head">
          <span class="inner-head__title" style="grid-column: span 3;"><h3>Akun</h3></span>
      </div>
    </section>
    <section id="contentBody">
      <div class="account-header">
        <div class="account-header-item">
          <span class="account__name"></span>
        </div>
      </div>
      <div class="account-body">
        <ul class="account-menu-list">
          <div class="account-menu-group">
            <li class="account-menu-item">
              <a href="#">Data pribadi</a>
            </li>
          </div>
          <div class="account-menu-group">
            <li class="account-menu-item">
              <a href="#">Ubah email</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Ubah No. Hp</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Ubah password</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Ubah PIN</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Lupa PIN</a>
            </li>
          </div>
          <div class="account-menu-group">
            <li class="account-menu-item">
              <a href="#">Hubungkan perangkat</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Koneksikan QRIS</a>
            </li>
          </div>
          <div class="account-menu-group">
            <li class="account-menu-item">
              <a href="#">Referral</a>
            </li>
            <li class="account-menu-item">
              <a href="#">FAQs</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Tutorial</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Helpdesk</a>
            </li>
            <li class="account-menu-item">
              <a href="#">Rate Awan</a>
            </li>
          </div>
          <div class="account-menu-group">
            <li class="account-menu-item">
              <a href="#">Keluar</a>
            </li>
          </div>
        </ul>
      </div>
    </section>`;
  },

  async afterRender() {
    // eslint-disable-next-line global-require
    const DATA = require('../../globals/DATA.json');

    document.querySelector('.account__name')
      .innerHTML = DATA.profile.name.toUpperCase();

    // nav indicator
    document.querySelectorAll('.nav-item a')
      .forEach((navItem) => {
        // eslint-disable-next-line no-param-reassign
        navItem.style.color = '#444444';
      });
    document.querySelector('#navTransaction a')
      .style.color = '#3d3dff';
  },
};

export default Account;
