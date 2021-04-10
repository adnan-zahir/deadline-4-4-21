/* eslint-disable no-underscore-dangle */
import { saleReportTableBodyTemplate, saleReportTableHeadTemplate } from '../views/templates/template-creator';
import docReady from './doc-ready';

const SaleReportTableInitiator = {
  init({
    REPORT,
    container,
    filter,
    totalSold,
  }) {
    this.REPORT = REPORT;
    this._container = container;
    this._totalSoldContainer = totalSold;
    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 2,
    });

    this._totalPenjualan = 0;
    this._totalModal = 0;
    this._totalKeuntungan = 0;
    this._totalSold = 0;

    this._filter = (filter.toUpperCase() === 'SEMUA'
      ? '' : filter.toUpperCase());
    this._renderReport();
  },

  _renderReport() {
    this._container
      .innerHTML = '';

    let currentDate = '';

    const transactionsLunas = this.REPORT.transactions
      .slice().reverse().filter(
        ({ status }) => status.toUpperCase() === 'LUNAS' || status.toUpperCase() === 'HUTANG',
      );

    transactionsLunas.forEach((transaction) => {
      if (transaction.date !== currentDate) {
        const date = transaction.date.replaceAll('/', '-');
        this._renderReportTableHead(date);
        currentDate = transaction.date;
        transaction.products.forEach((product) => this._filterReport(product));
      } else {
        transaction.products.forEach((product) => this._filterReport(product));
      }
    });
  },

  _filterReport(product) {
    if (product.type.toUpperCase().includes(this._filter)) {
      return this._renderReportTableBody(product, {
        totalPrice: this._formatter.format(product.productPrice
          * product.soldAmount),
        totalProfit: this._formatter.format((product.productPrice
          - product.productModal)
          * product.soldAmount),
      });
    }
    return false;
  },

  _renderReportTableHead(date) {
    this._container
      .innerHTML += saleReportTableHeadTemplate(date);

    this._subTotalPenjualanTable = 0;
    this._subTotalKeuntunganTable = 0;
  },

  _renderReportTableBody(product, currencies) {
    const tBody = document.querySelectorAll('table.sale-report-table tbody');
    Object.values(tBody).slice(-1).pop()
      .innerHTML += saleReportTableBodyTemplate(product, currencies);

    this._totalPenjualan += product.productPrice
      * product.soldAmount;
    this._totalKeuntungan += (product.productPrice
      - product.productModal)
      * product.soldAmount;
    this._subTotalPenjualanTable += product.productPrice
    * product.soldAmount;
    this._subTotalKeuntunganTable += (product.productPrice
      - product.productModal)
      * product.soldAmount;
    this._totalSold += product.soldAmount;

    this._addSubTotal();
    this._afterRender();
  },

  _addSubTotal() {
    const subTotalPenjualanTable = document.querySelectorAll('#subTotalPenjualanTable');
    Object.values(subTotalPenjualanTable).slice(-1).pop()
      .innerHTML = this._formatter.format(this._subTotalPenjualanTable);

    const subTotalKeuntunganTable = document.querySelectorAll('#subTotalKeuntunganTable');
    Object.values(subTotalKeuntunganTable).slice(-1).pop()
      .innerHTML = this._formatter.format(this._subTotalKeuntunganTable);
  },

  _afterRender() {
    docReady(() => {
      document.querySelector('#totalPenjualan')
        .innerHTML = this._formatter.format(this._totalPenjualan);
      document.querySelector('#totalKeuntungan')
        .innerHTML = this._formatter.format(this._totalKeuntungan);
      document.querySelector('#totalModal')
        .innerHTML = this._formatter.format(this._totalPenjualan - this._totalKeuntungan);
      this._totalSoldContainer.innerHTML = `${this._totalSold} Produk Terjual`;
    });
  },
};

export default SaleReportTableInitiator;
