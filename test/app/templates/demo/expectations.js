const constant = require('../../../../generators/app/constant');
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.RESUME;
const writer = require(`../../../../generators/app/templates/${COVER_TYPE}/writer`);
const CLIENT_MAIN_SRC_DIR = writer.CLIENT_MAIN_SRC_DIR;

module.exports = {
  files,
  COVER_TYPE,
  CLIENT_MAIN_SRC_DIR
};

/**
 * Get files expected
 *
 * @param {string} ROOT_ROUTE kebabCase and lowerCase
 */
function files(CLIENT_FRAMEWORK, ROOT_ROUTE) {
  const FILE_PATH = `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}${COVER_TYPE}`;
  switch (CLIENT_FRAMEWORK) {
    case constant.CLIENT_FRAMEWORK.ANGULAR:
      return {
        ADDED: [`${FILE_PATH}/route.ts`],
        CHANGED: [
          `${CLIENT_MAIN_SRC_DIR}/app/layouts/navbar/navbar.component.html`,
          `${CLIENT_MAIN_SRC_DIR}/app/app.module.ts`,
          `package.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/en/global.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/es/global.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/fr/global.json`,
        ]
      };
    case constant.CLIENT_FRAMEWORK.REACT:
    return {
      ADDED: [
        `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}/icon-loader.tsx`,
        `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}/index.tsx`,
        `${CLIENT_MAIN_SRC_DIR}app/${ROOT_ROUTE}/navbar.menu.tsx`,
      ],
      CHANGED: [
      ]
    };
    default:
      return null; // Not supported
  }
}
