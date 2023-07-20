import babelParser from "@babel/eslint-parser";
import babelPresetEnv from "@babel/preset-env";
import babelPresetReact from "@babel/preset-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelParser,
      globals: {
        // global variables
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          // your babel options
          presets: [babelPresetEnv, babelPresetReact],
        },
      },
    },
  },
];
