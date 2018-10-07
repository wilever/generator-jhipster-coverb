const CONSTANT = {
  DEBUG: {
    MESSAGUE: {
      CUSTOM_INPUT: "Custom input selected: "
    }
  }
};
module.exports = {
  CONSTANT,
  askForCustomQuestion
};
/**
 * Ask for custom question
 */
function askForCustomQuestion() {
/* // Uncomment for ask for a custom input
  const done = this.async();
  this.prompt({
    type: "input",
    name: "customInput",
    MESSAGUE: "custom messague",
    default: "defaultValue"
  }).then(prompt => {
    this.customInput = prompt.customInput;
    this.debug(CONSTANT.DEBUG.MESSAGUE.CUSTOM_INPUT + this.customInput);
    done();
  });
*/
}
