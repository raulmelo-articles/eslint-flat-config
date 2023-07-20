/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ["eslint.config.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prefer-const": "warn",
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "prefer-const": "error",
      },
    },
  ],
};
