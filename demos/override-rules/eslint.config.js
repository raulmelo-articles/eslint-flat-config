/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    rules: {
      "prefer-const": "warn",
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "prefer-const": "error",
    },
  },
];
