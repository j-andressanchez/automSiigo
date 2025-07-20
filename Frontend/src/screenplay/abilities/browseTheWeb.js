import { chromium } from '@playwright/test';

export default class BrowseTheWeb {
  constructor(page) {
    this.page = page;
  }

  static async with() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const ability = new BrowseTheWeb(page);
    ability.browser = browser;
    return ability;
  }

  getPage() {
    return this.page;
  }

  async close() {
    await this.browser?.close();
  }
}
