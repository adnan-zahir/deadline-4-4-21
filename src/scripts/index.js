import 'regenerator-runtime';
import '../styles/style.css';
import swRegister from './utils/sw-register';
import App from './views/app';

// eslint-disable-next-line no-new
const app = new App({
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
