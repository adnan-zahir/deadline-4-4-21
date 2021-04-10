const Management = {
  async render() {
    return `
    <section id="contentHeader">
      <div class="inner-head">
          <span class="inner-head__title" style="grid-column: span 3;"><h3>Manajemen</h3></span>
      </div>
    </section>
    <section id="contentBody">
      <ul class="modul-list">
        <span>Pilih modul yang akan dikelola</span>
        <li><a href="#/management&modul_produk">Produk</a></li>
        <li><a href="#/management&modul_kategori">Kategori</a></li>
        <li><a href="#/management&modul_pelanggan">Pelanggan</a></li>
      </ul>
    </section>`;
  },

  async afterRender() {
    // nav indicator
    document.querySelectorAll('.nav-item a')
      .forEach((navItem) => {
        // eslint-disable-next-line no-param-reassign
        navItem.style.color = '#444444';
      });
    document.querySelector('#navTransaction a')
      .style.color = '#3d3dff';
  },
};

export default Management;
