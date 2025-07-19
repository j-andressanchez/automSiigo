import { chromium } from '@playwright/test';

export default class BrowseTheWeb {
    constructor(browser, context, page) {
        this.browser = browser;
        this.context = context;
        this.page = page;
    }

    static async with() {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        return new BrowseTheWeb(browser, context, page);
    }

     async close() {
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }
}