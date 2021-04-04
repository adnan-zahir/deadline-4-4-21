/* eslint-disable no-underscore-dangle */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    // header,
    content,
    // footer,
  }) {
    // this._header = header;
    this._content = content;
    // this._footer = footer;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
