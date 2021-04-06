const Report = {
  async render() {
    return `<section id="contentHeader">
    <div class="inner-head">
        <span class="inner-head__title" style='grid-column: span 3'>
          <h3>Laporan</h3>
        </span>
        <button id="semuaProdukBtn">Semua Produk</button>
        <button id="produkBarangBtn">Produk Barang</button>
        <button id="produkPPOBBtn">Produk PPOB</button>
    </div>
  </section>`;
  },

  async afterRender() {
    console.log('report');
  },
};

export default Report;
