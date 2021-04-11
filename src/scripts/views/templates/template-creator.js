const transactionHistoryGroupTemplate = (date, total) => `
<div class="card-group">
  <div class="card-group__header">
    <span>${date}</span>
    <span class="total">${total}</span>
  </div>
</div>
`;

const transactionHistoryCardTemplate = (transaction, amount) => {
  let status;
  let color;
  switch (transaction.status.toUpperCase()) {
    case 'BATAL':
      status = 'cancel';
      color = '#fd3434';
      break;

    case 'HUTANG':
      status = 'radio_button_unchecked';
      color = '#888888';
      break;

    default:
      status = 'check_circle';
      break;
  }

  return `
<div class="card">
  <span class="material-icons icon" style="color: ${color}">${status}</span>
  <span class="id">${transaction.id}</span>
  <span class="name">${transaction.name}</span>
  <span class="status" style="color: ${color}">${transaction.status}</span>
  <span class="amount">${amount}</span>
</div>
`;
};

const saleReportTableHeadTemplate = (date) => `
<table class="sale-report-table">
  <thead>
    <tr>
      <th colspan="3">
        ${date}
      </th>
    </tr>
    <tr>
      <th>
        Produk
      </th>
      <th>
        Penjualan
        <span id="subTotalPenjualanTable" class="currency"></span>
      </th>
      <th>
        Keuntungan
        <span id="subTotalKeuntunganTable" class="currency"></span>
      </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
`;

const saleReportTableBodyTemplate = (product, currencies) => `
<tr>
  <td>
    <span>${product.name}</span>
    <span>x${product.soldAmount}</span>
  </td>
  <td class="currency total-price">
    ${currencies.totalPrice}
  </td>
  <td class="currency total-profit">
    ${currencies.totalProfit}
  </td>
</tr>
`;

const moduleProductTemplate = (product, productPrice) => `
<div class="module-product-card">
  <picture>
    <img src="./images/default.png"/>
  </picture>
  <span class="module-product__name">${product.name}</span>
  <span class="module-product__stock">${(typeof product.stock === 'number' && product.stock > 0 ? product.stock : 'Fitur stok tidak aktif')}</span>
  <span class="module-product__price">${productPrice}</span>
  <button class="module-product__edit">
    <span class="material-icons">edit_note</span>
  </button>
</div>
`;

const moduleCategoryTemplate = (category) => `
<div class="module-category-card">
  <span class="module-category__name" style="grid-column: span 2">${category}</span>
  <button class="module-category__edit">
    <span class="material-icons">edit_note</span>
  </button>
</div>
`;

const moduleCustomerTemplate = (customer) => `
<div class="module-customer-card">
  <span class="module-customer__name" style="grid-column: span 2">${customer.name}</span>
  <span class="module-customer__phone" style="grid-column: span 2">${customer.phone}</span>
  <button class="module-category__edit">
    <span class="material-icons">edit_note</span>
  </button>
</div>
`;

export {
  transactionHistoryGroupTemplate,
  transactionHistoryCardTemplate,
  saleReportTableHeadTemplate,
  saleReportTableBodyTemplate,
  moduleProductTemplate,
  moduleCategoryTemplate,
  moduleCustomerTemplate,
};
