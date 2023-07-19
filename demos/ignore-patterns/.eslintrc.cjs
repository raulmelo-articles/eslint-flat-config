/** @type {import('eslint').Linter.Config} */
module.exports = {
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
