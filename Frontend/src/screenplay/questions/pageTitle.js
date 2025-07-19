import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class PageTitle {
  static value() {
    return new PageTitle();
  }

  async answeredBy(actor) {
    const browseTheWeb = actor.abilityTo(BrowseTheWeb);
    return await browseTheWeb.page.title();
  }
}
