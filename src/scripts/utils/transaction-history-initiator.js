/* eslint-disable no-underscore-dangle */
import { transactionHistoryCardTemplate, transactionHistoryGroupTemplate } from '../views/templates/template-creator';

const TransactionHistoryInitiator = {
  init({
    objectToSearch,
    inputBox,
    container,
  }) {
    this._objectToSearch = objectToSearch;
    this._inputBox = inputBox;
    this._container = container;
    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    this._searchHistory();
  },

  _searchHistory() {
    let searchQuery = this._inputBox.value.toUpperCase();

    this._renderHistory(this._objectToSearch);

    this._inputBox.addEventListener('input', () => {
      searchQuery = this._inputBox.value.toUpperCase();
      const filteredData = this._objectToSearch
        .filter((data) => Object.values(data).toString().toUpperCase()
          .includes(searchQuery));
      this._renderHistory(filteredData);
    });
  },

  _renderHistory(datas) {
    this._container
      .innerHTML = '';

    let currentDate = '';

    datas.forEach((data) => {
      const { date } = data;

      if (currentDate !== date) { // new card group
        currentDate = date;
        this._total = 0;

        this._renderHistoryGroup(date);
        this._renderHistoryCard(data);
      } else { // add to last group added
        this._renderHistoryCard(data);
      }
      this._addTotal();
    });
  },

  _renderHistoryGroup(date) {
    this._container
      .innerHTML += transactionHistoryGroupTemplate(date);
  },

  _renderHistoryCard(data) {
    this._total += data.amount;
    const amount = this._formatter.format(data.amount);
    const cardGroups = document.querySelectorAll('.card-group');
    Object.values(cardGroups).slice(-1).pop()
      .innerHTML += transactionHistoryCardTemplate(data, amount);
  },

  _addTotal() {
    Object.values(
      document.querySelectorAll('.total'),
    ).slice(-1).pop()
      .innerHTML = this._formatter.format(this._total);
  },
};

export default TransactionHistoryInitiator;
