/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
    },
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};
