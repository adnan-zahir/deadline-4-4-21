import { moduleCategoryTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const ModuleCategoryInitiator = {
  init({
    container,
    categoryList,
    searchBar,
  }) {
    this._container = container;
    this._categoryList = categoryList;
    this._searchBar = searchBar;

    this._renderCategory(categoryList);
    this._searchCategory();
  },

  _searchCategory() {
    this._searchBar.addEventListener('input', (event) => {
      const filterKey = event.target.value.toUpperCase();

      const filteredCategory = this._categoryList
        .filter((category) => category.toUpperCase().includes(filterKey));

      this._renderCategory(filteredCategory);
    });
  },

  _renderCategory(categories) {
    this._container.innerHTML = '';

    categories.forEach((category) => {
      this._container.innerHTML += moduleCategoryTemplate(category);
    });

    this._container
      .innerHTML += '<a href="#/management&add_kategori" class="module-category__add-category-button">Tambah Kategori</a>';
  },
};

export default ModuleCategoryInitiator;
