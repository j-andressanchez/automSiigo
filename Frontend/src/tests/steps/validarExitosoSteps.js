import { Then } from '@cucumber/cucumber';
import ValidarRegistroExitoso from '#screenplay/tasks/ValidarRegistroExitoso.js';


Then('debe aparecer un toast de registro exitoso', async function () {
    const actor = this.getActor();

    await ValidarRegistroExitoso.execute(actor);
});