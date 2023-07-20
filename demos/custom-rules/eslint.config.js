const noDoubleUnderscore = require("./eslint/rules/no-double-underscore-variable");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    plugins: {
      internal: {
        rules: {
          "no-double-underscore-variable": noDoubleUnderscore,
        },
      },
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
      "internal/no-double-underscore-variable": "error",
    },
  },
];
