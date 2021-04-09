/* eslint-disable no-param-reassign */
import SaleReportTableInitiator from '../../utils/sale-report-table-initiator';

const Report = {
  async render() {
    return `<section id="contentHeader" class="laporan-header">
    <div class="inner-head">
        <span class="inner-head__title" style='grid-column: span 3'>
          <h3>Laporan</h3>
        </span>
        <nav class="laporan-menu">
          <ul>
            <li>
              <button id="semuaProdukBtn" data-filter="semua">Semua Produk</button>
            </li>
            <li>
              <button id="produkBarangBtn" data-filter="barang">Produk Barang</button>
            </li>
            <li>
              <button id="produkPPOBBtn" data-filter="ppob">Produk PPOB</button>
            </li>
          </ul>
        </nav>
    </div>
  </section>
  <section id="contentBody">
    <div class="summary">
      <span class="material-icons">date_range</span>
      <span class="date-range" id="dateRange"></span>
      <table class="summary-table">
        <tr>
          <td>
            Total Penjualan:
            <span id="totalPenjualan"></span>
          </td>
          <td>
            Total Modal:
            <span id="totalModal"></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>Keuntungan:</span>
            <span id="totalKeuntungan"></span>
          </td>
        </tr>
      </table>
    </div>
    <div class="sale-report">
      <div class="content-title">
        <h2>Laporan Penjualan</h2>
        <span></span>
      </div>
      <div class="sale-report-table-container">
      </div>
    </div>
  </section>`;
  },

  async afterRender() {
    // eslint-disable-next-line global-require
    const REPORT = require('../../globals/DATA.json').sale_report;

    // const months = [
    //   'Jan',
    //   'Feb',
    //   'Mar',
    //   'Apr',
    //   'May',
    //   'Jun',
    //   'Jul',
    //   'Aug',
    //   'Sep',
    //   'Oct',
    //   'Nov',
    //   'Dec',
    // ];

    // document.querySelector('#dateRange')
    //   .innerHTML = `${REPORT.sale_report.startDate}
    //     - ${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;

    // nav indicator
    document.querySelectorAll('.nav-item a')
      .forEach((navItem) => {
        // eslint-disable-next-line no-param-reassign
        navItem.style.color = '#444444';
      });
    document.querySelector('#navReport a')
      .style.color = '#3d3dff';

    const filterButtons = document.querySelectorAll('.laporan-menu button');

    filterButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        // eslint-disable-next-line no-return-assign
        filterButtons.forEach((otherButton) => otherButton.style.borderBottom = '0');

        event.target.style.borderBottom = '1px solid #3d3dff';

        const choice = event.target.getAttribute('data-filter');

        SaleReportTableInitiator.init({
          REPORT,
          container: document.querySelector('.sale-report-table-container'),
          filter: choice,
          totalSold: document.querySelector('.content-title>span'),
        });
      });
    });

    filterButtons[0].click();
  },
};

export default Report;
