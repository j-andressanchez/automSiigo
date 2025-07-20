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
    const locator = browse.page.locator(this.selector);

    await locator.waitFor({ state: 'visible', timeout: this.timeout });

    return await locator.isVisible();
  }
}
