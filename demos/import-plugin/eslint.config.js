import jsdoc from "eslint-plugin-jsdoc";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    plugins: {
      jsdoc,
    },
    rules: {
      // Other rules...
      // JSDoc
      "jsdoc/require-example": "error",
    },
  },
];
