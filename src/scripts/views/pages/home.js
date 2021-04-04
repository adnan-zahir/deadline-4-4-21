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
        <span class="material-icons icon">attach_money</span>
        <span class="name">Kasir</span>
        <span class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero accusamus commodi dicta ullam a expedita?</span>
      </div>
    </div>
  </section>`;
  },

  async afterRender() {
    const name = 'Adnan ZZ'; // fetch
    const monthlyTransaction = 200000; // fetch
    const monthlyProfit = 120200; // fetch
    const saldo = 50000; // fetch

    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    document.querySelector('.profile__name span')
      .innerHTML = name.toUpperCase();

    document.querySelector('.profile__saldo span')
      .innerHTML = formatter.format(saldo);

    document.querySelector('.profile__transaction span#monthlyTransaction')
      .innerHTML = formatter.format(monthlyTransaction);

    document.querySelector('.profile__transaction span#monthlyProfit')
      .innerHTML = formatter.format(monthlyProfit);

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