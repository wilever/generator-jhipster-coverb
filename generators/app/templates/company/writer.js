const core = require('../../core');
const constant = core.constant;
const util = core.util;
const _ = require("lodash");
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.COMPANY;
const CLIENT_MAIN_SRC_DIR = constant.PATH.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = constant.PATH.CLIENT_TEST_SRC_DIR;
const I18N_BASE_FILE = `${COVER_TYPE}/i18n/default/component.json.ejs`;

module.exports = {
  COVER_TYPE,
  CLIENT_MAIN_SRC_DIR,
  CLIENT_TEST_SRC_DIR,
  getFiles,
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
  // Prepare to write
  preWrite(generator);
  // Write files
  writeFiles(generator);
  // Add another data
  postWrite(generator);
}
/**
 * Pre write: Install dependencies 
 * 
 * @param {*} generator 
 */
function preWrite(generator) {
  generator.addNpmDependency('@fortawesome/free-brands-svg-icons', '5.2.0');
  const vendorIcons = 
  `|// Imports all fontawesome icons
  |import { fas } from '@fortawesome/free-solid-svg-icons';
  |import { fab } from '@fortawesome/free-brands-svg-icons';
  |
  |// Add all icons to the library so you can use it in your page
  |library.add(fas, fab);`
  util.updateFile(
    constant.PATH.VENDOR,
    vendorIcons,
    constant.NEEDLE.ADD_ELEMENT_TO_VENDOR,
    generator
  );
}
/**
 * Write required files, style and i18n support
 */
function writeFiles(generator) {
  // Write required files
  util.copyFiles(
    getFiles(generator
    ),generator
  );
  // Style CSS or SASS file
  if(!generator.USE_SASS) {
    util.copyFiles(
      [{
        NAME: "CSS",
        FROM: `${COVER_TYPE}/${generator.CLIENT_FRAMEWORK}/style.css.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${generator.ROOT_ROUTE}${_.kebabCase(generator.COVER_NAME)}/style.css`,
        METHOD: 'TEMPLATE',
      }]
      ,generator
    );
  } else {
    util.copyFiles(
      [{
        NAME: "SCSS",
        FROM: `${COVER_TYPE}/${generator.CLIENT_FRAMEWORK}/style.scss.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${generator.ROOT_ROUTE}${_.kebabCase(generator.COVER_NAME)}/style.scss`,
        METHOD: 'TEMPLATE',
      }]
      ,generator
    );
  }
  
  // Add angular module
  util.addAngularModule(
      generator.ANGULAR_X_APP_NAME,
      generator.COVER_NAME,
      generator.ROOT_ROUTE,
      generator
  );
  // Autogenerate i18n files
  if (generator.ENABLE_TRANSLATION === true) {
    util.autoGenerateI18n(
      generator.COVER_NAME,
      I18N_BASE_FILE,
      generator
    );
  }
}
/**
 * Post write: add nav bar item
 * 
 * @param {*} generator 
 */
function postWrite(generator) {
  util.addNavBarItem(
    constant.NAV_BAR_TYPE.ITEM,
    constant.NEEDLE.ADD_ELEMENT_TO_MENU,
    generator.COVER_NAME,
    generator.ROOT_ROUTE,
    generator
  );
}
/**
 * Get files to copy
 *
 * @param {string} ROOT_ROUTE kebabCase and lowerCase
 */
function getFiles(generator) {
  const ROOT_ROUTE = generator.ROOT_ROUTE;
  const CLIENT_FRAMEWORK = generator.CLIENT_FRAMEWORK;
  const COVER_NAME = _.kebabCase(generator.COVER_NAME);
  switch (CLIENT_FRAMEWORK) {
    case constant.CLIENT_FRAMEWORK.ANGULAR:
      return [
        {
          NAME: "INDEX",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/index.ts.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/index.ts`,
          METHOD: 'TEMPLATE',
        },
        {
          NAME: "COMPONENT",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/component.ts.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/component.ts`,
          METHOD: 'TEMPLATE',
        },
        {
          NAME: "MODULE",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/module.ts.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/module.ts`,
          METHOD: 'TEMPLATE',
        },
        {
          NAME: "ROUTE",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/route.ts.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/route.ts`,
          METHOD: 'TEMPLATE',
        },
        {
          NAME: "HTML",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/component.html.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/component.html`,
          METHOD: 'TEMPLATE',
        },
        {
          NAME: "TEST",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/test/component.spec.ts.ejs`,
          TO: `${CLIENT_TEST_SRC_DIR}spec/app/${ROOT_ROUTE}${COVER_NAME}/component.spec.ts`,
          METHOD: 'TEMPLATE',
        },
        {
          NAME: "LOGO_ALTERNATE",
          FROM: `${COVER_TYPE}/content/images/logo/logo-alternate.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/logo-alternate.png`,
          METHOD: 'CONTENT',
        }
      ];
    case constant.CLIENT_FRAMEWORK.REACT:
      return null; // Not supported
    default:
      return null; // Not supported
  }
}
