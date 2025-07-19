import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class ElementText {
  constructor(selector) {
    this.selector = selector;
  }

  static of(selector) {
    return new ElementText(selector);
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    return await browse.page.textContent(this.selector);
  }
}
