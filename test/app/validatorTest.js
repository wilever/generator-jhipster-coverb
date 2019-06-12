/* global describe, before, it */
const assert = require('yeoman-assert');
const validator = require('../../generators/app/validator');

describe('Core validator test: ', () => {
  describe('Cover name cannot contain special characters (except - ) or a blank space', () => {
    it('valid input: single-cover', () => {
      const testValue = 'single-cover';
      const actual = validator.validateCoverName(testValue);
      const expected = true;
      assert.strictEqual(
        actual,
        expected,
        `validator should return [${expected}] for [${testValue}]`
      );
    });
    it('invalid input: single_cover', () => {
      const testValue = 'single_cover';
      const actual = validator.validateCoverName(testValue);
      const expected = validator.constant.ERROR.MESSAGE.COVER_NAME;
      assert.strictEqual(
        actual,
        expected,
        `validator should return [${expected}] for [${testValue}]`
      );
    });
  });
  describe('Cover root cannot contain special characters (except / ) or a blank space', () => {
    it('valid input: single/cover', () => {
      const testValue = 'single/cover';
      const actual = validator.validateRootRoute(testValue);
      const expected = true;
      assert.strictEqual(
        actual,
        expected,
        `validator should return [${expected}] for [${testValue}]`
      );
    });
    it('invalid input: single%cover', () => {
      const testValue = 'single%cover';
      const actual = validator.validateRootRoute(testValue);
      const expected = validator.constant.ERROR.MESSAGE.ROOT_ROUTE;
      assert.strictEqual(
        actual,
        expected,
        `validator should return [${expected}] for [${testValue}]`
      );
    });
  });
});
