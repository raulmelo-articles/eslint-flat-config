/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules/**", "bin/**", "build/**", "dist/**"],
  },
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
];
