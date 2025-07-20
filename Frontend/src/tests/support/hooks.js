import { Before, After, Status } from '@cucumber/cucumber';
import { fileURLToPath } from 'url';
import { setDefaultTimeout } from '@cucumber/cucumber';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../../config/.env')
});

if (!process.env.APP_USER || !process.env.APP_PASS) {
  throw new Error('Faltan variables de entorno: APP_USER o APP_PASS');
}

setDefaultTimeout(10_000);

Before(async function () {
  await this.setup();
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED && this.page) {
      const screenshot = await this.page.screenshot({ type: 'png' });
      this.attach(screenshot, 'image/png');
    }

    await this.teardown();
});
