/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ["eslint.config.js"],
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
