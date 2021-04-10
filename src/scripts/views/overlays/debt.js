import DebtHistoryInitiator from '../../utils/debt-history';

const Debt = {
  async render() {
    return `
    <section id="overlayHeader">
      <button class="overlay-back-button">
        <span class="material-icons">arrow_back</span>
      </button>
      <div class="overlay-title">
        <h2>DAFTAR HUTANG</h2>
      </div>
      <input
        type="search"
        name="search"
        id="transactionSearch"
        placeholder="Cari transaksi">
    </section>
    <section id="overlayBody">
      <div class="debt-list"></div>
    </section>`;
  },

  async afterRender() {
    const backBtn = document.querySelector('.overlay-back-button');
    // eslint-disable-next-line no-restricted-globals
    backBtn.addEventListener('click', () => history.back());

    // eslint-disable-next-line global-require
    const { transactions } = require('../../globals/DATA.json').sale_report;

    DebtHistoryInitiator.init({
      objectToSearch: transactions,
      inputBox: document.querySelector('#transactionSearch'),
      container: document.querySelector('.debt-list'),
    });
  },
};

export default Debt;
