import { moduleProductTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const ModuleProductInitiator = {
  init({
    container,
    products,
    searchBar,
  }) {
    this._container = container;
    this._products = products;
    this._searchBar = searchBar;
    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 2,
    });

    this._renderProducts(products);
    this._searchProducts();
  },

  _searchProducts() {
    this._searchBar.addEventListener('input', (event) => {
      const filterKey = event.target.value.toUpperCase();

      const filteredProducts = this._products
        .filter((product) => product.name.toUpperCase().includes(filterKey));

      this._renderProducts(filteredProducts);
    });
  },

  _renderProducts(products) {
    this._container.innerHTML = '';

    products.forEach((product) => {
      const productPrice = this._formatter.format(product.productPrice);
      this._container.innerHTML += moduleProductTemplate(product, productPrice);
    });

    this._container.innerHTML += '<a href="#/management&add_produk" class="module-product__add-product-button">Tambah Produk</a>';
  },
};

export default ModuleProductInitiator;
