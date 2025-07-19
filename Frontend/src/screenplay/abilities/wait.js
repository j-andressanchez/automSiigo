export default class Wait {
  constructor(page) {
    this.page = page;
  }

  static using(page) {
    return new Wait(page);
  }

  forSelector(selector, options = { state: 'visible', timeout: 5000 }) {
    return this.page.waitForSelector(selector, options);
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
