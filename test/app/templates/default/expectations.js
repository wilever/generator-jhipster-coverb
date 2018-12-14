const constant = require('../../../../generators/app/constant');
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.DEFAULT;
const writer = require(`../../../../generators/app/templates/${COVER_TYPE}/writer`);
const CLIENT_MAIN_SRC_DIR = writer.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = writer.CLIENT_TEST_SRC_DIR;

module.exports = {
  files,
  COVER_TYPE,
  CLIENT_MAIN_SRC_DIR,
}

/**
 * Get files expected
 *
 * @param {string} ROOT_ROUTE kebabCase and lowerCase
 */
function files(CLIENT_FRAMEWORK, TEST_CASE, ROOT_ROUTE) {
  const FILE_PATH = `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_TYPE}`;
  const TEST_PATH = `${CLIENT_TEST_SRC_DIR}spec/app/${COVER_TYPE}`;
  switch (CLIENT_FRAMEWORK) {
    case constant.CLIENT_FRAMEWORK.ANGULAR:
      return {
        ADDED: [
        `${FILE_PATH}/index.ts`,
        `${FILE_PATH}/icon_loader.ts`,
        `${FILE_PATH}/component.html`,
        `${FILE_PATH}/module.ts`,
        `${FILE_PATH}/route.ts`,
        `${FILE_PATH}/style.${TEST_CASE == 'css' ? 'css':'scss'}`,
        `${TEST_PATH}/component.spec.ts`,
      ],
      CHANGED: [
        `${CLIENT_MAIN_SRC_DIR}/app/layouts/navbar/navbar.component.html`,
        `${CLIENT_MAIN_SRC_DIR}/app/app.module.ts`,
        `package.json`,
      ],
      CONTENT: [
        `${CLIENT_MAIN_SRC_DIR}content/images/resume.png`,
        `${CLIENT_MAIN_SRC_DIR}content/images/company.png`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/brand/faSass.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/brand/faSass.js`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faKey.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faKey.js`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faLanguage.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faLanguage.js`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faLockOpen.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faLockOpen.js`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faMagic.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faMagic.js`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faPalette.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}content/icon/solid/faPalette.js`,
      ],
      I18N_SKIPPED: [
        `${CLIENT_MAIN_SRC_DIR}i18n`,
      ],
      I18N: [
        `${CLIENT_MAIN_SRC_DIR}i18n/en/${COVER_TYPE}.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/es/${COVER_TYPE}.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/${COVER_TYPE}.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/global.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/es/global.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/global.json`,
      ],
    };
    case constant.CLIENT_FRAMEWORK.REACT:
      return null; // Not supported
    default:
      return null; // Not supported
  }
}