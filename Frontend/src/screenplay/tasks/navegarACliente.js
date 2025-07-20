import BrowseTheWeb from "../abilities/browseTheWeb.js";
import { TopbarPage } from "#screenplay/pages/TopbarPage.js";

export default class NavegarACrearCliente {
    static async performAs(actor) {
        const page = actor.abilityTo(BrowseTheWeb).page;

        await TopbarPage.crearButon(page).waitFor({ state: 'visible' });
        await TopbarPage.crearButon(page).click();
        await TopbarPage.clientesLink(page).waitFor({ state: 'visible' });
        await TopbarPage.clientesLink(page).click();
    }
}
