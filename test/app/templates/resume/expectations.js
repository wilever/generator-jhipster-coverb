const util = require('../../../../generators/app/util');
const constant = require('../../../../generators/app/constant');
const COVER_TYPE = constant.COVER_TYPE.ANGULAR.RESUME;
const writer = require(`../../../../generators/app/templates/${COVER_TYPE}/writer`);
const CLIENT_MAIN_SRC_DIR = writer.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = writer.CLIENT_TEST_SRC_DIR;

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
          `${FILE_PATH}/style.${util.getStyleSuffixForTestCase(TEST_CASE)}`,
          `${TEST_PATH}/component.spec.ts`
        ],
        CHANGED: [
          `${CLIENT_MAIN_SRC_DIR}/app/layouts/navbar/navbar.component.html`,
          `${CLIENT_MAIN_SRC_DIR}/app/app.module.ts`,
          `package.json`
        ],
        CONTENT: [
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/cucumber.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/gatling.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/gradle.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/hibernate.gif`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/maven.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/netflix.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/sass.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/spring.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/icons/swagger.png`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/angular.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/bootstrap.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/circleci.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/css3.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/gitlab.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/html5.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/jenkins.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/react.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/sass.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/spring-boot.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/travis.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/typescript.svg`,
          `${CLIENT_MAIN_SRC_DIR}content/images/logo/svg/webpack.svg`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faGithub.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faGithub.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faInstagram.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faInstagram.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faLinkedin.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faLinkedin.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faTwitter.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faTwitter.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBaseballBall.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBaseballBall.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBicycle.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBicycle.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBookReader.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBookReader.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCamera.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCamera.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCode.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCode.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faDumbbell.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faDumbbell.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faEnvelope.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faEnvelope.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGamepad.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGamepad.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGraduationCap.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGraduationCap.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGrinBeam.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGrinBeam.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHandshake.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHandshake.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHeadset.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHeadset.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHome.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHome.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faImage.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faImage.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKeyboard.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKeyboard.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMusic.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMusic.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPhone.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPhone.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faSwimmer.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faSwimmer.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTheaterMasks.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTheaterMasks.js`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTicketAlt.d.ts`,
          `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTicketAlt.js`
        ],
        I18N_SKIPPED: [`${CLIENT_MAIN_SRC_DIR}i18n`],
        I18N: [
          `${CLIENT_MAIN_SRC_DIR}i18n/en/${COVER_TYPE}.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/es/${COVER_TYPE}.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/fr/${COVER_TYPE}.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/en/global.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/es/global.json`,
          `${CLIENT_MAIN_SRC_DIR}i18n/fr/global.json`
        ]
      };
    case constant.CLIENT_FRAMEWORK.REACT:
      return {
        ADDED: [
        `${FILE_PATH}/icon-loader.tsx`,
        `${FILE_PATH}/component.tsx`,
        `${FILE_PATH}/navbar.item.tsx`,
        `${FILE_PATH}/style.${util.getStyleSuffixForTestCase(TEST_CASE)}`,
      ],
      CHANGED: [
        `${CLIENT_MAIN_SRC_DIR}app/routes.tsx`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/layout/header/header.tsx`,
      ],
      CONTENT: [
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/cucumber.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/gatling.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/gradle.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/hibernate.gif`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/maven.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/netflix.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/sass.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/spring.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/icons/swagger.png`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/angular.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/bootstrap.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/circleci.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/css3.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/gitlab.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/html5.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/jenkins.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/react.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/sass.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/spring-boot.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/travis.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/typescript.svg`,
        `${CLIENT_MAIN_SRC_DIR}static/images/logo/svg/webpack.svg`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faGithub.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faGithub.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faInstagram.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faInstagram.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faLinkedin.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faLinkedin.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faSass.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faTwitter.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/brand/faTwitter.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCube.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBaseballBall.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBaseballBall.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBicycle.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBicycle.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBookReader.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faBookReader.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCamera.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCamera.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCode.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faCode.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faDumbbell.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faDumbbell.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faEnvelope.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faEnvelope.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGamepad.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGamepad.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGraduationCap.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGraduationCap.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGrinBeam.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faGrinBeam.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHandshake.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHandshake.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHeadset.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHeadset.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHome.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faHome.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faImage.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faImage.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKeyboard.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faKeyboard.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faLanguage.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMusic.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faMusic.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPalette.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPhone.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faPhone.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faSwimmer.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faSwimmer.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTheaterMasks.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTheaterMasks.js`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTicketAlt.d.ts`,
        `${CLIENT_MAIN_SRC_DIR}app/shared/icon/solid/faTicketAlt.js`
      ],
      I18N_SKIPPED: [`${CLIENT_MAIN_SRC_DIR}i18n`],
      I18N: [
        `${CLIENT_MAIN_SRC_DIR}i18n/en/${COVER_TYPE}.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/es/${COVER_TYPE}.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/${COVER_TYPE}.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/global.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/es/global.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/global.json`
      ]
    };
    default:
      return null; // Not supported
  }
}
