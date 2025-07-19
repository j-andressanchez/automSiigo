export default class InteractWithElements {
  constructor(page) {
    this.page = page;
  }

  static using(page) {
    return new InteractWithElements(page);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, value) {
    await this.page.fill(selector, value);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }
}