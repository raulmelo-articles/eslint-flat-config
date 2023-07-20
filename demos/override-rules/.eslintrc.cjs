/** @type {import('eslint').Linter.Config} */
module.exports = {
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
