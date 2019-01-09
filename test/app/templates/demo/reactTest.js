/* global describe, before, it */
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs');
const fse = require('fs-extra');
const _ = require('lodash');
const core = require('../../../../generators/app/core');
const GENERATOR = '../../../../generators/demo';
const CLIENT_FRAMEWORK = core.constant.CLIENT_FRAMEWORK.REACT;
const ROOT_ROUTE = core.constant.DEMO_ROOT_ROUTE;
const BASE_APP = `../../../base-app/${CLIENT_FRAMEWORK}/demo`;
const RESULT_PATH = `${__dirname}/${CLIENT_FRAMEWORK}/`;
const EXPECTED_FILES = require('./expectations').files(
  CLIENT_FRAMEWORK,
  ROOT_ROUTE
);

let actualContent;
let expectedContent;

/**
 * Test demo generation
 */
describe(`DEMO - CLIENT_FRAMEWORK: ${CLIENT_FRAMEWORK}\n`, () => {
  before(done => {
    helpers
      .run(path.join(__dirname, GENERATOR))
      .inTmpDir(dir => {
        fse.copySync(path.join(__dirname, `${BASE_APP}`), dir);
      })
      .withOptions({
        skipInstall: true
      })
      .on('end', () => {
        done();
      });
  });

  it('Files added successfully', () => {
    assert.file(EXPECTED_FILES.ADDED);
  });

  it('Added files has right content', () => {
    _.forEach(EXPECTED_FILES.ADDED, file => {
      actualContent = fs.readFileSync(file, 'utf8');
      expectedContent = fs.readFileSync(RESULT_PATH + file, 'utf8');
      assert.textEqual(actualContent, expectedContent);
    });
  });

  it('Updated files has right content', () => {
    _.forEach(EXPECTED_FILES.CHANGED, file => {
      actualContent = fs.readFileSync(file, 'utf8');
      expectedContent = fs.readFileSync(RESULT_PATH + file, 'utf8');
      assert.textEqual(actualContent, expectedContent);
    });
  });

  it('Files deleted successfully', () => {
    assert.noFile(EXPECTED_FILES.DELETED);
  });
});
