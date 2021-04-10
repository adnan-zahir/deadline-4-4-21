/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../../utils/drawer-initiator';
import TransactionHistoryInitiator from '../../utils/transaction-history-initiator';

const Transaction = {
  async render() {
    return `
    <section id="contentHeader">
      <div class="inner-head">
          <button id="drawerBtn"><span class="material-icons">tune</span></button>
          <span class="inner-head__title"><h3>Daftar Transaksi</h3></span>
          <a href="#/transaction&debt"><span class="material-icons">credit_card</span></a>
          <input
            type="search"
            name="search"
            id="transactionSearch"
            placeholder="Cari transaksi">
      </div>
      <nav id="drawer" class="transaction-menu">
        <ul>
          <li><button>Semua</button></li>
          <li><button>Lunas</button></li>
          <li><button>Hutang</button></li>
          <li><button>Batal</button></li>
        </ul>
      </nav>
    </section>
    <section id="contentBody">
    </section>`;
  },

  async afterRender() {
    // Drawer
    DrawerInitiator.init({
      button: document.querySelector('#drawerBtn'),
      drawer: document.querySelector('#drawer'),
      close: document.querySelector('#contentBody'),
    });

    // nav indicator
    document.querySelectorAll('.nav-item a')
      .forEach((navItem) => {
        // eslint-disable-next-line no-param-reassign
        navItem.style.color = '#444444';
      });
    document.querySelector('#navTransaction a')
      .style.color = '#3d3dff';

    // eslint-disable-next-line global-require
    const { transactions } = require('../../globals/DATA.json').sale_report;

    TransactionHistoryInitiator.init({
      objectToSearch: transactions,
      inputBox: document.querySelector('#transactionSearch'),
      container: document.querySelector('#contentBody'),
    });
  },
};

export default Transaction;
