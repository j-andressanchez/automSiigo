import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class IsEnabled {
  constructor(selector) {
    this.selector = selector;
  }

  static for(selector) {
    return new IsEnabled(selector);
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    return await browse.page.isEnabled(this.selector);
  }
}
