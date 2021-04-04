/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../../utils/drawer-initiator';
import { transactionHistoryCardTemplate, transactionHistoryGroupTemplate } from '../templates/template-creator';

const Transaction = {
  async render() {
    return `
    <section id="contentHeader">
      <div class="inner-head">
          <button id="drawerBtn"><span class="material-icons">tune</span></button>
          <span class="inner-head__title"><h3>Daftar Transaksi</h3></span>
          <button><span class="material-icons">credit_card</span></button>
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
          <li><button>Dibatalkan</button></li>
        </ul>
      </nav>
    </section>
    <section id="contentBody">
    </>`;
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

    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    this._fetchHistory();
  },

  _fetchHistory() {
    // eslint-disable-next-line global-require
    const { histories } = require('../../globals/TRANSACTION_HISTORY.json');
    this._renderHistoryGroup(histories);
  },

  _renderHistoryGroup(histories) {
    histories.forEach((history) => {
      const { date } = history;
      const { transactions } = history;

      document.querySelector('#contentBody')
        .innerHTML += transactionHistoryGroupTemplate(date);

      this._renderHistoryCard(transactions);
    });
  },

  _renderHistoryCard(transactions) {
    let total = 0;

    transactions.forEach((transaction) => {
      total += transaction.amount;
      const amount = this._formatter.format(transaction.amount);
      const cardGroups = document.querySelectorAll('.card-group');
      Object.values(cardGroups).slice(-1).pop()
        .innerHTML += transactionHistoryCardTemplate(transaction, amount);
    });

    Object.values(
      document.querySelectorAll('.total'),
    ).slice(-1).pop()
      .innerHTML = this._formatter.format(total);
  },
};

export default Transaction;
