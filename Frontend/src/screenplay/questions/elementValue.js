import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class ElementValue {
  constructor(selector) {
    this.selector = selector;
  }

  static of(selector) {
    return new ElementValue(selector);
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    return await browse.page.inputValue(this.selector);
  }
}
