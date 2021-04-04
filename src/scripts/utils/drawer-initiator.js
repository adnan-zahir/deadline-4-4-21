/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    button, drawer, close,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._close = close;

    this._button.addEventListener('click', () => {
      this._toggleDrawer(this._drawer);
    });

    this._close.addEventListener('click', () => {
      this._closeDrawer(this._drawer);
    });
  },

  _toggleDrawer(drawer) {
    drawer.classList.toggle('open');
  },

  _closeDrawer(drawer) {
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
