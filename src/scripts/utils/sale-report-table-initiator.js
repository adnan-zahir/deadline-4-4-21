/* eslint-disable no-underscore-dangle */
import { saleReportTableBodyTemplate, saleReportTableHeadTemplate } from '../views/templates/template-creator';
import docReady from './doc-ready';

const SaleReportTableInitiator = {
  init({
    products,
    container,
    filter,
    totalSold,
  }) {
    this._products = products;
    this._container = container;
    this._totalSold = totalSold;
    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    });

    this._totalPenjualan = 0;
    this._totalModal = 0;
    this._totalKeuntungan = 0;

    this._filter = (filter.toUpperCase() === 'SEMUA'
      ? '' : filter.toUpperCase());
    this._filterReport();
  },

  _filterReport() {
    const filteredProducts = this._products
      .filter((product) => product.type.toUpperCase().includes(this._filter));

    this._renderReport(filteredProducts);
  },

  _renderReport(products) {
    this._container
      .innerHTML = '';

    let currentDate = '';

    products.forEach((product) => {
      const { soldDate } = product;

      if (currentDate !== soldDate) { // new table head
        currentDate = soldDate;

        const date = soldDate.replaceAll('/', '-');

        this._renderReportTableHead(date);
        this._renderReportTableBody(product, {
          totalPrice: this._formatter.format(product.totalPrice),
          totalProfit: this._formatter.format(product.totalProfit),
        });
      } else {
        this._renderReportTableBody(product, {
          totalPrice: this._formatter.format(product.totalPrice),
          totalProfit: this._formatter.format(product.totalProfit),
        });
      }
    });

    this._totalSold.innerHTML = `${products.length} Produk Terjual`;
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

    this._totalPenjualan += product.totalPrice;
    this._totalKeuntungan += product.totalProfit;
    this._subTotalPenjualanTable += product.totalPrice;
    this._subTotalKeuntunganTable += product.totalProfit;

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
    });
  },
};

export default SaleReportTableInitiator;
