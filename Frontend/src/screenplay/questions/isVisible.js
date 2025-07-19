import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class IsVisible {
  constructor(selector) {
    this.selector = selector;
  }

  static for(selector) {
    return new IsVisible(selector);
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    return await browse.page.isVisible(this.selector);
  }
}
