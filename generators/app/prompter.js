/**
 * Core prompt questions
 */
const validator = require('./validator');
const util = require('./util');
const constant = {
  MESSAGE: {
    COVER_TYPE: 'Which type do you prefer?',
    COVER_NAME: 'Which name do you prefer?'
  },
  DEBUG: {
    MESSAGE: {
      COVER_NAME: 'Cover name selected: ',
      COVER_TYPE: 'Cover type selected: ',
      CUSTOM_QUESTION: 'Calling custom questions for: '
    }
  }
};

module.exports = {
  /** Constants */
  constant,
  /** Methods */
  askForCoverType,
  askForCustomCoverQuestions,
  askForCoverName
};
/**
 * Ask for cover type
 */
function askForCoverType() {
  const done = this.async();
  this.prompt({
    type: 'list',
    name: 'coverType',
    message: constant.MESSAGE.COVER_TYPE,
    choices: util.getCoverListChoices(this.CLIENT_FRAMEWORK)
  }).then(prompt => {
    this.COVER_TYPE = prompt.coverType;
    this.debug(constant.DEBUG.MESSAGE.COVER_TYPE + this.coverType);
    done();
  });
}
/**
 * Ask for custom questions
 */
function askForCustomCoverQuestions() {
  this.debug(constant.DEBUG.MESSAGE.CUSTOM_QUESTION + this.COVER_TYPE);
  require(`./templates/${this.COVER_TYPE}/prompter`).askForCustomQuestion();
}
/**
 * Ask for cover name
 */
function askForCoverName() {
  const done = this.async();
  this.prompt({
    type: 'input',
    name: 'coverName',
    message: constant.MESSAGE.COVER_NAME,
    validate: validator.validateCoverName,
    default: this.COVER_TYPE
  }).then(prompt => {
    this.COVER_NAME = prompt.coverName;
    // Only for test cover
    if (this.COVER_TYPE == 'TEST') {
      this.COVER_TYPE = this.COVER_NAME;
    }
    this.debug(constant.DEBUG.MESSAGE.COVER_TYPE + this.coverType);
    done();
  });
}
