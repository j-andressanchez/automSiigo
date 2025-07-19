import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class CountOfElements {
  constructor(selector) {
    this.selector = selector;
  }

  static matching(selector) {
    return new CountOfElements(selector);
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    const elements = await browse.page.$$(this.selector);
    return elements.length;
  }
}
