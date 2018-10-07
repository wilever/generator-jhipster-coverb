const _ = require('lodash');
const core = require('../../core');
const constant = core.constant;
const util = core.util;
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.COMPANY;
const CLIENT_MAIN_SRC_DIR = constant.PATH.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = constant.PATH.CLIENT_TEST_SRC_DIR;

module.exports = {
  COVER_TYPE,
  CLIENT_MAIN_SRC_DIR,
  CLIENT_TEST_SRC_DIR,
  preWrite,
  writeFiles,
  postWrite,
  run
};
/**
 * Start writer
 * @param {*} generator 
 */
function run(generator) {
  // Add menu nav bar
  util.addNavBarItem (
    constant.NAV_BAR_TYPE.MENU,
    constant.NEEDLE.ADD_ELEMENT_TO_MENU,
    _.kebabCase(generator.ROOT_ROUTE),
    null,
    generator
  );
  // Add i18n support to menu nav bar
  generator.getAllInstalledLanguages().forEach((language) => {
    // Add menu to global.json
    util.updateFile(
        `${CLIENT_MAIN_SRC_DIR}i18n/${language}/global.json`,
        `"${_.kebabCase(generator.ROOT_ROUTE)}": "${_.startCase(generator.ROOT_ROUTE)}",`,
        constant.NEEDLE.MENU_ADD_ELEMENT,
        generator
    );
  });
  // For each cover generate a page
  _.forEach(util.getCoverList(generator.CLIENT_FRAMEWORK), function(COVER) {  
    generator.COVER_TYPE = COVER;
    generator.COVER_NAME = generator.COVER_TYPE;
    // Prepare to write
    preWrite(generator);
    // Write files
    writeFiles(generator);
    // Add another data
    postWrite(generator);
  });
}
/**
 * Pre write: Add menu nav bar and call Cover preWrite()
 * 
 * @param {*} generator 
 */
function preWrite(generator) {
  require(`../${generator.COVER_TYPE}/writer`)
    .preWrite(generator);
}
/**
 * Write cover files
 */
function writeFiles(generator) {
  require(`../${generator.COVER_TYPE}/writer`)
    .writeFiles(generator);
}
/**
 * Post write: add nav bar menu item
 * 
 * @param {*} generator 
 */
function postWrite(generator) {
  util.addNavBarItem(
    constant.NAV_BAR_TYPE.MENU_ITEM,
    `jhipster-needle-add-item-to-${_.kebabCase(generator.ROOT_ROUTE)}-menu`,
    generator.COVER_TYPE,
    generator.ROOT_ROUTE,
    generator
  ); 
}
