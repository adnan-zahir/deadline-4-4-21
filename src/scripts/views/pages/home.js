const Home = {
  async render() {
    return `<section id="contentHeader">
    <section class="profile">
      <div class="profile-item profile__name">
        Halo,
        <span></span>
      </div>
      <div class="profile-item profile__saldo">
        Saldo anda sebesar: 
        <span>Rp 0</span>
      </div>
      <div class="profile-item profile__notif">
        <span class="material-icons">notifications_none</span>
      </div>
      <div class="profile-item profile__topup">
        <button>Top Up</button>
      </div>
      <div class="profile-item profile__transaction">
        <table>
          <tbody>
            <tr>
              <td>
                Transaksi bulan ini:
                <span id="monthlyTransaction">Rp. 0</span>
              </td>
              <td>
                Keuntungan bulan ini:
                <span id="monthlyProfit">Rp. 0</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
  <section id="contentBody">
    <div class="content-title">
      <h2>Menu Utama</h2>
    </div>
    <div class="content-menu" id="contentMenu">
      <div class="menu-card">
        <button class="overlay-button" type="button">
          <span class="material-icons icon">attach_money</span>
          <span class="name">Kasir</span>
          <span class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero accusamus commodi dicta ullam a expedita?</span>
        </button>
      </div>
    </div>
  </section>`;
  },

  async afterRender() {
    // eslint-disable-next-line global-require
    const PROFILE = require('../../globals/DATA.json').profile;

    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    document.querySelector('.profile__name span')
      .innerHTML = PROFILE.name.toUpperCase();

    document.querySelector('.profile__saldo span')
      .innerHTML = formatter.format(PROFILE.saldo);

    document.querySelector('.profile__transaction span#monthlyTransaction')
      .innerHTML = formatter.format(PROFILE.monthlyTransaction);

    document.querySelector('.profile__transaction span#monthlyProfit')
      .innerHTML = formatter.format(PROFILE.monthlyProfit);

    // nav indicator
    document.querySelectorAll('.nav-item a')
      .forEach((navItem) => {
        // eslint-disable-next-line no-param-reassign
        navItem.style.color = '#444444';
      });
    document.querySelector('#navHome a')
      .style.color = '#3d3dff';
  },
};

export default Home;
