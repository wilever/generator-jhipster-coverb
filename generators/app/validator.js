const constant = {
  ERROR: {
    MESSAGE: {
      COVER_NAME:
        'Your cover name cannot contain special characters (except - ) or a blank space.',
      ROOT_ROUTE:
        'Your root name cannot contain special characters (except / ) or a blank space.'
    }
  }
};
module.exports = {
  constant,
  validateCoverName,
  validateRootRoute
};

/**
 * Validate cover name
 *
 * @param {string} input - input to validate
 */
function validateCoverName(input) {
  if (!/^([a-zA-Z0-9-]*)$/.test(input)) {
    return constant.ERROR.MESSAGE.COVER_NAME;
  }
  return true;
}

/**
 * Validate root route
 *
 * @param {string} input - input to validate
 */
function validateRootRoute(input) {
  if (!/^([a-z0-9/]*)$/.test(input)) {
    return constant.ERROR.MESSAGE.ROOT_ROUTE;
  }
  return true;
}
