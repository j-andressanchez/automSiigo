import { When } from '@cucumber/cucumber';
import CrearCliente from '#screenplay/tasks/crearCliente.js';
import data from '#tests/data/cliente.json' assert { type: 'json' };
import NavegarACrearCliente from '#screenplay/tasks/navegarACliente.js';

When('el usuario ingresa a la opción de crear Cliente', async function () {
    const actor = this.getActor();
    await actor.attemptsTo(NavegarACrearCliente);
});

When('el usuario diligencia el formulario', async function () {
    const actor = this.getActor();
    const cliente = data.clienteValido;

    await actor.attemptsTo(CrearCliente.withData(cliente));
});
