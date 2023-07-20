/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ["eslint.config.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prefer-const": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      ignorePatterns: ["**/mocks/*.ts"], // or here to be more specific
      rules: {
        "prefer-const": "warn",
      },
    },
  ],
};
