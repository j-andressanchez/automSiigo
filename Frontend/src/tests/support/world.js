import { setWorldConstructor } from '@cucumber/cucumber';
import Actor from '#screenplay/actors/actor.js';
import BrowseTheWeb from '#screenplay/abilities/browseTheWeb.js';

class CustomWorld {
  constructor() {
    this.actor = new Actor('Tester');
  }

  async setup() {
    const browseTheWeb = await BrowseTheWeb.with();
    this.actor.whoCan(browseTheWeb);
  }

  async teardown() {
    const browseTheWeb = this.actor.abilityTo(BrowseTheWeb);
    await browseTheWeb.close();
  }

  getActor() {
    return this.actor;
  }
}

setWorldConstructor(CustomWorld);