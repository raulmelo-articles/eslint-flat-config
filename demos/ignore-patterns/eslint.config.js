/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    rules: {
      "prefer-const": "error",
    },
  },
  {
    files: ["**/*.ts"],
    ignores: ["**/mocks/*.ts"],
    rules: {
      "prefer-const": "warn",
    },
  },
];
