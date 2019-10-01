module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "max-len": ["error", { code: 160 }],
    "implicit-arrow-linebreak": 0,
    semi: ["error", "never"],
    indent: ["error", "tab"],
    camelcase: 0,

    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "no-console": 0,
    "no-void": 0,
    "no-tabs": 0,
    "react/jsx-filename-extension": 0,
    "global-require": 0,
    "linebreak-style": 0,
    "object-curly-spacing": ["error", "never"],
    "object-curly-newline": 0,

    "react/jsx-indent": [2, "tab"],
    "react/jsx-one-expression-per-line": 0
  }
};
