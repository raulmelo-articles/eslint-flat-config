/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
];
