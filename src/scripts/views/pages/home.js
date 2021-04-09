/* eslint-disable no-underscore-dangle */
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
        <a href="#/home&notif" class="overlay-button notif-button">
          <span class="material-icons">notifications_none</span>
        </a>
      </div>
      <div class="profile-item profile__topup">
        <button class="overlay-button topup-button">Top Up</button>
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
        <button class="overlay-button kasir-button" type="button">
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
    this.PROFILE = require('../../globals/DATA.json');

    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    // nav indicator
    document.querySelectorAll('.nav-item a')
      .forEach((navItem) => {
        // eslint-disable-next-line no-param-reassign
        navItem.style.color = '#444444';
      });
    document.querySelector('#navHome a')
      .style.color = '#3d3dff';

    this._getProfile();
  },

  _getProfile() {
    const transactionsLunas = this.PROFILE.sale_report.transactions.filter(
      ({ status }) => status.toUpperCase() === 'LUNAS',
    );

    const thisMonthTransactions = transactionsLunas.filter(
      ({ date }) => date.split('/')[1] === `0${new Date().getMonth() + 1}`,
    );

    const thisMonthTransactionProducts = [];
    thisMonthTransactions.forEach(({ products }) => {
      products.forEach((product) => thisMonthTransactionProducts.push(product));
    });

    const thisMonthTotalTransaction = thisMonthTransactionProducts.reduce(
      (acc, cur) => acc + (cur.productPrice * cur.soldAmount),
      0,
    );

    const thisMonthTotalProfit = thisMonthTotalTransaction
      - thisMonthTransactionProducts.reduce((acc, cur) => acc + (cur.productModal
        * cur.soldAmount), 0);

    this._addProfile(thisMonthTotalTransaction, thisMonthTotalProfit);
  },

  _addProfile(transaction, profit) {
    document.querySelector('.profile__name span')
      .innerHTML = this.PROFILE.profile.name.toUpperCase();

    document.querySelector('.profile__saldo span')
      .innerHTML = this._formatter.format(this.PROFILE.profile.saldo);

    document.querySelector('.profile__transaction span#monthlyTransaction')
      .innerHTML = this._formatter.format(transaction);

    document.querySelector('.profile__transaction span#monthlyProfit')
      .innerHTML = this._formatter.format(profit);
  },
};

export default Home;
