import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static withCredentials(username, password) {
        return new Login(username, password);
    }

    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        const page = browse.page;

        await page.fill('input[name="username"]', this.username);
        await page.fill('input[name="password"]', this.password);
        await page.click('button[type="submit"]');
    }
}
