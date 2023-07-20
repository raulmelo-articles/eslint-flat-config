import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
];
