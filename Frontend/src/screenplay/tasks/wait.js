export default class Wait {
  constructor(milliseconds) {
    this.milliseconds = milliseconds;
  }

  static forSeconds(seconds) {
    return new Wait(seconds * 1000);
  }

  async performAs() {
    await new Promise(resolve => setTimeout(resolve, this.milliseconds));
  }
}
