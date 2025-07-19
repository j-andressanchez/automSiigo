import { Given, When, Then } from '@cucumber/cucumber';
import OpenPage from '#screenplay/tasks/openPage.js';
import Login from '#screenplay/tasks/login.js';
import PageTitle from '#screenplay/questions/pageTitle.js';
import { expect } from '@playwright/test';

Given('the user navigates to the login page', async function () {
  const actor = this.getActor();
  await actor.attemptsTo(OpenPage.at('/'));
});

When('the user logs in with username {string} and password {string}', async function (username, password) {
  await this.actor.perform(new Login(username, password));
});

Then('the page title should be {string}', async function (expectedTitle) {
  const actualTitle = await this.actor.asks(new PageTitle());
  expect(actualTitle).toBe(expectedTitle);
  await this.teardown();
});