/**
 * Coverb generator for Jhipster applications
 */
const BaseGenerator = require("generator-jhipster/generators/generator-base");
const core = require("./core");
let demo;
module.exports = class extends BaseGenerator {
  constructor(args, opts) {
    super(args, opts);
    this.configOptions = {};
    // This adds support for a `--demo` flag
    this.option("demo", {
      desc: "Generate a coverb demostration",
      type: Boolean,
      defaults: false
    });
    // This adds support for a `--root` flag
    this.option("root", {
      desc:
        "Root for your route. Important: root in kebabCase. E.g: entities/entity => root= entities/",
      type: String,
      defaults: core.constant.ROOT_ROUTE
    });
    demo = this.options["demo"];
    this.ROOT_ROUTE = this.options["root"];
    // Show root value if it is no default one
    if (this.ROOT_ROUTE != core.constant.ROOT_ROUTE) {
      this.log("root: " + this.ROOT_ROUTE);
    }
  }

  get initializing() {
    return {
      initializing() {
        // set data from jhipster application
        core.util.initializing(this);
      }
    };
  }

  _prompting() {
    return {
      // ask for cover data
      askForCoverType: core.prompter.askForCoverType,
      askForCoverName: core.prompter.askForCoverName,
      askForCustomCoverQuestions: core.prompter.askForCustomCoverQuestions
    };
  }

  get prompting() {
    if (demo) return;
    return this._prompting();
  }

  _demo() {
    return {
      runDemo() {
        // run demo writer
        core.util.writeDemoFiles(this);
      }
    };
  }

  _writing() {
    return {
      runCoverWriter() {
        // run cover writer
        core.util.writeCoverFiles(this);
      }
    };
  }

  get writing() {
    if (demo) return this._demo();
    return this._writing();
  }

  get end() {
    return {
      installDependencies() {
        // install dependencies
        if (this.options["skip-install"]) {
          if (this.jhipsterAppConfig.clientPackageManager === "yarn") {
            this.warning(`Installing dependencies using yarn`);
            this.yarnInstall();
          } else if (this.jhipsterAppConfig.clientPackageManager === "npm") {
            this.warning(`Installing dependencies using npm`);
            this.npmInstall();
          }
        } else {
            this.warning(`Dependencies instalation skipped`);
        }
      }
    };
  }
};
