/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const OverlaysInitiator = {
  init({
    buttons,
    containers,
    overlays,
  }) {
    this._buttons = buttons;
    this._containers = containers;
    this._overlays = overlays;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const container = containers[i];
      const overlay = overlays[i];

      button.addEventListener('click', () => {
        this._renderOverlay(container, overlay);
      });
    }
  },

  _renderOverlay(container, overlay) {
    this._openOverlay(container, overlay);
    document.querySelector('#overlayCloseBtn')
      .addEventListener('click', () => {
        this._closeOverlay(container);
      });
  },

  _openOverlay(container, overlay) {
    container.classList.add('active');
    container.innerHTML = overlay;
  },

  _closeOverlay(container) {
    container.classList.remove('active');
  },
};

export default OverlaysInitiator;
