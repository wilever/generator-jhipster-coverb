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
 * Pre write
 * 
 * @param {*} generator 
 */
function preWrite(generator) {
  
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
  
  switch (generator.CLIENT_FRAMEWORK) {
    case constant.CLIENT_FRAMEWORK.ANGULAR:
      // Add angular module
      util.addAngularModule(
        generator.ANGULAR_X_APP_NAME,
        generator.COVER_NAME,
        generator.ROOT_ROUTE,
        generator
        );
      break;
    case constant.CLIENT_FRAMEWORK.REACT:
      break;
  }
  // Autogenerate i18n files
  if (generator.ENABLE_TRANSLATION === true) {
    util.autoGenerateI18nFiles(
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
  // Autogenerate i18n menu
  if (generator.ENABLE_TRANSLATION === true) {
    util.autoGenerateI18nMenu(
      generator.COVER_NAME,
      generator
    );
  }
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
          NAME: "ICON_LOADER",
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/icon_loader.ts.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/icon_loader.ts`,
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
        },
        {
          NAME: "CUBE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCube.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CUBE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCube.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BULLHORN_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBullhorn.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBullhorn.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BULLHORN_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBullhorn.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBullhorn.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CHARTLINE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faChartLine.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faChartLine.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CHARTLINE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faChartLine.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faChartLine.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "COGS_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCogs.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCogs.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "COGS_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCogs.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCogs.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CUBES_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCubes.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCubes.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CUBES_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCubes.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCubes.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "MAGIC_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faMagic.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMagic.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "MAGIC_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faMagic.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMagic.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SERVER_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faServer.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faServer.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SERVER_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faServer.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faServer.js`,
          METHOD: 'CONTENT',
        },
      ];
    case constant.CLIENT_FRAMEWORK.REACT:
    return [
      /*{
        NAME: "INDEX",
        FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/index.ts.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/index.ts`,
        METHOD: 'TEMPLATE',
      },*/
      {
        NAME: "ICON_LOADER",
        FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/icon_loader.ts.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/icon_loader.ts`,
        METHOD: 'TEMPLATE',
      },
      {
        NAME: "COMPONENT",
        FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/component.tsx.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/component.tsx`,
        METHOD: 'TEMPLATE',
      },
      /*{
        NAME: "MODULE",
        FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/module.ts.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/module.ts`,
        METHOD: 'TEMPLATE',
      },*/
      {
        NAME: "ITEM",
        FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/company.item.tsx.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/company.item.tsx`,
        METHOD: 'TEMPLATE',
      },
      /*{
        NAME: "HTML",
        FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/component.html.ejs`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/component.html`,
        METHOD: 'TEMPLATE',
      },*/
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
      },
      {
        NAME: "CUBE_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faCube.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "CUBE_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faCube.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.js`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "BULLHORN_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faBullhorn.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBullhorn.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "BULLHORN_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faBullhorn.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBullhorn.js`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "CHARTLINE_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faChartLine.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faChartLine.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "CHARTLINE_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faChartLine.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faChartLine.js`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "COGS_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faCogs.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCogs.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "COGS_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faCogs.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCogs.js`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "CUBES_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faCubes.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCubes.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "CUBES_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faCubes.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCubes.js`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "MAGIC_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faMagic.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMagic.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "MAGIC_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faMagic.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMagic.js`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "SERVER_ICON_TS",
        FROM: `${COVER_TYPE}/content/icon/solid/faServer.d.ts`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faServer.d.ts`,
        METHOD: 'CONTENT',
      },
      {
        NAME: "SERVER_ICON_JS",
        FROM: `${COVER_TYPE}/content/icon/solid/faServer.js`,
        TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faServer.js`,
        METHOD: 'CONTENT',
      },
    ];
    default:
      return null; // Not supported
  }
}
