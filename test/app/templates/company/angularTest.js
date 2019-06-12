/* global describe, before, it */
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs');
const fse = require('fs-extra');
const _ = require('lodash');
const core = require('../../../../generators/app/core');
const expectations = require('./expectations');
const GENERATOR = '../../../../generators/app';
const COVER_TYPE = expectations.COVER_TYPE;
const CLIENT_FRAMEWORK = core.constant.CLIENT_FRAMEWORK.ANGULAR;
const ROOT_ROUTE = core.constant.ROOT_ROUTE;

let expectedFiles;
let baseApp;
let resultPath;
let actualContent;
let expectedContent;

describe(`COVER_TYPE: ${COVER_TYPE} CLIENT_FRAMEWORK: ${CLIENT_FRAMEWORK}\n`, () => {
  _.forEach(core.constant.TEST_CASE, function(TEST_CASE) {
    describe(`TEST_CASE: ${TEST_CASE}\n`, () => {
      before(done => {
        helpers
          .run(path.join(__dirname, GENERATOR))
          .inTmpDir(dir => {
            // set data by TEST_CASE
            baseApp = `../../../base-app/${CLIENT_FRAMEWORK}/${TEST_CASE}`;
            expectedFiles = expectations.files(
              CLIENT_FRAMEWORK,
              TEST_CASE,
              ROOT_ROUTE,
              COVER_TYPE+core.constant.COVER_NAME_SUFFIX_TEST
            );
            resultPath = `${__dirname}/${CLIENT_FRAMEWORK}/${TEST_CASE}/`;
            fse.copySync(path.join(__dirname, `${baseApp}`), dir);
          })
          .withOptions({
            skipInstall: true
          })
          .withPrompts({
            coverType: COVER_TYPE,
            coverName: COVER_TYPE+core.constant.COVER_NAME_SUFFIX_TEST
          })
          .on('end', () => {
            done();
          });
      });

      it('Files added successfully', () => {
        assert.file(expectedFiles.ADDED);
      });

      it('Added files has right content', () => {
        _.forEach(expectedFiles.ADDED, file => {
          actualContent = fs.readFileSync(file, 'utf8');
          expectedContent = fs.readFileSync(resultPath + file, 'utf8');
          assert.textEqual(actualContent, expectedContent);
        });
      });

      it('Updated files has right content', () => {
        _.forEach(expectedFiles.CHANGED, file => {
          actualContent = fs.readFileSync(file, 'utf8');
          expectedContent = fs.readFileSync(resultPath + file, 'utf8');
          assert.textEqual(actualContent, expectedContent);
        });
      });

      it('Content files added successfully', () => {
        assert.file(expectedFiles.CONTENT);
      });

      if (core.util.getMultiLanguageForTestCase(TEST_CASE)) {
        it('i18n files has right content\n', () => {
          _.forEach(expectedFiles.I18N, file => {
            actualContent = fs.readFileSync(file, 'utf8');
            expectedContent = fs.readFileSync(resultPath + file, 'utf8');
            assert.textEqual(actualContent, expectedContent);
          });
        });
      } else {
        it('i18n files skipped successfully\n', () => {
          assert.noFile(expectedFiles.I18N_SKIPPED);
        });
      }
    });
  });
});
