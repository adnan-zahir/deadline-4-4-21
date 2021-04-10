import { moduleProductTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const ModuleProductInitiator = {
  init({
    container,
    products,
  }) {
    this._container = container;
    this._products = products;
    this._formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 2,
    });

    this._renderProducts();
  },

  _renderProducts() {
    this._products.forEach((product) => {
      const productPrice = this._formatter.format(product.productPrice);
      this._container.innerHTML += moduleProductTemplate(product, productPrice);
    });

    this._container.innerHTML += '<button type="submit" class="module-product__add-product-button">Tambah Produk</button>';
  },
};

export default ModuleProductInitiator;
