const core = require('../../core');
const constant = core.constant;
const util = core.util;
const _ = require("lodash");
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.DEFAULT;
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

  switch (generator.CLIENT_FRAMEWORK) {
    case constant.CLIENT_FRAMEWORK.ANGULAR:
      util.addNavBarItem(
        constant.NAV_BAR_TYPE.ITEM,
        constant.NEEDLE.ADD_ELEMENT_TO_MENU,
        generator.COVER_NAME,
        generator.ROOT_ROUTE,
        generator
      );
      break;
    case constant.CLIENT_FRAMEWORK.REACT:
      updateRoutes(generator);
      updateHeader(generator);
      util.excludeIcons(generator);
      break;
  }
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
          NAME: "RESUME",
          FROM: `${COVER_TYPE}/content/images/resume.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/resume.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "COMPANY",
          FROM: `${COVER_TYPE}/content/images/company.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/company.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SASS_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/brand/faSass.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SASS_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/brand/faSass.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.js`,
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
          NAME: "KEY_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faKey.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKey.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "KEY_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faKey.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKey.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LANGUAGE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLanguage.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LANGUAGE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLanguage.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LOCK_OPEN_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLockOpen.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLockOpen.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LOCK_OPEN_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLockOpen.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLockOpen.js`,
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
          NAME: "PALETTE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faPalette.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "PALETTE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faPalette.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.js`,
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
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/icon-loader.tsx.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/icon-loader.tsx`,
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
          FROM: `${COVER_TYPE}/${CLIENT_FRAMEWORK}/navbar.item.tsx.ejs`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_NAME}/navbar.item.tsx`,
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
          NAME: "RESUME",
          FROM: `${COVER_TYPE}/content/images/resume.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}static/images/resume.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "COMPANY",
          FROM: `${COVER_TYPE}/content/images/company.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}static/images/company.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SASS_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/brand/faSass.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SASS_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/brand/faSass.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.js`,
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
          NAME: "KEY_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faKey.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKey.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "KEY_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faKey.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKey.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LANGUAGE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLanguage.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LANGUAGE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLanguage.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LOCK_OPEN_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLockOpen.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLockOpen.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LOCK_OPEN_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faLockOpen.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLockOpen.js`,
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
          NAME: "PALETTE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faPalette.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "PALETTE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faPalette.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.js`,
          METHOD: 'CONTENT',
        },
      ];
    default:
      return null; // Not supported
  }
}

async function updateRoutes(generator){
  await addRouteImport(generator) // Wait for this
  await addRoute(generator) // Then wait for that
};


function addRoute(generator) {
  const file = constant.PATH.ROUTE_REACT+`routes.tsx`;
  const pattern = `<ErrorBoundaryRoute path="/" component={Home} />`;
  const content = `<ErrorBoundaryRoute path="/${_.kebabCase(generator.COVER_NAME)}" component={${_.startCase(generator.COVER_NAME)}} />
      <ErrorBoundaryRoute path="/" component={Home} />`
  util.replaceContent({
    file: file,
    pattern,
    content, 
  },generator);
}

function addRouteImport(generator) {
  const file = constant.PATH.ROUTE_REACT+`routes.tsx`;
  const pattern = `import { AUTHORITIES } from 'app/config/constants';`;
  const content = `import { AUTHORITIES } from 'app/config/constants';

import ${_.startCase(generator.COVER_NAME)} from 'app/${generator.ROOT_ROUTE}${_.kebabCase(generator.COVER_NAME)}/component';`;
  util.replaceContent({
    file: file,
    pattern,
    content
  },generator);
}

async function updateHeader(generator){
  await addHeaderImport(generator) // Wait for this
  await addHeader(generator) // Then wait for that
};

function addHeader(generator) {
  const file = constant.PATH.HEADER_REACT+`header.tsx`;
  const pattern = `<Home />`;
  const content = `<Home />
              <${_.startCase(generator.COVER_NAME)} />`
  util.replaceContent({
    file: file,
    pattern,
    content, 
  },generator);
}

function addHeaderImport(generator) {
  const file = constant.PATH.HEADER_REACT+`header.tsx`;
  const pattern = `import React from 'react';`;
  const content = `import React from 'react';

import ${_.startCase(generator.COVER_NAME)} from 'app/${generator.ROOT_ROUTE}${_.kebabCase(generator.COVER_NAME)}/navbar.item';`;
  util.replaceContent({
    file: file,
    pattern,
    content
  },generator);
}
