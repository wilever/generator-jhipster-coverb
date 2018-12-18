const core = require('../../core');
const constant = core.constant;
const util = core.util;
const _ = require("lodash");
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.RESUME;
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
    getFiles(generator)
    ,generator
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
          NAME: "PERFIL_IMAGE",
          FROM: `${COVER_TYPE}/content/images/logo/icons/logo-alternate.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/logo-alternate.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/cucumber.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/cucumber.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/gatling.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/gatling.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/gradle.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/gradle.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/hibernate.gif`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/hibernate.gif`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/maven.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/maven.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/netflix.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/netflix.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/sass.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/sass.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/spring.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/spring.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ICON",
          FROM: `${COVER_TYPE}/content/images/logo/icons/swagger.png`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/swagger.png`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/angular.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/angular.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/bootstrap.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/bootstrap.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/circleci.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/circleci.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/css3.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/css3.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/gitlab.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/gitlab.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/html5.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/html5.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/jenkins.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/jenkins.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/react.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/react.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/sass.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/sass.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/spring-boot.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/spring-boot.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/travis.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/travis.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/typescript.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/typescript.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SVG",
          FROM: `${COVER_TYPE}/content/images/logo/svg/webpack.svg`,
          TO: `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/webpack.svg`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "INSTAGRAM_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/brand/faInstagram.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faInstagram.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "INSTAGRAM_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/brand/faInstagram.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faInstagram.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "TWITTER_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/brand/faTwitter.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faTwitter.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "TWITTER_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/brand/faTwitter.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faTwitter.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GITHUB_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/brand/faGithub.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faGithub.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GITHUB_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/brand/faGithub.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faGithub.js`,
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
          NAME: "LINKEDIN_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/brand/faLinkedin.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faLinkedin.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "LINKEDIN_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/brand/faLinkedin.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faLinkedin.js`,
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
          NAME: "BASEBALL_BALL_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBaseballBall.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBaseballBall.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BASEBALL_BALL_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBaseballBall.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBaseballBall.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BICYCLE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBicycle.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBicycle.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BICYCLE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBicycle.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBicycle.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BOOK_READER_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBookReader.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBookReader.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "BOOK_READER_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faBookReader.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBookReader.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CAMERA_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCamera.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCamera.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CAMERA_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCamera.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCamera.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CODE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCode.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCode.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "CODE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faCode.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCode.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "DUMBBELL_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faDumbbell.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faDumbbell.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "DUMBBELL_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faDumbbell.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faDumbbell.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ENVELOPE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faEnvelope.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faEnvelope.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "ENVELOPE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faEnvelope.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faEnvelope.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GAMEPAD_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faGamepad.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGamepad.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GAMEPAD_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faGamepad.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGamepad.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GRADUATION_CAP_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faGraduationCap.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGraduationCap.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GRADUATION_CAP_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faGraduationCap.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGraduationCap.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GRIN_BEAM_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faGrinBeam.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGrinBeam.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "GRIN_BEAM_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faGrinBeam.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGrinBeam.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "HAND_SHAKE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faHandshake.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHandshake.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "HAND_SHAKE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faHandshake.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHandshake.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "HEAD_SET_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faHeadset.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHeadset.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "HEAD_SET_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faHeadset.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHeadset.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "HOME_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faHome.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHome.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "HOME_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faHome.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHome.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "IMAGE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faImage.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faImage.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "IMAGE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faImage.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faImage.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "KEYBOARD_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faKeyboard.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKeyboard.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "KEYBOARD_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faKeyboard.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKeyboard.js`,
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
          NAME: "MUSIC_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faMusic.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMusic.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "MUSIC_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faMusic.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMusic.js`,
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
        {
          NAME: "PHONE_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faPhone.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPhone.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "PHONE_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faPhone.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPhone.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SWIMMER_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faSwimmer.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faSwimmer.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "SWIMMER_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faSwimmer.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faSwimmer.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "THEATER_MASKS_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faTheaterMasks.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTheaterMasks.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "THEATER_MASKS_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faTheaterMasks.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTheaterMasks.js`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "TICKET_ALT_ICON_TS",
          FROM: `${COVER_TYPE}/content/icon/solid/faTicketAlt.d.ts`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTicketAlt.d.ts`,
          METHOD: 'CONTENT',
        },
        {
          NAME: "TICKET_ALT_ICON_JS",
          FROM: `${COVER_TYPE}/content/icon/solid/faTicketAlt.js`,
          TO: `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTicketAlt.js`,
          METHOD: 'CONTENT',
        },
      ];
    case constant.CLIENT_FRAMEWORK.REACT:
      return null; // Not supported
    default:
      return null; // Not supported
  }
}
