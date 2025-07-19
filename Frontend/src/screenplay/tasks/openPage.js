import BrowseTheWeb from '../abilities/browseTheWeb.js';
import { config } from '#config/environment.js';

export default class OpenPage {
  constructor(endpoint) {
    this.url = `${config.baseUrl}${endpoint}`;
  }

  static at(endpoint) {
    return new OpenPage(endpoint);
  }

  async performAs(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    await browse.page.goto(this.url);
  }
}
