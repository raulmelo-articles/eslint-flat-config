/** @type {import('eslint').Linter.Config} */
module.export = {
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
