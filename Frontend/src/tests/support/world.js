import { setWorldConstructor } from '@cucumber/cucumber';
import Actor from '../../screenplay/actors/actor.js';
import BrowseTheWeb from '../../screenplay/abilities/browseTheWeb.js';

class CustomWorld {
  constructor({ attach }) {
    this.attach = attach;
  }

  async setup() {
    this.actor = new Actor('Tester');
    const browseTheWeb = await BrowseTheWeb.with();
    this.actor.whoCan(browseTheWeb);
    this.page = browseTheWeb.getPage();
  }

  getActor() {
    return this.actor;
  }

  async teardown() {
    await this.actor.abilityTo(BrowseTheWeb).close();
  }
}

setWorldConstructor(CustomWorld);
