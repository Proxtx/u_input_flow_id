export class Component {
  constructor(options) {
    this.document = options.shadowDom;
  }

  setConfig(config) {
    this.config = config;
  }

  getValue() {
    return {
      flowIdOverwrite: true,
      evaluate: true,
    };
  }

  async setValue(v) {}
}
