const BaseGenerator = require('generator-jhipster/generators/generator-base');

module.exports = class extends BaseGenerator {
  get writing() {
    return {
      callDemo() {
        this.warning('Demo initializing...');
        const context = this;
        this.composeWith(require.resolve('../app'), {
          context,
          demo: true,
          root: 'coverb/'
        });
      }
    };
  }
  end() {
    this.success('Demo generated');
  }
};
