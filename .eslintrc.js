module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // 'react-hooks/exhaustive-deps': 'off',
    "import/no-anonymous-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-key": "off", // To turn on at some point
    "react/display-name": "off",
    "react/no-deprecated": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off", // To set to warn
    "@typescript-eslint/no-unused-vars": "off", // To set to warn
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
