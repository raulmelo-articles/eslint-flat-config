/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    node: true,
  },
  rules: {
    semi: "error",
    "prefer-const": "error",
    "no-double-underscore-variable": "error",
  },
};
