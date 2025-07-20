import { Given, When, Then } from '@cucumber/cucumber';
import OpenPage from '#screenplay/tasks/openPage.js';
import Login from '#screenplay/tasks/login.js';
import Wait from '#screenplay/tasks/wait.js'

Given('el usuario navega a la pagina de Login', async function () {
  const actor = this.getActor();
  await actor.attemptsTo(OpenPage.at('/'));
});

When('el usuario digita las credenciales correctas', async function () {
  const actor = this.getActor();
  await actor.attemptsTo(Login.withEnvCredentials());
});