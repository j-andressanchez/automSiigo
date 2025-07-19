import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  await this.setup();
});

After(async function () {
  await this.teardown();
});
