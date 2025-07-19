import { fs } from 'fs'
import { path } from 'path';

export default class TakeScreenshot {
  constructor(page) {
    this.page = page;
  }

  static using(page) {
    return new TakeScreenshot(page);
  }

  async saveTo(fileName = 'screenshot.png', folder = 'report/screenshots') {
    const dir = path.resolve(folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    await this.page.screenshot({ path: path.join(dir, fileName), fullPage: true });
  }
}
