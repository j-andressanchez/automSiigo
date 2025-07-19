import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class HasAttribute {
  constructor(selector, attribute, expectedValue = null) {
    this.selector = selector;
    this.attribute = attribute;
    this.expectedValue = expectedValue;
  }

  static with(selector, attribute, expectedValue = null) {
    return new HasAttribute(selector, attribute, expectedValue);
  }

  async answeredBy(actor) {
    const browse = actor.abilityTo(BrowseTheWeb);
    const value = await browse.page.getAttribute(this.selector, this.attribute);
    return this.expectedValue ? value === this.expectedValue : value !== null;
  }
}
