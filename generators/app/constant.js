const _ = require('lodash');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');
const CLIENT_MAIN_SRC_DIR = jhipsterConstants.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = jhipsterConstants.CLIENT_TEST_SRC_DIR;

module.exports = {
    TEST_CASE: {
        CSS: 'css',
        SCSS: 'scss',
        CSS_MULTI_LANGUAGE: 'multi-language/css',
        SCSS_MULTI_LANGUAGE: 'multi-language/scss'
    },
    ROOT_ROUTE: '',
    DEMO_ROOT_ROUTE: 'coverb/',
    DEMO_MENU_NAME: 'coverb',
    I18N_SUPPORT: {
        AUTO_GENERATE: 'AUTO_GENERATE'
    },
    NEEDLE: {
        MENU_ADD_ELEMENT: 'jhipster-needle-menu-add-element',
        ADD_ELEMENT_TO_MENU: 'jhipster-needle-add-element-to-menu',
        ADD_ELEMENT_TO_MENU_DEMO: 'jhipster-needle-add-item-to-coverb-menu',
        ADD_ELEMENT_TO_VENDOR: 'jhipster-needle-add-element-to-vendor',
        ADD_ANGULAR_MODULE_IMPORT: 'jhipster-needle-angular-add-module-import',
        ADD_ANGULAR_MODULE: 'jhipster-needle-angular-add-module',
    },
    NAV_BAR_TYPE: {
        ITEM: 'ITEM',
        MENU: 'MENU',
        MENU_ITEM: 'MENU_ITEM'
    },
    ICON:{
        NAV_BAR_ITEM: 'cube',
        NAV_BAR_MENU: 'cubes',
        NAV_BAR_MENU_ITEM: 'cube',
    },
    CLIENT_FRAMEWORK: {
        ANGULAR: 'angularX',
        REACT: 'react'
    },
    COVER_TYPE: {
        ANGULAR: {
            DEFAULT: 'default',
            RESUME: 'resume',
            COMPANY: 'company',
        },
        REACT: {
            DEFAULT: 'default',
            RESUME: 'resume',
            COMPANY: 'company',
        }
    },
    MESSAGE:{
        ERROR: {
            CLIENT_FRAMEWORK_NOT_SUPPORTED: 'Sorry this cover did not have support for your client framework'
        },
        DEBUG:{
            PROMT:{
                COVER_NAME: 'Cover name selected: ',
                COVER_TYPE: 'Cover type selected: ',
                CUSTOM_QUESTION: 'Calling custom questions for: '
            }
        }
    },
    PATH:{
        CLIENT_MAIN_SRC_DIR,
        CLIENT_TEST_SRC_DIR,
        MODULE: CLIENT_MAIN_SRC_DIR+'app/app.module.ts',
        ROUTE_REACT: CLIENT_MAIN_SRC_DIR+'app/',
        HEADER_REACT: CLIENT_MAIN_SRC_DIR+'app/shared/layout/header/',
        NAV_BAR: CLIENT_MAIN_SRC_DIR+'app/layouts/navbar/navbar.component.html',
        VENDOR: 'src/main/webapp/app/vendor.ts',
        ICON: 'src/main/webapp/app/shared/icon'
        
    }
};
