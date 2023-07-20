/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ["eslint.config.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: "error",
    "prefer-const": "error",
  },
};
