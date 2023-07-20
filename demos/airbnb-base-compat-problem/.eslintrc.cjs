/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ["eslint.config.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["airbnb-base"],
  rules: {
    "arrow-body-style": ["error", "always"],
  },
};
