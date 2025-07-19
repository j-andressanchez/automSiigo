import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class CurrentUrl {
  static value() {
    return new CurrentUrl();
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    return await browse.page.url();
  }
}
