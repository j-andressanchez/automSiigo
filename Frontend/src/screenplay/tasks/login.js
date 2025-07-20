import { LoginPage } from '#screenplay/pages/LoginPage.js';
import BrowseTheWeb from '../abilities/browseTheWeb.js';

export default class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static withCredentials(username, password) {
        return new Login(username, password);
    }

    static withEnvCredentials() {
        const { APP_USER, APP_PASS } = process.env;

        if (!APP_USER || !APP_PASS) {
        throw new Error('Las credenciales no están definidas en variables de entorno');
        }

        return new Login(APP_USER, APP_PASS);
    }

    async performAs(actor) {
        const page = actor.abilityTo(BrowseTheWeb).page;

        await LoginPage.usernameInput(page).fill(this.username)
        await LoginPage.passwordInput(page).fill(this.password);
        await LoginPage.loginButton(page).click();

    }
}
