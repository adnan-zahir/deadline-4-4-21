import { moduleCustomerTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const ModuleCustomerInitiator = {
  init({
    container,
    customerList,
    searchBar,
  }) {
    this._container = container;
    this._customerList = customerList;
    this._searchBar = searchBar;

    this._renderCustomer(customerList);
    this._searchCustomer();
  },

  _searchCustomer() {
    this._searchBar.addEventListener('input', (event) => {
      const filterKey = event.target.value.toUpperCase();

      const filteredCustomer = this._customerList
        .filter((customer) => Object.entries(customer)
          .toString()
          .toUpperCase()
          .includes(filterKey));

      this._renderCustomer(filteredCustomer);
    });
  },

  _renderCustomer(customers) {
    this._container.innerHTML = '';

    customers.forEach((customer) => {
      this._container.innerHTML += moduleCustomerTemplate(customer);
    });

    this._container
      .innerHTML += '<a href="#/management&add_pelanggan" class="module-customer__add-customer-button">Tambah Pelanggan</a>';
  },
};

export default ModuleCustomerInitiator;
