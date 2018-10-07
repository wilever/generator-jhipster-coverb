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
          constant.PATH.VENDOR,
          `package.json`
        ]
      };
    case constant.CLIENT_FRAMEWORK.REACT:
      return null; // Not supported
    default:
      return null; // Not supported
  }
}
